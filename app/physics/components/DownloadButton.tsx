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
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = `${title}.txt`;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  }

  return (

    <button
      onClick={downloadFile}
      className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl transition"
    >

      <Download size={20} />

      Download Notes

    </button>

  );
}