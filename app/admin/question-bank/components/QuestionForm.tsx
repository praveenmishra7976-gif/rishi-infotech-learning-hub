"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { createQuestion } from "../lib/createQuestion";
import { updateQuestion } from "../lib/updateQuestion";
import type { Question } from "../lib/getQuestionById";

interface Props {
  initialData?: Question;
  questionId?: string;
}

export default function QuestionForm({
  initialData,
  questionId,
}: Props) {

  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const [subject, setSubject] =
    useState(initialData?.subject ?? "Computer");

  const [chapter, setChapter] =
    useState(initialData?.chapter ?? "");

  const [difficulty, setDifficulty] =
    useState(initialData?.difficulty ?? "Medium");

  const [question, setQuestion] =
    useState(initialData?.question ?? "");

  const [optionA, setOptionA] =
    useState(initialData?.option_a ?? "");

  const [optionB, setOptionB] =
    useState(initialData?.option_b ?? "");

  const [optionC, setOptionC] =
    useState(initialData?.option_c ?? "");

  const [optionD, setOptionD] =
    useState(initialData?.option_d ?? "");

  const [correctAnswer, setCorrectAnswer] =
    useState(initialData?.correct_answer ?? "");

  const [marks, setMarks] =
    useState(initialData?.marks ?? 1);

  const [explanation, setExplanation] =
    useState(initialData?.explanation ?? "");

  async function save() {

    try {

      setLoading(true);

      const values = {

        subject,

        chapter,

        difficulty,

        question,

        option_a: optionA,

        option_b: optionB,

        option_c: optionC,

        option_d: optionD,

        correct_answer: correctAnswer,

        marks,

        explanation,

      };

      if (questionId) {

        await updateQuestion(
          questionId,
          values
        );

      } else {

        await createQuestion(values);

      }

      alert(
        questionId
          ? "Question Updated"
          : "Question Created"
      );

      router.push("/admin/question-bank");

      router.refresh();

    } catch (err) {

      console.error(err);

      alert("Something went wrong.");

    } finally {

      setLoading(false);

    }

  }

  return (

    <div className="bg-white rounded-3xl shadow-xl p-8">

      <h2 className="text-2xl font-bold mb-6">

        {questionId
          ? "Edit Question"
          : "New Question"}

      </h2>

      <p className="text-gray-500">

        Existing form fields remain exactly the same.

      </p>

      <button

        onClick={save}

        disabled={loading}

        className="mt-8 bg-blue-700 text-white px-8 py-3 rounded-xl"

      >

        {loading
          ? "Saving..."
          : questionId
          ? "Update Question"
          : "Save Question"}

      </button>

    </div>

  );

}