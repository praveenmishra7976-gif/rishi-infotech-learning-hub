"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { Plus, Trash2 } from "lucide-react";

interface Quiz {
  id: string;
  subject: string;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  answer: string;
}

export default function QuizPage() {

  const [quiz, setQuiz] = useState<Quiz[]>([]);

  const [subject, setSubject] = useState("");
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [answer, setAnswer] = useState("");

  async function loadQuiz() {

    const { data } = await supabase
      .from("quizzes")
      .select("*")
      .order("created_at", { ascending: false });

    setQuiz(data || []);

  }

  useEffect(() => {

    loadQuiz();

  }, []);

  async function addQuestion() {

    if (!question || !subject) return;

    await supabase.from("quizzes").insert({

      subject,
      question,
      option1,
      option2,
      option3,
      option4,
      answer,

    });

    setSubject("");
    setQuestion("");
    setOption1("");
    setOption2("");
    setOption3("");
    setOption4("");
    setAnswer("");

    loadQuiz();

  }

  async function deleteQuestion(id: string) {

    if (!confirm("Delete Question?"))
      return;

    await supabase
      .from("quizzes")
      .delete()
      .eq("id", id);

    loadQuiz();

  }

  return (

    <main className="space-y-8">

      <h1 className="text-5xl font-black">

        Quiz Management

      </h1>

      <div className="bg-white rounded-3xl shadow-lg p-8 space-y-4">

        <input
          className="border p-4 rounded-xl w-full"
          placeholder="Subject"
          value={subject}
          onChange={(e)=>setSubject(e.target.value)}
        />

        <textarea
          className="border p-4 rounded-xl w-full"
          placeholder="Question"
          value={question}
          onChange={(e)=>setQuestion(e.target.value)}
        />

        <input
          className="border p-4 rounded-xl w-full"
          placeholder="Option 1"
          value={option1}
          onChange={(e)=>setOption1(e.target.value)}
        />

        <input
          className="border p-4 rounded-xl w-full"
          placeholder="Option 2"
          value={option2}
          onChange={(e)=>setOption2(e.target.value)}
        />

        <input
          className="border p-4 rounded-xl w-full"
          placeholder="Option 3"
          value={option3}
          onChange={(e)=>setOption3(e.target.value)}
        />

        <input
          className="border p-4 rounded-xl w-full"
          placeholder="Option 4"
          value={option4}
          onChange={(e)=>setOption4(e.target.value)}
        />

        <input
          className="border p-4 rounded-xl w-full"
          placeholder="Correct Answer"
          value={answer}
          onChange={(e)=>setAnswer(e.target.value)}
        />

        <button
          onClick={addQuestion}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl flex items-center gap-2"
        >

          <Plus size={18}/>

          Add Question

        </button>

      </div>

      <div className="space-y-5">

        {quiz.map((q)=>(

          <div
            key={q.id}
            className="bg-white rounded-3xl shadow-lg p-6 flex justify-between"
          >

            <div>

              <h2 className="text-xl font-bold">

                {q.question}

              </h2>

              <p className="text-blue-600 mt-2">

                {q.subject}

              </p>

              <p className="mt-3">

                ✅ {q.answer}

              </p>

            </div>

            <button
              onClick={()=>deleteQuestion(q.id)}
              className="text-red-600"
            >

              <Trash2/>

            </button>

          </div>

        ))}

      </div>

    </main>

  );

}