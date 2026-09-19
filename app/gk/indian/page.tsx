"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Flag,
  Landmark,
  Map,
  Search,
  Sparkles,
} from "lucide-react";
import { useMemo, useState } from "react";

const topics = [
  {
    title: "India at a Glance",
    description:
      "Basic and important facts about India including capital, currency and national symbols.",
    facts: [
      "Capital: New Delhi",
      "Currency: Indian Rupee (₹)",
      "National animal: Bengal Tiger",
      "National bird: Indian Peacock",
      "National flower: Lotus",
      "National tree: Banyan",
      "National aquatic animal: Ganges River Dolphin",
      "National fruit: Mango",
    ],
  },
  {
    title: "States and Capitals",
    description:
      "Learn the states of India and their respective capitals.",
    facts: [
      "Andhra Pradesh — Amaravati",
      "Arunachal Pradesh — Itanagar",
      "Assam — Dispur",
      "Bihar — Patna",
      "Chhattisgarh — Raipur",
      "Goa — Panaji",
      "Gujarat — Gandhinagar",
      "Haryana — Chandigarh",
      "Himachal Pradesh — Shimla",
      "Jharkhand — Ranchi",
      "Karnataka — Bengaluru",
      "Kerala — Thiruvananthapuram",
      "Madhya Pradesh — Bhopal",
      "Maharashtra — Mumbai",
      "Manipur — Imphal",
      "Meghalaya — Shillong",
      "Mizoram — Aizawl",
      "Nagaland — Kohima",
      "Odisha — Bhubaneswar",
      "Punjab — Chandigarh",
      "Rajasthan — Jaipur",
      "Sikkim — Gangtok",
      "Tamil Nadu — Chennai",
      "Telangana — Hyderabad",
      "Tripura — Agartala",
      "Uttar Pradesh — Lucknow",
      "Uttarakhand — Dehradun",
      "West Bengal — Kolkata",
    ],
  },
  {
    title: "Union Territories",
    description:
      "Learn India's Union Territories and their capitals.",
    facts: [
      "Andaman and Nicobar Islands — Sri Vijaya Puram",
      "Chandigarh — Chandigarh",
      "Dadra and Nagar Haveli and Daman and Diu — Daman",
      "Delhi — New Delhi",
      "Jammu and Kashmir — Srinagar (summer), Jammu (winter)",
      "Ladakh — Leh",
      "Lakshadweep — Kavaratti",
      "Puducherry — Puducherry",
    ],
  },
  {
    title: "National Symbols",
    description:
      "Important official national symbols of India.",
    facts: [
      "National Flag — Tiranga",
      "National Emblem — Lion Capital of Ashoka",
      "National Anthem — Jana Gana Mana",
      "National Song — Vande Mataram",
      "National Motto — Satyameva Jayate",
      "National Animal — Bengal Tiger",
      "National Bird — Indian Peacock",
      "National Flower — Lotus",
      "National Tree — Banyan",
      "National Fruit — Mango",
      "National Aquatic Animal — Ganges River Dolphin",
    ],
  },
  {
    title: "Important Places",
    description:
      "Famous historical, cultural and geographical places in India.",
    facts: [
      "Taj Mahal — Agra, Uttar Pradesh",
      "India Gate — New Delhi",
      "Red Fort — Delhi",
      "Gateway of India — Mumbai, Maharashtra",
      "Charminar — Hyderabad, Telangana",
      "Golden Temple — Amritsar, Punjab",
      "Qutub Minar — Delhi",
      "Sanchi Stupa — Madhya Pradesh",
      "Konark Sun Temple — Odisha",
      "Hawa Mahal — Jaipur, Rajasthan",
    ],
  },
  {
    title: "Indian Geography",
    description:
      "Important geographical facts about India.",
    facts: [
      "India is located in South Asia.",
      "The Himalayas form India's northern mountain boundary.",
      "The Ganga is one of India's most important rivers.",
      "The Thar Desert is mainly located in Rajasthan.",
      "The Western Ghats run along the western side of peninsular India.",
      "The Eastern Ghats are found along parts of India's eastern coast.",
      "The Indian Ocean lies to the south of India.",
      "The Arabian Sea lies to the west of India.",
      "The Bay of Bengal lies to the east of India.",
    ],
  },
  {
    title: "Indian History",
    description:
      "Important events and periods from Indian history.",
    facts: [
      "The Indus Valley Civilization was one of the world's earliest urban civilizations.",
      "The Maurya Empire was one of ancient India's major empires.",
      "Ashoka was an important Mauryan emperor.",
      "The Gupta period is often associated with major developments in Indian culture and science.",
      "The Mughal Empire played a major role in medieval Indian history.",
      "The Indian Rebellion of 1857 was a major uprising against British rule.",
      "India became independent on 15 August 1947.",
      "The Constitution of India came into effect on 26 January 1950.",
    ],
  },
  {
    title: "Indian Polity",
    description:
      "Basic facts about India's Constitution and political system.",
    facts: [
      "India is a sovereign, socialist, secular, democratic republic.",
      "The Constitution is the supreme law of India.",
      "The Parliament of India consists of the President, Lok Sabha and Rajya Sabha.",
      "The President is the constitutional head of the Union.",
      "The Prime Minister is the head of the Council of Ministers.",
      "The Supreme Court is the highest court of India.",
      "The Constitution was adopted on 26 November 1949.",
      "The Constitution came into force on 26 January 1950.",
    ],
  },
  {
    title: "Indian Economy",
    description:
      "Basic general knowledge about India's economy.",
    facts: [
      "The official currency of India is the Indian Rupee.",
      "The Reserve Bank of India is India's central bank.",
      "The Indian economy includes agriculture, industry and services.",
      "Agriculture remains an important part of India's economy.",
      "The Goods and Services Tax is commonly known as GST.",
      "India has a large and diverse services sector.",
    ],
  },
  {
    title: "Indian Culture",
    description:
      "Important facts about India's diverse culture and traditions.",
    facts: [
      "India has a rich diversity of languages, religions, traditions and festivals.",
      "Diwali is widely known as the festival of lights.",
      "Holi is widely known as the festival of colours.",
      "Bharatanatyam is a classical dance tradition from Tamil Nadu.",
      "Kathak is one of India's classical dance forms.",
      "Yoga has ancient roots in India.",
      "Indian classical music includes Hindustani and Carnatic traditions.",
    ],
  },
];

const questions = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
    answer: "New Delhi",
  },
  {
    question: "How many states are there in India?",
    options: ["26", "27", "28", "29"],
    answer: "28",
  },
  {
    question: "How many Union Territories are there in India?",
    options: ["6", "7", "8", "9"],
    answer: "8",
  },
  {
    question: "What is the national animal of India?",
    options: ["Lion", "Elephant", "Bengal Tiger", "Leopard"],
    answer: "Bengal Tiger",
  },
  {
    question: "What is the national flower of India?",
    options: ["Rose", "Lotus", "Jasmine", "Sunflower"],
    answer: "Lotus",
  },
  {
    question: "Which is the largest Indian state by area?",
    options: ["Maharashtra", "Rajasthan", "Madhya Pradesh", "Gujarat"],
    answer: "Rajasthan",
  },
  {
    question: "When did the Constitution of India come into effect?",
    options: [
      "15 August 1947",
      "26 November 1949",
      "26 January 1950",
      "2 October 1950",
    ],
    answer: "26 January 1950",
  },
  {
    question: "What is India's currency?",
    options: ["Dollar", "Rupee", "Yen", "Euro"],
    answer: "Rupee",
  },
];

export default function IndianGKPage() {
  const [search, setSearch] = useState("");
  const [answersVisible, setAnswersVisible] = useState(false);

  const filteredTopics = useMemo(() => {
    const value = search.toLowerCase().trim();

    if (!value) {
      return topics;
    }

    return topics.filter((topic) => {
      return (
        topic.title.toLowerCase().includes(value) ||
        topic.description.toLowerCase().includes(value) ||
        topic.facts.some((fact) =>
          fact.toLowerCase().includes(value)
        )
      );
    });
  }, [search]);

  return (
    <main className="min-h-screen bg-gray-50">

      {/* HERO */}

      <section className="bg-gradient-to-r from-orange-600 via-white to-green-600">
        <div className="max-w-7xl mx-auto px-6 py-14">

          <Link
            href="/gk"
            className="inline-flex items-center gap-2 bg-white/90 text-gray-800 px-4 py-2 rounded-full font-bold shadow-sm"
          >
            <ArrowLeft size={18} />
            Back to General Knowledge
          </Link>

          <div className="mt-8 bg-white/95 rounded-3xl p-7 md:p-10 shadow-xl">

            <div className="flex flex-col md:flex-row md:items-center gap-6">

              <div className="w-20 h-20 rounded-3xl bg-orange-50 flex items-center justify-center shrink-0">
                <Landmark
                  size={42}
                  className="text-orange-600"
                />
              </div>

              <div>
                <div className="flex items-center gap-2 text-blue-600 font-bold">
                  <Sparkles size={18} />
                  Rishi Infotech Learning Hub
                </div>

                <h1 className="mt-2 text-4xl md:text-6xl font-black text-gray-900">
                  Indian GK
                </h1>

                <p className="mt-3 text-lg text-gray-600 max-w-3xl">
                  Learn important facts about India including
                  states, capitals, national symbols, geography,
                  history, polity, economy and culture.
                </p>
              </div>

            </div>

            {/* SEARCH */}

            <div className="mt-8 relative">

              <Search
                size={21}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search Indian GK..."
                className="w-full border border-gray-200 rounded-2xl py-4 pl-13 pr-5 outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

          </div>

        </div>
      </section>

      {/* STATS */}

      <section className="max-w-7xl mx-auto px-6 -mt-3 relative z-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="bg-white rounded-2xl shadow-lg p-5 text-center">
            <p className="text-3xl font-black text-blue-600">
              {topics.length}
            </p>
            <p className="text-gray-500 font-semibold">
              Main Topics
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5 text-center">
            <p className="text-3xl font-black text-green-600">
              28
            </p>
            <p className="text-gray-500 font-semibold">
              States
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5 text-center">
            <p className="text-3xl font-black text-orange-600">
              8
            </p>
            <p className="text-gray-500 font-semibold">
              Union Territories
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5 text-center">
            <p className="text-3xl font-black text-cyan-600">
              MCQ
            </p>
            <p className="text-gray-500 font-semibold">
              Practice
            </p>
          </div>

        </div>

      </section>

      {/* TOPICS */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="flex items-center gap-3 mb-8">

          <BookOpen
            size={30}
            className="text-blue-600"
          />

          <div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Indian GK Topics
            </h2>

            <p className="text-gray-500 mt-1">
              Study each topic and revise important facts.
            </p>
          </div>

        </div>

        {filteredTopics.length === 0 ? (

          <div className="bg-white rounded-3xl shadow-sm p-12 text-center">

            <Search
              size={45}
              className="mx-auto text-gray-400"
            />

            <h3 className="mt-5 text-2xl font-black">
              No topic found
            </h3>

            <p className="mt-2 text-gray-500">
              Try another search term.
            </p>

          </div>

        ) : (

          <div className="space-y-7">

            {filteredTopics.map((topic, index) => (

              <article
                key={topic.title}
                className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-8"
              >

                <div className="flex flex-col md:flex-row md:items-start gap-5">

                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">

                    {index === 0 ? (
                      <Landmark
                        size={27}
                        className="text-blue-600"
                      />
                    ) : index === 1 ? (
                      <Map
                        size={27}
                        className="text-blue-600"
                      />
                    ) : index === 3 ? (
                      <Flag
                        size={27}
                        className="text-blue-600"
                      />
                    ) : (
                      <BookOpen
                        size={27}
                        className="text-blue-600"
                      />
                    )}

                  </div>

                  <div className="flex-1">

                    <h3 className="text-2xl font-black text-gray-900">
                      {index + 1}. {topic.title}
                    </h3>

                    <p className="mt-2 text-gray-600">
                      {topic.description}
                    </p>

                    <div className="mt-6 grid md:grid-cols-2 gap-3">

                      {topic.facts.map((fact) => (

                        <div
                          key={fact}
                          className="flex items-start gap-3 bg-gray-50 rounded-xl p-4"
                        >

                          <CheckCircle2
                            size={18}
                            className="text-green-500 shrink-0 mt-0.5"
                          />

                          <span className="text-gray-700 font-medium">
                            {fact}
                          </span>

                        </div>

                      ))}

                    </div>

                  </div>

                </div>

              </article>

            ))}

          </div>

        )}

      </section>

      {/* MCQ */}

      <section className="bg-blue-50 border-y border-blue-100">

        <div className="max-w-7xl mx-auto px-6 py-14">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">

            <div>

              <h2 className="text-3xl font-black text-gray-900">
                Indian GK MCQ Practice
              </h2>

              <p className="mt-2 text-gray-600">
                Test your knowledge with important questions.
              </p>

            </div>

            <button
              type="button"
              onClick={() =>
                setAnswersVisible((value) => !value)
              }
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl"
            >
              {answersVisible
                ? "Hide Answers"
                : "Show Answers"}
            </button>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {questions.map((question, index) => (

              <article
                key={index}
                className="bg-white rounded-3xl shadow-sm p-6"
              >

                <h3 className="font-black text-lg text-gray-900">
                  Q{index + 1}. {question.question}
                </h3>

                <div className="mt-5 grid sm:grid-cols-2 gap-3">

                  {question.options.map((option) => {

                    const correct =
                      option === question.answer;

                    return (
                      <div
                        key={option}
                        className={`rounded-xl border p-3 font-semibold ${
                          answersVisible && correct
                            ? "bg-green-50 border-green-300 text-green-700"
                            : "bg-gray-50 border-gray-200 text-gray-700"
                        }`}
                      >
                        {option}

                        {answersVisible && correct && (
                          <span className="ml-2">
                            ✓
                          </span>
                        )}

                      </div>
                    );

                  })}

                </div>

                {answersVisible && (
                  <p className="mt-4 text-green-700 font-bold">
                    Correct Answer: {question.answer}
                  </p>
                )}

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* NAVIGATION */}

      <section className="max-w-7xl mx-auto px-6 py-14">

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-7 md:p-10">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            <div>

              <p className="text-blue-600 font-bold">
                Continue Learning
              </p>

              <h2 className="mt-2 text-3xl font-black">
                Explore More GK
              </h2>

              <p className="mt-2 text-gray-600">
                Continue with World GK, History, Geography,
                Science and other sections.
              </p>

            </div>

            <Link
              href="/gk"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-4 rounded-xl"
            >
              All GK Sections
              <ArrowRight size={19} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}