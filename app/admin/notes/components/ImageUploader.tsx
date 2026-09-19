"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase/client";

interface Props {
  onUploaded: (url: string) => void;
}

export default function ImageUploader({ onUploaded }: Props) {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState("");

  async function handleImage(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    setUploading(true);

    const fileName = `${Date.now()}-${file.name}`;

    const { error } = await supabase.storage
      .from("notes")
      .upload(`images/${fileName}`, file);

    if (error) {
      alert(error.message);
      setUploading(false);
      return;
    }

    const { data } = supabase.storage
      .from("notes")
      .getPublicUrl(`images/${fileName}`);

    setPreview(data.publicUrl);

    onUploaded(data.publicUrl);

    setUploading(false);
  }

  return (
    <div className="border rounded-2xl p-6">

      <h2 className="font-bold mb-4">
        Upload Image
      </h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleImage}
      />

      {uploading && (
        <p className="text-blue-600 mt-4">
          Uploading...
        </p>
      )}

      {preview && (
        <img
          src={preview}
          className="mt-5 rounded-xl max-h-52"
          alt="Preview"
        />
      )}

    </div>
  );
}