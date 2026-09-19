import Link from "next/link";

const basicWords = [
  ["अहम्", "मैं", "I"],
  ["त्वम्", "तुम", "You"],
  ["सः", "वह", "He"],
  ["सा", "वह", "She"],
  ["वयम्", "हम", "We"],
  ["ते", "वे", "They"],
  ["किम्", "क्या", "What"],
  ["कुत्र", "कहाँ", "Where"],
  ["कदा", "कब", "When"],
  ["कथम्", "कैसे", "How"],
  ["कः", "कौन", "Who"],
  ["किमर्थम्", "क्यों", "Why"],
];

const sentences = [
  {
    sanskrit: "अहं छात्रः अस्मि।",
    hindi: "मैं विद्यार्थी हूँ।",
    english: "I am a student.",
  },
  {
    sanskrit: "सा बालिका अस्ति।",
    hindi: "वह लड़की है।",
    english: "She is a girl.",
  },
  {
    sanskrit: "सः विद्यालयं गच्छति।",
    hindi: "वह विद्यालय जाता है।",
    english: "He goes to school.",
  },
  {
    sanskrit: "रामः पुस्तकं पठति।",
    hindi: "राम पुस्तक पढ़ता है।",
    english: "Rama reads a book.",
  },
  {
    sanskrit: "सीता जलं पिबति।",
    hindi: "सीता पानी पीती है।",
    english: "Sita drinks water.",
  },
  {
    sanskrit: "बालकाः क्रीडन्ति।",
    hindi: "बच्चे खेलते हैं।",
    english: "The children play.",
  },
  {
    sanskrit: "माता भोजनं पचति।",
    hindi: "माँ भोजन पकाती है।",
    english: "Mother cooks food.",
  },
  {
    sanskrit: "पिता कार्यालयं गच्छति।",
    hindi: "पिता कार्यालय जाते हैं।",
    english: "Father goes to the office.",
  },
];

const hindiToSanskrit = [
  ["मैं विद्यार्थी हूँ।", "अहं छात्रः अस्मि।"],
  ["वह विद्यालय जाता है।", "सः विद्यालयं गच्छति।"],
  ["सीता पुस्तक पढ़ती है।", "सीता पुस्तकं पठति।"],
  ["राम फल खाता है।", "रामः फलं खादति।"],
  ["बालक खेलता है।", "बालकः क्रीडति।"],
  ["माता जल पीती है।", "माता जलं पिबति।"],
  ["पक्षी उड़ता है।", "पक्षी उड्डयति।"],
  ["सूर्य प्रकाश देता है।", "सूर्यः प्रकाशं ददाति।"],
];

const englishToSanskrit = [
  ["I read a book.", "अहं पुस्तकं पठामि।"],
  ["The boy goes to school.", "बालकः विद्यालयं गच्छति।"],
  ["The girl drinks water.", "बालिका जलं पिबति।"],
  ["Rama eats fruit.", "रामः फलं खादति।"],
  ["The teacher teaches.", "अध्यापकः पाठयति।"],
  ["The children play.", "बालकाः क्रीडन्ति।"],
];

const rules = [
  {
    title: "Identify the subject",
    icon: "👤",
    description:
      "पहले यह पहचानें कि वाक्य में कौन काम कर रहा है। Subject के अनुसार क्रिया का रूप बदल सकता है।",
  },
  {
    title: "Find the verb",
    icon: "✍️",
    description:
      "वाक्य में क्रिया को पहचानें। जैसे पठति = पढ़ता है, गच्छति = जाता है और पिबति = पीता है।",
  },
  {
    title: "Understand the meaning",
    icon: "🧠",
    description:
      "हर शब्द का अर्थ समझकर पूरे वाक्य का सही अर्थ निकालें। केवल शब्दों का अलग-अलग अनुवाद न करें।",
  },
  {
    title: "Check the case",
    icon: "📚",
    description:
      "संज्ञा के विभक्ति रूप पर ध्यान दें। इससे वाक्य में शब्दों के बीच संबंध समझने में सहायता मिलती है।",
  },
];

const practice = [
  {
    question: "अहं पुस्तकं पठामि।",
    answer: "मैं पुस्तक पढ़ता/पढ़ती हूँ।",
  },
  {
    question: "बालिका विद्यालयं गच्छति।",
    answer: "लड़की विद्यालय जाती है।",
  },
  {
    question: "सः जलं पिबति।",
    answer: "वह पानी पीता है।",
  },
  {
    question: "वयं संस्कृतं पठामः।",
    answer: "हम संस्कृत पढ़ते हैं।",
  },
  {
    question: "ते उद्याने क्रीडन्ति।",
    answer: "वे बगीचे में खेलते हैं।",
  },
  {
    question: "गुरुः पाठं पाठयति।",
    answer: "शिक्षक पाठ पढ़ाते हैं।",
  },
];

function Table({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200">
      <table className="w-full min-w-[600px] border-collapse">
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
          {rows.map((row, index) => (
            <tr
              key={`${row[0]}-${index}`}
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

export default function SanskritTranslationPage() {
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
              🌐
            </div>

            <div>
              <p className="font-semibold text-cyan-100">
                Sanskrit Language
              </p>

              <h1 className="mt-1 text-4xl font-extrabold text-white sm:text-5xl">
                Sanskrit Translation
              </h1>

              <p className="mt-3 max-w-2xl text-blue-50">
                Learn Sanskrit to Hindi and Sanskrit to English translation
                with useful words, sentences and simple examples.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Learn Sanskrit Translation
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-gray-700">
            Sanskrit translation becomes easier when you understand the
            subject, verb, object, vocabulary and sentence structure.
            Start with simple sentences and gradually move toward longer
            sentences.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {rules.map((rule) => (
              <div
                key={rule.title}
                className="rounded-2xl bg-white p-5 shadow-sm"
              >
                <div className="text-3xl">{rule.icon}</div>

                <h3 className="mt-4 font-bold text-gray-900">
                  {rule.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {rule.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Important Translation Words
          </h2>

          <p className="mt-2 text-gray-600">
            Learn common words before translating complete sentences.
          </p>

          <div className="mt-8">
            <Table
              headers={["Sanskrit", "Hindi", "English"]}
              rows={basicWords}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Sanskrit → Hindi → English
        </h2>

        <p className="mt-2 text-gray-600">
          Practice understanding the same sentence in different languages.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {sentences.map((sentence) => (
            <div
              key={sentence.sanskrit}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <p className="text-xl font-bold text-blue-700">
                {sentence.sanskrit}
              </p>

              <div className="mt-5 space-y-2">
                <p className="text-gray-700">
                  <span className="font-bold">हिन्दी:</span>{" "}
                  {sentence.hindi}
                </p>

                <p className="text-sm text-gray-500">
                  <span className="font-bold">English:</span>{" "}
                  {sentence.english}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Hindi → Sanskrit Translation
          </h2>

          <p className="mt-2 text-gray-600">
            Read the Hindi sentence and learn its Sanskrit form.
          </p>

          <div className="mt-8">
            <Table
              headers={["Hindi Sentence", "Sanskrit Translation"]}
              rows={hindiToSanskrit}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">
          English → Sanskrit Translation
        </h2>

        <p className="mt-2 text-gray-600">
          Practice converting simple English sentences into Sanskrit.
        </p>

        <div className="mt-8">
          <Table
            headers={["English Sentence", "Sanskrit Translation"]}
            rows={englishToSanskrit}
          />
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Translation Practice
              </h2>

              <p className="mt-2 text-gray-600">
                Try translating these Sanskrit sentences yourself.
              </p>
            </div>

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Beginner Level
            </span>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {practice.map((item, index) => (
              <div
                key={item.question}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-blue-600">
                    Question {index + 1}
                  </span>

                  <span className="text-xl">❓</span>
                </div>

                <p className="mt-5 text-xl font-bold text-gray-900">
                  {item.question}
                </p>

                <div className="mt-5 rounded-xl bg-green-50 p-4">
                  <p className="text-sm font-semibold text-green-700">
                    Answer
                  </p>

                  <p className="mt-1 text-gray-700">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-blue-600 p-8 text-center shadow-xl sm:p-12">
          <div className="text-5xl">🎯</div>

          <h2 className="mt-5 text-3xl font-extrabold text-white">
            Practice Translation Every Day
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
            Start with short sentences, learn common vocabulary and
            gradually practice more difficult Sanskrit translations.
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
                Learn subjects, practice concepts and build knowledge
                in one place.
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
              <h3 className="font-bold">Translation</h3>

              <div className="mt-3 space-y-2 text-sm text-slate-400">
                <p>Sanskrit → Hindi</p>
                <p>Sanskrit → English</p>
                <p>Hindi → Sanskrit</p>
                <p>English → Sanskrit</p>
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
