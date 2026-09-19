
"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Gavel,
  Landmark,
  Lightbulb,
  Scale,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";

const topics = [
  {
    title: "Indian Constitution",
    icon: "📜",
    description:
      "Understand the Constitution, its features, important parts, schedules and constitutional values.",
    points: [
      "Constitutional framework",
      "Preamble",
      "Fundamental Rights",
      "Directive Principles",
      "Fundamental Duties",
    ],
  },
  {
    title: "Fundamental Rights",
    icon: "⚖️",
    description:
      "Learn the basic rights guaranteed by the Constitution and their importance in a democracy.",
    points: [
      "Right to Equality",
      "Right to Freedom",
      "Right against Exploitation",
      "Freedom of Religion",
      "Constitutional Remedies",
    ],
  },
  {
    title: "Union Government",
    icon: "🏛️",
    description:
      "Study the President, Prime Minister, Council of Ministers and Parliament of India.",
    points: [
      "President",
      "Vice-President",
      "Prime Minister",
      "Council of Ministers",
      "Parliament",
    ],
  },
  {
    title: "Parliament",
    icon: "🏛️",
    description:
      "Understand the structure, powers and functions of India's Parliament.",
    points: [
      "Lok Sabha",
      "Rajya Sabha",
      "Bills",
      "Budget",
      "Parliamentary Committees",
    ],
  },
  {
    title: "Judiciary",
    icon: "⚖️",
    description:
      "Learn about the Supreme Court, High Courts and the judicial system of India.",
    points: [
      "Supreme Court",
      "High Courts",
      "Judicial Review",
      "Public Interest Litigation",
      "Independence of Judiciary",
    ],
  },
  {
    title: "State Government",
    icon: "🏢",
    description:
      "Study Governors, Chief Ministers, State Legislatures and the administration of states.",
    points: [
      "Governor",
      "Chief Minister",
      "State Council of Ministers",
      "State Legislature",
      "State Judiciary",
    ],
  },
  {
    title: "Local Government",
    icon: "🏘️",
    description:
      "Understand Panchayati Raj institutions and urban local bodies.",
    points: [
      "Gram Panchayat",
      "Panchayat Samiti",
      "Zila Parishad",
      "Municipalities",
      "Municipal Corporations",
    ],
  },
  {
    title: "Elections",
    icon: "🗳️",
    description:
      "Learn how elections are conducted and understand the role of the Election Commission.",
    points: [
      "Election Commission",
      "Voter",
      "Lok Sabha Elections",
      "State Elections",
      "Election Process",
    ],
  },
  {
    title: "Constitutional Bodies",
    icon: "🏛️",
    description:
      "Study important constitutional institutions and their responsibilities.",
    points: [
      "Election Commission",
      "UPSC",
      "Finance Commission",
      "CAG",
      "Attorney General",
    ],
  },
];

const constitutionalFacts = [
  {
    title: "Adoption",
    fact: "The Constitution of India was adopted by the Constituent Assembly on 26 November 1949.",
  },
  {
    title: "Commencement",
    fact: "The Constitution came into force on 26 January 1950.",
  },
  {
    title: "Preamble",
    fact: "The Preamble describes India as a sovereign, socialist, secular, democratic republic and expresses important constitutional ideals.",
  },
  {
    title: "Parliament",
    fact: "The Parliament of India consists of the President and two Houses: Lok Sabha and Rajya Sabha.",
  },
  {
    title: "Supreme Court",
    fact: "The Supreme Court is the highest court in India's judicial system.",
  },
  {
    title: "Election Commission",
    fact: "The Election Commission of India is a constitutional authority responsible for conducting elections within its constitutional and statutory framework.",
  },
];

const rights = [
  {
    number: "01",
    title: "Right to Equality",
    description:
      "Promotes equality before law and equal protection of laws.",
    icon: "⚖️",
  },
  {
    number: "02",
    title: "Right to Freedom",
    description:
      "Protects important freedoms subject to constitutional limitations.",
    icon: "🕊️",
  },
  {
    number: "03",
    title: "Right against Exploitation",
    description:
      "Protects people from certain forms of exploitation and forced labour.",
    icon: "🛡️",
  },
  {
    number: "04",
    title: "Freedom of Religion",
    description:
      "Protects freedom of conscience and the practice and propagation of religion subject to constitutional provisions.",
    icon: "🙏",
  },
  {
    number: "05",
    title: "Cultural and Educational Rights",
    description:
      "Protects the cultural and educational interests of specified groups.",
    icon: "📚",
  },
  {
    number: "06",
    title: "Constitutional Remedies",
    description:
      "Provides constitutional mechanisms for enforcing Fundamental Rights.",
    icon: "⚖️",
  },
];

const governmentLevels = [
  {
    title: "Union Government",
    icon: "🇮🇳",
    description:
      "Handles subjects assigned to the Union level and operates through institutions such as Parliament, the President and the Council of Ministers.",
  },
  {
    title: "State Government",
    icon: "🏢",
    description:
      "Governments of individual states operate through the Governor, Chief Minister, Council of Ministers and State Legislature.",
  },
  {
    title: "Local Government",
    icon: "🏘️",
    description:
      "Local self-government includes rural Panchayati Raj institutions and urban local bodies.",
  },
];

const quickFacts = [
  "The Constitution is the supreme legal framework of India.",
  "26 November is observed as Constitution Day in India.",
  "26 January is celebrated as Republic Day.",
  "The President is the constitutional head of the Union.",
  "The Prime Minister is the head of the Council of Ministers.",
  "The Parliament has Lok Sabha and Rajya Sabha.",
  "The Supreme Court is the highest court of India.",
  "Fundamental Rights are contained in Part III of the Constitution.",
  "Directive Principles of State Policy are contained in Part IV.",
  "Fundamental Duties are contained in Article 51A.",
  "India follows a parliamentary system of government at the Union and State levels.",
  "Local self-government is an important part of democratic administration.",
];

export default function IndianPolityPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}

      <section className="bg-gradient-to-r from-indigo-700 via-blue-600 to-cyan-500 text-white">

        <div className="max-w-7xl mx-auto px-6 py-14 md:py-20">

          <Link
            href="/learn/general-knowledge"
            className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/20 px-4 py-2 rounded-xl font-semibold transition"
          >
            <ArrowLeft size={18} />
            Back to General Knowledge
          </Link>

          <div className="mt-8 max-w-4xl">

            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-2 text-sm font-bold">
              <Sparkles size={17} />
              Rishi Infotech Learning Hub
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-black leading-tight">
              Indian Polity
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              Learn the Indian Constitution, Fundamental Rights, Parliament,
              Judiciary, Government institutions, elections and democratic
              administration.
            </p>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <BookOpen className="text-indigo-600" size={28} />

            <p className="text-3xl font-black text-gray-900 mt-2">
              9
            </p>

            <p className="text-gray-500">
              Major Topics
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Scale className="text-blue-600" size={28} />

            <p className="text-3xl font-black text-gray-900 mt-2">
              6
            </p>

            <p className="text-gray-500">
              Fundamental Rights
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Landmark className="text-cyan-600" size={28} />

            <p className="text-3xl font-black text-gray-900 mt-2">
              3
            </p>

            <p className="text-gray-500">
              Government Levels
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <BookOpen className="text-purple-600" size={28} />

            <p className="text-3xl font-black text-gray-900 mt-2">
              MCQ
            </p>

            <p className="text-gray-500">
              Practice
            </p>
          </div>

        </div>

      </section>

      {/* INTRODUCTION */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-10">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-indigo-50 flex items-center justify-center">
              <Gavel
                className="text-indigo-600"
                size={30}
              />
            </div>

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                What is Indian Polity?
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed max-w-4xl">
                Indian Polity explains how the country is governed through
                the Constitution, elected representatives, institutions,
                courts and administrative bodies. It helps students
                understand democracy, rights, duties and the functioning of
                government.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* TOPICS */}

      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="flex items-center gap-3 mb-8">

          <BookOpen
            className="text-indigo-600"
            size={34}
          />

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Major Indian Polity Topics
            </h2>

            <p className="text-gray-500 mt-1">
              Build your understanding of India's political system.
            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {topics.map((topic) => (

            <article
              key={topic.title}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-7"
            >

              <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center text-4xl">
                {topic.icon}
              </div>

              <h3 className="mt-5 text-2xl font-black text-gray-900">
                {topic.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {topic.description}
              </p>

              <div className="mt-6 space-y-3">

                {topic.points.map((point) => (

                  <div
                    key={point}
                    className="flex items-start gap-2 text-gray-700"
                  >
                    <CheckCircle2
                      className="text-indigo-600 shrink-0 mt-0.5"
                      size={18}
                    />
                    {point}
                  </div>

                ))}

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* FUNDAMENTAL RIGHTS */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex items-center gap-3 mb-8">

            <Scale
              className="text-indigo-600"
              size={34}
            />

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Fundamental Rights
              </h2>

              <p className="text-gray-500 mt-1">
                Important rights guaranteed by the Constitution.
              </p>

            </div>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

            {rights.map((right) => (

              <div
                key={right.number}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6 hover:bg-indigo-50 hover:border-indigo-100 transition"
              >

                <div className="flex items-center justify-between">

                  <div className="text-3xl">
                    {right.icon}
                  </div>

                  <span className="text-sm font-black text-indigo-600">
                    {right.number}
                  </span>

                </div>

                <h3 className="mt-4 text-xl font-black text-gray-900">
                  {right.title}
                </h3>

                <p className="mt-2 text-gray-600 leading-relaxed">
                  {right.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* GOVERNMENT LEVELS */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="flex items-center gap-3 mb-8">

          <Users
            className="text-blue-600"
            size={34}
          />

          <div>

            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Three Levels of Government
            </h2>

            <p className="text-gray-500 mt-1">
              Understand government from national to local administration.
            </p>

          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {governmentLevels.map((level) => (

            <div
              key={level.title}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7"
            >

              <div className="text-4xl">
                {level.icon}
              </div>

              <h3 className="mt-5 text-2xl font-black text-gray-900">
                {level.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {level.description}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* CONSTITUTIONAL FACTS */}

      <section className="bg-white border-y border-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex items-center gap-3 mb-8">

            <Shield
              className="text-indigo-600"
              size={34}
            />

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Important Constitutional Facts
              </h2>

              <p className="text-gray-500 mt-1">
                Useful points for revision and examinations.
              </p>

            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-5">

            {constitutionalFacts.map((item, index) => (

              <div
                key={item.title}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6"
              >

                <div className="flex items-start gap-4">

                  <div className="w-10 h-10 shrink-0 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-black">
                    {index + 1}
                  </div>

                  <div>

                    <h3 className="text-xl font-black text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-gray-600 leading-relaxed">
                      {item.fact}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* QUICK REVISION */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="bg-gradient-to-r from-indigo-700 to-blue-600 rounded-3xl p-8 md:p-12 text-white">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/15 flex items-center justify-center">
              <BookOpen size={30} />
            </div>

            <div className="flex-1">

              <h2 className="text-3xl md:text-4xl font-black">
                Quick Polity Revision
              </h2>

              <div className="mt-7 grid sm:grid-cols-2 gap-4">

                {quickFacts.map((fact, index) => (

                  <div
                    key={fact}
                    className="flex items-start gap-3 rounded-2xl bg-white/10 border border-white/10 p-4"
                  >

                    <span className="w-8 h-8 shrink-0 rounded-xl bg-white text-indigo-700 flex items-center justify-center font-black">
                      {index + 1}
                    </span>

                    <p className="text-white/90 leading-relaxed">
                      {fact}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* STUDY TIP */}

      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-7 md:p-10">

          <div className="flex items-start gap-5">

            <div className="w-14 h-14 shrink-0 rounded-2xl bg-yellow-50 flex items-center justify-center">
              <Lightbulb
                className="text-yellow-600"
                size={30}
              />
            </div>

            <div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Polity Study Tip
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
                Start with the Preamble and basic constitutional structure.
                Then study Fundamental Rights, Directive Principles,
                Fundamental Duties, Parliament, Executive and Judiciary.
                Revise important Articles and constitutional bodies
                regularly.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* NAVIGATION */}

      <section className="max-w-7xl mx-auto px-6 pb-14">

        <div className="flex flex-col sm:flex-row gap-4 sm:justify-between">

          <Link
            href="/learn/general-knowledge"
            className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 px-6 py-3 rounded-xl font-black text-gray-700 hover:bg-gray-50 transition"
          >
            <ArrowLeft size={18} />
            Back to GK
          </Link>

          <Link
            href="/learn/general-knowledge"
            className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-black hover:bg-indigo-700 transition"
          >
            Back to General Knowledge
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </main>
  );
}