"use client";

import { useRef, useState } from "react";
import { supabase } from "@/app/lib/supabase";

type Props = {
  userId: string;
  avatarUrl?: string | null;
  onUpload: (url: string) => void;
};

export default function AvatarUpload({
  userId,
  avatarUrl,
  onUpload,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  async function uploadAvatar(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    try {
      setUploading(true);

      if (!e.target.files || e.target.files.length === 0) return;

      const file = e.target.files[0];

      const ext = file.name.split(".").pop();

      const fileName = `${userId}.${ext}`;

      const { error } = await supabase.storage
        .from("avatars")
        .upload(fileName, file, {
          upsert: true,
        });

      if (error) {
        alert(error.message);
        return;
      }

      const { data } = supabase.storage
        .from("avatars")
        .getPublicUrl(fileName);

      onUpload(data.publicUrl);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="flex flex-col items-center gap-4">

      <img
        src={
          avatarUrl ||
          "https://placehold.co/150x150?text=Avatar"
        }
        alt="Avatar"
        className="w-36 h-36 rounded-full object-cover border-4 border-blue-600"
      />

      <input
        ref={inputRef}
        hidden
        type="file"
        accept="image/*"
        onChange={uploadAvatar}
      />

      <button
        onClick={() => inputRef.current?.click()}
        disabled={uploading}
        className="bg-blue-700 text-white px-5 py-2 rounded-xl"
      >
        {uploading ? "Uploading..." : "Change Photo"}
      </button>

    </div>
  );
}