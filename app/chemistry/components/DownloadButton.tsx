"use client";

import { Download } from "lucide-react";

type Props = {
  title: string;
  content: string;
};

export default function DownloadButton({
  title,
  content,
}: Props) {
  function downloadFile() {
    const blob = new Blob([content], {
      type: "text/plain;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = `${title.replace(/[^a-z0-9-_ ]/gi, "").trim() || "chemistry-notes"}.txt`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  }

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-lg p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
        <div>
          <h3 className="text-xl font-bold text-gray-900">
            Download Chapter Notes
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Download these notes as a text file for offline reading.
          </p>
        </div>

        <button
          type="button"
          onClick={downloadFile}
          className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl font-bold transition"
        >
          <Download size={20} />
          Download Text Notes
        </button>
      </div>
    </div>
  );
}
