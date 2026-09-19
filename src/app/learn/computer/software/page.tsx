import Link from "next/link";

const softwareTypes = [
  {
    icon: "⚙️",
    title: "System Software",
    description:
      "System software manages computer hardware and provides a platform for other software to operate.",
    examples: ["Operating Systems", "Device Drivers", "System Utilities"],
  },
  {
    icon: "📱",
    title: "Application Software",
    description:
      "Application software is designed to help users perform specific tasks such as writing, calculation, communication and entertainment.",
    examples: ["Word Processors", "Web Browsers", "Media Players"],
  },
  {
    icon: "🛠️",
    title: "Utility Software",
    description:
      "Utility software helps maintain, protect, manage and optimize a computer system.",
    examples: ["Antivirus", "Backup Tools", "Disk Utilities"],
  },
  {
    icon: "💻",
    title: "Programming Software",
    description:
      "Programming software provides tools that developers use to create, test and maintain computer programs.",
    examples: ["Compilers", "Code Editors", "Debuggers"],
  },
];

const operatingSystems = [
  ["🪟", "Windows", "A widely used operating system for personal computers."],
  ["🍎", "macOS", "An operating system developed for Apple Mac computers."],
  ["🐧", "Linux", "An open-source operating system used on computers and servers."],
  ["📱", "Android", "A mobile operating system widely used on smartphones and tablets."],
  ["📱", "iOS", "Apple's mobile operating system for iPhone devices."],
];

const softwareExamples = [
  ["📝", "Word Processor", "Used to create, edit and format documents."],
  ["📊", "Spreadsheet", "Used for calculations, data analysis and tables."],
  ["🌐", "Web Browser", "Used to access websites and online services."],
  ["🎨", "Graphics Software", "Used to create and edit digital images."],
  ["🎵", "Media Player", "Used to play audio and video files."],
  ["💬", "Communication Apps", "Used for messaging, calls and online communication."],
];

const importantPoints = [
  "Software is a collection of programs and instructions.",
  "Software cannot normally be physically touched like hardware.",
  "System software manages computer hardware.",
  "Operating systems are examples of system software.",
  "Application software helps users perform specific tasks.",
  "Utility software helps maintain and protect computer systems.",
  "Programming software is used to create other software.",
  "Windows, macOS and Linux are examples of operating systems.",
  "A computer needs software to make its hardware useful.",
  "Hardware and software work together to operate a computer system.",
];

const comparison = [
  ["System Software", "Manages hardware", "Windows, Linux"],
  ["Application Software", "Performs user tasks", "Word Processor, Browser"],
  ["Utility Software", "Maintains system", "Antivirus, Backup"],
  ["Programming Software", "Creates programs", "Compiler, Code Editor"],
];

export default function SoftwarePage() {
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

            <Link
              href="/"
              className="font-medium hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              href="/learn"
              className="font-medium text-blue-600"
            >
              Learn
            </Link>

            <Link
              href="/practice"
              className="font-medium hover:text-blue-600"
            >
              Practice
            </Link>

            <Link
              href="/ai-hub"
              className="font-medium hover:text-blue-600"
            >
              AI Hub
            </Link>

            <Link
              href="/developer-hub"
              className="font-medium hover:text-blue-600"
            >
              Developer
            </Link>

            <Link
              href="/downloads"
              className="font-medium hover:text-blue-600"
            >
              Downloads
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
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500">

        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">

          <Link
            href="/learn/computer"
            className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/20"
          >
            ← Computer Chapters
          </Link>

          <div className="mt-8 flex items-center gap-5">

            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-white text-5xl shadow-xl">
              ⚙️
            </div>

            <div>

              <p className="font-semibold text-blue-100">
                COMPUTER SOFTWARE
              </p>

              <h2 className="text-3xl font-black text-white sm:text-5xl">
                Computer Software
              </h2>

            </div>

          </div>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-blue-50">
            Learn about system software, application software, utility
            software, programming software and operating systems.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <a
              href="#software"
              className="rounded-xl bg-white px-7 py-3.5 text-center font-bold text-blue-700 shadow-xl hover:scale-105"
            >
              ⚙️ Start Learning
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

          <Link
            href="/learn"
            className="text-blue-600 hover:underline"
          >
            Learn
          </Link>

          <span className="mx-2 text-slate-400">
            /
          </span>

          <Link
            href="/learn/computer"
            className="text-blue-600 hover:underline"
          >
            Computer
          </Link>

          <span className="mx-2 text-slate-400">
            /
          </span>

          <span className="text-slate-500">
            Computer Software
          </span>

        </div>

      </div>

      {/* MAIN */}
      <section id="software" className="py-16">

        <div className="mx-auto max-w-7xl px-4 lg:px-8">

          {/* INTRO */}
          <div className="max-w-4xl">

            <p className="font-bold uppercase tracking-widest text-blue-600">
              Chapter
            </p>

            <h2 className="mt-3 text-4xl font-black text-slate-900">
              What is Computer Software?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Computer software is a collection of programs, instructions
              and related data that tells computer hardware what to do.
              Software allows users to perform different tasks using a
              computer or digital device.
            </p>

          </div>

          {/* HARDWARE SOFTWARE */}
          <section className="mt-12 rounded-3xl bg-slate-900 p-8 text-white md:p-10">

            <div className="grid gap-8 lg:grid-cols-2">

              <div>

                <div className="text-6xl">
                  💻
                </div>

                <h2 className="mt-5 text-3xl font-black">
                  Hardware + Software
                </h2>

                <p className="mt-4 leading-7 text-slate-300">
                  Hardware provides the physical components while software
                  provides instructions. Both are necessary for a computer
                  system to perform useful tasks.
                </p>

              </div>

              <div className="grid gap-4 sm:grid-cols-2">

                <div className="rounded-2xl bg-white/5 p-6">
                  <div className="text-3xl">
                    🖥️
                  </div>

                  <h3 className="mt-3 font-black">
                    Hardware
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Physical components that can be seen and touched.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/5 p-6">
                  <div className="text-3xl">
                    ⚙️
                  </div>

                  <h3 className="mt-3 font-black">
                    Software
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Programs and instructions that control computer
                    operations.
                  </p>
                </div>

              </div>

            </div>

          </section>

          {/* TYPES */}
          <section className="mt-16">

            <p className="font-bold uppercase tracking-widest text-cyan-600">
              Classification
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900">
              Types of Computer Software
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">

              {softwareTypes.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                    {item.icon}
                  </div>

                  <h3 className="mt-5 text-2xl font-black text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">

                    {item.examples.map((example) => (
                      <span
                        key={example}
                        className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600"
                      >
                        {example}
                      </span>
                    ))}

                  </div>

                </article>
              ))}

            </div>

          </section>

          {/* SYSTEM SOFTWARE */}
          <section className="mt-16 rounded-3xl bg-blue-50 p-8 md:p-10">

            <p className="font-bold uppercase tracking-widest text-blue-600">
              Type 01
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900">
              System Software
            </h2>

            <p className="mt-5 max-w-3xl leading-8 text-slate-600">
              System software controls and manages computer hardware and
              provides a platform for application software to run.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">

              {[
                ["🪟", "Operating System"],
                ["🔌", "Device Drivers"],
                ["🛠️", "System Utilities"],
              ].map(([icon, title]) => (
                <div
                  key={title}
                  className="rounded-2xl bg-white p-6 text-center shadow-sm"
                >

                  <div className="text-3xl">
                    {icon}
                  </div>

                  <h3 className="mt-3 font-black text-slate-900">
                    {title}
                  </h3>

                </div>
              ))}

            </div>

          </section>

          {/* APPLICATION SOFTWARE */}
          <section className="mt-16">

            <p className="font-bold uppercase tracking-widest text-indigo-600">
              Type 02
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900">
              Application Software
            </h2>

            <p className="mt-5 max-w-3xl leading-8 text-slate-600">
              Application software is designed for users to perform
              specific tasks such as preparing documents, browsing the
              internet, editing images and communicating with others.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

              {softwareExamples.map(([icon, title, text]) => (
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

          {/* OPERATING SYSTEM */}
          <section className="mt-16">

            <p className="font-bold uppercase tracking-widest text-blue-600">
              Operating Systems
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900">
              What is an Operating System?
            </h2>

            <p className="mt-5 max-w-3xl leading-8 text-slate-600">
              An operating system is system software that manages computer
              hardware and software resources and provides services for
              applications and users.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

              {operatingSystems.map(([icon, title, text]) => (
                <div
                  key={title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
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

          {/* FUNCTIONS */}
          <section className="mt-16 rounded-3xl bg-slate-50 p-8 md:p-10">

            <p className="font-bold uppercase tracking-widest text-cyan-600">
              Operating System Functions
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900">
              Main Functions of an Operating System
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {[
                ["🧠", "Memory Management", "Manages the use of computer memory."],
                ["⚙️", "Process Management", "Controls running programs and processes."],
                ["📁", "File Management", "Organizes files and folders on storage devices."],
                ["🔌", "Device Management", "Controls connected hardware devices."],
                ["🔐", "Security", "Helps protect system resources and user information."],
                ["👤", "User Interface", "Provides ways for users to interact with the computer."],
              ].map(([icon, title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl bg-white p-6 shadow-sm"
                >

                  <div className="text-3xl">
                    {icon}
                  </div>

                  <h3 className="mt-4 font-black text-slate-900">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {text}
                  </p>

                </div>
              ))}

            </div>

          </section>

          {/* COMPARISON */}
          <section className="mt-16">

            <p className="font-bold uppercase tracking-widest text-blue-600">
              Quick Comparison
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900">
              Types of Software Comparison
            </h2>

            <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200">

              <div className="hidden grid-cols-3 bg-slate-900 text-sm font-bold text-white md:grid">

                <div className="p-5">
                  Software Type
                </div>

                <div className="p-5">
                  Main Purpose
                </div>

                <div className="p-5">
                  Examples
                </div>

              </div>

              {comparison.map((row, index) => (
                <div
                  key={row[0]}
                  className={`grid grid-cols-1 md:grid-cols-3 ${
                    index !== comparison.length - 1
                      ? "border-b border-slate-200"
                      : ""
                  }`}
                >

                  <div className="p-5 font-black text-blue-600">
                    {row[0]}
                  </div>

                  <div className="p-5 text-sm text-slate-600">
                    <span className="font-bold md:hidden">
                      Purpose:{" "}
                    </span>
                    {row[1]}
                  </div>

                  <div className="p-5 text-sm text-slate-600">
                    <span className="font-bold md:hidden">
                      Examples:{" "}
                    </span>
                    {row[2]}
                  </div>

                </div>
              ))}

            </div>

          </section>

          {/* IMPORTANT POINTS */}
          <section className="mt-16">

            <p className="font-bold uppercase tracking-widest text-blue-600">
              Exam Revision
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900">
              Important Points
            </h2>

            <div className="mt-8 grid gap-3 md:grid-cols-2">

              {importantPoints.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5"
                >

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-black text-blue-600">
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
              Ready for Software MCQs?
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-blue-50">
              Test your knowledge of system software, application software,
              operating systems and utility software.
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

        </div>
      </section>

      {/* NAVIGATION */}
      <section className="border-t border-slate-200 bg-slate-50 py-10">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-4 sm:flex-row lg:px-8">

          <Link
            href="/learn/computer/hardware"
            className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-center font-bold text-slate-700 hover:border-blue-300 hover:text-blue-600"
          >
            ← Previous: Hardware
          </Link>

          <Link
            href="/learn/computer/cpu-memory"
            className="rounded-xl bg-blue-600 px-6 py-3 text-center font-bold text-white hover:bg-blue-700"
          >
            Next: CPU & Memory →
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
              <h3 className="font-semibold">
                Learning
              </h3>

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
              <h3 className="font-semibold">
                Practice
              </h3>

              <div className="mt-4 space-y-2 text-sm text-slate-400">

                <Link
                  href="/practice"
                  className="block hover:text-white"
                >
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
              <h3 className="font-semibold">
                Tools
              </h3>

              <div className="mt-4 space-y-2 text-sm text-slate-400">

                <Link
                  href="/ai-hub"
                  className="block hover:text-white"
                >
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
