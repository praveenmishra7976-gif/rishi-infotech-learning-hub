import Link from "next/link";

const dhatus = [
  {
    title: "पठ् — पढ़ना",
    description: "Learn the present-tense forms of पठ् धातु.",
    href: "#path",
  },
  {
    title: "गम् — जाना",
    description: "Learn the important forms of गम् धातु.",
    href: "#gam",
  },
  {
    title: "भू — होना",
    description: "Practice the present-tense forms of भू धातु.",
    href: "#bhu",
  },
  {
    title: "कृ — करना",
    description: "Learn the commonly used forms of कृ धातु.",
    href: "#kri",
  },
  {
    title: "लिख् — लिखना",
    description: "Practice forms of लिख् धातु with examples.",
    href: "#likh",
  },
  {
    title: "दृश् — देखना",
    description: "Learn useful forms of दृश् धातु.",
    href: "#drish",
  },
];

const persons = [
  "प्रथम पुरुष",
  "मध्यम पुरुष",
  "उत्तम पुरुष",
];

const numbers = ["एकवचन", "द्विवचन", "बहुवचन"];

const pathForms = [
  ["पठति", "पठतः", "पठन्ति"],
  ["पठसि", "पठथः", "पठथ"],
  ["पठामि", "पठावः", "पठामः"],
];

const gamForms = [
  ["गच्छति", "गच्छतः", "गच्छन्ति"],
  ["गच्छसि", "गच्छथः", "गच्छथ"],
  ["गच्छामि", "गच्छावः", "गच्छामः"],
];

const bhuForms = [
  ["भवति", "भवतः", "भवन्ति"],
  ["भवसि", "भवथः", "भवथ"],
  ["भवामि", "भवावः", "भवामः"],
];

const kriForms = [
  ["करोति", "कुरुतः", "कुर्वन्ति"],
  ["करोषि", "कुरुथः", "कुरुथ"],
  ["करोमि", "कुर्वः", "कुर्मः"],
];

const likhForms = [
  ["लिखति", "लिखतः", "लिखन्ति"],
  ["लिखसि", "लिखथः", "लिखथ"],
  ["लिखामि", "लिखावः", "लिखामः"],
];

const drishForms = [
  ["पश्यति", "पश्यतः", "पश्यन्ति"],
  ["पश्यसि", "पश्यथः", "पश्यथ"],
  ["पश्यामि", "पश्यावः", "पश्यामः"],
];

function DhatuTable({
  id,
  title,
  meaning,
  forms,
}: {
  id: string;
  title: string;
  meaning: string;
  forms: string[][];
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7"
    >
      <div className="mb-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900">
              {title}
            </h2>

            <p className="mt-1 text-sm font-medium text-blue-600">
              अर्थ — {meaning}
            </p>
          </div>

          <span className="w-fit rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            लट् लकार
          </span>
        </div>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-gray-200">
        <table className="w-full min-w-[680px] border-collapse">
          <thead>
            <tr className="bg-blue-50">
              <th className="border-b border-gray-200 px-4 py-4 text-left font-bold">
                पुरुष
              </th>

              {numbers.map((number) => (
                <th
                  key={number}
                  className="border-b border-gray-200 px-4 py-4 text-left font-bold"
                >
                  {number}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {forms.map((row, index) => (
              <tr key={persons[index]} className="hover:bg-gray-50">
                <td className="border-b border-gray-100 px-4 py-4 font-semibold text-blue-700">
                  {persons[index]}
                </td>

                {row.map((form, formIndex) => (
                  <td
                    key={`${form}-${formIndex}`}
                    className="border-b border-gray-100 px-4 py-4 text-gray-700"
                  >
                    {form}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

const examples = [
  {
    sanskrit: "बालकः पुस्तकं पठति।",
    meaning: "The boy reads a book.",
  },
  {
    sanskrit: "रामः विद्यालयं गच्छति।",
    meaning: "Rama goes to school.",
  },
  {
    sanskrit: "सः सुखी भवति।",
    meaning: "He becomes happy.",
  },
  {
    sanskrit: "सीता कार्यं करोति।",
    meaning: "Sita does the work.",
  },
  {
    sanskrit: "छात्रः पत्रं लिखति।",
    meaning: "The student writes a letter.",
  },
  {
    sanskrit: "बालकः चित्रं पश्यति।",
    meaning: "The boy sees a picture.",
  },
];

export default function DhatuRoopPage() {
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
              ✍️
            </div>

            <div>
              <p className="font-semibold text-cyan-100">
                Sanskrit Grammar
              </p>

              <h1 className="mt-1 text-4xl font-extrabold text-white sm:text-5xl">
                Dhatu Roop
              </h1>

              <p className="mt-3 max-w-2xl text-blue-50">
                Learn important Sanskrit verb forms with पुरुष, वचन,
                लकार and practical sentence examples.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
          <h2 className="text-2xl font-extrabold text-gray-900">
            What are Dhatu Roop?
          </h2>

          <p className="mt-3 leading-7 text-gray-700">
            संस्कृत में क्रिया के मूल रूप को धातु कहते हैं। पुरुष, वचन
            और लकार के अनुसार धातु के अलग-अलग रूप बनते हैं। इन्हें
            धातु रूप कहा जाता है।
          </p>

          <div className="mt-7 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="text-3xl">👤</div>
              <h3 className="mt-3 font-bold">पुरुष</h3>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                प्रथम, मध्यम और उत्तम पुरुष।
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="text-3xl">🔢</div>
              <h3 className="mt-3 font-bold">वचन</h3>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                एकवचन, द्विवचन और बहुवचन।
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="text-3xl">⏱️</div>
              <h3 className="mt-3 font-bold">लकार</h3>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                समय और भाव के अनुसार क्रिया के रूप बदलते हैं।
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Important Dhatu Roop
          </h2>

          <p className="mt-2 text-gray-600">
            Choose a धातु to jump to its complete table.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {dhatus.map((dhatu) => (
              <a
                key={dhatu.title}
                href={dhatu.href}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-xl bg-blue-50 px-3 py-2 text-2xl">
                    ✍️
                  </span>

                  <span className="text-sm font-semibold text-blue-600">
                    View →
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  {dhatu.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {dhatu.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-8 px-4 py-16 sm:px-6 lg:px-8">
        <DhatuTable
          id="path"
          title="पठ् धातु रूप"
          meaning="पढ़ना"
          forms={pathForms}
        />

        <DhatuTable
          id="gam"
          title="गम् धातु रूप"
          meaning="जाना"
          forms={gamForms}
        />

        <DhatuTable
          id="bhu"
          title="भू धातु रूप"
          meaning="होना"
          forms={bhuForms}
        />

        <DhatuTable
          id="kri"
          title="कृ धातु रूप"
          meaning="करना"
          forms={kriForms}
        />

        <DhatuTable
          id="likh"
          title="लिख् धातु रूप"
          meaning="लिखना"
          forms={likhForms}
        />

        <DhatuTable
          id="drish"
          title="दृश् धातु रूप"
          meaning="देखना"
          forms={drishForms}
        />
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Dhatu Roop in Sentences
            </h2>

            <p className="mt-2 text-gray-600">
              Learn how these verb forms are used in simple Sanskrit
              sentences.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {examples.map((example) => (
              <div
                key={example.sanskrit}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <p className="text-xl font-bold text-blue-700">
                  {example.sanskrit}
                </p>

                <div className="mt-4 border-t border-gray-100 pt-4">
                  <p className="text-sm text-gray-600">
                    English: {example.meaning}
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
            Practice Dhatu Roop
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
            पहले धातु का अर्थ समझें, फिर उसके एकवचन, द्विवचन और
            बहुवचन रूपों का अभ्यास करें।
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
                Learn Sanskrit, science, mathematics, computer and other
                useful subjects in one place.
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
              <h3 className="font-bold">Learning</h3>

              <div className="mt-3 space-y-2 text-sm text-slate-400">
                <p>Notes</p>
                <p>Practice</p>
                <p>MCQ</p>
                <p>Study Tools</p>
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
