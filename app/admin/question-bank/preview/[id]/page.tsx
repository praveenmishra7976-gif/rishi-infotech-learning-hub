import { notFound } from "next/navigation";
import Link from "next/link";

import { getQuestionById } from "../../lib/getQuestionById";
import QuestionPreview from "../../components/QuestionPreview";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function PreviewQuestionPage({
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

      <div className="flex justify-between">

        <h1 className="text-4xl font-bold text-blue-700">
          Preview Question
        </h1>

        <Link
          href={`/admin/question-bank/edit/${id}`}
          className="bg-blue-700 text-white px-6 py-3 rounded-xl"
        >
          Edit
        </Link>

      </div>

      <QuestionPreview
        question={question}
      />

    </main>
  );
}