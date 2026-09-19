import Link from "next/link";

const categories = [
  {
    title: "People & Relations",
    icon: "👨‍👩‍👧",
    words: [
      ["जनः", "व्यक्ति", "Person"],
      ["माता", "माँ", "Mother"],
      ["पिता", "पिता", "Father"],
      ["भ्राता", "भाई", "Brother"],
      ["भगिनी", "बहन", "Sister"],
      ["मित्रम्", "मित्र", "Friend"],
    ],
  },
  {
    title: "Nature",
    icon: "🌳",
    words: [
      ["सूर्यः", "सूरज", "Sun"],
      ["चन्द्रः", "चाँद", "Moon"],
      ["वृक्षः", "पेड़", "Tree"],
      ["पुष्पम्", "फूल", "Flower"],
      ["नदी", "नदी", "River"],
      ["पर्वतः", "पहाड़", "Mountain"],
    ],
  },
  {
    title: "Animals",
    icon: "🐘",
    words: [
      ["गजः", "हाथी", "Elephant"],
      ["अश्वः", "घोड़ा", "Horse"],
      ["सिंहः", "शेर", "Lion"],
      ["व्याघ्रः", "बाघ", "Tiger"],
      ["गौः", "गाय", "Cow"],
      ["श्वानः", "कुत्ता", "Dog"],
    ],
  },
  {
    title: "Common Objects",
    icon: "📚",
    words: [
      ["पुस्तकम्", "किताब", "Book"],
      ["लेखनी", "कलम", "Pen"],
      ["गृहम्", "घर", "House"],
      ["द्वारम्", "दरवाज़ा", "Door"],
      ["वस्त्रम्", "कपड़ा", "Cloth"],
      ["आसनम्", "आसन", "Seat"],
    ],
  },
];

const commonWords = [
  ["जलम्", "जल / पानी", "Water"],
  ["अन्नम्", "भोजन", "Food"],
  ["दुग्धम्", "दूध", "Milk"],
  ["फलम्", "फल", "Fruit"],
  ["क्षीरम्", "दूध", "Milk"],
  ["गृहम्", "घर", "House"],
  ["विद्यालयः", "विद्यालय", "School"],
  ["अध्यापकः", "शिक्षक", "Teacher"],
  ["छात्रः", "विद्यार्थी", "Student"],
  ["पुस्तकम्", "पुस्तक", "Book"],
  ["मार्गः", "रास्ता", "Road"],
  ["नगरम्", "शहर", "City"],
];

const adjectives = [
  ["सुन्दरः", "सुंदर", "Beautiful"],
  ["बृहत्", "बड़ा", "Big"],
  ["लघु", "छोटा", "Small"],
  ["शीघ्रम्", "तेज़", "Fast"],
  ["मन्दम्", "धीरे", "Slow"],
  ["नवीनः", "नया", "New"],
  ["पुरातनः", "पुराना", "Old"],
  ["शुभः", "अच्छा / शुभ", "Good / Auspicious"],
];

const verbs = [
  ["पठति", "पढ़ता है", "Reads"],
  ["लिखति", "लिखता है", "Writes"],
  ["गच्छति", "जाता है", "Goes"],
  ["आगच्छति", "आता है", "Comes"],
  ["खादति", "खाता है", "Eats"],
  ["पिबति", "पीता है", "Drinks"],
  ["करोति", "करता है", "Does"],
  ["पश्यति", "देखता है", "Sees"],
  ["वदति", "बोलता है", "Speaks"],
  ["हसति", "हँसता है", "Laughs"],
];

const examples = [
  {
    sanskrit: "बालकः विद्यालयं गच्छति।",
    hindi: "बालक विद्यालय जाता है।",
    english: "The boy goes to school.",
  },
  {
    sanskrit: "छात्रः पुस्तकं पठति।",
    hindi: "विद्यार्थी पुस्तक पढ़ता है।",
    english: "The student reads a book.",
  },
  {
    sanskrit: "माता भोजनं पचति।",
    hindi: "माँ भोजन पकाती है।",
    english: "Mother cooks food.",
  },
  {
    sanskrit: "सूर्यः प्रकाशं ददाति।",
    hindi: "सूर्य प्रकाश देता है।",
    english: "The sun gives light.",
  },
  {
    sanskrit: "बालिका पुष्पं पश्यति।",
    hindi: "लड़की फूल देखती है।",
    english: "The girl sees a flower.",
  },
  {
    sanskrit: "मित्रं सत्यं वदति।",
    hindi: "मित्र सत्य बोलता है।",
    english: "The friend speaks the truth.",
  },
];

function WordTable({
  words,
}: {
  words: string[][];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200">
      <table className="w-full min-w-[620px] border-collapse">
        <thead>
          <tr className="bg-blue-50">
            <th className="border-b border-gray-200 px-4 py-4 text-left font-bold">
              संस्कृत
            </th>
            <th className="border-b border-gray-200 px-4 py-4 text-left font-bold">
              हिन्दी
            </th>
            <th className="border-b border-gray-200 px-4 py-4 text-left font-bold">
              English
            </th>
          </tr>
        </thead>

        <tbody>
          {words.map((word, index) => (
            <tr
              key={`${word[0]}-${index}`}
              className="transition hover:bg-gray-50"
            >
              <td className="border-b border-gray-100 px-4 py-4 text-lg font-bold text-blue-700">
                {word[0]}
              </td>

              <td className="border-b border-gray-100 px-4 py-4 text-gray-700">
                {word[1]}
              </td>

              <td className="border-b border-gray-100 px-4 py-4 text-gray-600">
                {word[2]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function SanskritVocabularyPage() {
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
              📚
            </div>

            <div>
              <p className="font-semibold text-cyan-100">
                Sanskrit Language
              </p>

              <h1 className="mt-1 text-4xl font-extrabold text-white sm:text-5xl">
                Sanskrit Vocabulary
              </h1>

              <p className="mt-3 max-w-2xl text-blue-50">
                Build your Sanskrit vocabulary with useful words,
                Hindi meanings, English meanings and simple examples.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
          <h2 className="text-2xl font-extrabold text-gray-900">
            Learn Sanskrit Words Easily
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-gray-700">
            Vocabulary is an important part of learning Sanskrit.
            Learn words by category and revise their Sanskrit, Hindi
            and English meanings regularly.
          </p>

          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="text-3xl">📖</div>
              <h3 className="mt-3 font-bold">Read</h3>
              <p className="mt-1 text-sm text-gray-600">
                Read the Sanskrit word clearly.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="text-3xl">🧠</div>
              <h3 className="mt-3 font-bold">Remember</h3>
              <p className="mt-1 text-sm text-gray-600">
                Connect the word with its meaning.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="text-3xl">✍️</div>
              <h3 className="mt-3 font-bold">Write</h3>
              <p className="mt-1 text-sm text-gray-600">
                Write new words while revising.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="text-3xl">🗣️</div>
              <h3 className="mt-3 font-bold">Use</h3>
              <p className="mt-1 text-sm text-gray-600">
                Use words in simple sentences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Vocabulary Categories
          </h2>

          <p className="mt-2 text-gray-600">
            Start with common words from everyday topics.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {categories.map((category) => (
              <div
                key={category.title}
                className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                    {category.icon}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {category.title}
                    </h3>

                    <p className="text-sm text-gray-500">
                      Useful Sanskrit words
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <WordTable words={category.words} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Common Sanskrit Words
          </h2>

          <p className="mt-2 text-gray-600">
            Frequently used words for beginners.
          </p>
        </div>

        <div className="mt-8">
          <WordTable words={commonWords} />
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Useful Adjectives
          </h2>

          <p className="mt-2 text-gray-600">
            Learn words that describe people, objects and situations.
          </p>

          <div className="mt-8">
            <WordTable words={adjectives} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Common Verbs
        </h2>

        <p className="mt-2 text-gray-600">
          These verbs are useful for creating simple Sanskrit sentences.
        </p>

        <div className="mt-8">
          <WordTable words={verbs} />
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Vocabulary in Sentences
          </h2>

          <p className="mt-2 text-gray-600">
            See how vocabulary can be used in everyday Sanskrit.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {examples.map((example) => (
              <div
                key={example.sanskrit}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <p className="text-xl font-bold text-blue-700">
                  {example.sanskrit}
                </p>

                <p className="mt-4 text-gray-700">
                  <span className="font-semibold">हिन्दी:</span>{" "}
                  {example.hindi}
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  <span className="font-semibold">English:</span>{" "}
                  {example.english}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-blue-600 p-8 text-center shadow-xl sm:p-12">
          <div className="text-5xl">🎯</div>

          <h2 className="mt-5 text-3xl font-extrabold text-white">
            Improve Your Sanskrit Vocabulary
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
            Learn a few new words every day, revise them regularly and
            use them in simple sentences.
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
                Learn useful subjects, practice concepts and build
                knowledge in one place.
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
              <h3 className="font-bold">Resources</h3>

              <div className="mt-3 space-y-2 text-sm text-slate-400">
                <p>Notes</p>
                <p>Examples</p>
                <p>Practice</p>
                <p>Revision</p>
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
