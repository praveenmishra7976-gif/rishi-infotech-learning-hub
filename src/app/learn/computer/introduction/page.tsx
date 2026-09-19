import Link from "next/link";

const topics = [
  {
    icon: "💻",
    title: "What is a Computer?",
    text: "A computer is an electronic device that accepts data as input, processes it according to instructions, stores information and produces useful output.",
  },
  {
    icon: "⚡",
    title: "Characteristics",
    text: "Computers are known for speed, accuracy, storage capacity, automation, versatility and reliability.",
  },
  {
    icon: "🖥️",
    title: "Types of Computers",
    text: "Computers are available in different forms such as desktops, laptops, tablets, smartphones, mainframes and supercomputers.",
  },
  {
    icon: "🌍",
    title: "Applications",
    text: "Computers are used in education, banking, healthcare, business, communication, entertainment, research and many other fields.",
  },
];

const characteristics = [
  [
    "⚡",
    "Speed",
    "Computers can perform millions or even billions of operations in a very short period of time.",
  ],
  [
    "🎯",
    "Accuracy",
    "Computers can produce highly accurate results when the instructions and input data are correct.",
  ],
  [
    "💾",
    "Storage",
    "Computers can store large amounts of data and retrieve stored information whenever required.",
  ],
  [
    "🔄",
    "Automation",
    "Computers can perform repetitive tasks automatically after receiving the required instructions.",
  ],
  [
    "🌐",
    "Versatility",
    "A computer can be used for many different types of work such as education, business, communication and entertainment.",
  ],
  [
    "🔒",
    "Reliability",
    "Computers can perform repeated operations consistently without becoming tired.",
  ],
];

const computerTypes = [
  [
    "🖥️",
    "Desktop",
    "A personal computer designed to remain in one location and normally used with a separate monitor, keyboard and mouse.",
  ],
  [
    "💼",
    "Laptop",
    "A portable computer containing a screen, keyboard, touchpad, battery and other components in a compact design.",
  ],
  [
    "📱",
    "Smartphone",
    "A mobile computing device that provides communication, internet access and support for many applications.",
  ],
  [
    "📲",
    "Tablet",
    "A portable touchscreen computer that is generally larger than a smartphone and smaller than a laptop.",
  ],
  [
    "🏢",
    "Mainframe",
    "A powerful computer system designed to process large amounts of data and support many users simultaneously.",
  ],
  [
    "🚀",
    "Supercomputer",
    "A highly powerful computer designed for complex scientific calculations, simulations, research and large-scale workloads.",
  ],
];

const workingSteps = [
  [
    "1",
    "Input",
    "Data and instructions are entered into the computer using input devices such as a keyboard, mouse or scanner.",
  ],
  [
    "2",
    "Processing",
    "The CPU processes the input data according to the instructions provided by the user or software.",
  ],
  [
    "3",
    "Storage",
    "Data, instructions and processed information can be stored temporarily or permanently for future use.",
  ],
  [
    "4",
    "Output",
    "The computer presents the processed result to the user through output devices such as a monitor, printer or speaker.",
  ],
];

const applications = [
  ["🎓", "Education", "Online classes, digital learning, presentations, examinations and educational software."],
  ["🏦", "Banking", "Online banking, ATMs, transactions, account management and financial services."],
  ["🏥", "Healthcare", "Patient records, medical research, diagnosis support and hospital management."],
  ["🏢", "Business", "Accounting, communication, inventory management, presentations and business operations."],
  ["📡", "Communication", "Email, video calls, messaging, social media and online collaboration."],
  ["🛒", "E-Commerce", "Online shopping, digital payments, order management and customer services."],
  ["🎮", "Entertainment", "Games, movies, music, streaming platforms and digital media."],
  ["🔬", "Research", "Scientific calculations, simulations, data analysis and research projects."],
];

const generations = [
  [
    "First Generation",
    "1940s–1950s",
    "Used vacuum tubes. These computers were very large, expensive and consumed significant amounts of electricity.",
  ],
  [
    "Second Generation",
    "1950s–1960s",
    "Used transistors instead of vacuum tubes. Computers became smaller, faster and more reliable.",
  ],
  [
    "Third Generation",
    "1960s–1970s",
    "Used integrated circuits. This reduced size and increased processing speed and reliability.",
  ],
  [
    "Fourth Generation",
    "1970s–Present",
    "Used microprocessors. Personal computers, laptops and many modern computing devices developed during this era.",
  ],
  [
    "Fifth Generation",
    "Modern & Future",
    "Focuses on artificial intelligence, advanced computing, natural language processing and intelligent systems.",
  ],
];

const importantTerms = [
  ["CPU", "Central Processing Unit"],
  ["ALU", "Arithmetic Logic Unit"],
  ["RAM", "Random Access Memory"],
  ["ROM", "Read Only Memory"],
  ["HDD", "Hard Disk Drive"],
  ["SSD", "Solid State Drive"],
  ["OS", "Operating System"],
  ["ICT", "Information and Communication Technology"],
];

const importantPoints = [
  "A computer is an electronic device that accepts input, processes data and produces output.",
  "CPU stands for Central Processing Unit.",
  "The CPU is responsible for executing instructions and processing data.",
  "Input devices are used to enter data and instructions into a computer.",
  "Output devices present processed information to the user.",
  "RAM is temporary and volatile memory.",
  "ROM is non-volatile memory.",
  "Computers are known for speed, accuracy, storage, automation and versatility.",
  "Computers are used in education, banking, healthcare, business and communication.",
  "A computer works through the basic input-process-storage-output cycle.",
];

export default function IntroductionPage() {
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
              🖥️
            </div>

            <div>

              <p className="font-semibold text-blue-100">
                CHAPTER 01
              </p>

              <h2 className="text-3xl font-black text-white sm:text-5xl">
                Introduction to Computers
              </h2>

            </div>

          </div>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-blue-50">
            Learn the fundamentals of computers, their characteristics,
            types, generations, applications and basic working process.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <a
              href="#introduction"
              className="rounded-xl bg-white px-7 py-3.5 text-center font-bold text-blue-700 shadow-xl hover:scale-105"
            >
              📚 Start Learning
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
            Introduction
          </span>

        </div>

      </div>

      {/* MAIN */}
      <section id="introduction" className="py-16">

        <div className="mx-auto max-w-7xl px-4 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[1fr_320px]">

            {/* MAIN ARTICLE */}
            <article>

              {/* INTRODUCTION */}
              <section>

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Chapter 01
                </p>

                <h2 className="mt-3 text-4xl font-black text-slate-900">
                  What is a Computer?
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  A computer is an electronic device that accepts data as
                  input, processes the data according to a set of instructions,
                  stores information and produces useful output.
                </p>

                <div className="mt-8 rounded-3xl bg-slate-900 p-8 text-white">

                  <div className="text-6xl">
                    💻
                  </div>

                  <h3 className="mt-5 text-2xl font-black">
                    Computer = Input + Processing + Storage + Output
                  </h3>

                  <p className="mt-3 leading-7 text-slate-300">
                    A computer takes raw data, processes it using instructions,
                    stores information when required and provides meaningful
                    results to the user.
                  </p>

                </div>

              </section>

              {/* BASIC TOPICS */}
              <section id="basic-topics" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Fundamentals
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Computer Fundamentals
                </h2>

                <div className="mt-8 grid gap-5 md:grid-cols-2">

                  {topics.map((topic) => (
                    <div
                      key={topic.title}
                      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                    >

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                        {topic.icon}
                      </div>

                      <h3 className="mt-5 text-xl font-black text-slate-900">
                        {topic.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {topic.text}
                      </p>

                    </div>
                  ))}

                </div>

              </section>

              {/* WORKING */}
              <section id="working" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Basic Working
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  How Does a Computer Work?
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  A computer follows a basic cycle in which data is entered,
                  processed, stored and presented as useful information.
                </p>

                <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                  {workingSteps.map(([number, title, text]) => (
                    <div
                      key={number}
                      className="rounded-3xl bg-blue-50 p-6"
                    >

                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-black text-white">
                        {number}
                      </div>

                      <h3 className="mt-5 text-xl font-black text-slate-900">
                        {title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {text}
                      </p>

                    </div>
                  ))}

                </div>

              </section>

              {/* CHARACTERISTICS */}
              <section id="characteristics" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Key Concepts
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Characteristics of Computers
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Computers have several important characteristics that make
                  them useful for personal, educational, scientific and
                  business applications.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                  {characteristics.map(([icon, title, text]) => (
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

              {/* TYPES */}
              <section id="types" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Classification
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Types of Computers
                </h2>

                <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                  {computerTypes.map(([icon, title, text]) => (
                    <div
                      key={title}
                      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
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

              {/* GENERATIONS */}
              <section id="generations" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Computer History
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Generations of Computers
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  Computers have developed through several generations.
                  Each generation introduced new technology that improved
                  computer size, speed, reliability and capabilities.
                </p>

                <div className="mt-8 space-y-4">

                  {generations.map(([generation, period, description], index) => (
                    <div
                      key={generation}
                      className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                    >

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600 font-black text-white">
                        {index + 1}
                      </div>

                      <div>

                        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">

                          <h3 className="text-xl font-black text-slate-900">
                            {generation}
                          </h3>

                          <span className="w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600">
                            {period}
                          </span>

                        </div>

                        <p className="mt-3 text-sm leading-7 text-slate-600">
                          {description}
                        </p>

                      </div>

                    </div>
                  ))}

                </div>

              </section>

              {/* APPLICATIONS */}
              <section id="applications" className="mt-16">

                <div className="rounded-3xl bg-slate-900 p-8 text-white">

                  <p className="font-bold uppercase tracking-widest text-cyan-400">
                    Real World
                  </p>

                  <h2 className="mt-3 text-3xl font-black">
                    Applications of Computers
                  </h2>

                  <p className="mt-4 max-w-3xl leading-7 text-slate-300">
                    Computers have become an important part of almost every
                    field. They help people communicate, learn, work, manage
                    information and solve complex problems.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                    {applications.map(([icon, title, text]) => (
                      <div
                        key={title}
                        className="rounded-2xl bg-white/5 p-5"
                      >

                        <div className="text-3xl">
                          {icon}
                        </div>

                        <h3 className="mt-3 font-black">
                          {title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {text}
                        </p>

                      </div>
                    ))}

                  </div>

                </div>

              </section>

              {/* IMPORTANT TERMS */}
              <section id="terms" className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Quick Revision
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Important Computer Terms
                </h2>

                <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

                  {importantTerms.map(([short, full], index) => (
                    <div
                      key={short}
                      className={`grid grid-cols-2 ${
                        index !== importantTerms.length - 1
                          ? "border-b border-slate-200"
                          : ""
                      }`}
                    >

                      <div className="p-5 font-black text-blue-600">
                        {short}
                      </div>

                      <div className="p-5 text-sm text-slate-600">
                        {full}
                      </div>

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

                  {importantPoints.map((point, index) => (
                    <div
                      key={point}
                      className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4"
                    >

                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-black text-blue-600">
                        {index + 1}
                      </span>

                      <p className="text-sm leading-6 text-slate-600">
                        {point}
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
                  Ready for Computer Introduction MCQs?
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-blue-50">
                  Test your understanding of computer fundamentals,
                  characteristics, types, generations and applications.
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
                    ["01", "What is a Computer?", "#introduction"],
                    ["02", "Computer Fundamentals", "#basic-topics"],
                    ["03", "Basic Working", "#working"],
                    ["04", "Characteristics", "#characteristics"],
                    ["05", "Types of Computers", "#types"],
                    ["06", "Generations", "#generations"],
                    ["07", "Applications", "#applications"],
                    ["08", "Important Terms", "#terms"],
                    ["09", "Important Points", "#important-points"],
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

              {/* PROGRESS */}
              <div className="mt-5 rounded-3xl bg-blue-50 p-6">

                <h3 className="font-black text-blue-900">
                  Chapter Progress
                </h3>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-blue-200">

                  <div className="h-full w-1/4 rounded-full bg-blue-600" />

                </div>

                <p className="mt-3 text-xs text-blue-800">
                  Continue learning to complete this chapter.
                </p>

              </div>

              {/* RELATED CHAPTERS */}
              <div className="mt-5 rounded-3xl border border-slate-200 bg-white p-6">

                <h3 className="font-black text-slate-900">
                  Related Chapters
                </h3>

                <div className="mt-4 space-y-2">

                  <Link
                    href="/learn/computer/cpu-memory"
                    className="block rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                  >
                    🧠 CPU & Memory →
                  </Link>

                  <Link
                    href="/learn/computer/input-output"
                    className="block rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                  >
                    ⌨️ Input & Output →
                  </Link>

                  <Link
                    href="/learn/computer/storage"
                    className="block rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                  >
                    💾 Storage Devices →
                  </Link>

                </div>

              </div>

            </aside>

          </div>

        </div>
      </section>

      {/* NAVIGATION */}
      <section className="border-t border-slate-200 bg-slate-50 py-10">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-4 sm:flex-row lg:px-8">

          <Link
            href="/learn/computer"
            className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-center font-bold text-slate-700 hover:border-blue-300 hover:text-blue-600"
          >
            ← Computer Chapters
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

                <Link
                  href="/learn"
                  className="block hover:text-white"
                >
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