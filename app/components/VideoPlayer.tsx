export default function PDFViewer({
  src,
}: {
  src: string;
}) {
  return (
    <iframe
      src={src}
      className="w-full h-[900px] rounded-2xl border"
    />
  );
}