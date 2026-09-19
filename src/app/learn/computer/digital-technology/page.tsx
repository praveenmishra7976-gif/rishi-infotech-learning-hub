import Link from "next/link";

const technologies = [
  {
    icon: "☁️",
    title: "Cloud Computing",
    text: "Cloud computing provides computing resources such as storage, servers and applications through internet-based services.",
  },
  {
    icon: "🤖",
    title: "Artificial Intelligence",
    text: "AI enables computers and software to perform tasks that normally require human intelligence, such as recognizing patterns and understanding language.",
  },
  {
    icon: "📱",
    title: "Mobile Technology",
    text: "Mobile technology allows people to communicate, access information and use applications through smartphones and other portable devices.",
  },
  {
    icon: "🌐",
    title: "Internet of Things",
    text: "IoT connects physical devices to networks so they can collect, exchange and use data.",
  },
  {
    icon: "📊",
    title: "Big Data",
    text: "Big data refers to very large and complex collections of information that can be analyzed to discover useful patterns.",
  },
  {
    icon: "🔗",
    title: "Blockchain",
    text: "Blockchain is a distributed digital record system that stores information in linked blocks.",
  },
];

const digitalServices = [
  ["🏦", "Digital Banking", "Banking services can be accessed through websites and mobile applications."],
  ["🛒", "E-Commerce", "People can purchase products and services using online platforms."],
  ["🎓", "Online Education", "Students can access courses, videos, notes and learning resources online."],
  ["🏥", "Digital Healthcare", "Technology can support appointments, records, communication and healthcare services."],
  ["💳", "Digital Payments", "Electronic payment systems allow people to transfer money and pay for products or services."],
  ["🗺️", "Online Navigation", "Digital maps and navigation services help users find locations and routes."],
];

const advantages = [
  ["⚡", "Speed", "Digital technology enables fast communication and processing."],
  ["🌍", "Connectivity", "People can communicate and share information across distances."],
  ["📚", "Access to Information", "Large amounts of information can be accessed through digital devices."],
  ["🤝", "Productivity", "Digital tools can help people complete tasks more efficiently."],
  ["💡", "Innovation", "Technology creates new products, services and opportunities."],
  ["💰", "Convenience", "Many services can be accessed from home or from mobile devices."],
];

const importantPoints = [
  "Digital technology uses electronic systems to create, process, store and communicate information.",
  "Cloud computing provides computing resources through internet-based services.",
  "Artificial Intelligence enables computers to perform tasks associated with human intelligence.",
  "Mobile technology allows computing and communication through portable devices.",
  "IoT connects physical devices to networks and allows them to exchange data.",
  "Big data involves very large and complex datasets.",
  "Digital payments allow electronic transfer of money.",
  "E-commerce allows products and services to be bought and sold online.",
  "Digital technology is widely used in education, healthcare, banking, business and communication.",
  "Users should consider privacy and security when using digital services.",
];

const comparison = [
  ["Traditional", "Paper documents", "Physical stores", "Cash payments"],
  ["Digital", "Digital documents", "Online stores", "Electronic payments"],
  ["Traditional", "Classroom-only learning", "Physical records", "Face-to-face communication"],
  ["Digital", "Online learning", "Digital records", "Video and instant communication"],
];

export default function DigitalTechnologyPage() {
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

        <div className="relative mx-auto max-w-7xl px-4 py-14 lg:px-8 lg:py-20">

          <Link
            href="/learn/computer"
            className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/20"
          >
            ← Computer Chapters
          </Link>

          <div className="mt-8 flex items-center gap-5">

            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-white text-5xl shadow-xl">
              📱
            </div>

            <div>

              <p className="font-semibold text-blue-100">
                CHAPTER 09
              </p>

              <h2 className="text-3xl font-black text-white sm:text-5xl">
                Digital Technology
              </h2>

            </div>

          </div>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-blue-50">
            Explore modern digital technologies including cloud computing,
            artificial intelligence, mobile technology, IoT, big data and
            digital services.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <a
              href="#learn"
              className="rounded-xl bg-white px-7 py-3.5 text-center font-bold text-blue-700 shadow-xl hover:scale-105"
            >
              📱 Start Learning
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
            Digital Technology
          </span>

        </div>

      </div>

      {/* CONTENT */}
      <section id="learn" className="py-16">

        <div className="mx-auto max-w-7xl px-4 lg:px-8">

          {/* INTRO */}
          <section>

            <p className="font-bold uppercase tracking-widest text-blue-600">
              Chapter 09
            </p>

            <h2 className="mt-3 text-4xl font-black text-slate-900">
              What is Digital Technology?
            </h2>

            <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
              Digital technology refers to electronic systems and devices
              that create, process, store and communicate information in
              digital form. It has changed the way people learn, work,
              communicate, shop and access services.
            </p>

            <div className="mt-8 rounded-3xl bg-blue-50 p-8">

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                {[
                  ["📱", "Devices", "Smartphones, computers and tablets"],
                  ["🌐", "Networks", "Internet and communication networks"],
                  ["☁️", "Services", "Cloud and online services"],
                  ["🤖", "Intelligence", "AI and automated systems"],
                ].map(([icon, title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl bg-white p-5 text-center shadow-sm"
                  >
                    <div className="text-3xl">{icon}</div>

                    <h3 className="mt-3 font-black text-slate-900">
                      {title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      {text}
                    </p>
                  </div>
                ))}

              </div>

            </div>

          </section>

          {/* TECHNOLOGIES */}
          <section id="technologies" className="mt-16">

            <p className="font-bold uppercase tracking-widest text-cyan-600">
              Modern Technologies
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900">
              Major Digital Technologies
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

              {technologies.map((item) => (
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

          {/* CLOUD */}
          <section id="cloud" className="mt-16 rounded-3xl bg-slate-900 p-8 text-white md:p-10">

            <p className="font-bold uppercase tracking-widest text-cyan-400">
              Technology 01
            </p>

            <h2 className="mt-3 text-3xl font-black">
              ☁️ Cloud Computing
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-slate-300">
              Cloud computing allows users and organizations to access
              computing resources such as storage, servers, databases and
              applications through internet-based services.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {[
                "Online Storage",
                "Cloud Applications",
                "Remote Access",
                "Scalable Resources",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white/5 p-5 text-center font-semibold"
                >
                  ☁️ {item}
                </div>
              ))}

            </div>

          </section>

          {/* AI */}
          <section id="ai" className="mt-16">

            <p className="font-bold uppercase tracking-widest text-indigo-600">
              Technology 02
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900">
              🤖 Artificial Intelligence
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-slate-600">
              Artificial Intelligence is a field of computing that focuses
              on creating systems capable of performing tasks such as
              recognizing patterns, understanding language, making
              predictions and assisting with decisions.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

              {[
                ["💬", "AI Chatbots", "Answer questions and assist users."],
                ["👁️", "Computer Vision", "Analyze and understand images."],
                ["🎙️", "Voice AI", "Process spoken language and commands."],
                ["📊", "Data Analysis", "Find patterns in information."],
              ].map(([icon, title, text]) => (
                <div
                  key={title}
                  className="rounded-3xl border border-slate-200 p-6"
                >

                  <div className="text-4xl">
                    {icon}
                  </div>

                  <h3 className="mt-4 font-black text-slate-900">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {text}
                  </p>

                </div>
              ))}

            </div>

          </section>

          {/* MOBILE */}
          <section id="mobile" className="mt-16 rounded-3xl bg-blue-50 p-8">

            <p className="font-bold uppercase tracking-widest text-blue-600">
              Technology 03
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900">
              📱 Mobile Technology
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Mobile technology allows users to communicate, access
              information, use applications, make payments and perform
              many computing tasks using portable devices.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {[
                "Smartphones",
                "Mobile Applications",
                "Mobile Internet",
                "GPS & Navigation",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white p-5 text-center font-bold text-slate-700"
                >
                  📱 {item}
                </div>
              ))}

            </div>

          </section>

          {/* IOT */}
          <section id="iot" className="mt-16">

            <p className="font-bold uppercase tracking-widest text-cyan-600">
              Technology 04
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900">
              🌐 Internet of Things
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-slate-600">
              The Internet of Things, commonly called IoT, connects
              physical devices to networks so they can collect, exchange
              and use data.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-3">

              {[
                ["🏠", "Smart Home", "Connected lights, appliances and security devices."],
                ["⌚", "Wearables", "Smart watches and health or activity devices."],
                ["🏭", "Smart Industry", "Connected machines and monitoring systems."],
              ].map(([icon, title, text]) => (
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

          {/* DIGITAL SERVICES */}
          <section id="services" className="mt-16">

            <p className="font-bold uppercase tracking-widest text-blue-600">
              Everyday Applications
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900">
              Digital Services
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

              {digitalServices.map(([icon, title, text]) => (
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

          {/* ADVANTAGES */}
          <section id="advantages" className="mt-16">

            <p className="font-bold uppercase tracking-widest text-green-600">
              Benefits
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900">
              Advantages of Digital Technology
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

              {advantages.map(([icon, title, text]) => (
                <div
                  key={title}
                  className="rounded-3xl border border-slate-200 bg-white p-6"
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

          {/* COMPARISON */}
          <section id="comparison" className="mt-16">

            <p className="font-bold uppercase tracking-widest text-indigo-600">
              Quick Comparison
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-900">
              Traditional vs Digital
            </h2>

            <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200">

              <div className="hidden grid-cols-3 bg-slate-900 text-sm font-bold text-white md:grid">

                <div className="p-4">
                  Category
                </div>

                <div className="p-4">
                  Traditional
                </div>

                <div className="p-4">
                  Digital
                </div>

              </div>

              {comparison.map((row, index) => (
                <div
                  key={`${row[0]}-${index}`}
                  className={`grid grid-cols-1 md:grid-cols-3 ${
                    index !== comparison.length - 1
                      ? "border-b border-slate-200"
                      : ""
                  }`}
                >

                  <div className="p-4 font-black text-blue-600">
                    <span className="font-bold md:hidden">
                      Category:{" "}
                    </span>
                    {row[0]}
                  </div>

                  <div className="p-4 text-sm text-slate-600">
                    <span className="font-bold md:hidden">
                      Traditional:{" "}
                    </span>
                    {row[1]}
                  </div>

                  <div className="p-4 text-sm text-slate-600">
                    <span className="font-bold md:hidden">
                      Digital:{" "}
                    </span>
                    {row[2]}
                  </div>

                </div>
              ))}

            </div>

          </section>

          {/* RESPONSIBLE USE */}
          <section id="responsible-use" className="mt-16 rounded-3xl bg-slate-900 p-8 text-white md:p-10">

            <p className="font-bold uppercase tracking-widest text-cyan-400">
              Responsible Technology
            </p>

            <h2 className="mt-3 text-3xl font-black">
              Use Digital Technology Responsibly
            </h2>

            <p className="mt-5 max-w-4xl leading-8 text-slate-300">
              Digital technology provides many benefits, but users should
              also consider privacy, security, responsible use and the
              accuracy of information found online.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              {[
                "Protect personal information",
                "Use strong account security",
                "Verify important information",
                "Respect copyright and digital rights",
                "Avoid harmful or illegal activities",
                "Use technology in a responsible manner",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white/5 p-5 text-sm text-slate-200"
                >
                  ✓ {item}
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
              Ready for Digital Technology MCQs?
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-blue-50">
              Test your understanding of cloud computing, AI, mobile
              technology, IoT and digital services.
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
            href="/learn/computer/cyber-security"
            className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-center font-bold text-slate-700 hover:border-blue-300 hover:text-blue-600"
          >
            ← Previous: Cyber Security
          </Link>

          <Link
            href="/learn/computer"
            className="rounded-xl bg-blue-600 px-6 py-3 text-center font-bold text-white hover:bg-blue-700"
          >
            Computer Chapters →
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