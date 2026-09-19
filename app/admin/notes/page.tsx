"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { Plus, Trash2 } from "lucide-react";

interface Note {
  id: string;
  title: string;
  subject: string;
  description: string;
}

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  async function loadNotes() {
    const { data } = await supabase
      .from("notes")
      .select("*")
      .order("created_at", { ascending: false });

    setNotes(data || []);
  }

  useEffect(() => {
    loadNotes();
  }, []);

  async function addNote() {
    if (!title || !subject) return;

    await supabase.from("notes").insert({
      title,
      subject,
      description,
    });

    setTitle("");
    setSubject("");
    setDescription("");

    loadNotes();
  }

  async function deleteNote(id: string) {
    if (!confirm("Delete Note?")) return;

    await supabase
      .from("notes")
      .delete()
      .eq("id", id);

    loadNotes();
  }

  return (
    <main className="space-y-8">

      <h1 className="text-5xl font-black">
        Notes Management
      </h1>

      <div className="bg-white p-6 rounded-3xl shadow-lg space-y-4">

        <input
          placeholder="Title"
          className="border p-4 rounded-xl w-full"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />

        <input
          placeholder="Subject"
          className="border p-4 rounded-xl w-full"
          value={subject}
          onChange={(e)=>setSubject(e.target.value)}
        />

        <textarea
          placeholder="Description"
          className="border p-4 rounded-xl w-full"
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
        />

        <button
          onClick={addNote}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl flex gap-2"
        >
          <Plus size={18}/>
          Add Note
        </button>

      </div>

      <div className="grid gap-6">

        {notes.map((note)=>(

          <div
            key={note.id}
            className="bg-white rounded-3xl shadow-lg p-6 flex justify-between"
          >

            <div>

              <h2 className="text-2xl font-bold">
                {note.title}
              </h2>

              <p className="text-blue-600 mt-2">
                {note.subject}
              </p>

              <p className="mt-3 text-gray-600">
                {note.description}
              </p>

            </div>

            <button
              onClick={()=>deleteNote(note.id)}
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