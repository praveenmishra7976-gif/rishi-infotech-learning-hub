import Link from "next/link";

const topics = [
  {
    title: "Sangya (Noun)",
    icon: "📖",
    description:
      "Learn Sanskrit nouns and understand how words are used in sentences.",
  },
  {
    title: "Sarvanam (Pronoun)",
    icon: "👤",
    description:
      "Study important Sanskrit pronouns and their different forms.",
  },
  {
    title: "Visheshan (Adjective)",
    icon: "✍️",
    description:
      "Understand adjectives and how they describe nouns in Sanskrit.",
  },
  {
    title: "Kriya (Verb)",
    icon: "🔤",
    description:
      "Learn Sanskrit verbs and their usage in different sentences.",
  },
  {
    title: "Vachan",
    icon: "🔢",
    description:
      "Learn Ekavachan, Dvivachan and Bahuvachan in Sanskrit.",
  },
  {
    title: "Ling",
    icon: "📚",
    description:
      "Understand masculine, feminine and neuter genders in Sanskrit.",
  },
  {
    title: "Karaka",
    icon: "📝",
    description:
      "Learn the important Karakas and their relationship with sentences.",
  },
  {
    title: "Vibhakti",
    icon: "📋",
    description:
      "Understand the seven Vibhaktis and their uses in Sanskrit grammar.",
  },
  {
    title: "Lakara",
    icon: "⏳",
    description:
      "Learn different Lakara forms used to express time and actions.",
  },
];

const grammarRules = [
  {
    title: "वचन (Number)",
    description:
      "Sanskrit has three numbers: Ekavachan (one), Dvivachan (two) and Bahuvachan (more than two).",
  },
  {
    title: "लिङ्ग (Gender)",
    description:
      "Sanskrit nouns are generally classified as masculine, feminine or neuter.",
  },
  {
    title: "विभक्ति (Case)",
    description:
      "Vibhakti forms show the grammatical relationship of a word with other words in a sentence.",
  },
];

const examples = [
  {
    sanskrit: "रामः पठति।",
    hindi: "राम पढ़ता है।",
    english: "Rama reads.",
  },
  {
    sanskrit: "सीता लिखति।",
    hindi: "सीता लिखती है।",
    english: "Sita writes.",
  },
  {
    sanskrit: "बालकाः क्रीडन्ति।",
    hindi: "बालक खेलते हैं।",
    english: "The boys play.",
  },
  {
    sanskrit: "बालिका विद्यालयं गच्छति।",
    hindi: "लड़की विद्यालय जाती है।",
    english: "The girl goes to school.",
  },
];

export default function SanskritGrammarPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Link
            href="/learn/sanskrit"
            className="text-sm font-medium text-blue-100 hover:text-white"
          >
            ← Back to Sanskrit
          </Link>

          <div className="mt-8 flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-white text-5xl shadow-xl">
              📖
            </div>

            <div>
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
                Sanskrit Grammar
              </h1>

              <p className="mt-3 max-w-3xl text-blue-50">
                Learn the fundamentals of Sanskrit grammar including nouns,
                pronouns, verbs, gender, number, cases and sentence structure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Sanskrit Grammar Topics
        </h2>

        <p className="mt-2 text-gray-600">
          Start with the basics and gradually build your Sanskrit grammar
          knowledge.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                {topic.icon}
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                {topic.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                {topic.description}
              </p>

              <div className="mt-5 font-semibold text-blue-600">
                Learn Topic →
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Important Grammar Concepts
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">
            These concepts form the foundation of Sanskrit grammar.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {grammarRules.map((rule) => (
              <div
                key={rule.title}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-900">
                  {rule.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {rule.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          Sanskrit Sentence Examples
        </h2>

        <p className="mt-3 text-center text-gray-600">
          Compare Sanskrit sentences with their Hindi and English meanings.
        </p>

        <div className="mt-10 space-y-5">
          {examples.map((example, index) => (
            <div
              key={example.sanskrit}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                  {index + 1}
                </div>

                <div className="space-y-2">
                  <p className="text-xl font-bold text-gray-900">
                    {example.sanskrit}
                  </p>

                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-800">
                      Hindi:
                    </span>{" "}
                    {example.hindi}
                  </p>

                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-800">
                      English:
                    </span>{" "}
                    {example.english}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900">
              Learn Sanskrit Step by Step
            </h2>

            <p className="mt-4 max-w-3xl leading-8 text-gray-600">
              A strong understanding of Sanskrit grammar makes it easier to
              read texts, understand meanings, translate sentences and learn
              Shabd Roop and Dhatu Roop.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl bg-blue-50 p-5">
                <div className="text-3xl">1️⃣</div>
                <h3 className="mt-3 font-bold text-gray-900">
                  Learn Words
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Build your basic Sanskrit vocabulary.
                </p>
              </div>

              <div className="rounded-2xl bg-blue-50 p-5">
                <div className="text-3xl">2️⃣</div>
                <h3 className="mt-3 font-bold text-gray-900">
                  Learn Forms
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Practice Shabd Roop and Dhatu Roop.
                </p>
              </div>

              <div className="rounded-2xl bg-blue-50 p-5">
                <div className="text-3xl">3️⃣</div>
                <h3 className="mt-3 font-bold text-gray-900">
                  Build Sentences
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Understand Sanskrit sentence structure.
                </p>
              </div>

              <div className="rounded-2xl bg-blue-50 p-5">
                <div className="text-3xl">4️⃣</div>
                <h3 className="mt-3 font-bold text-gray-900">
                  Practice
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Test your grammar knowledge regularly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-blue-600 px-6 py-12 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-white">
            Practice Sanskrit Grammar
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-blue-100">
            Test your understanding of Sanskrit grammar with practice
            questions.
          </p>

          <Link
            href="/practice"
            className="mt-7 inline-block rounded-xl bg-white px-7 py-3.5 font-semibold text-blue-700 shadow-lg hover:bg-blue-50"
          >
            Start Practice →
          </Link>
        </div>
      </section>
    </main>
  );
}
