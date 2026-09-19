"use client";

import { Camera } from "lucide-react";
import { useRef, useState, useTransition } from "react";
import { uploadAvatar } from "@/lib/users/uploadAvatar";

interface Props {
  userId: string;
  avatar: string | null;
}

export default function UserAvatar({
  userId,
  avatar,
}: Props) {
  const fileRef = useRef<HTMLInputElement>(null);

  const [pending, startTransition] = useTransition();

  const [image, setImage] = useState(
    avatar ||
      "https://ui-avatars.com/api/?background=2563eb&color=fff&name=User"
  );

  function openPicker() {
    fileRef.current?.click();
  }

  function changeImage(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    const preview = URL.createObjectURL(file);

    setImage(preview);

    startTransition(async () => {
      try {
        const url = await uploadAvatar(
          userId,
          file
        );

        setImage(url);
      } catch (err) {
        console.error(err);

        alert("Avatar upload failed.");
      }
    });
  }

  return (
    <div className="relative">

      <img
        src={image}
        alt="Avatar"
        className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-xl"
      />

      <button
        onClick={openPicker}
        disabled={pending}
        className="absolute bottom-1 right-1 bg-blue-700 hover:bg-blue-800 text-white rounded-full p-3 shadow-lg"
      >
        <Camera size={18} />
      </button>

      <input
        ref={fileRef}
        hidden
        type="file"
        accept="image/*"
        onChange={changeImage}
      />

      {pending && (
        <p className="text-center mt-4 text-blue-700 font-semibold">
          Uploading...
        </p>
      )}

    </div>
  );
}