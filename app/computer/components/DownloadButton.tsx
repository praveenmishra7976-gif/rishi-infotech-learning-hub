"use client";

interface Props {
  slug: string;
}

export default function DownloadButton({ slug }: Props) {

  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

      <h2 className="text-2xl font-bold text-blue-700 mb-6">
        Chapter PDF
      </h2>

      <a
        href="/computer/downloads"
        className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold transition"
      >
        📄 View Computer Downloads
      </a>

    </div>
  );
}