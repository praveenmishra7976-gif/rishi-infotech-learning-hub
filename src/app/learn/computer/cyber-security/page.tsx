import Link from "next/link";

const securityTopics = [
  {
    icon: "🔐",
    title: "Strong Passwords",
    text: "Use long, unique passwords with a combination of letters, numbers and symbols. Avoid using easily guessed information.",
  },
  {
    icon: "🎣",
    title: "Phishing",
    text: "Phishing is an attempt to trick users into revealing passwords, financial information or other sensitive data.",
  },
  {
    icon: "🦠",
    title: "Malware",
    text: "Malware is malicious software designed to damage systems, steal information or perform unauthorized activities.",
  },
  {
    icon: "🛡️",
    title: "Antivirus",
    text: "Antivirus software helps detect, prevent and remove malicious software from computers.",
  },
  {
    icon: "🌐",
    title: "Safe Browsing",
    text: "Use trusted websites, check website addresses and avoid downloading files from unknown sources.",
  },
  {
    icon: "🔒",
    title: "Privacy",
    text: "Protect personal information and carefully control what information is shared online.",
  },
];

const threats = [
  ["🦠", "Virus", "A malicious program that can replicate and affect computer files or operations."],
  ["🐴", "Trojan", "Malicious software that appears to be legitimate software."],
  ["🪱", "Worm", "Malware that can spread automatically between computers or systems."],
  ["🎣", "Phishing", "A fraudulent attempt to obtain sensitive information by pretending to be trustworthy."],
  ["🔒", "Ransomware", "Malware that can restrict access to data and demand payment from victims."],
  ["👁️", "Spyware", "Software that secretly collects information about a user or system."],
];

const safetyRules = [
  "Use strong and unique passwords.",
  "Enable two-factor authentication whenever possible.",
  "Keep your operating system and applications updated.",
  "Do not open suspicious links or attachments.",
  "Download software only from trusted sources.",
  "Avoid sharing passwords and sensitive information.",
  "Use secure Wi-Fi networks whenever possible.",
  "Back up important files regularly.",
  "Check website addresses before entering sensitive information.",
  "Be careful when using public computers and networks.",
];

const importantPoints = [
  "Cyber security protects computers, networks, devices and information.",
  "A strong password should be difficult to guess.",
  "Two-factor authentication provides an additional security layer.",
  "Phishing attempts commonly use fake messages or websites.",
  "Malware includes viruses, worms, Trojans, ransomware and spyware.",
  "Antivirus software can help detect and remove malware.",
  "Software updates often contain important security fixes.",
  "Personal information should not be shared with unknown people or websites.",
  "Regular backups help protect important data.",
  "Safe browsing reduces the risk of online attacks.",
];

export default function CyberSecurityPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">

          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white shadow-lg">
              RI
            </div>

            <div>
              <h1 className="text-lg font-bold text-slate-900">
                Rishi Infotech
              </h1>
              <p className="text-xs font-medium text-blue-600">
                Learning Hub
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            <Link href="/" className="font-medium hover:text-blue-600">
              Home
            </Link>
            <Link href="/learn" className="font-medium text-blue-600">
              Learn
            </Link>
            <Link href="/practice" className="font-medium hover:text-blue-600">
              Practice
            </Link>
            <Link href="/ai-hub" className="font-medium hover:text-blue-600">
              AI Hub
            </Link>
            <Link href="/developer-hub" className="font-medium hover:text-blue-600">
              Developer
            </Link>
          </nav>

          <Link
            href="/contact"
            className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-blue-700"
          >
            Contact
          </Link>

        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-600 to-cyan-500">

        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-20">

          <Link
            href="/learn/computer"
            className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/20"
          >
            ← Computer Chapters
          </Link>

          <div className="mt-8 flex items-center gap-5">

            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-white text-5xl shadow-xl">
              🔐
            </div>

            <div>
              <p className="font-semibold text-blue-100">
                CHAPTER 08
              </p>

              <h2 className="text-3xl font-black text-white sm:text-5xl">
                Cyber Security
              </h2>
            </div>

          </div>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-blue-50">
            Learn how to protect computers, accounts, personal information
            and digital devices from common online threats.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <a
              href="#learn"
              className="rounded-xl bg-white px-7 py-3.5 text-center font-bold text-blue-700 shadow-xl hover:scale-105"
            >
              🛡️ Start Learning
            </a>

            <Link
              href="/practice/mcq"
              className="rounded-xl border-2 border-white/60 px-7 py-3.5 text-center font-bold text-white hover:bg-white hover:text-blue-700"
            >
              📝 Practice MCQs
            </Link>

          </div>

        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 text-sm lg:px-8">

          <Link href="/learn" className="text-blue-600 hover:underline">
            Learn
          </Link>

          <span className="mx-2 text-slate-400">/</span>

          <Link
            href="/learn/computer"
            className="text-blue-600 hover:underline"
          >
            Computer
          </Link>

          <span className="mx-2 text-slate-400">/</span>

          <span className="text-slate-500">
            Cyber Security
          </span>

        </div>
      </div>

      {/* CONTENT */}
      <section id="learn" className="py-16">

        <div className="mx-auto max-w-7xl px-4 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[1fr_320px]">

            <article>

              {/* INTRO */}
              <section>

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Chapter 08
                </p>

                <h2 className="mt-3 text-4xl font-black text-slate-900">
                  What is Cyber Security?
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Cyber security is the practice of protecting computers,
                  networks, software, devices and digital information from
                  unauthorized access, misuse, damage and online attacks.
                </p>

                <div className="mt-8 rounded-3xl bg-slate-900 p-8 text-white">

                  <div className="text-6xl">
                    🛡️
                  </div>

                  <h3 className="mt-5 text-2xl font-black">
                    Protect Your Digital World
                  </h3>

                  <p className="mt-3 leading-7 text-slate-300">
                    Good cyber security practices help keep your accounts,
                    devices and personal information safer.
                  </p>

                </div>

              </section>

              {/* TOPICS */}
              <section className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Key Concepts
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Cyber Security Basics
                </h2>

                <div className="mt-8 grid gap-5 md:grid-cols-2">

                  {securityTopics.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                    >

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                        {item.icon}
                      </div>

                      <h3 className="mt-5 text-xl font-black text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {item.text}
                      </p>

                    </div>
                  ))}

                </div>

              </section>

              {/* THREATS */}
              <section id="threats" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-red-600">
                  Online Threats
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Common Cyber Threats
                </h2>

                <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                  {threats.map(([icon, title, text]) => (
                    <div
                      key={title}
                      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                    >

                      <div className="text-4xl">
                        {icon}
                      </div>

                      <h3 className="mt-4 text-xl font-black text-slate-900">
                        {title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {text}
                      </p>

                    </div>
                  ))}

                </div>

              </section>

              {/* PASSWORDS */}
              <section id="passwords" className="mt-16 rounded-3xl bg-blue-50 p-8">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Account Security
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Strong Passwords
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  A strong password helps protect an account from unauthorized
                  access. Use a different password for important accounts and
                  avoid predictable information.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  {[
                    "Use long passwords",
                    "Use unique passwords",
                    "Avoid common words",
                    "Avoid sharing passwords",
                    "Use a password manager when appropriate",
                    "Enable two-factor authentication",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl bg-white p-4"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
                        ✓
                      </span>

                      <span className="text-sm font-semibold text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}

                </div>

              </section>

              {/* PHISHING */}
              <section id="phishing" className="mt-16 rounded-3xl bg-slate-900 p-8 text-white">

                <p className="font-bold uppercase tracking-widest text-cyan-400">
                  Stay Alert
                </p>

                <h2 className="mt-3 text-3xl font-black">
                  Understanding Phishing
                </h2>

                <p className="mt-5 leading-8 text-slate-300">
                  Phishing is a social engineering technique where attackers
                  use fake messages, websites or other communication to trick
                  people into revealing sensitive information.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">

                  {[
                    ["📧", "Fake Messages"],
                    ["🔗", "Suspicious Links"],
                    ["🔑", "Information Theft"],
                  ].map(([icon, title]) => (
                    <div
                      key={title}
                      className="rounded-2xl bg-white/5 p-5 text-center"
                    >
                      <div className="text-3xl">
                        {icon}
                      </div>
                      <h3 className="mt-3 font-black">
                        {title}
                      </h3>
                    </div>
                  ))}

                </div>

              </section>

              {/* SAFETY */}
              <section id="safety" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-green-600">
                  Online Safety
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Cyber Safety Rules
                </h2>

                <div className="mt-8 space-y-3">

                  {safetyRules.map((item, index) => (
                    <div
                      key={item}
                      className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4"
                    >

                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-black text-green-700">
                        {index + 1}
                      </span>

                      <p className="text-sm leading-6 text-slate-600">
                        {item}
                      </p>

                    </div>
                  ))}

                </div>

              </section>

              {/* IMPORTANT POINTS */}
              <section id="important-points" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Exam Revision
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Important Points
                </h2>

                <div className="mt-8 space-y-3">

                  {importantPoints.map((item, index) => (
                    <div
                      key={item}
                      className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4"
                    >

                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-black text-blue-600">
                        {index + 1}
                      </span>

                      <p className="text-sm leading-6 text-slate-600">
                        {item}
                      </p>

                    </div>
                  ))}

                </div>

              </section>

              {/* PRACTICE */}
              <section className="mt-16 rounded-3xl bg-gradient-to-br from-blue-700 to-cyan-500 p-8 text-white shadow-2xl md:p-10">

                <p className="font-bold uppercase tracking-widest text-blue-100">
                  Test Your Knowledge
                </p>

                <h2 className="mt-3 text-3xl font-black">
                  Ready for Cyber Security MCQs?
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-blue-50">
                  Test your understanding of passwords, malware, phishing,
                  privacy and online safety.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">

                  <Link
                    href="/practice/mcq"
                    className="rounded-xl bg-white px-7 py-3.5 text-center font-bold text-blue-700 shadow-lg hover:scale-105"
                  >
                    📝 Start MCQ
                  </Link>

                  <Link
                    href="/practice/mock-tests"
                    className="rounded-xl border-2 border-white/60 px-7 py-3.5 text-center font-bold text-white hover:bg-white hover:text-blue-700"
                  >
                    🎯 Mock Test
                  </Link>

                </div>

              </section>

            </article>

            {/* SIDEBAR */}
            <aside className="lg:sticky lg:top-24 lg:h-fit">

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

                <h3 className="text-lg font-black text-slate-900">
                  Chapter Contents
                </h3>

                <div className="mt-5 space-y-2">

                  {[
                    ["01", "Cyber Security Basics", "#learn"],
                    ["02", "Common Threats", "#threats"],
                    ["03", "Strong Passwords", "#passwords"],
                    ["04", "Phishing", "#phishing"],
                    ["05", "Cyber Safety Rules", "#safety"],
                    ["06", "Important Points", "#important-points"],
                  ].map(([number, title, href]) => (
                    <a
                      key={number}
                      href={href}
                      className="block rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <span className="mr-2 font-bold text-blue-600">
                        {number}.
                      </span>
                      {title}
                    </a>
                  ))}

                </div>

              </div>

              <div className="mt-5 rounded-3xl bg-blue-50 p-6">

                <h3 className="font-black text-blue-900">
                  Chapter 08
                </h3>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-blue-200">
                  <div className="h-full w-4/5 rounded-full bg-blue-600" />
                </div>

                <p className="mt-3 text-xs text-blue-800">
                  Learn the basics of protecting your digital world.
                </p>

              </div>

            </aside>

          </div>

        </div>
      </section>

      {/* NAVIGATION */}
      <section className="border-t border-slate-200 bg-slate-50 py-10">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-4 sm:flex-row lg:px-8">

          <Link
            href="/learn/computer/internet-networking"
            className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-center font-bold text-slate-700 hover:border-blue-300 hover:text-blue-600"
          >
            ← Previous: Internet & Networking
          </Link>

          <Link
            href="/learn/computer/digital-technology"
            className="rounded-xl bg-blue-600 px-6 py-3 text-center font-bold text-white hover:bg-blue-700"
          >
            Next: Digital Technology →
          </Link>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white">

        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            <div>
              <h2 className="text-xl font-bold">
                Rishi Infotech
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Learning, practice, AI tools and developer utilities
                in one place.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Learning</h3>

              <div className="mt-4 space-y-2 text-sm text-slate-400">
                <Link href="/learn" className="block hover:text-white">
                  All Subjects
                </Link>

                <Link
                  href="/learn/computer"
                  className="block hover:text-white"
                >
                  Computer
                </Link>

                <Link
                  href="/learn/physics"
                  className="block hover:text-white"
                >
                  Physics
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold">Practice</h3>

              <div className="mt-4 space-y-2 text-sm text-slate-400">
                <Link href="/practice" className="block hover:text-white">
                  Practice Center
                </Link>

                <Link
                  href="/practice/mcq"
                  className="block hover:text-white"
                >
                  MCQ Quiz
                </Link>

                <Link
                  href="/practice/mock-tests"
                  className="block hover:text-white"
                >
                  Mock Tests
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold">Tools</h3>

              <div className="mt-4 space-y-2 text-sm text-slate-400">
                <Link href="/ai-hub" className="block hover:text-white">
                  AI Hub
                </Link>

                <Link
                  href="/developer-hub"
                  className="block hover:text-white"
                >
                  Developer Hub
                </Link>

                <Link
                  href="/dictionary"
                  className="block hover:text-white"
                >
                  Dictionary
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