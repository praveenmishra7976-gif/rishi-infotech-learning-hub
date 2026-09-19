"use client";

import { useState } from "react";

export default function TextToSpeech() {

  const [text, setText] = useState("");

  function speak() {

    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";

    window.speechSynthesis.speak(utterance);

  }

  return (

    <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

      <h2 className="text-2xl font-bold text-blue-700">

        Text To Speech

      </h2>

      <textarea

        rows={5}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full border rounded-xl p-4 mt-6"

      />

      <button

        onClick={speak}
        className="mt-6 bg-blue-700 text-white px-8 py-3 rounded-xl"

      >

        🔊 Speak

      </button>

    </div>

  );

}