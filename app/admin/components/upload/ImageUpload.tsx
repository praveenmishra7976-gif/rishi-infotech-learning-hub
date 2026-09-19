"use client";

import { useState } from "react";
import { uploadFile } from "@/lib/supabase/storage";

export default function ImageUpload() {
  const [url, setUrl] = useState("");

  async function handleUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    try {
      const uploaded = await uploadFile(file, "images");
      setUrl(uploaded);
    } catch (error) {
      console.error("Image upload failed:", error);
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold">
        Upload Image
      </h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        className="mt-6"
      />

      {url && (
        <img
          src={url}
          alt="Uploaded"
          className="mt-6 rounded-xl w-72"
        />
      )}
    </div>
  );
}
