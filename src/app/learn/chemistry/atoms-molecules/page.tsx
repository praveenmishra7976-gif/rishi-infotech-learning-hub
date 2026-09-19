import Link from "next/link";

export default function AtomsMoleculesPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-500">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

          <Link
            href="/learn/chemistry"
            className="text-sm font-medium text-blue-100 hover:text-white"
          >
            ← Back to Chemistry
          </Link>

          <div className="mt-8 flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">

            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-white text-5xl shadow-xl">
              ⚛️
            </div>

            <div>
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
                Atoms & Molecules
              </h1>

              <p className="mt-3 max-w-3xl text-blue-50">
                Learn about atoms, molecules, elements, compounds, atomic
                structure and the basic building blocks of matter.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8">

          <h2 className="text-3xl font-bold text-gray-900">
            What are Atoms and Molecules?
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            Everything around us is made up of matter. Matter is composed of
            extremely small particles called atoms. Atoms combine with one
            another to form molecules and compounds.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">

            <div className="rounded-2xl bg-blue-50 p-6">
              <div className="text-4xl">⚛️</div>

              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Atom
              </h3>

              <p className="mt-2 leading-6 text-gray-600">
                An atom is the smallest unit of an element that retains the
                chemical properties of that element.
              </p>
            </div>

            <div className="rounded-2xl bg-cyan-50 p-6">
              <div className="text-4xl">🧬</div>

              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Molecule
              </h3>

              <p className="mt-2 leading-6 text-gray-600">
                A molecule is formed when two or more atoms chemically combine
                with each other.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Structure of Atom */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <h2 className="text-3xl font-bold text-gray-900">
            Structure of an Atom
          </h2>

          <p className="mt-3 text-gray-600">
            An atom consists mainly of three subatomic particles.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-red-100 bg-red-50 p-6">
              <div className="text-4xl">➕</div>

              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Proton
              </h3>

              <p className="mt-2 text-gray-600">
                Protons have a positive electric charge and are found inside
                the nucleus.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <div className="text-4xl">⚪</div>

              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Neutron
              </h3>

              <p className="mt-2 text-gray-600">
                Neutrons have no electric charge and are located in the
                nucleus.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
              <div className="text-4xl">➖</div>

              <h3 className="mt-4 text-xl font-bold text-gray-900">
                Electron
              </h3>

              <p className="mt-2 text-gray-600">
                Electrons have a negative electric charge and move around the
                nucleus in energy levels.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Elements and Compounds */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        <h2 className="text-3xl font-bold text-gray-900">
          Elements and Compounds
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h3 className="text-2xl font-bold text-blue-700">
              Element
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              An element is a pure substance made up of only one type of atom.
              Examples include hydrogen, oxygen, carbon, iron and gold.
            </p>

            <div className="mt-5 rounded-xl bg-blue-50 p-4 font-semibold text-blue-800">
              Examples: H, O, C, Fe, Au
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
            <h3 className="text-2xl font-bold text-cyan-700">
              Compound
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              A compound is a pure substance formed when two or more different
              elements combine chemically in a fixed ratio.
            </p>

            <div className="mt-5 rounded-xl bg-cyan-50 p-4 font-semibold text-cyan-800">
              Examples: H₂O, CO₂, NaCl
            </div>
          </div>

        </div>
      </section>

      {/* Important Terms */}
      <section className="bg-slate-100 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <h2 className="text-3xl font-bold text-gray-900">
            Important Terms
          </h2>

          <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200">

            <div className="grid grid-cols-2 border-b bg-slate-50 p-4 font-bold text-gray-900">
              <div>Term</div>
              <div>Meaning</div>
            </div>

            <div className="grid grid-cols-2 border-b p-4">
              <div className="font-semibold">Atomic Number</div>
              <div className="text-gray-600">
                Number of protons in the nucleus of an atom.
              </div>
            </div>

            <div className="grid grid-cols-2 border-b p-4">
              <div className="font-semibold">Mass Number</div>
              <div className="text-gray-600">
                Total number of protons and neutrons.
              </div>
            </div>

            <div className="grid grid-cols-2 border-b p-4">
              <div className="font-semibold">Ion</div>
              <div className="text-gray-600">
                An electrically charged atom or group of atoms.
              </div>
            </div>

            <div className="grid grid-cols-2 p-4">
              <div className="font-semibold">Molecule</div>
              <div className="text-gray-600">
                Two or more atoms chemically bonded together.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        <div className="rounded-3xl bg-blue-600 p-8 text-white shadow-xl">

          <h2 className="text-3xl font-bold">
            ⭐ Quick Revision
          </h2>

          <ul className="mt-6 space-y-3 text-blue-50">
            <li>• Atoms are the basic units of elements.</li>
            <li>• Protons have a positive charge.</li>
            <li>• Neutrons have no charge.</li>
            <li>• Electrons have a negative charge.</li>
            <li>• Atoms combine to form molecules.</li>
            <li>• Elements contain only one type of atom.</li>
            <li>• Compounds contain two or more different elements.</li>
            <li>• Atomic number = Number of protons.</li>
            <li>• Mass number = Protons + Neutrons.</li>
          </ul>

        </div>
      </section>

      {/* Navigation */}
      <section className="border-t bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">

          <Link
            href="/learn/chemistry"
            className="rounded-xl border border-gray-200 px-6 py-3 text-center font-semibold text-gray-700 hover:bg-gray-50"
          >
            ← All Chemistry Topics
          </Link>

          <Link
            href="/learn/chemistry/periodic-table"
            className="rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold text-white hover:bg-blue-700"
          >
            Next: Periodic Table →
          </Link>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 text-center text-sm text-slate-400">
        © 2026 Rishi Infotech Learning Hub. All rights reserved.
      </footer>

    </main>
  );
}