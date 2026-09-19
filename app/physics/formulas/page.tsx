export default function PhysicsFormulaPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      <section className="bg-indigo-700 text-white py-16">

        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-5xl font-black">
            Physics Formula Sheet
          </h1>

          <p className="mt-4 text-indigo-100">
            Important formulas for quick revision.
          </p>

        </div>

      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <div className="space-y-6 text-xl">

            <p><b>Speed</b> = Distance / Time</p>

            <p><b>Velocity</b> = Displacement / Time</p>

            <p><b>Force</b> = Mass × Acceleration</p>

            <p><b>Work</b> = Force × Distance</p>

            <p><b>Power</b> = Work / Time</p>

            <p><b>Density</b> = Mass / Volume</p>

            <p><b>Pressure</b> = Force / Area</p>

          </div>

        </div>

      </section>

    </main>
  );
}