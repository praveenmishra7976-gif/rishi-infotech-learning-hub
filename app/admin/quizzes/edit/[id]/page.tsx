import Link from "next/link";

export default async function EditQuizPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      <div className="bg-white rounded-3xl shadow-xl p-8">
        <h1 className="text-4xl font-black text-blue-700">
          Edit Quiz
        </h1>

        <p className="mt-3 text-gray-600">
          Quiz ID: {id}
        </p>

        <Link
          href="/admin/quizzes"
          className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold"
        >
          Back to Quizzes
        </Link>
      </div>
    </main>
  );
}
