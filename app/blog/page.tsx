import Link from "next/link";
import {
  BookOpen,
  Code,
  Cpu,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const posts = [
  {
    title: "Introduction to Computers",
    description:
      "Learn the basics of computers, their characteristics, types, components, and applications.",
    category: "Computer",
    icon: Cpu,
    href: "/learn/computer",
  },
  {
    title: "How to Start Learning Programming",
    description:
      "A beginner-friendly guide to programming concepts, coding practice, and building your skills step by step.",
    category: "Programming",
    icon: Code,
    href: "/developer-hub",
  },
  {
    title: "Computer Security Basics",
    description:
      "Understand passwords, malware, phishing, privacy, and safe browsing practices.",
    category: "Cyber Security",
    icon: ShieldCheck,
    href: "/learn/computer/cyber-security",
  },
  {
    title: "Effective Study Techniques",
    description:
      "Simple techniques to improve your learning, revision, practice, and exam preparation.",
    category: "Study",
    icon: BookOpen,
    href: "/study-planner",
  },
 
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/20 px-4 py-2 text-sm font-semibold">
              <BookOpen size={18} />
              Rishi Infotech Blog
            </div>

            <h1 className="mt-6 text-5xl md:text-6xl font-black">
              Learn. Explore. Grow.
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              Educational articles, technology guides, study tips,
              programming resources, and useful knowledge for students.
            </p>

          </div>

        </div>
      </section>

      {/* BLOG POSTS */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="mb-10">

          <h2 className="text-4xl font-black text-gray-900">
            Latest Articles
          </h2>

          <p className="mt-3 text-gray-600">
            Explore our learning resources and educational guides.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {posts.map((post) => {

            const Icon = post.icon;

            return (
              <article
                key={post.title}
                className="group bg-white rounded-3xl shadow-lg border border-gray-100 p-7 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >

                <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
                  <Icon size={28} />
                </div>

                <div className="mt-6">

                  <span className="inline-block rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-sm font-semibold">
                    {post.category}
                  </span>

                  <h3 className="mt-4 text-2xl font-bold text-gray-900">
                    {post.title}
                  </h3>

                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {post.description}
                  </p>

                </div>

                <Link
                  href={post.href}
                  className="mt-6 inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition"
                >
                  Read More
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition"
                  />
                </Link>

              </article>
            );
          })}

        </div>

      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-16">

        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-10 md:p-14">

          <h2 className="text-3xl md:text-4xl font-black">
            Ready to continue learning?
          </h2>

          <p className="mt-3 text-white/90 max-w-2xl">
            Explore courses, practice questions, study tools,
            AI resources, and more on Rishi Infotech Learning Hub.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">

            <Link
              href="/learn"
              className="rounded-xl bg-white text-blue-700 px-6 py-3 font-bold hover:bg-gray-100 transition"
            >
              Start Learning
            </Link>

            <Link
              href="/practice"
              className="rounded-xl border border-white/40 px-6 py-3 font-bold hover:bg-white/10 transition"
            >
              Practice Now
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
