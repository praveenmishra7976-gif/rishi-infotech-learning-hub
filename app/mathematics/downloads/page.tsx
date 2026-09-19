import { Download } from "lucide-react";

const files = [
  "Mathematics Notes PDF",
  "Formula Sheet",
  "Previous Year Questions",
  "Practice Workbook",
];

export default function MathematicsDownloadsPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      <section className="bg-green-600 text-white py-16">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-black">
            Mathematics Downloads
          </h1>

          <p className="mt-3 text-green-100">
            Download Mathematics Notes & PDFs
          </p>

        </div>

      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">

        {files.map((file) => (

          <div
            key={file}
            className="bg-white rounded-2xl shadow-lg p-6 flex justify-between items-center mb-6"
          >

            <h2 className="text-xl font-semibold">
              {file}
            </h2>

            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl flex items-center gap-2">

              <Download size={18} />

              Download

            </button>

          </div>

        ))}

      </section>

    </main>
  );
}