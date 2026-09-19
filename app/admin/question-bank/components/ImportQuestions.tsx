"use client";

import { useState } from "react";
import * as XLSX from "xlsx";

import { importQuestions } from "../lib/importQuestions";
import { validateImport } from "../lib/validateImport";

export default function ImportQuestions() {
  const [loading, setLoading] = useState(false);

  async function handleFile(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    setLoading(true);

    try {
      const buffer = await file.arrayBuffer();

      const workbook = XLSX.read(buffer);

      const sheet =
        workbook.Sheets[
          workbook.SheetNames[0]
        ];

      const rows = XLSX.utils.sheet_to_json(sheet);

      if (rows.length === 0) {
        alert("Excel file is empty.");
        setLoading(false);
        return;
      }

      // Validate Excel Data
      const errors = validateImport(rows as any[]);

      if (errors.length > 0) {
        alert(
          errors
            .map(
              (e) =>
                `Row ${e.row}: ${e.message}`
            )
            .join("\n")
        );

        setLoading(false);
        return;
      }

      // Import into Supabase
      await importQuestions(rows as any[]);

      alert(
        `${rows.length} Questions Imported Successfully`
      );

      // Reset input
      e.target.value = "";
    } catch (error) {
      console.error(error);

      alert(
        "Something went wrong while importing the Excel file."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">

      <h2 className="text-2xl font-bold">
        Import Questions
      </h2>

      <p className="text-gray-500 mt-2">
        Upload an Excel (.xlsx) file to import questions into the Question Bank.
      </p>

      <div className="mt-6">

        <input
          type="file"
          accept=".xlsx"
          onChange={handleFile}
          disabled={loading}
          className="block w-full border border-gray-300 rounded-xl p-3"
        />

      </div>

      {loading && (
        <div className="mt-6">

          <div className="w-full bg-gray-200 rounded-full h-3">

            <div className="bg-blue-600 h-3 rounded-full animate-pulse w-full"></div>

          </div>

          <p className="text-blue-600 mt-3 font-medium">
            Importing questions...
          </p>

        </div>
      )}

      <div className="mt-8 rounded-xl bg-gray-50 border p-5">

        <h3 className="font-semibold mb-3">
          Excel Format
        </h3>

        <pre className="text-sm whitespace-pre-wrap text-gray-700">
subject
chapter
difficulty
question
option_a
option_b
option_c
option_d
correct_answer
explanation
marks
        </pre>

      </div>

    </div>
  );
}