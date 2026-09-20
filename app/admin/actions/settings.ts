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
  try {
    const file = formData.get("file");

    if (!(file instanceof File)) {
      throw new Error("No logo file selected.");
    }

    if (!file.type || !file.type.startsWith("image/")) {
      throw new Error("Please select a valid image file.");
    }

    if (file.size <= 0) {
      throw new Error("The selected image is empty.");
    }

    if (file.size > 5 * 1024 * 1024) {
      throw new Error("Logo must be smaller than 5MB.");
    }

    const originalName = file.name || "logo";
    const extension =
      originalName.includes(".")
        ? originalName.split(".").pop()?.toLowerCase()
        : "png";

    const safeExtension =
      extension && /^[a-z0-9]+$/.test(extension)
        ? extension
        : "png";

    const filePath = `website/logo-${Date.now()}.${safeExtension}`;

    console.log("Starting logo upload:", {
      name: originalName,
      type: file.type,
      size: file.size,
      path: filePath,
    });

    /*
     * Convert the browser File to Uint8Array.
     * This is safer for the Next.js production runtime
     * than relying on Node Buffer handling.
     */
    const arrayBuffer = await file.arrayBuffer();
    const fileData = new Uint8Array(arrayBuffer);

    const { data: uploadData, error: uploadError } =
      await adminSupabase.storage
        .from("website-assets")
        .upload(filePath, fileData, {
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

    console.log("Logo uploaded:", uploadData);

    const { data: publicUrlData } = adminSupabase.storage
      .from("website-assets")
      .getPublicUrl(filePath);

    const logoUrl = publicUrlData.publicUrl;

    if (!logoUrl) {
      throw new Error("Could not generate logo public URL.");
    }

    console.log("Logo public URL generated.");

    const { data: existing, error: existingError } =
      await adminSupabase
        .from("settings")
        .select("id, logo")
        .limit(1)
        .maybeSingle();

    if (existingError) {
      console.error("Find settings after upload error:", existingError);

      // Remove uploaded file because settings could not be updated.
      await adminSupabase.storage
        .from("website-assets")
        .remove([filePath]);

      throw new Error(existingError.message);
    }

    if (existing) {
      const { error: updateError } = await adminSupabase
        .from("settings")
        .update({
          logo: logoUrl,
          updated_at: new Date().toISOString(),
        })
        .eq("id", existing.id);

      if (updateError) {
        console.error("Save logo URL error:", updateError);

        await adminSupabase.storage
          .from("website-assets")
          .remove([filePath]);

        throw new Error(updateError.message);
      }

      /*
       * Remove the previous logo after the new logo has
       * successfully been saved.
       */
      if (existing.logo && existing.logo !== logoUrl) {
        try {
          const marker =
            "/storage/v1/object/public/website-assets/";

          const index = existing.logo.indexOf(marker);

          if (index !== -1) {
            const oldFilePath = decodeURIComponent(
              existing.logo.substring(index + marker.length)
            );

            if (oldFilePath) {
              await adminSupabase.storage
                .from("website-assets")
                .remove([oldFilePath]);
            }
          }
        } catch (cleanupError) {
          console.error(
            "Previous logo cleanup error:",
            cleanupError
          );
        }
      }
    } else {
      const { error: insertError } = await adminSupabase
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

      if (insertError) {
        console.error("Create settings error:", insertError);

        await adminSupabase.storage
          .from("website-assets")
          .remove([filePath]);

        throw new Error(insertError.message);
      }
    }

    console.log("Logo URL saved successfully.");

    return {
      success: true,
      logoUrl,
    };
  } catch (error) {
    console.error("uploadWebsiteLogo failed:", error);

    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error("Logo upload failed. Please try again.");
  }
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

        if (filePath) {
          const { error: storageError } =
            await adminSupabase.storage
              .from("website-assets")
              .remove([filePath]);

          if (storageError) {
            console.error(
              "Storage logo removal error:",
              storageError
            );
          }
        }
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
