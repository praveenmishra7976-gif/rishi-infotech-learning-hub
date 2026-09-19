import Link from "next/link";

import ImportQuestions from "./components/ImportQuestions";
import QuestionBankTable from "./components/QuestionBankTable";
import QuestionFilters from "./components/QuestionFilters";

export default function QuestionBankPage() {
  return (
    <main className="space-y-8">

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-4xl font-bold text-blue-700">
            Question Bank
          </h1>

          <p className="text-gray-500 mt-2">
            Manage reusable questions for all quizzes.
          </p>

        </div>

        <Link
          href="/admin/question-bank/create"
          className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold"
        >
          + Add Question
        </Link>

      </div>
      <QuestionFilters />

<ImportQuestions />

<QuestionBankTable />

      <QuestionFilters />

      <QuestionBankTable />

    </main>
  );
}