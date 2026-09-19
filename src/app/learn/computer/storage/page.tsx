import Link from "next/link";

const storageTypes = [
  {
    icon: "💽",
    title: "Hard Disk Drive",
    short: "HDD",
    description:
      "A hard disk drive is a magnetic storage device used to store operating systems, applications, documents, videos and other files.",
    points: ["Magnetic storage", "Large capacity", "Moving parts", "Low cost"],
  },
  {
    icon: "⚡",
    title: "Solid State Drive",
    short: "SSD",
    description:
      "An SSD stores data using flash memory and has no moving mechanical parts. It is generally faster than an HDD.",
    points: ["Very fast", "No moving parts", "Low noise", "Fast boot time"],
  },
  {
    icon: "🔑",
    title: "Pen Drive",
    short: "USB Drive",
    description:
      "A pen drive is a small portable flash storage device that connects to a computer through a USB port.",
    points: ["Portable", "USB connection", "Easy file transfer", "Reusable"],
  },
  {
    icon: "📱",
    title: "Memory Card",
    short: "SD / microSD",
    description:
      "Memory cards are small flash storage devices commonly used in smartphones, cameras, tablets and other devices.",
    points: ["Very small", "Portable", "Flash storage", "Used in mobile devices"],
  },
  {
    icon: "💿",
    title: "Optical Disc",
    short: "CD / DVD",
    description:
      "Optical discs store information using laser technology and include CDs, DVDs and other optical media.",
    points: ["Laser technology", "CD", "DVD", "Portable"],
  },
  {
    icon: "☁️",
    title: "Cloud Storage",
    short: "Online Storage",
    description:
      "Cloud storage allows users to store files on remote servers and access them through the internet.",
    points: ["Internet based", "Remote storage", "Access anywhere", "Backup"],
  },
];

const storageComparison = [
  ["HDD", "Magnetic", "Moderate", "Large", "Yes"],
  ["SSD", "Flash", "Very Fast", "Large", "No"],
  ["Pen Drive", "Flash", "Fast", "Small–Large", "No"],
  ["Memory Card", "Flash", "Fast", "Small–Large", "No"],
  ["CD/DVD", "Optical", "Slow–Moderate", "Limited", "No"],
  ["Cloud", "Online", "Depends on Internet", "Flexible", "No"],
];

const importantPoints = [
  "Storage is used to save data and information for future use.",
  "HDD uses magnetic technology to store data.",
  "SSD uses flash memory and has no moving mechanical parts.",
  "SSD is generally faster than HDD.",
  "Pen drives use flash memory.",
  "Memory cards are commonly used in phones and cameras.",
  "CDs and DVDs are optical storage devices.",
  "Cloud storage stores data on remote servers.",
  "Secondary storage is generally non-volatile.",
  "Storage capacity is commonly measured in GB and TB.",
];

export default function StoragePage() {
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
              💾
            </div>

            <div>
              <p className="font-semibold text-blue-100">
                CHAPTER 06
              </p>

              <h1 className="text-3xl font-black text-white sm:text-5xl">
                Storage Devices
              </h1>
            </div>

          </div>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-blue-50">
            Learn about HDD, SSD, pen drives, memory cards, optical discs,
            cloud storage and different storage technologies.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <a
              href="#learn"
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
            Storage Devices
          </span>

        </div>
      </div>

      {/* CONTENT */}
      <section id="learn" className="py-16">

        <div className="mx-auto max-w-7xl px-4 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[1fr_320px]">

            {/* MAIN */}
            <article>

              {/* INTRO */}
              <section>

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Chapter 06
                </p>

                <h2 className="mt-3 text-4xl font-black text-slate-900">
                  What is Computer Storage?
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Computer storage is used to save digital data such as
                  documents, photos, videos, applications and operating
                  system files. Storage allows information to remain
                  available for future use.
                </p>

                <div className="mt-8 rounded-3xl bg-slate-900 p-8 text-white">

                  <div className="text-6xl">
                    💾
                  </div>

                  <h3 className="mt-5 text-2xl font-black">
                    Storage = Saving Data
                  </h3>

                  <p className="mt-3 leading-7 text-slate-300">
                    Storage devices provide a way to save information
                    permanently or for long-term use.
                  </p>

                </div>

              </section>

              {/* STORAGE TYPES */}
              <section className="mt-16">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Storage Technologies
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Types of Storage Devices
                </h2>

                <div className="mt-8 grid gap-5 md:grid-cols-2">

                  {storageTypes.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                    >

                      <div className="flex items-start justify-between">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                          {item.icon}
                        </div>

                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">
                          {item.short}
                        </span>

                      </div>

                      <h3 className="mt-5 text-xl font-black text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>

                      <div className="mt-5 grid grid-cols-2 gap-2">

                        {item.points.map((point) => (
                          <div
                            key={point}
                            className="rounded-xl bg-slate-50 p-3 text-xs font-semibold text-slate-600"
                          >
                            ✓ {point}
                          </div>
                        ))}

                      </div>

                    </div>
                  ))}

                </div>

              </section>

              {/* HDD */}
              <section className="mt-16 rounded-3xl bg-blue-50 p-8">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Storage Device
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  HDD — Hard Disk Drive
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  A hard disk drive uses magnetic disks called platters
                  to store digital information. HDDs are available in
                  different capacities and are commonly used for storing
                  large amounts of data.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  {[
                    "Magnetic storage",
                    "Large capacity",
                    "Lower cost per GB",
                    "Contains moving parts",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl bg-white p-4 text-sm font-semibold text-slate-700"
                    >
                      ✓ {item}
                    </div>
                  ))}

                </div>

              </section>

              {/* SSD */}
              <section className="mt-16 rounded-3xl bg-slate-900 p-8 text-white">

                <p className="font-bold uppercase tracking-widest text-cyan-400">
                  Modern Storage
                </p>

                <h2 className="mt-3 text-3xl font-black">
                  SSD — Solid State Drive
                </h2>

                <p className="mt-5 leading-8 text-slate-300">
                  An SSD stores data using flash memory. Unlike an HDD,
                  an SSD does not have spinning platters or other moving
                  mechanical parts.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  {[
                    "Very fast performance",
                    "No moving parts",
                    "Quiet operation",
                    "Fast boot and application loading",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl bg-white/5 p-4 text-sm text-slate-300"
                    >
                      ✓ {item}
                    </div>
                  ))}

                </div>

              </section>

              {/* STORAGE COMPARISON */}
              <section className="mt-16">

                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Quick Comparison
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Storage Device Comparison
                </h2>

                <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200">

                  <div className="hidden grid-cols-5 bg-slate-900 text-sm font-bold text-white md:grid">

                    <div className="p-4">Device</div>
                    <div className="p-4">Technology</div>
                    <div className="p-4">Speed</div>
                    <div className="p-4">Capacity</div>
                    <div className="p-4">Moving Parts</div>

                  </div>

                  {storageComparison.map((row, index) => (
                    <div
                      key={row[0]}
                      className={`grid grid-cols-1 md:grid-cols-5 ${
                        index !== storageComparison.length - 1
                          ? "border-b border-slate-200"
                          : ""
                      }`}
                    >

                      <div className="p-4 font-black text-blue-600">
                        {row[0]}
                      </div>

                      <div className="p-4 text-sm text-slate-600">
                        <span className="font-bold md:hidden">
                          Technology:{" "}
                        </span>
                        {row[1]}
                      </div>

                      <div className="p-4 text-sm text-slate-600">
                        <span className="font-bold md:hidden">
                          Speed:{" "}
                        </span>
                        {row[2]}
                      </div>

                      <div className="p-4 text-sm text-slate-600">
                        <span className="font-bold md:hidden">
                          Capacity:{" "}
                        </span>
                        {row[3]}
                      </div>

                      <div className="p-4 text-sm text-slate-600">
                        <span className="font-bold md:hidden">
                          Moving Parts:{" "}
                        </span>
                        {row[4]}
                      </div>

                    </div>
                  ))}

                </div>

              </section>

              {/* STORAGE UNITS */}
              <section className="mt-16">

                <p className="font-bold uppercase tracking-widest text-indigo-600">
                  Quick Revision
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Storage Units
                </h2>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                  {[
                    ["Bit", "Smallest unit of digital information"],
                    ["Byte", "8 bits"],
                    ["KB", "1,024 bytes"],
                    ["MB", "1,024 KB"],
                    ["GB", "1,024 MB"],
                    ["TB", "1,024 GB"],
                  ].map(([unit, description]) => (
                    <div
                      key={unit}
                      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                    >
                      <h3 className="font-black text-blue-600">
                        {unit}
                      </h3>

                      <p className="mt-2 text-sm text-slate-600">
                        {description}
                      </p>
                    </div>
                  ))}

                </div>

              </section>

              {/* BACKUP */}
              <section className="mt-16 rounded-3xl border border-cyan-100 bg-cyan-50 p-8">

                <p className="font-bold uppercase tracking-widest text-cyan-600">
                  Data Safety
                </p>

                <h2 className="mt-3 text-3xl font-black text-slate-900">
                  Why is Backup Important?
                </h2>

                <p className="mt-5 leading-8 text-slate-600">
                  A backup is an additional copy of important data.
                  Backups can help protect files against accidental
                  deletion, hardware failure, malware and other problems.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">

                  {[
                    ["💾", "External Backup"],
                    ["☁️", "Cloud Backup"],
                    ["🔐", "Secure Storage"],
                  ].map(([icon, title]) => (
                    <div
                      key={title}
                      className="rounded-2xl bg-white p-5 text-center"
                    >
                      <div className="text-3xl">{icon}</div>
                      <h3 className="mt-3 font-black text-slate-900">
                        {title}
                      </h3>
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
              <section className="mt-16 rounded-3xl bg-gradient-to-br from-blue-700 to-cyan-500 p-8 text-white shadow-2xl">

                <p className="font-bold uppercase tracking-widest text-blue-100">
                  Test Your Knowledge
                </p>

                <h2 className="mt-3 text-3xl font-black">
                  Ready for Storage Devices MCQs?
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-blue-50">
                  Test your knowledge of HDD, SSD, pen drives, memory
                  cards, optical discs and cloud storage.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">

                  <Link
                    href="/practice/mcq"
                    className="rounded-xl bg-white px-7 py-3.5 text-center font-bold text-blue-700 shadow-lg"
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
                    ["01", "What is Storage?", "#learn"],
                    ["02", "Storage Devices", "#storage-types"],
                    ["03", "HDD", "#hdd"],
                    ["04", "SSD", "#ssd"],
                    ["05", "Comparison", "#comparison"],
                    ["06", "Storage Units", "#units"],
                    ["07", "Backup", "#backup"],
                    ["08", "Important Points", "#important-points"],
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
                  Chapter Progress
                </h3>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-blue-200">
                  <div className="h-full w-2/3 rounded-full bg-blue-600" />
                </div>

                <p className="mt-3 text-xs text-blue-800">
                  Continue learning to complete this chapter.
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
            href="/learn/computer/input-output"
            className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-center font-bold text-slate-700 hover:border-blue-300 hover:text-blue-600"
          >
            ← Previous: Input & Output
          </Link>

          <Link
            href="/learn/computer/internet-networking"
            className="rounded-xl bg-blue-600 px-6 py-3 text-center font-bold text-white hover:bg-blue-700"
          >
            Next: Internet & Networking →
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