import Link from "next/link";
import {
  BookOpen,
  FileText,
  Brain,
  Download,
  Video,
  ArrowRight,
} from "lucide-react";

const sections = [
  {
    title: "Computer Notes",
    desc: "Complete chapter-wise computer notes.",
    icon: FileText,
    href: "/learn/computer",
    color: "bg-blue-600",
  },
  {
    title: "MCQ Practice",
    desc: "Practice important MCQs with answers.",
    icon: Brain,
    href: "/computer/mcq",
    color: "bg-green-600",
  },
  {
    title: "Video Tutorials",
    desc: "Watch free computer learning videos.",
    icon: Video,
    href: "/computer/videos",
    color: "bg-red-600",
  },
  {
    title: "Download PDFs",
    desc: "Download study material in PDF format.",
    icon: Download,
    href: "/computer/downloads",
    color: "bg-purple-600",
  },
];

export default function ComputerPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      <section className="bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 text-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex items-center gap-4">

            <BookOpen size={60} />

            <div>

              <h1 className="text-5xl font-black">
                Computer
              </h1>

              <p className="mt-3 text-blue-100 text-lg">
                Learn Computer from Beginner to Advanced.
              </p>

            </div>

          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {sections.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition p-8"
              >

                <div
                  className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center text-white`}
                >
                  <Icon size={34} />
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600">
                  {item.desc}
                </p>

                <div className="mt-8 flex items-center text-blue-600 font-bold">

                  Open

                  <ArrowRight
                    size={18}
                    className="ml-2"
                  />

                </div>

              </Link>
            );
          })}

        </div>

      </section>

    </main>
  );
}