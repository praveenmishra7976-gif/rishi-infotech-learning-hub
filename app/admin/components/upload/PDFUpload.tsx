"use client";

import { useState } from "react";
import { uploadFile } from "@/lib/supabase/storage";

export default function PDFUpload() {
  const [url, setUrl] = useState("");

  async function handleUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    try {
      const uploaded = await uploadFile(file, "notes");
      setUrl(uploaded);
    } catch (error) {
      console.error("PDF upload failed:", error);
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold">
        Upload PDF
      </h2>

      <input
        type="file"
        accept=".pdf"
        onChange={handleUpload}
        className="mt-6"
      />

      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-6 text-blue-700"
        >
          View Uploaded PDF
        </a>
      )}
    </div>
  );
}
