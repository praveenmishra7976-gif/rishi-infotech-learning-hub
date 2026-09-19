"use client";

import { BookOpen } from "lucide-react";

const topics = [
  "संधि",
  "समास",
  "शब्द रूप",
  "धातु रूप",
  "कारक",
  "वचन",
  "लकार",
  "विभक्ति",
  "अनुवाद",
  "व्याकरण",
];

export default function SanskritReferencePage() {
  return (
    <main className="min-h-screen bg-slate-100">

      <section className="bg-orange-700 text-white py-16">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex items-center gap-4">

            <BookOpen size={48} />

            <div>

              <h1 className="text-5xl font-black">
                Sanskrit Grammar Reference
              </h1>

              <p className="mt-3 text-orange-100">
                Important Sanskrit grammar topics for revision.
              </p>

            </div>

          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {topics.map((topic) => (

            <div
              key={topic}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition p-8"
            >

              <div className="w-16 h-16 rounded-2xl bg-orange-600 flex items-center justify-center text-white">

                <BookOpen size={30} />

              </div>

              <h2 className="text-2xl font-bold mt-6">
                {topic}
              </h2>

              <p className="mt-4 text-gray-600">
                Study this topic with examples and exercises.
              </p>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}