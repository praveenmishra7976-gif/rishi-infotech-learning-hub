"use client";

import { useState } from "react";

export default function OCRScanner() {

  const [image, setImage] = useState<string | null>(null);

  function handleImage(e: React.ChangeEvent<HTMLInputElement>) {

    const file = e.target.files?.[0];

    if (!file) return;

    setImage(URL.createObjectURL(file));

  }

  return (

    <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

      <h2 className="text-2xl font-bold text-blue-700">

        OCR Scanner

      </h2>

      <input

        type="file"
        accept="image/*"
        onChange={handleImage}
        className="mt-6"

      />

      {image && (

        <img

          src={image}
          alt="Preview"
          className="mt-8 rounded-xl max-h-80 mx-auto"

        />

      )}

      <p className="mt-6 text-gray-500">

        OCR recognition can be connected later.

      </p>

    </div>

  );

}