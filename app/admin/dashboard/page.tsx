"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import {
  Users,
  BookOpen,
  FileQuestion,
  Video,
  Download,
  FolderTree,
} from "lucide-react";

export default function DashboardPage() {

  const [stats, setStats] = useState({
    users: 0,
    subjects: 0,
    notes: 0,
    quizzes: 0,
    videos: 0,
    downloads: 0,
  });

  useEffect(() => {

    loadStats();

  }, []);

  async function loadStats() {

    const [
      users,
      subjects,
      notes,
      quizzes,
      videos,
      downloads,
    ] = await Promise.all([

      supabase.from("users").select("*", { count: "exact", head: true }),

      supabase.from("subjects").select("*", { count: "exact", head: true }),

      supabase.from("notes").select("*", { count: "exact", head: true }),

      supabase.from("quizzes").select("*", { count: "exact", head: true }),

      supabase.from("videos").select("*", { count: "exact", head: true }),

      supabase.from("downloads").select("*", { count: "exact", head: true }),

    ]);

    setStats({

      users: users.count || 0,
      subjects: subjects.count || 0,
      notes: notes.count || 0,
      quizzes: quizzes.count || 0,
      videos: videos.count || 0,
      downloads: downloads.count || 0,

    });

  }

  const cards = [

    {
      title: "Users",
      value: stats.users,
      icon: <Users size={34} />,
      color: "bg-blue-600",
    },

    {
      title: "Subjects",
      value: stats.subjects,
      icon: <FolderTree size={34} />,
      color: "bg-purple-600",
    },

    {
      title: "Notes",
      value: stats.notes,
      icon: <BookOpen size={34} />,
      color: "bg-green-600",
    },

    {
      title: "Quizzes",
      value: stats.quizzes,
      icon: <FileQuestion size={34} />,
      color: "bg-yellow-500",
    },

    {
      title: "Videos",
      value: stats.videos,
      icon: <Video size={34} />,
      color: "bg-red-500",
    },

    {
      title: "Downloads",
      value: stats.downloads,
      icon: <Download size={34} />,
      color: "bg-cyan-600",
    },

  ];

  return (

    <main>

      <h1 className="text-5xl font-black mb-10">

        Dashboard

      </h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

        {cards.map((card, index) => (

          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg p-8"
          >

            <div
              className={`${card.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white`}
            >

              {card.icon}

            </div>

            <h2 className="text-gray-500 mt-5">

              {card.title}

            </h2>

            <h1 className="text-4xl font-black mt-2">

              {card.value}

            </h1>

          </div>

        ))}

      </div>

    </main>

  );

}