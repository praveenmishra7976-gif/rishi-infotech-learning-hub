type NotesCardProps = {
  title: string;
  content: React.ReactNode;
};

export default function NotesCard({
  title,
  content,
}: NotesCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">

      <h2 className="text-4xl font-bold text-blue-700">
        {title}
      </h2>

      <hr className="my-6" />

      <div className="whitespace-pre-line leading-8 text-lg text-gray-700">
        {content}
      </div>

    </div>
  );
}