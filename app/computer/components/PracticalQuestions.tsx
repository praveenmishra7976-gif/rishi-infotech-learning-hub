"use client";

const practicalQuestions = [
  { id: 1, question: "Create a folder named Computer on Desktop." },
  { id: 2, question: "Create a Word document and save it." },
  { id: 3, question: "Create an Excel sheet and enter student marks." },
  { id: 4, question: "Create a PowerPoint presentation with 5 slides." },
  { id: 5, question: "Copy, Cut and Paste a file." },
  { id: 6, question: "Compress a folder into a ZIP file." },
  { id: 7, question: "Search a file using Windows Search." },
  { id: 8, question: "Create a Gmail account." },
];

export default function PracticalQuestions() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">
        Practical Questions
      </h2>

      <div className="space-y-4">
        {practicalQuestions.map((item) => (
          <div
            key={item.id}
            className="border rounded-xl p-5 hover:border-blue-600 hover:bg-blue-50 transition"
          >
            <h3 className="font-semibold">
              {item.id}. {item.question}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}