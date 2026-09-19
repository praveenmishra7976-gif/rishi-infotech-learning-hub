import QuestionForm from "../components/QuestionForm";

export default function CreateQuestionPage() {
  return (
    <main className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold text-blue-700">
          Add Question
        </h1>

        <p className="text-gray-500 mt-2">
          Create a reusable question for the Question Bank.
        </p>

      </div>

      <QuestionForm />

    </main>
  );
}