"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  Brain,
  Lightbulb,
  Search,
  Sparkles,
  Users,
} from "lucide-react";
import { useMemo, useState } from "react";

const persons = [
  {
    name: "Mahatma Gandhi",
    field: "Freedom Movement",
    description:
      "Indian freedom movement leader known for non-violence and Satyagraha.",
    fact: "Known as the Father of the Nation in India.",
    icon: "🇮🇳",
  },
  {
    name: "Dr. B. R. Ambedkar",
    field: "Law & Constitution",
    description:
      "Jurist, economist, social reformer and an important architect of the Indian Constitution.",
    fact: "He served as the first Law and Justice Minister of independent India.",
    icon: "📜",
  },
  {
    name: "Dr. A. P. J. Abdul Kalam",
    field: "Science & Technology",
    description:
      "Indian aerospace scientist and former President of India.",
    fact: "Popularly known as the Missile Man of India.",
    icon: "🚀",
  },
  {
    name: "Jawaharlal Nehru",
    field: "Politics",
    description:
      "Indian independence leader and the first Prime Minister of independent India.",
    fact: "His birthday, 14 November, is celebrated as Children's Day in India.",
    icon: "🇮🇳",
  },
  {
    name: "Sardar Vallabhbhai Patel",
    field: "Freedom Movement",
    description:
      "Indian independence leader and statesman who played a major role in integrating princely states.",
    fact: "Known as the Iron Man of India.",
    icon: "🗿",
  },
  {
    name: "Subhas Chandra Bose",
    field: "Freedom Movement",
    description:
      "Indian nationalist leader who led the Indian National Army.",
    fact: "Popularly known as Netaji.",
    icon: "⭐",
  },
  {
    name: "Bhagat Singh",
    field: "Revolutionary",
    description:
      "Indian revolutionary who became an important symbol of India's freedom struggle.",
    fact: "He is remembered as one of India's most influential young revolutionaries.",
    icon: "🕊️",
  },
  {
    name: "Rabindranath Tagore",
    field: "Literature",
    description:
      "Indian poet, writer, philosopher and Nobel laureate.",
    fact: "He wrote the lyrics of India's national anthem.",
    icon: "📚",
  },
  {
    name: "Swami Vivekananda",
    field: "Spirituality",
    description:
      "Indian monk and philosopher who introduced Indian philosophical ideas to wider audiences.",
    fact: "His birthday is observed as National Youth Day in India.",
    icon: "🧘",
  },
  {
    name: "C. V. Raman",
    field: "Physics",
    description:
      "Indian physicist known for important research in the field of light scattering.",
    fact: "He received the Nobel Prize in Physics in 1930.",
    icon: "🔬",
  },
  {
    name: "Homi J. Bhabha",
    field: "Nuclear Science",
    description:
      "Indian physicist who played a major role in developing India's nuclear science programme.",
    fact: "He is widely regarded as the father of India's nuclear programme.",
    icon: "⚛️",
  },
  {
    name: "Vikram Sarabhai",
    field: "Space Science",
    description:
      "Indian physicist and one of the key founders of India's space programme.",
    fact: "He is widely regarded as the father of the Indian space programme.",
    icon: "🛰️",
  },
  {
    name: "Mother Teresa",
    field: "Humanitarian Work",
    description:
      "Humanitarian and founder of the Missionaries of Charity.",
    fact: "She received the Nobel Peace Prize in 1979.",
    icon: "❤️",
  },
  {
    name: "M. S. Dhoni",
    field: "Cricket",
    description:
      "Indian cricketer and former captain known for his leadership and wicket-keeping.",
    fact: "He led India to victory in the 2007 T20 World Cup and 2011 Cricket World Cup.",
    icon: "🏏",
  },
  {
    name: "Sachin Tendulkar",
    field: "Cricket",
    description:
      "Indian cricketer widely regarded as one of the greatest batsmen in cricket history.",
    fact: "He was the first male cricketer to score a double century in ODI cricket.",
    icon: "🏏",
  },
  {
    name: "Kalpana Chawla",
    field: "Space Science",
    description:
      "Indian-born astronaut who flew aboard Space Shuttle missions.",
    fact: "She was the first woman of Indian origin to go to space.",
    icon: "🚀",
  },
];

const popularFields = [
  "Freedom Fighters",
  "Scientists",
  "Politicians",
  "Writers",
  "Sports Persons",
  "Social Reformers",
  "Astronauts",
  "Nobel Prize Winners",
];

const quickFacts = [
  {
    question: "Who is known as the Missile Man of India?",
    answer: "Dr. A. P. J. Abdul Kalam",
  },
  {
    question: "Who is known as the Iron Man of India?",
    answer: "Sardar Vallabhbhai Patel",
  },
  {
    question: "Who is popularly known as Netaji?",
    answer: "Subhas Chandra Bose",
  },
  {
    question: "Who wrote India's national anthem?",
    answer: "Rabindranath Tagore",
  },
  {
    question: "Who is known as the father of India's space programme?",
    answer: "Vikram Sarabhai",
  },
  {
    question: "Who is associated with the Raman Effect?",
    answer: "C. V. Raman",
  },
];

export default function ImportantPersonsPage() {
  const [search, setSearch] = useState("");

  const filteredPersons = useMemo(() => {
    const value = search.toLowerCase().trim();

    if (!value) {
      return persons;
    }

    return persons.filter(
      (person) =>
        person.name.toLowerCase().includes(value) ||
        person.field.toLowerCase().includes(value) ||
        person.description.toLowerCase().includes(value)
    );
  }, [search]);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO */}

      <section className="bg-gradient-to-r from-indigo-700 via-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <Link
            href="/learn/general-knowledge"
            className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/20 px-4 py-2 rounded-xl font-semibold transition"
          >
            <ArrowLeft size={18} />
            Back to GK
          </Link>

          <div className="mt-8 max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-2 text-sm font-bold">
              <Sparkles size={17} />
              Rishi Infotech Learning Hub
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-black leading-tight">
              Important Persons
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/90 leading-relaxed">
              Learn about important leaders, scientists, writers, freedom
              fighters, sports persons, social reformers and other famous
              personalities.
            </p>

            {/* SEARCH */}

            <div className="mt-8 relative max-w-2xl">
              <Search
                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
                size={22}
              />

              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search a person or field..."
                className="w-full rounded-2xl bg-white text-gray-900 pl-14 pr-5 py-5 outline-none shadow-xl placeholder:text-gray-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}

      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Users className="text-blue-600" size={28} />

            <p className="text-3xl font-black text-gray-900 mt-2">
              {persons.length}+
            </p>

            <p className="text-gray-500">
              Important Persons
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <BookOpen className="text-cyan-600" size={28} />

            <p className="text-3xl font-black text-gray-900 mt-2">
              8+
            </p>

            <p className="text-gray-500">
              Fields
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Award className="text-purple-600" size={28} />

            <p className="text-3xl font-black text-gray-900 mt-2">
              GK
            </p>

            <p className="text-gray-500">
              Exam Focus
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <Brain className="text-yellow-500" size={28} />

            <p className="text-3xl font-black text-gray-900 mt-2">
              MCQ
            </p>

            <p className="text-gray-500">
              Practice Ready
            </p>
          </div>
        </div>
      </section>

      {/* PERSONS */}

      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-center gap-3 mb-8">
          <Users className="text-blue-600" size={34} />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Famous & Important Persons
            </h2>

            <p className="text-gray-500 mt-1">
              Explore personalities and their important contributions.
            </p>
          </div>
        </div>

        {filteredPersons.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-sm p-10 text-center">
            <Search
              className="mx-auto text-gray-400"
              size={42}
            />

            <h3 className="mt-4 text-2xl font-bold text-gray-900">
              No person found
            </h3>

            <p className="mt-2 text-gray-500">
              Try another name or field.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPersons.map((person) => (
              <article
                key={person.name}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-3xl">
                    {person.icon}
                  </div>

                  <span className="text-xs font-black bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full">
                    {person.field}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black text-gray-900">
                  {person.name}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {person.description}
                </p>

                <div className="mt-5 rounded-2xl bg-gray-50 border border-gray-100 p-4">
                  <p className="text-xs font-black uppercase tracking-wide text-gray-400">
                    Important Fact
                  </p>

                  <p className="mt-2 text-sm font-semibold text-gray-700 leading-relaxed">
                    {person.fact}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* POPULAR FIELDS */}

      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center gap-3">
            <BookOpen className="text-cyan-600" size={28} />

            <div>
              <h2 className="text-3xl font-black text-gray-900">
                Popular Fields
              </h2>

              <p className="text-gray-500 mt-1">
                Search important persons by category.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-7">
            {popularFields.map((field) => (
              <button
                key={field}
                type="button"
                onClick={() => setSearch(field)}
                className="px-5 py-3 bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-700 font-semibold rounded-full transition"
              >
                {field}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK FACTS */}

      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-center gap-3 mb-8">
          <Lightbulb className="text-yellow-500" size={30} />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Quick Revision Facts
            </h2>

            <p className="text-gray-500 mt-1">
              Remember these important GK facts for exams.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {quickFacts.map((fact, index) => (
            <article
              key={fact.question}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
            >
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black">
                  {index + 1}
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    {fact.question}
                  </h3>

                  <p className="mt-2 text-blue-600 font-black">
                    {fact.answer}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EXAM PREPARATION */}

      <section className="max-w-7xl mx-auto px-6 pb-14">
        <div className="rounded-3xl bg-gradient-to-r from-indigo-700 to-blue-600 text-white p-8 md:p-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <Award size={30} />

              <span className="font-bold">
                General Knowledge Preparation
              </span>
            </div>

            <h2 className="mt-5 text-3xl md:text-4xl font-black">
              Know the People Who Shaped History
            </h2>

            <p className="mt-4 text-white/90 text-lg leading-relaxed">
              Learn important personalities and their contributions to
              India's history, science, literature, politics, sports and
              society.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/practice"
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-black px-6 py-3 rounded-xl hover:bg-gray-100 transition"
              >
                Practice MCQs
                <ArrowRight size={19} />
              </Link>

              <Link
                href="/learn/general-knowledge"
                className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white font-bold px-6 py-3 rounded-xl hover:bg-white/25 transition"
              >
                Back to GK
                <ArrowLeft size={19} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <section className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <Sparkles
            className="mx-auto text-cyan-400"
            size={36}
          />

          <h2 className="mt-4 text-3xl font-black">
            Keep Learning GK
          </h2>

          <p className="mt-3 text-gray-400">
            Explore more General Knowledge topics and improve your
            exam preparation.
          </p>
        </div>
      </section>
    </main>
  );
}
