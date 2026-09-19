"use client";

export default function VoiceSearch() {

  function startVoice() {

    alert("Voice Search feature will be connected later.");

  }

  return (

    <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

      <h2 className="text-2xl font-bold text-blue-700">

        Voice Search

      </h2>

      <button

        onClick={startVoice}
        className="mt-6 bg-green-600 text-white px-8 py-3 rounded-xl"

      >

        🎤 Start Voice Search

      </button>

    </div>

  );

}