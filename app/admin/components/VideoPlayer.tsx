"use client";

export default function VideoPlayer({
  src,
}: {
  src: string;
}) {
  return (
    <video
      controls
      controlsList="nodownload"
      className="w-full rounded-2xl shadow-xl"
    >
      <source src={src} />

      Your browser does not support video playback.

    </video>
  );
}