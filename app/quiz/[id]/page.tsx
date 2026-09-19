import { getQuiz } from "../lib/getQuiz";
import QuizPlayer from "../components/QuizPlayer";

export default async function QuizPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { quiz, questions } = await getQuiz(id);

  if (!quiz) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Quiz Not Found
        </h1>
      </main>
    );
  }

  return (
    <main className="max-w-5xl mx-auto py-12 px-6">

      <div className="mb-10">

        <h1 className="text-5xl font-bold">
          {quiz.title}
        </h1>

        <p className="text-gray-500 mt-3">
          {quiz.description}
        </p>

        <div className="mt-6 flex gap-4">

          <div className="bg-blue-600 text-white px-5 py-3 rounded-xl">
            ⏱ {quiz.time_limit} Minutes
          </div>

          <div className="bg-green-600 text-white px-5 py-3 rounded-xl">
            ✅ Pass: {quiz.passing_marks}%
          </div>

        </div>

      </div>

      <QuizPlayer
        questions={questions}
      />

    </main>
  );
}