"use client";

import { useEffect, useState } from "react";
import { createQuiz } from "../lib/createQuiz";
import { supabase } from "@/app/lib/supabase";

export default function QuizForm() {
  const [lessons, setLessons] = useState<any[]>([]);
  const [lessonId, setLessonId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(30);
  const [passingMarks, setPassingMarks] = useState(40);

  useEffect(() => {
    async function loadLessons() {
      const { data } = await supabase
        .from("lessons")
        .select("*")
        .order("title");

      setLessons(data || []);
    }

    loadLessons();
  }, []);

  async function save(e: React.FormEvent) {
    e.preventDefault();

    await createQuiz({
      lesson_id: lessonId,
      title,
      description,
      duration,
      passing_marks: passingMarks,
    });

    alert("Quiz Created Successfully");

    window.location.reload();
  }

  return (
    <form
      onSubmit={save}
      className="bg-white rounded-3xl shadow-xl p-8 space-y-5"
    >
      <h2 className="text-3xl font-bold">
        Create Quiz
      </h2>

      <select
        className="w-full border rounded-xl p-4"
        value={lessonId}
        onChange={(e) => setLessonId(e.target.value)}
      >
        <option>Select Lesson</option>

        {lessons.map((lesson) => (
          <option
            key={lesson.id}
            value={lesson.id}
          >
            {lesson.title}
          </option>
        ))}
      </select>

      <input
        className="w-full border rounded-xl p-4"
        placeholder="Quiz Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <textarea
        rows={4}
        className="w-full border rounded-xl p-4"
        placeholder="Description"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
      />

      <input
        type="number"
        className="w-full border rounded-xl p-4"
        placeholder="Duration (minutes)"
        value={duration}
        onChange={(e) =>
          setDuration(Number(e.target.value))
        }
      />

      <input
        type="number"
        className="w-full border rounded-xl p-4"
        placeholder="Passing Marks"
        value={passingMarks}
        onChange={(e) =>
          setPassingMarks(Number(e.target.value))
        }
      />

      <button className="bg-blue-700 text-white px-8 py-4 rounded-xl">
        Save Quiz
      </button>
    </form>
  );
}