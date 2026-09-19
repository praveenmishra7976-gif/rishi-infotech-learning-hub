import QuizEditor from "../components/QuizEditor";

export default function CreateQuizPage() {
  return (
    <main className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold text-blue-700">
          Create Quiz
        </h1>

        <p className="text-gray-500 mt-2">
          Build a new quiz for students.
        </p>

      </div>

      <QuizEditor />

    </main>
  );
}