import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Download,
  FileText,
  Sparkles,
} from "lucide-react";

const resources = [
  {
    title: "Chemistry Chapter Notes",
    description:
      "Read chapter-wise Chemistry notes covering important concepts and explanations.",
    href: "/learn/chemistry",
    icon: BookOpen,
  },
  {
    title: "Chemistry Formula Sheet",
    description:
      "Quickly revise important Chemistry formulas, laws and numerical relations.",
    href: "/chemistry/formulas",
    icon: FileText,
  },
  {
    title: "Chemistry MCQ Practice",
    description:
      "Test your Chemistry knowledge with interactive multiple-choice questions.",
    href: "/chemistry/mcq",
    icon: Sparkles,
  },
];

export default function ChemistryDownloadsPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      {/* HERO */}
      <section className="bg-gradient-to-r from-green-800 via-emerald-700 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-20">

          <div className="flex items-center gap-4">

            <div className="w-16 h-16 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center">
              <Download size={32} />
            </div>

            <div>
              <div className="text-sm font-bold text-green-100">
                CHEMISTRY RESOURCES
              </div>

              <h1 className="mt-2 text-4xl md:text-6xl font-black">
                Chemistry Downloads
              </h1>

              <p className="mt-4 text-lg md:text-xl text-green-100 max-w-3xl">
                Access Chemistry notes, formulas and practice resources
                from one place.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* NOTICE */}
      <section className="max-w-7xl mx-auto px-6 pt-10">

        <div className="rounded-3xl bg-white border border-green-100 shadow-sm p-6 md:p-8">

          <div className="flex items-start gap-4">

            <div className="w-12 h-12 shrink-0 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center">
              <FileText size={24} />
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-black text-gray-900">
                Downloadable PDFs are coming soon
              </h2>

              <p className="mt-2 text-gray-600 leading-7">
                We are preparing downloadable Chemistry resources.
                Until then, you can read the available content online
                and practice directly on the website.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* RESOURCES */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {resources.map((resource) => {

            const Icon = resource.icon;

            return (
              <article
                key={resource.title}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 hover:shadow-xl transition"
              >

                <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center">
                  <Icon size={28} />
                </div>

                <h2 className="mt-6 text-2xl font-black text-gray-900">
                  {resource.title}
                </h2>

                <p className="mt-3 text-gray-600 leading-7">
                  {resource.description}
                </p>

                <Link
                  href={resource.href}
                  className="mt-7 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl font-bold transition"
                >
                  Open Resource
                  <ArrowRight size={18} />
                </Link>

                <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-gray-400">
                  <Download size={15} />
                  PDF Coming Soon
                </div>

              </article>
            );
          })}

        </div>

      </section>

    </main>
  );
}