"use client";

import QuizForm from "./QuizForm";
import QuestionEditor from "./QuestionEditor";

export default function QuizEditor() {
  return (
    <div className="space-y-8">
      <QuizForm />
      <QuestionEditor />
    </div>
  );
}
