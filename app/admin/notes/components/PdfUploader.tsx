"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase/client";

interface Props {
  onUploaded: (url: string) => void;
}

export default function PdfUploader({ onUploaded }: Props) {
  const [uploading, setUploading] = useState(false);
  const [fileName, setFileName] = useState("");

  async function handlePdf(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    setUploading(true);

    const newName = `${Date.now()}-${file.name}`;

    const { error } = await supabase.storage
      .from("notes")
      .upload(`pdf/${newName}`, file);

    if (error) {
      alert(error.message);
      setUploading(false);
      return;
    }

    const { data } = supabase.storage
      .from("notes")
      .getPublicUrl(`pdf/${newName}`);

    setFileName(file.name);

    onUploaded(data.publicUrl);

    setUploading(false);
  }

  return (
    <div className="border rounded-2xl p-6">

      <h2 className="font-bold mb-4">
        Upload PDF
      </h2>

      <input
        type="file"
        accept=".pdf"
        onChange={handlePdf}
      />

      {uploading && (
        <p className="text-blue-600 mt-4">
          Uploading...
        </p>
      )}

      {fileName && (
        <p className="mt-4 text-green-600">
          {fileName}
        </p>
      )}

    </div>
  );
}