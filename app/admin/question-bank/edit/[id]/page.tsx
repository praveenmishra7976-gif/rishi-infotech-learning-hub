import { notFound } from "next/navigation";

import { getQuestionById } from "../../lib/getQuestionById";
import QuestionForm from "../../components/QuestionForm";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditQuestionPage({
  params,
}: Props) {

  const { id } = await params;

  const question =
    await getQuestionById(id);

  if (!question) {

    notFound();

  }

  return (

    <main className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold text-blue-700">
          Edit Question
        </h1>

        <p className="text-gray-500 mt-2">
          Update this question.
        </p>

      </div>

      <QuestionForm

        initialData={question}

        questionId={id}

      />

    </main>

  );

}