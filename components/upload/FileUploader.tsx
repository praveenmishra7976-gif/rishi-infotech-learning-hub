"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase/client";

interface Props {
  bucket: string;
  onUploaded: (url: string) => void;
}

export default function FileUploader({
  bucket,
  onUploaded,
}: Props) {

  const [uploading, setUploading] =
    useState(false);

  async function uploadFile(
    e: React.ChangeEvent<HTMLInputElement>
  ) {

    const file = e.target.files?.[0];

    if (!file) return;

    setUploading(true);

    const fileName =
      `${Date.now()}-${file.name}`;

    const { error } = await supabase.storage

      .from(bucket)

      .upload(fileName, file);

    if (error) {

      alert(error.message);

      setUploading(false);

      return;

    }

    const {

      data,

    } = supabase.storage

      .from(bucket)

      .getPublicUrl(fileName);

    onUploaded(data.publicUrl);

    setUploading(false);

  }

  return (

    <div>

      <input

        type="file"

        onChange={uploadFile}

      />

      {uploading && (

        <p className="mt-3">

          Uploading...

        </p>

      )}

    </div>

  );

}