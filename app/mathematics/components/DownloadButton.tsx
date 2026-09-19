"use client";

interface Props {
  title: string;
  content: string;
}

export default function DownloadButton({
  title,
  content,
}: Props) {
  function downloadNotes() {
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
      onClick={downloadNotes}
      className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-4 rounded-xl font-bold mt-10"
    >
      Download Notes
    </button>
  );
}