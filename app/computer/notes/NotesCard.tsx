type NotesCardProps = {
  title: string;
  content: string;
};

export default function NotesCard({
  title,
  content,
}: NotesCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">

      <div className="border-b pb-5">

        <h1 className="text-4xl font-bold text-blue-700">
          {title}
        </h1>

      </div>

      <div className="mt-8 whitespace-pre-line leading-8 text-gray-700 text-lg">

        {content}

      </div>

    </div>
  );
}