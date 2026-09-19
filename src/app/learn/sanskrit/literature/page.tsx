import Link from "next/link";

const literatureTypes = [
  {
    title: "Vedas",
    icon: "📜",
    description:
      "Learn about the four Vedas and their importance in ancient Sanskrit literature.",
  },
  {
    title: "Upanishads",
    icon: "🕉️",
    description:
      "Explore philosophical ideas, knowledge and spiritual concepts found in the Upanishads.",
  },
  {
    title: "Ramayana",
    icon: "🏹",
    description:
      "Learn about Valmiki's Ramayana, its characters, events and important teachings.",
  },
  {
    title: "Mahabharata",
    icon: "⚔️",
    description:
      "Explore the great Sanskrit epic, its major characters and important events.",
  },
  {
    title: "Puranas",
    icon: "📚",
    description:
      "Understand the Puranic tradition and its stories, teachings and cultural importance.",
  },
  {
    title: "Classical Literature",
    icon: "🏛️",
    description:
      "Study famous Sanskrit poets, dramas, poems and classical works.",
  },
];

const authors = [
  {
    name: "Valmiki",
    work: "Ramayana",
    description:
      "Traditionally regarded as the author of the Ramayana, one of the great Sanskrit epics.",
  },
  {
    name: "Ved Vyasa",
    work: "Mahabharata",
    description:
      "Traditionally associated with the composition of the Mahabharata and many important Sanskrit works.",
  },
  {
    name: "Kalidasa",
    work: "Abhijnanashakuntalam",
    description:
      "One of the most celebrated classical Sanskrit poets and dramatists.",
  },
  {
    name: "Banabhatta",
    work: "Harshacharita",
    description:
      "A famous Sanskrit prose writer associated with classical Sanskrit literature.",
  },
  {
    name: "Bharavi",
    work: "Kiratarjuniya",
    description:
      "Known for his classical Sanskrit epic poem Kiratarjuniya.",
  },
  {
    name: "Magha",
    work: "Shishupalavadha",
    description:
      "A major Sanskrit poet known for the mahakavya Shishupalavadha.",
  },
];

const famousWorks = [
  ["रामायणम्", "वाल्मीकि", "Epic"],
  ["महाभारतम्", "वेदव्यास", "Epic"],
  ["अभिज्ञानशाकुन्तलम्", "कालिदास", "Drama"],
  ["मेघदूतम्", "कालिदास", "Poetry"],
  ["रघुवंशम्", "कालिदास", "Mahakavya"],
  ["कुमारसम्भवम्", "कालिदास", "Mahakavya"],
  ["किरातार्जुनीयम्", "भारवि", "Mahakavya"],
  ["शिशुपालवधम्", "माघ", "Mahakavya"],
];

const ramayanaCharacters = [
  ["रामः", "Rama", "Central hero of the Ramayana."],
  ["सीता", "Sita", "Rama's wife and an important central character."],
  ["लक्ष्मणः", "Lakshmana", "Rama's devoted brother and companion."],
  ["हनुमान्", "Hanuman", "Devoted helper of Rama and a symbol of courage."],
  ["रावणः", "Ravana", "King of Lanka and principal antagonist."],
  ["भरतः", "Bharata", "Rama's brother known for his devotion to Rama."],
];

const literatureFeatures = [
  {
    title: "Poetry",
    icon: "✒️",
    description:
      "Study Sanskrit poetry, metres, poetic expressions and famous verses.",
  },
  {
    title: "Drama",
    icon: "🎭",
    description:
      "Learn about Sanskrit drama and famous plays written by classical authors.",
  },
  {
    title: "Epics",
    icon: "📖",
    description:
      "Understand the major Sanskrit epics and their characters and stories.",
  },
  {
    title: "Prose",
    icon: "📝",
    description:
      "Explore Sanskrit prose works and the development of classical writing.",
  },
];

const keyIdeas = [
  "धर्मः — Dharma and righteous conduct",
  "सत्यम् — Truth",
  "अहिंसा — Non-violence",
  "कर्तव्यम् — Duty",
  "करुणा — Compassion",
  "विद्या — Knowledge",
  "नीतिः — Moral conduct",
  "भक्तिः — Devotion",
];

function SimpleTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200">
      <table className="w-full min-w-[650px] border-collapse">
        <thead>
          <tr className="bg-blue-50">
            {headers.map((header) => (
              <th
                key={header}
                className="border-b border-gray-200 px-4 py-4 text-left font-bold text-gray-900"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={`${row[0]}-${rowIndex}`}
              className="transition hover:bg-gray-50"
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={`${cell}-${cellIndex}`}
                  className={`border-b border-gray-100 px-4 py-4 ${
                    cellIndex === 0
                      ? "font-semibold text-blue-700"
                      : "text-gray-700"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function SanskritLiteraturePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
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
              🏛️
            </div>

            <div>
              <p className="font-semibold text-cyan-100">
                Sanskrit Language
              </p>

              <h1 className="mt-1 text-4xl font-extrabold text-white sm:text-5xl">
                Sanskrit Literature
              </h1>

              <p className="mt-3 max-w-2xl text-blue-50">
                Explore the great works, authors, epics, poetry, drama and
                ideas that form the rich tradition of Sanskrit literature.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Introduction to Sanskrit Literature
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-gray-700">
            Sanskrit literature has a long and diverse history. It includes
            sacred texts, philosophical works, epics, poetry, drama, grammar,
            scientific writing and many other forms of knowledge. Studying
            these works helps learners understand Sanskrit language as well
            as the ideas, stories and literary traditions associated with it.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {literatureFeatures.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-5 shadow-sm"
              >
                <div className="text-4xl">{item.icon}</div>

                <h3 className="mt-4 font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Major Areas of Sanskrit Literature
          </h2>

          <p className="mt-2 text-gray-600">
            Start with these important literary traditions.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {literatureTypes.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                  {item.icon}
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Famous Sanskrit Authors
            </h2>

            <p className="mt-2 text-gray-600">
              Learn about important authors and their well-known works.
            </p>
          </div>

          <span className="w-fit rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Classical Literature
          </span>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {authors.map((author) => (
            <div
              key={author.name}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                {author.name.charAt(0)}
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                {author.name}
              </h3>

              <p className="mt-1 font-semibold text-blue-600">
                {author.work}
              </p>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                {author.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Famous Sanskrit Works
          </h2>

          <p className="mt-2 text-gray-600">
            Important works every Sanskrit learner should know.
          </p>

          <div className="mt-8">
            <SimpleTable
              headers={["Work", "Author", "Type"]}
              rows={famousWorks}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-orange-100 bg-orange-50 p-7">
            <div className="text-5xl">🏹</div>

            <h2 className="mt-5 text-3xl font-extrabold text-gray-900">
              Ramayana
            </h2>

            <p className="mt-4 leading-8 text-gray-700">
              The Ramayana is one of the major Sanskrit epics. It tells the
              story of Rama and includes themes such as duty, devotion,
              courage, family relationships and righteous conduct.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {ramayanaCharacters.map((character) => (
                <div
                  key={character[0]}
                  className="rounded-xl bg-white p-4 shadow-sm"
                >
                  <p className="font-bold text-orange-700">
                    {character[0]}
                  </p>

                  <p className="mt-1 font-semibold text-gray-900">
                    {character[1]}
                  </p>

                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    {character[2]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-purple-100 bg-purple-50 p-7">
            <div className="text-5xl">⚔️</div>

            <h2 className="mt-5 text-3xl font-extrabold text-gray-900">
              Mahabharata
            </h2>

            <p className="mt-4 leading-8 text-gray-700">
              The Mahabharata is another major Sanskrit epic. It contains
              stories of the Kuru dynasty and includes philosophical and
              ethical discussions, including the Bhagavad Gita.
            </p>

            <div className="mt-7 rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="font-bold text-gray-900">
                Important themes
              </h3>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  "Dharma and duty",
                  "Truth and justice",
                  "Family relationships",
                  "Leadership",
                  "Courage",
                  "Consequences of actions",
                ].map((theme) => (
                  <div
                    key={theme}
                    className="rounded-xl bg-purple-50 px-4 py-3 text-sm font-medium text-gray-700"
                  >
                    ✓ {theme}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Important Literary Values
          </h2>

          <p className="mt-2 text-gray-600">
            Common ideas and values found throughout Sanskrit literature.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {keyIdeas.map((idea) => (
              <div
                key={idea}
                className="rounded-2xl border border-gray-200 bg-white p-5 text-center font-semibold shadow-sm"
              >
                {idea}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-blue-600 p-8 text-center shadow-xl sm:p-12">
          <div className="text-5xl">📚</div>

          <h2 className="mt-5 text-3xl font-extrabold text-white">
            Explore Sanskrit Literature
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
            Read about famous authors, understand major works and discover
            the stories and ideas that make Sanskrit literature important.
          </p>

          <Link
            href="/practice"
            className="mt-7 inline-block rounded-xl bg-white px-7 py-3.5 font-bold text-blue-700 shadow-lg transition hover:bg-blue-50"
          >
            Start Practice →
          </Link>
        </div>
      </section>

      <footer className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-bold">
                Rishi Infotech Learning Hub
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Learn subjects, practice concepts and build knowledge in
                one place.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Sanskrit</h3>

              <div className="mt-3 space-y-2 text-sm text-slate-400">
                <p>Grammar</p>
                <p>Shabd Roop</p>
                <p>Dhatu Roop</p>
                <p>Vocabulary</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold">Literature</h3>

              <div className="mt-3 space-y-2 text-sm text-slate-400">
                <p>Vedas</p>
                <p>Ramayana</p>
                <p>Mahabharata</p>
                <p>Classical Literature</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold">Quick Links</h3>

              <div className="mt-3 space-y-2 text-sm">
                <Link
                  href="/learn"
                  className="block text-slate-400 hover:text-white"
                >
                  Learning Hub
                </Link>

                <Link
                  href="/learn/sanskrit"
                  className="block text-slate-400 hover:text-white"
                >
                  Sanskrit
                </Link>

                <Link
                  href="/practice"
                  className="block text-slate-400 hover:text-white"
                >
                  Practice
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-700 pt-6 text-center text-sm text-slate-500">
            © 2026 Rishi Infotech Learning Hub. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
