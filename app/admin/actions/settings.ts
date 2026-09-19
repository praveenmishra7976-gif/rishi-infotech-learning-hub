"use server";

import { adminSupabase } from "../lib/supabaseAdmin";

export async function getSettings() {
  const { data, error } = await adminSupabase
    .from("settings")
    .select("*")
    .limit(1)
    .maybeSingle();

  if (error) {
    console.error("Get settings error:", error);
    return null;
  }

  return data;
}

export async function updateSettings(settings: {
  website_name?: string;
  support_email?: string;
  phone?: string;
  primary_color?: string;
  festival_theme?: string;
}) {
  const { data: existing, error: existingError } = await adminSupabase
    .from("settings")
    .select("id")
    .limit(1)
    .maybeSingle();

  if (existingError) {
    console.error("Find settings error:", existingError);
    throw new Error(existingError.message);
  }

  if (!existing) {
    const { data, error } = await adminSupabase
      .from("settings")
      .insert({
        website_name:
          settings.website_name || "Rishi Infotech Learning Hub",
        support_email: settings.support_email || "",
        phone: settings.phone || "",
        primary_color: settings.primary_color || "#2563eb",
        festival_theme: settings.festival_theme || "default",
        logo: null,
        updated_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) {
      console.error("Insert settings error:", error);
      throw new Error(error.message);
    }

    return data;
  }

  const { data, error } = await adminSupabase
    .from("settings")
    .update({
      ...settings,
      updated_at: new Date().toISOString(),
    })
    .eq("id", existing.id)
    .select()
    .single();

  if (error) {
    console.error("Update settings error:", error);
    throw new Error(error.message);
  }

  return data;
}

export async function uploadWebsiteLogo(formData: FormData) {
  const file = formData.get("file");

  if (!(file instanceof File)) {
    throw new Error("No logo file selected.");
  }

  if (!file.type.startsWith("image/")) {
    throw new Error("Please select an image file.");
  }

  if (file.size > 5 * 1024 * 1024) {
    throw new Error("Logo must be smaller than 5MB.");
  }

  const extension =
    file.name.split(".").pop()?.toLowerCase() || "png";

  const filePath = `website/logo-${Date.now()}.${extension}`;

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const { error: uploadError } = await adminSupabase.storage
    .from("website-assets")
    .upload(filePath, buffer, {
      upsert: true,
      contentType: file.type,
      cacheControl: "3600",
    });

  if (uploadError) {
    console.error("Supabase logo upload error:", uploadError);
    throw new Error(
      `Logo upload failed: ${uploadError.message}`
    );
  }

  const { data: publicUrlData } = adminSupabase.storage
    .from("website-assets")
    .getPublicUrl(filePath);

  const logoUrl = publicUrlData.publicUrl;

  const { data: existing, error: existingError } =
    await adminSupabase
      .from("settings")
      .select("id")
      .limit(1)
      .maybeSingle();

  if (existingError) {
    throw new Error(existingError.message);
  }

  if (existing) {
    const { error } = await adminSupabase
      .from("settings")
      .update({
        logo: logoUrl,
        updated_at: new Date().toISOString(),
      })
      .eq("id", existing.id);

    if (error) {
      console.error("Save logo URL error:", error);
      throw new Error(error.message);
    }
  } else {
    const { error } = await adminSupabase
      .from("settings")
      .insert({
        website_name: "Rishi Infotech Learning Hub",
        support_email: "admin@rishiinfotech.com",
        phone: "+91 9876543210",
        logo: logoUrl,
        primary_color: "#2563eb",
        festival_theme: "default",
        updated_at: new Date().toISOString(),
      });

    if (error) {
      console.error("Create settings error:", error);
      throw new Error(error.message);
    }
  }

  return logoUrl;
}

export async function removeWebsiteLogo() {
  const { data: existing, error: findError } =
    await adminSupabase
      .from("settings")
      .select("id, logo")
      .limit(1)
      .maybeSingle();

  if (findError) {
    throw new Error(findError.message);
  }

  if (!existing) {
    return;
  }

  if (existing.logo) {
    try {
      const marker =
        "/storage/v1/object/public/website-assets/";

      const index = existing.logo.indexOf(marker);

      if (index !== -1) {
        const filePath = decodeURIComponent(
          existing.logo.substring(index + marker.length)
        );

        await adminSupabase.storage
          .from("website-assets")
          .remove([filePath]);
      }
    } catch (error) {
      console.error("Storage cleanup error:", error);
    }
  }

  const { error } = await adminSupabase
    .from("settings")
    .update({
      logo: null,
      updated_at: new Date().toISOString(),
    })
    .eq("id", existing.id);

  if (error) {
    throw new Error(error.message);
  }
}
