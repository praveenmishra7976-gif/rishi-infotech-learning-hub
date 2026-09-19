"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Code2,
  Lightbulb,
  Monitor,
  Network,
  ShieldCheck,
  Sparkles,
  Trophy,
} from "lucide-react";

const chapters = [
  {
    id: "computer-fundamentals",
    title: "Computer Fundamentals",
    description:
      "Learn the basic concepts of computers, characteristics, applications and generations.",
    icon: "💻",
  },
  {
    id: "computer-hardware",
    title: "Computer Hardware",
    description:
      "Understand CPU, motherboard, processor, ports and other physical components.",
    icon: "🖥️",
  },
  {
    id: "computer-software",
    title: "Computer Software",
    description:
      "Learn system software, application software, utilities and software basics.",
    icon: "⚙️",
  },
  {
    id: "input-output",
    title: "Input & Output Devices",
    description:
      "Study keyboard, mouse, scanner, monitor, printer and other I/O devices.",
    icon: "⌨️",
  },
  {
    id: "cpu-memory",
    title: "CPU & Memory",
    description:
      "Learn processor, ALU, control unit, registers, RAM, ROM and cache memory.",
    icon: "🧠",
  },
  {
    id: "storage",
    title: "Computer Storage",
    description:
      "Understand hard disks, SSDs, optical disks, pen drives and storage units.",
    icon: "💾",
  },
  {
    id: "operating-system",
    title: "Operating System",
    description:
      "Learn Windows, Linux, Android and the functions of operating systems.",
    icon: "🪟",
  },
  {
    id: "internet-networking",
    title: "Internet & Networking",
    description:
      "Understand internet, networks, LAN, WAN, IP addresses, routers and protocols.",
    icon: "🌐",
  },
  {
    id: "cyber-security",
    title: "Cyber Security",
    description:
      "Learn passwords, malware, phishing, safe browsing, privacy and online security.",
    icon: "🔐",
  },
  {
    id: "ms-office",
    title: "MS Office",
    description:
      "Learn basic concepts of Word, Excel, PowerPoint and common office tools.",
    icon: "📊",
  },
  {
    id: "programming-basics",
    title: "Programming Basics",
    description:
      "Understand algorithms, programming languages, variables, conditions and loops.",
    icon: "👨‍💻",
  },
  {
    id: "number-system",
    title: "Number System",
    description:
      "Learn binary, decimal, octal and hexadecimal number systems.",
    icon: "🔢",
  },
  {
    id: "digital-technology",
    title: "Digital Technology",
    description:
      "Explore digital devices, communication technology and modern computing.",
    icon: "📱",
  },
  {
    id: "artificial-intelligence",
    title: "Artificial Intelligence",
    description:
      "Learn the basics of AI, machine learning, generative AI and real-world applications.",
    icon: "🤖",
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing",
    description:
      "Understand cloud services, storage, servers and common cloud applications.",
    icon: "☁️",
  },
];

const quickTopics = [
  {
    title: "CPU",
    value: "Brain of Computer",
    icon: "🧠",
  },
  {
    title: "RAM",
    value: "Temporary Memory",
    icon: "💾",
  },
  {
    title: "Internet",
    value: "Global Network",
    icon: "🌐",
  },
  {
    title: "AI",
    value: "Artificial Intelligence",
    icon: "🤖",
  },
  {
    title: "Cyber Security",
    value: "Digital Protection",
    icon: "🔐",
  },
  {
    title: "Programming",
    value: "Computer Instructions",
    icon: "💻",
  },
];

export default function ComputerPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="bg-gradient-to-r from-cyan-700 via-blue-600 to-indigo-600 text-white">

        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">

          <Link
            href="/learn"
            className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/20 px-4 py-2 rounded-xl font-semibold transition"
          >
            <ArrowLeft size={18} />
            Back to Learn
          </Link>

          <div className="mt-8 max-w-4xl">

            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-2 text-sm font-bold">
              <Sparkles size={17} />
              Rishi Infotech Learning Hub
            </div>

            <div className="mt-7 text-6xl">
              💻
            </div>

            <h1 className="mt-5 text-4xl md:text-6xl font-black leading-tight">
              Computer
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">
              Learn computers from basic fundamentals to modern technology
              including hardware, software, networking, cyber security,
              programming, artificial intelligence and cloud computing.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 font-semibold">
                💻 Fundamentals
              </span>

              <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 font-semibold">
                🌐 Networking
              </span>

              <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 font-semibold">
                🔐 Cyber Security
              </span>

              <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 font-semibold">
                🤖 AI
              </span>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          STATS
      ====================================================== */}

      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="bg-white rounded-2xl shadow-lg p-5 border border-gray-100">

            <BookOpen
              className="text-blue-600"
              size={28}
            />

            <p className="text-3xl font-black text-gray-900 mt-2">
              {chapters.length}
            </p>

            <p className="text-gray-500">
              Chapters
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5 border border-gray-100">

            <Monitor
              className="text-cyan-600"
              size={28}
            />

            <p className="text-3xl font-black text-gray-900 mt-2">
              100+
            </p>

            <p className="text-gray-500">
              Concepts
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5 border border-gray-100">

            <Network
              className="text-purple-600"
              size={28}
            />

            <p className="text-3xl font-black text-gray-900 mt-2">
              20+
            </p>

            <p className="text-gray-500">
              Technology Topics
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5 border border-gray-100">

            <Trophy
              className="text-yellow-500"
              size={28}
            />

            <p className="text-3xl font-black text-gray-900 mt-2">
              MCQ
            </p>

            <p className="text-gray-500">
              Practice
            </p>

          </div>

        </div>

      </section>

      {/* =====================================================
          CHAPTERS
      ====================================================== */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="flex items-center gap-3 mb-8">

          <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center">
            <Monitor
              className="text-blue-600"
              size={30}
            />
          </div>

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Computer Chapters
            </h2>

            <p className="text-gray-500 mt-1">
              Select a chapter and start learning.
            </p>

          </div>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {chapters.map((chapter, index) => (

            <div
              key={chapter.id}
              className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6"
            >

              <div className="flex items-start justify-between gap-4">

                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-3xl group-hover:scale-105 transition">
                  {chapter.icon}
                </div>

                <span className="text-xs font-black bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">
                  Chapter {index + 1}
                </span>

              </div>

              <h3 className="mt-5 text-xl font-black text-gray-900 group-hover:text-blue-600 transition">
                {chapter.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed min-h-[72px]">
                {chapter.description}
              </p>

              <Link
                href={`/learn/computer/${chapter.id}`}
                className="mt-5 inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition"
              >
                Start Learning
                <ArrowRight size={18} />
              </Link>

            </div>

          ))}

        </div>

      </section>

      {/* =====================================================
          QUICK REVISION
      ====================================================== */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex items-center gap-3 mb-8">

            <div className="w-12 h-12 rounded-2xl bg-cyan-50 flex items-center justify-center">

              <Code2
                className="text-cyan-600"
                size={30}
              />

            </div>

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Computer Quick Revision
              </h2>

              <p className="text-gray-500 mt-1">
                Important computer concepts at a glance.
              </p>

            </div>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {quickTopics.map((item) => (

              <div
                key={item.title}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6 hover:bg-blue-50 hover:border-blue-200 hover:-translate-y-1 transition"
              >

                <div className="text-3xl">
                  {item.icon}
                </div>

                <h3 className="mt-4 text-xl font-black text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 font-bold text-blue-600">
                  {item.value}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          LEARNING PATH
      ====================================================== */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10">

          <div className="flex items-center gap-3 mb-8">

            <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center">

              <BookOpen
                className="text-indigo-600"
                size={28}
              />

            </div>

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Recommended Learning Path
              </h2>

              <p className="text-gray-500 mt-1">
                Follow these steps to build strong computer knowledge.
              </p>

            </div>

          </div>

          <div className="grid md:grid-cols-4 gap-4">

            {[
              {
                number: "01",
                title: "Learn Basics",
                text: "Start with computer fundamentals and hardware.",
                icon: "💻",
              },
              {
                number: "02",
                title: "Understand Systems",
                text: "Learn software, memory, storage and operating systems.",
                icon: "⚙️",
              },
              {
                number: "03",
                title: "Explore Technology",
                text: "Study networking, security and programming.",
                icon: "🌐",
              },
              {
                number: "04",
                title: "Build Future Skills",
                text: "Explore AI, digital technology and cloud computing.",
                icon: "🚀",
              },
            ].map((item) => (

              <div
                key={item.number}
                className="rounded-2xl bg-gray-50 border border-gray-100 p-6"
              >

                <div className="flex items-center justify-between">

                  <span className="text-sm font-black text-blue-600">
                    {item.number}
                  </span>

                  <span className="text-3xl">
                    {item.icon}
                  </span>

                </div>

                <h3 className="mt-5 font-black text-xl text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-gray-600 leading-relaxed">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          SECURITY FEATURE
      ====================================================== */}

      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="bg-gradient-to-r from-blue-700 to-cyan-600 rounded-3xl p-8 md:p-12 text-white">

          <div className="flex flex-col md:flex-row items-start gap-5">

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/15 flex items-center justify-center">

              <ShieldCheck size={30} />

            </div>

            <div className="flex-1">

              <h2 className="text-3xl md:text-4xl font-black">
                Learn Safe & Smart Computing
              </h2>

              <p className="mt-4 text-white/90 leading-relaxed max-w-3xl">
                Learn how computers work and how to use technology safely.
                Understand strong passwords, phishing, malware, privacy,
                networking and responsible use of the internet.
              </p>

              <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-4 gap-3">

                {[
                  "Learn Fundamentals",
                  "Understand Hardware",
                  "Use Internet Safely",
                  "Practice Technology",
                ].map((item, index) => (

                  <div
                    key={item}
                    className="bg-white/10 border border-white/15 rounded-xl p-4"
                  >

                    <span className="font-black">
                      {index + 1}.
                    </span>{" "}

                    {item}

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          STUDY TIP
      ====================================================== */}

      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center shrink-0">

              <Lightbulb
                className="text-cyan-600"
                size={30}
              />

            </div>

            <div>

              <h2 className="text-3xl font-black text-gray-900">
                How to Study Computer
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
                Start with computer fundamentals and hardware. Then learn
                software, operating systems and networking. After that,
                explore cyber security, programming, AI and cloud computing.
                Practice regularly and connect every concept with a real-world
                example.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="bg-gray-900 text-white">

        <div className="max-w-7xl mx-auto px-6 py-14 text-center">

          <div className="mx-auto w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">

            <Sparkles
              className="text-cyan-400"
              size={34}
            />

          </div>

          <h2 className="mt-5 text-3xl md:text-4xl font-black">
            Ready to Learn Computer? 🚀
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Choose a chapter, understand the concepts, revise important
            points and practice what you have learned.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">

            <Link
              href="/learn/computer/computer-fundamentals"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-black transition"
            >
              <BookOpen size={19} />
              Start First Chapter
            </Link>

            <Link
              href="/learn"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/15 hover:bg-white/15 px-6 py-3 rounded-xl font-black transition"
            >
              All Subjects
              <ArrowRight size={19} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
