"use client";

interface Props {
  title: string;
  content: string;
}

export default function DownloadButton({
  title,
  content,
}: Props) {
  function download() {
    const blob = new Blob([content], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = `${title}.txt`;

    a.click();

    URL.revokeObjectURL(url);
  }

  return (
    <button
      onClick={download}
      className="bg-green-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-700"
    >
      Download Notes
    </button>
  );
}