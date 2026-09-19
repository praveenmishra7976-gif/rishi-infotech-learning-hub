import Link from "next/link";

const shabdRoop = [
  {
    title: "राम शब्द रूप",
    subtitle: "पुल्लिङ्ग • अकारान्त",
    description: "Learn the complete declension of राम in all three numbers and seven cases.",
    href: "#ram",
  },
  {
    title: "बालक शब्द रूप",
    subtitle: "पुल्लिङ्ग • अकारान्त",
    description: "Practice बालक शब्द रूप with singular, dual and plural forms.",
    href: "#balak",
  },
  {
    title: "फल शब्द रूप",
    subtitle: "नपुंसकलिङ्ग • अकारान्त",
    description: "Learn the important neuter noun declension of फल.",
    href: "#phal",
  },
  {
    title: "लता शब्द रूप",
    subtitle: "स्त्रीलिङ्ग • आकारान्त",
    description: "Study the feminine noun form लता and its विभक्तियाँ.",
    href: "#lata",
  },
  {
    title: "नदी शब्द रूप",
    subtitle: "स्त्रीलिङ्ग • ईकारान्त",
    description: "Practice the important feminine noun नदी.",
    href: "#nadi",
  },
  {
    title: "मुनि शब्द रूप",
    subtitle: "पुल्लिङ्ग • इकारान्त",
    description: "Learn the इकारान्त masculine noun मुनि.",
    href: "#muni",
  },
];

const cases = [
  "प्रथमा",
  "द्वितीया",
  "तृतीया",
  "चतुर्थी",
  "पञ्चमी",
  "षष्ठी",
  "सप्तमी",
  "सम्बोधन",
];

const ram = [
  ["रामः", "रामौ", "रामाः"],
  ["रामम्", "रामौ", "रामान्"],
  ["रामेण", "रामाभ्याम्", "रामैः"],
  ["रामाय", "रामाभ्याम्", "रामेभ्यः"],
  ["रामात्", "रामाभ्याम्", "रामेभ्यः"],
  ["रामस्य", "रामयोः", "रामाणाम्"],
  ["रामे", "रामयोः", "रामेषु"],
  ["हे राम", "हे रामौ", "हे रामाः"],
];

const balak = [
  ["बालकः", "बालकौ", "बालकाः"],
  ["बालकम्", "बालकौ", "बालकान्"],
  ["बालकेन", "बालकाभ्याम्", "बालकैः"],
  ["बालकाय", "बालकाभ्याम्", "बालकेभ्यः"],
  ["बालकात्", "बालकाभ्याम्", "बालकेभ्यः"],
  ["बालकस्य", "बालकयोः", "बालकानाम्"],
  ["बालके", "बालकयोः", "बालकेषु"],
  ["हे बालक", "हे बालकौ", "हे बालकाः"],
];

const phal = [
  ["फलम्", "फले", "फलानि"],
  ["फलम्", "फले", "फलानि"],
  ["फलेन", "फलाभ्याम्", "फलैः"],
  ["फलाय", "फलाभ्याम्", "फलेभ्यः"],
  ["फलात्", "फलाभ्याम्", "फलेभ्यः"],
  ["फलस्य", "फलयोः", "फलानाम्"],
  ["फले", "फलयोः", "फलेषु"],
  ["हे फल", "हे फले", "हे फलानि"],
];

const lata = [
  ["लता", "लते", "लताः"],
  ["लताम्", "लते", "लताः"],
  ["लतया", "लताभ्याम्", "लताभिः"],
  ["लतायै", "लताभ्याम्", "लताभ्यः"],
  ["लतायाः", "लताभ्याम्", "लताभ्यः"],
  ["लतायाः", "लतयोः", "लतानाम्"],
  ["लतायाम्", "लतयोः", "लतासु"],
  ["हे लते", "हे लते", "हे लताः"],
];

const nadi = [
  ["नदी", "नद्यौ", "नद्यः"],
  ["नदीम्", "नद्यौ", "नदीः"],
  ["नद्या", "नदीभ्याम्", "नदीभिः"],
  ["नद्यै", "नदीभ्याम्", "नदीभ्यः"],
  ["नद्याः", "नदीभ्याम्", "नदीभ्यः"],
  ["नद्याः", "नद्योः", "नदीनाम्"],
  ["नद्याम्", "नद्योः", "नदीषु"],
  ["हे नदि", "हे नद्यौ", "हे नद्यः"],
];

const muni = [
  ["मुनिः", "मुनी", "मुनयः"],
  ["मुनिम्", "मुनी", "मुनीन्"],
  ["मुनिना", "मुनिभ्याम्", "मुनिभिः"],
  ["मुनये", "मुनिभ्याम्", "मुनिभ्यः"],
  ["मुनेः", "मुनिभ्याम्", "मुनिभ्यः"],
  ["मुनेः", "मुन्योः", "मुनीनाम्"],
  ["मुनौ", "मुन्योः", "मुनिषु"],
  ["हे मुने", "हे मुनी", "हे मुनयः"],
];

function RoopTable({
  id,
  title,
  data,
}: {
  id: string;
  title: string;
  data: string[][];
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-extrabold text-gray-900">{title}</h2>
        <p className="mt-1 text-sm text-gray-500">
          एकवचन • द्विवचन • बहुवचन
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-gray-200">
        <table className="w-full min-w-[680px] border-collapse text-left">
          <thead>
            <tr className="bg-blue-50">
              <th className="border-b border-gray-200 px-4 py-4 font-bold text-gray-900">
                विभक्ति
              </th>
              <th className="border-b border-gray-200 px-4 py-4 font-bold text-gray-900">
                एकवचन
              </th>
              <th className="border-b border-gray-200 px-4 py-4 font-bold text-gray-900">
                द्विवचन
              </th>
              <th className="border-b border-gray-200 px-4 py-4 font-bold text-gray-900">
                बहुवचन
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((row, index) => (
              <tr
                key={cases[index]}
                className="transition hover:bg-gray-50"
              >
                <td className="border-b border-gray-100 px-4 py-4 font-semibold text-blue-700">
                  {cases[index]}
                </td>

                {row.map((value, valueIndex) => (
                  <td
                    key={`${value}-${valueIndex}`}
                    className="border-b border-gray-100 px-4 py-4 text-gray-700"
                  >
                    {value}
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

export default function ShabdRoopPage() {
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
              📝
            </div>

            <div>
              <p className="font-semibold text-cyan-100">
                Sanskrit Grammar
              </p>

              <h1 className="mt-1 text-4xl font-extrabold text-white sm:text-5xl">
                Shabd Roop
              </h1>

              <p className="mt-3 max-w-2xl text-blue-50">
                Learn important Sanskrit noun forms with विभक्ति,
                एकवचन, द्विवचन and बहुवचन in an easy table format.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-2xl font-bold text-gray-900">
            What are Shabd Roop?
          </h2>

          <p className="mt-3 leading-7 text-gray-700">
            संस्कृत में संज्ञा या सर्वनाम शब्दों के वचन और विभक्ति के
            अनुसार बदलने वाले रूपों को शब्द रूप कहा जाता है। शब्द रूप
            सीखने से संस्कृत वाक्यों को पढ़ना, समझना और बनाना आसान होता है।
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="text-3xl">1️⃣</div>
              <h3 className="mt-3 font-bold">एकवचन</h3>
              <p className="mt-1 text-sm text-gray-600">
                एक व्यक्ति या वस्तु के लिए।
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="text-3xl">2️⃣</div>
              <h3 className="mt-3 font-bold">द्विवचन</h3>
              <p className="mt-1 text-sm text-gray-600">
                दो व्यक्ति या वस्तुओं के लिए।
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="text-3xl">3️⃣</div>
              <h3 className="mt-3 font-bold">बहुवचन</h3>
              <p className="mt-1 text-sm text-gray-600">
                दो से अधिक व्यक्ति या वस्तुओं के लिए।
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Important Shabd Roop
          </h2>

          <p className="mt-2 text-gray-600">
            Select a word to jump to its complete रूप table.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {shabdRoop.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-xl bg-blue-50 px-3 py-2 text-2xl">
                    📝
                  </span>
                  <span className="text-sm font-semibold text-blue-600">
                    View →
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm font-medium text-blue-600">
                  {item.subtitle}
                </p>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-8 px-4 py-16 sm:px-6 lg:px-8">
        <RoopTable id="ram" title="राम शब्द रूप" data={ram} />
        <RoopTable id="balak" title="बालक शब्द रूप" data={balak} />
        <RoopTable id="phal" title="फल शब्द रूप" data={phal} />
        <RoopTable id="lata" title="लता शब्द रूप" data={lata} />
        <RoopTable id="nadi" title="नदी शब्द रूप" data={nadi} />
        <RoopTable id="muni" title="मुनि शब्द रूप" data={muni} />
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-blue-600 p-8 text-center shadow-xl sm:p-12">
            <div className="text-5xl">🎯</div>

            <h2 className="mt-5 text-3xl font-extrabold text-white">
              Practice Shabd Roop
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
              नियमित अभ्यास करें और संस्कृत के शब्द रूपों को आसानी से
              याद करें। पहले एकवचन, फिर द्विवचन और अंत में बहुवचन का
              अभ्यास करें।
            </p>

            <Link
              href="/practice"
              className="mt-7 inline-block rounded-xl bg-white px-7 py-3.5 font-bold text-blue-700 shadow-lg transition hover:bg-blue-50"
            >
              Start Practice →
            </Link>
          </div>
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
