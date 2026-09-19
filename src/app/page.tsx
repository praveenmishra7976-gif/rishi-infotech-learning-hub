import Link from "next/link";

const quickAccess = [
  {
    icon: "🤖",
    title: "AI Hub",
    description: "Explore powerful AI tools",
    href: "/ai-hub",
  },
  {
    icon: "💻",
    title: "Computer",
    description: "Computer basics & skills",
    href: "/learn/computer",
  },
  {
    icon: "⚡",
    title: "Physics",
    description: "Formulas, laws & notes",
    href: "/learn/physics",
  },
  {
    icon: "🧪",
    title: "Chemistry",
    description: "Concepts & reactions",
    href: "/learn/chemistry",
  },
  {
    icon: "📐",
    title: "Mathematics",
    description: "Learn maths easily",
    href: "/learn/mathematics",
  },
  {
    icon: "🛠️",
    title: "Developer",
    description: "Useful coding tools",
    href: "/developer-hub",
  },
  {
    icon: "📝",
    title: "Practice",
    description: "MCQs & mock tests",
    href: "/practice",
  },
  {
    icon: "📖",
    title: "Dictionary",
    description: "Hindi & English",
    href: "/dictionary",
  },
];

const subjects = [
  {
    icon: "💻",
    title: "Computer",
    description:
      "Learn computer fundamentals, hardware, software, internet and technology.",
    href: "/learn/computer",
    color: "blue",
  },
  {
    icon: "⚛️",
    title: "Physics",
    description:
      "Understand physics through formulas, laws, concepts and practical examples.",
    href: "/learn/physics",
    color: "indigo",
  },
  {
    icon: "🧪",
    title: "Chemistry",
    description:
      "Explore atoms, molecules, reactions, equations and important chemistry concepts.",
    href: "/learn/chemistry",
    color: "green",
  },
  {
    icon: "📐",
    title: "Mathematics",
    description:
      "Improve mathematical thinking with formulas, examples and problem solving.",
    href: "/learn/mathematics",
    color: "yellow",
  },
  {
    icon: "🕉️",
    title: "Sanskrit",
    description:
      "Learn Sanskrit grammar, language, literature and important topics.",
    href: "/learn/sanskrit",
    color: "orange",
  },
  {
    icon: "🌎",
    title: "General Knowledge",
    description:
      "Build useful GK knowledge with important national and world topics.",
    href: "/learn/general-knowledge",
    color: "purple",
  },
];

const aiTools = [
  {
    icon: "🤖",
    title: "AI Chatbots",
    description: "Ask questions and learn",
    href: "/ai-hub/chatbots",
    color: "blue",
  },
  {
    icon: "🎨",
    title: "AI Images",
    description: "Create amazing images",
    href: "/ai-hub/image-tools",
    color: "pink",
  },
  {
    icon: "🎬",
    title: "AI Video",
    description: "Create and edit videos",
    href: "/ai-hub/video-tools",
    color: "red",
  },
  {
    icon: "💻",
    title: "AI Coding",
    description: "Code faster with AI",
    href: "/ai-hub/coding-tools",
    color: "green",
  },
  {
    icon: "✍️",
    title: "AI Writing",
    description: "Write better content",
    href: "/ai-hub/writing-tools",
    color: "orange",
  },
  {
    icon: "⚡",
    title: "Productivity",
    description: "Work smarter with AI",
    href: "/ai-hub/productivity",
    color: "purple",
  },
];

const developerTools = [
  {
    icon: "📱",
    title: "QR Generator",
    description: "Create QR codes",
    href: "/developer-hub/qr-generator",
  },
  {
    icon: "🔐",
    title: "Password Generator",
    description: "Generate secure passwords",
    href: "/developer-hub/password-generator",
  },
  {
    icon: "{}",
    title: "JSON Formatter",
    description: "Format JSON easily",
    href: "/developer-hub/json-formatter",
  },
  {
    icon: "🔤",
    title: "Base64 Encoder",
    description: "Encode and decode text",
    href: "/developer-hub/base64",
  },
  {
    icon: "🌐",
    title: "HTML Formatter",
    description: "Format HTML code",
    href: "/developer-hub/html-formatter",
  },
  {
    icon: "🎨",
    title: "CSS Formatter",
    description: "Format CSS code",
    href: "/developer-hub/css-formatter",
  },
  {
    icon: "⚡",
    title: "JavaScript Formatter",
    description: "Format JavaScript",
    href: "/developer-hub/js-formatter",
  },
  {
    icon: "🌈",
    title: "Color Picker",
    description: "Pick any color",
    href: "/developer-hub/color-picker",
  },
];

const practiceTools = [
  {
    icon: "📝",
    title: "MCQ Quiz",
    description: "Test your knowledge",
    href: "/practice/mcq",
  },
  {
    icon: "🎯",
    title: "Mock Tests",
    description: "Exam-style tests",
    href: "/practice/mock-tests",
  },
  {
    icon: "📚",
    title: "Previous Papers",
    description: "Practice past papers",
    href: "/practice/previous-papers",
  },
  {
    icon: "🔥",
    title: "Daily Quiz",
    description: "New questions every day",
    href: "/practice/daily-quiz",
  },
  {
    icon: "🧠",
    title: "Flashcards",
    description: "Quick revision",
    href: "/practice/flashcards",
  },
];

const studyTools = [
  {
    icon: "🧮",
    title: "Calculator",
    description: "Calculate instantly",
    href: "/calculator",
  },
  {
    icon: "📖",
    title: "Dictionary",
    description: "Find word meanings",
    href: "/dictionary",
  },
  {
    icon: "🌐",
    title: "Translator",
    description: "English & Hindi",
    href: "/translator",
  },
  {
    icon: "📒",
    title: "Notes",
    description: "Study materials",
    href: "/notes",
  },
  {
    icon: "⬇️",
    title: "Downloads",
    description: "PDFs & resources",
    href: "/downloads",
  },
  {
    icon: "🏆",
    title: "Certificates",
    description: "Earn certificates",
    href: "/certificates",
  },
];

const latestNotes = [
  {
    icon: "💻",
    category: "Computer",
    title: "Introduction to Computers",
    description:
      "Learn computer fundamentals, hardware and software basics.",
    href: "/learn/computer",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    icon: "⚛️",
    category: "Physics",
    title: "Motion & Laws",
    description:
      "Important physics concepts, formulas and fundamental laws.",
    href: "/learn/physics",
    gradient: "from-indigo-600 to-blue-500",
  },
  {
    icon: "🧪",
    category: "Chemistry",
    title: "Atomic Structure",
    description:
      "Understand atoms, elements, electrons and chemical basics.",
    href: "/learn/chemistry",
    gradient: "from-purple-600 to-pink-500",
  },
  {
    icon: "📐",
    category: "Mathematics",
    title: "Algebra Basics",
    description:
      "Build a strong foundation in algebra and equations.",
    href: "/learn/mathematics",
    gradient: "from-orange-500 to-yellow-500",
  },
];

const blogPosts = [
  {
    icon: "🤖",
    category: "AI",
    title: "Latest AI Tools Students Should Know",
    description:
      "Discover useful AI tools for learning, writing and productivity.",
    href: "/blog",
    gradient: "from-blue-700 to-cyan-500",
  },
  {
    icon: "💻",
    category: "Coding",
    title: "Beginner Coding Tips",
    description:
      "Simple tips to start your coding journey with confidence.",
    href: "/blog",
    gradient: "from-purple-600 to-pink-500",
  },
  {
    icon: "🎓",
    category: "Study Tips",
    title: "How to Prepare for Exams",
    description:
      "Build a practical study routine and improve your preparation.",
    href: "/blog",
    gradient: "from-orange-500 to-yellow-500",
  },
];

const reviews = [
  {
    initial: "A",
    name: "Ankit",
    text:
      "The notes and practice quizzes are very easy to understand. Everything is available in one place.",
    color: "bg-blue-600",
  },
  {
    initial: "P",
    name: "Priya",
    text:
      "I really like the combination of study material, AI tools and developer tools. It saves a lot of time.",
    color: "bg-purple-600",
  },
  {
    initial: "R",
    name: "Rahul",
    text:
      "The practice center makes revision much easier. The daily quiz is a great feature.",
    color: "bg-green-600",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-800">

      {/* ========================= HEADER ========================= */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-lg font-black text-white shadow-lg">
              RI
            </div>

            <div>
              <div className="text-base font-extrabold text-slate-900 sm:text-lg">
                Rishi Infotech
              </div>
              <div className="text-xs font-bold text-blue-600">
                Learning Hub
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            <Link
              href="/"
              className="font-semibold text-blue-600 transition hover:text-blue-700"
            >
              Home
            </Link>

            <Link
              href="/learn"
              className="font-medium text-slate-600 transition hover:text-blue-600"
            >
              Learn
            </Link>

            <Link
              href="/practice"
              className="font-medium text-slate-600 transition hover:text-blue-600"
            >
              Practice
            </Link>

            <Link
              href="/ai-hub"
              className="font-medium text-slate-600 transition hover:text-blue-600"
            >
              AI Hub
            </Link>

            <Link
              href="/developer-hub"
              className="font-medium text-slate-600 transition hover:text-blue-600"
            >
              Developer
            </Link>

            <Link
              href="/downloads"
              className="font-medium text-slate-600 transition hover:text-blue-600"
            >
              Downloads
            </Link>

            <Link
              href="/blog"
              className="font-medium text-slate-600 transition hover:text-blue-600"
            >
              Blog
            </Link>
          </nav>

          <Link
            href="/contact"
            className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-blue-700"
          >
            Contact
          </Link>
        </div>
      </header>

      {/* ========================= HERO ========================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-cyan-600 to-blue-500">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">

          <div className="text-white">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
              🎓 Your All-in-One Learning Platform
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Learn Everything
              <span className="block text-cyan-100">
                In One Place
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-blue-50 sm:text-lg">
              Learn subjects, practice questions, discover AI tools and use
              powerful developer tools — all from one simple learning hub.
            </p>

            <div className="mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row">
              <div className="flex min-h-14 flex-1 items-center rounded-2xl bg-white px-5 shadow-xl">
                <span className="mr-3 text-xl">🔎</span>

                <input
                  type="text"
                  placeholder="Search Notes, AI Tools, Courses..."
                  className="w-full bg-transparent text-slate-700 outline-none placeholder:text-slate-400"
                />
              </div>

              <Link
                href="/learn"
                className="rounded-2xl bg-slate-950 px-6 py-4 text-center font-bold text-white shadow-xl transition hover:bg-slate-800"
              >
                🚀 Start Learning
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-blue-50">
              <span>✓ Free Learning Resources</span>
              <span>✓ AI Tools</span>
              <span>✓ Practice Tests</span>
            </div>
          </div>

          {/* HERO CARD */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-[2rem] border border-white/30 bg-white/15 p-5 shadow-2xl backdrop-blur-xl sm:p-7">

              <div className="rounded-3xl bg-white p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
                    👨‍💻
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Welcome to
                    </p>

                    <h2 className="text-xl font-black text-slate-900">
                      Rishi Infotech
                    </h2>

                    <p className="text-sm font-bold text-blue-600">
                      Learning Hub
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-blue-50 p-4">
                    <div className="text-2xl font-black text-blue-600">
                      6+
                    </div>
                    <div className="text-xs font-medium text-slate-500">
                      Subjects
                    </div>
                  </div>

                  <div className="rounded-2xl bg-cyan-50 p-4">
                    <div className="text-2xl font-black text-cyan-600">
                      50+
                    </div>
                    <div className="text-xs font-medium text-slate-500">
                      Tools
                    </div>
                  </div>
                </div>

                <Link
                  href="/ai-hub"
                  className="mt-4 block rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-center font-bold text-white transition hover:opacity-90"
                >
                  🤖 Explore AI Hub
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================= QUICK ACCESS ========================= */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        <div className="mb-10">
          <p className="font-bold uppercase tracking-widest text-blue-600">
            Quick Access
          </p>

          <h2 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl">
            Everything You Need
          </h2>

          <p className="mt-3 max-w-2xl text-slate-500">
            Quickly jump to your favorite learning resources and tools.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {quickAccess.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl sm:p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl transition group-hover:bg-blue-600">
                {item.icon}
              </div>

              <h3 className="mt-4 font-black text-slate-900">
                {item.title}
              </h3>

              <p className="mt-1 text-sm leading-5 text-slate-500">
                {item.description}
              </p>

              <span className="mt-4 inline-block text-sm font-bold text-blue-600">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ========================= POPULAR SUBJECTS ========================= */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">

          <div className="text-center">
            <p className="font-bold uppercase tracking-widest text-blue-600">
              Learning Center
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
              Popular Subjects
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-500">
              Build strong knowledge with simple notes, formulas, examples
              and practice questions.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject) => (
              <Link
                key={subject.title}
                href={subject.href}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                    {subject.icon}
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-slate-900">
                      {subject.title}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-blue-600">
                      Learn & Practice
                    </p>
                  </div>
                </div>

                <p className="mt-5 leading-7 text-slate-600">
                  {subject.description}
                </p>

                <div className="mt-5 font-bold text-blue-600">
                  Start Learning →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= AI HUB ========================= */}
      <section className="bg-slate-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">
            <p className="font-bold uppercase tracking-widest text-cyan-400">
              AI Hub
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl lg:text-5xl">
              Powerful AI Tools in One Place
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
              Discover AI tools for studying, writing, coding, images,
              videos and productivity.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {aiTools.map((tool) => (
              <Link
                key={tool.title}
                href={tool.href}
                className="group rounded-3xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/10 sm:p-6"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-3xl">
                  {tool.icon}
                </div>

                <h3 className="mt-5 font-black">
                  {tool.title}
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  {tool.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/ai-hub"
              className="inline-flex rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-black shadow-xl transition hover:scale-105"
            >
              Explore AI Hub →
            </Link>
          </div>
        </div>
      </section>

      {/* ========================= DEVELOPER HUB ========================= */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">
            <p className="font-bold uppercase tracking-widest text-blue-600">
              Developer Hub
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl lg:text-5xl">
              Developer Tools
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-500">
              Useful online utilities for developers, students and creators.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {developerTools.map((tool) => (
              <Link
                key={tool.title}
                href={tool.href}
                className="rounded-3xl border border-slate-100 bg-white p-5 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-7"
              >
                <div className="text-4xl">
                  {tool.icon}
                </div>

                <h3 className="mt-5 text-lg font-black text-slate-900 sm:text-xl">
                  {tool.title}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {tool.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/developer-hub"
              className="inline-flex rounded-xl bg-blue-600 px-8 py-4 font-black text-white shadow-xl transition hover:scale-105 hover:bg-blue-700"
            >
              Explore Developer Hub →
            </Link>
          </div>
        </div>
      </section>

      {/* ========================= PRACTICE CENTER ========================= */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">
            <p className="font-bold uppercase tracking-widest text-blue-600">
              Practice Center
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl lg:text-5xl">
              Practice. Improve. Succeed.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-500">
              Test your knowledge with quizzes, mock tests, previous papers
              and daily practice.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {practiceTools.map((tool) => (
              <Link
                key={tool.title}
                href={tool.href}
                className="group rounded-3xl border border-blue-100 bg-blue-50 p-6 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="text-4xl sm:text-5xl">
                  {tool.icon}
                </div>

                <h3 className="mt-5 font-black text-slate-900 sm:text-xl">
                  {tool.title}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {tool.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/practice"
              className="inline-flex rounded-xl bg-blue-600 px-8 py-4 font-black text-white shadow-xl transition hover:scale-105 hover:bg-blue-700"
            >
              Open Practice Center →
            </Link>
          </div>
        </div>
      </section>

      {/* ========================= STUDY TOOLS ========================= */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">
            <p className="font-bold uppercase tracking-widest text-cyan-600">
              Study Tools
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl lg:text-5xl">
              Smart Tools for Students
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-500">
              Useful tools that make learning, revision and everyday study easier.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {studyTools.map((tool) => (
              <Link
                key={tool.title}
                href={tool.href}
                className="rounded-3xl border border-slate-100 bg-white p-5 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-6"
              >
                <div className="text-4xl sm:text-5xl">
                  {tool.icon}
                </div>

                <h3 className="mt-5 font-black text-slate-900">
                  {tool.title}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {tool.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= LATEST NOTES ========================= */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-bold uppercase tracking-widest text-blue-600">
                Study Materials
              </p>

              <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
                Latest Notes
              </h2>

              <p className="mt-3 text-lg text-slate-500">
                Fresh notes and study material for your preparation.
              </p>
            </div>

            <Link
              href="/notes"
              className="font-black text-blue-600 hover:text-blue-800"
            >
              View All Notes →
            </Link>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {latestNotes.map((note) => (
              <article
                key={note.title}
                className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div
                  className={`flex h-36 items-center justify-center bg-gradient-to-r ${note.gradient} text-6xl`}
                >
                  {note.icon}
                </div>

                <div className="p-6">
                  <span className="text-sm font-black text-blue-600">
                    {note.category}
                  </span>

                  <h3 className="mt-3 text-xl font-black text-slate-900">
                    {note.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {note.description}
                  </p>

                  <Link
                    href={note.href}
                    className="mt-6 inline-block font-black text-blue-600"
                  >
                    Read Notes →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= STUDENT REVIEWS ========================= */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">
            <p className="font-bold uppercase tracking-widest text-blue-600">
              Student Reviews
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
              Loved by Learners
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
              Students are learning smarter with Rishi Infotech Learning Hub.
            </p>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.name}
                className="rounded-3xl border border-slate-100 bg-white p-7 shadow-lg sm:p-8"
              >
                <div className="text-xl text-yellow-500">
                  ★★★★★
                </div>

                <p className="mt-6 leading-7 text-slate-600">
                  “{review.text}”
                </p>

                <div className="mt-7 flex items-center gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${review.color} font-black text-white`}
                  >
                    {review.initial}
                  </div>

                  <div>
                    <h3 className="font-black text-slate-900">
                      {review.name}
                    </h3>

                    <p className="text-sm text-slate-500">
                      Student
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= BLOG ========================= */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-bold uppercase tracking-widest text-cyan-600">
                Learning Blog
              </p>

              <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
                Learn Something New
              </h2>

              <p className="mt-3 text-lg text-slate-500">
                Coding tips, AI updates, study tips and career guidance.
              </p>
            </div>

            <Link
              href="/blog"
              className="font-black text-blue-600 hover:text-blue-800"
            >
              View All Articles →
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className="overflow-hidden rounded-3xl border border-slate-100 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div
                  className={`flex h-48 items-center justify-center bg-gradient-to-r ${post.gradient} text-7xl`}
                >
                  {post.icon}
                </div>

                <div className="p-7">
                  <span className="text-sm font-black text-blue-600">
                    {post.category}
                  </span>

                  <h3 className="mt-3 text-2xl font-black text-slate-900">
                    {post.title}
                  </h3>

                  <p className="mt-4 leading-6 text-slate-500">
                    {post.description}
                  </p>

                  <Link
                    href={post.href}
                    className="mt-6 inline-block font-black text-blue-600"
                  >
                    Read Article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= FINAL CTA ========================= */}
      <section className="bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">

          <div className="text-6xl">
            🚀
          </div>

          <h2 className="mt-6 text-4xl font-black sm:text-5xl lg:text-6xl">
            Start Learning Today
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100 sm:text-xl">
            Explore subjects, practice questions, AI tools, developer tools
            and study resources — all in one place.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/learn"
              className="rounded-xl bg-white px-8 py-4 font-black text-blue-700 shadow-xl transition hover:scale-105"
            >
              Start Learning →
            </Link>

            <Link
              href="/register"
              className="rounded-xl border-2 border-white/70 px-8 py-4 font-black text-white transition hover:bg-white hover:text-blue-700"
            >
              Create Free Account
            </Link>
          </div>
        </div>
      </section>

      {/* ========================= FOOTER ========================= */}
      <footer className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

            <div>
              <Link href="/" className="inline-flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 font-black">
                  RI
                </div>

                <div>
                  <div className="font-black">
                    Rishi Infotech
                  </div>

                  <div className="text-xs font-bold text-blue-400">
                    Learning Hub
                  </div>
                </div>
              </Link>

              <p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">
                Learning, practice, AI tools and developer utilities in one
                place.
              </p>
            </div>

            <div>
              <h3 className="font-black">
                Learning
              </h3>

              <div className="mt-4 space-y-3 text-sm text-slate-400">
                <Link
                  href="/learn"
                  className="block transition hover:text-white"
                >
                  All Subjects
                </Link>

                <Link
                  href="/practice"
                  className="block transition hover:text-white"
                >
                  Practice
                </Link>

                <Link
                  href="/notes"
                  className="block transition hover:text-white"
                >
                  Notes
                </Link>

                <Link
                  href="/downloads"
                  className="block transition hover:text-white"
                >
                  Downloads
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-black">
                Tools
              </h3>

              <div className="mt-4 space-y-3 text-sm text-slate-400">
                <Link
                  href="/ai-hub"
                  className="block transition hover:text-white"
                >
                  AI Hub
                </Link>

                <Link
                  href="/developer-hub"
                  className="block transition hover:text-white"
                >
                  Developer Hub
                </Link>

                <Link
                  href="/dictionary"
                  className="block transition hover:text-white"
                >
                  Dictionary
                </Link>

                <Link
                  href="/translator"
                  className="block transition hover:text-white"
                >
                  Translator
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-black">
                Website
              </h3>

              <div className="mt-4 space-y-3 text-sm text-slate-400">
                <Link
                  href="/blog"
                  className="block transition hover:text-white"
                >
                  Blog
                </Link>

                <Link
                  href="/contact"
                  className="block transition hover:text-white"
                >
                  Contact
                </Link>

                <Link
                  href="/about"
                  className="block transition hover:text-white"
                >
                  About
                </Link>

                <Link
                  href="/register"
                  className="block transition hover:text-white"
                >
                  Create Account
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-slate-800 pt-7 text-center text-sm text-slate-500">
            © 2026 Rishi Infotech Learning Hub. All rights reserved.
          </div>
        </div>
      </footer>

    </main>
  );
}