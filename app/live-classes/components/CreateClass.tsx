"use client";

import { useState } from "react";
import { createClass } from "../lib/createClass";

export default function CreateClass() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    teacher_name: "",
    meeting_link: "",
    meeting_platform: "Google Meet",
    start_time: "",
    end_time: "",
  });

  async function submit(e: React.FormEvent) {
    e.preventDefault();

    await createClass(form);

    alert("Live class created!");

    window.location.reload();
  }

  function update(key: string, value: string) {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  return (
    <form
      onSubmit={submit}
      className="bg-white rounded-3xl shadow-xl p-8 space-y-4"
    >
      <h2 className="text-3xl font-bold">
        Create Live Class
      </h2>

      <input
        className="w-full border rounded-xl p-4"
        placeholder="Class Title"
        onChange={(e) => update("title", e.target.value)}
      />

      <textarea
        className="w-full border rounded-xl p-4"
        placeholder="Description"
        onChange={(e) => update("description", e.target.value)}
      />

      <input
        className="w-full border rounded-xl p-4"
        placeholder="Teacher Name"
        onChange={(e) => update("teacher_name", e.target.value)}
      />

      <input
        className="w-full border rounded-xl p-4"
        placeholder="Meeting Link"
        onChange={(e) => update("meeting_link", e.target.value)}
      />

      <input
        type="datetime-local"
        className="w-full border rounded-xl p-4"
        onChange={(e) => update("start_time", e.target.value)}
      />

      <input
        type="datetime-local"
        className="w-full border rounded-xl p-4"
        onChange={(e) => update("end_time", e.target.value)}
      />

      <button className="bg-blue-700 text-white px-8 py-4 rounded-xl">
        Save Class
      </button>
    </form>
  );
}