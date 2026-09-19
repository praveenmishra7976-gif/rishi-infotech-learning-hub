"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import {
  Plus,
  Trash2,
  BookOpen,
} from "lucide-react";

interface Subject {
  id: string;
  name: string;
}

export default function SubjectsPage() {

  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [name, setName] = useState("");

  async function loadSubjects() {

    const { data } = await supabase
      .from("subjects")
      .select("*")
      .order("name");

    setSubjects(data || []);

  }

  useEffect(() => {

    loadSubjects();

  }, []);

  async function addSubject() {

    if (!name.trim()) return;

    await supabase
      .from("subjects")
      .insert({
        name,
      });

    setName("");

    loadSubjects();

  }

  async function deleteSubject(id: string) {

    if (!confirm("Delete Subject?"))
      return;

    await supabase
      .from("subjects")
      .delete()
      .eq("id", id);

    loadSubjects();

  }

  return (

    <main className="space-y-8">

      <h1 className="text-5xl font-black">

        Subjects

      </h1>

      <div className="bg-white p-6 rounded-3xl shadow-lg">

        <div className="flex gap-4">

          <input
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder="Subject Name"
            className="border rounded-xl p-4 flex-1"
          />

          <button
            onClick={addSubject}
            className="bg-blue-600 text-white px-8 rounded-xl flex items-center gap-2"
          >

            <Plus/>

            Add

          </button>

        </div>

      </div>

      <div className="grid md:grid-cols-3 gap-6">

        {subjects.map((subject)=>(

          <div
            key={subject.id}
            className="bg-white rounded-3xl shadow-lg p-6 flex justify-between items-center"
          >

            <div className="flex items-center gap-3">

              <BookOpen className="text-blue-600"/>

              <span className="font-bold">

                {subject.name}

              </span>

            </div>

            <button
              onClick={()=>deleteSubject(subject.id)}
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