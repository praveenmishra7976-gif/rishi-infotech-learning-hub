"use client";

import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

interface Props {
  questions: any[];
}

export default function ExportQuestions({
  questions,
}: Props) {

  function exportExcel() {

    const exportData = questions.map((q) => ({

      Subject: q.subject,

      Chapter: q.chapter,

      Difficulty: q.difficulty,

      Question: q.question,

      Option_A: q.option_a,

      Option_B: q.option_b,

      Option_C: q.option_c,

      Option_D: q.option_d,

      Correct_Answer: q.correct_answer,

      Explanation: q.explanation,

      Marks: q.marks,

      Created_At: q.created_at,

    }));

    const worksheet =
      XLSX.utils.json_to_sheet(exportData);

    const workbook =
      XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "Question Bank"
    );

    const excelBuffer =
      XLSX.write(workbook, {

        bookType: "xlsx",

        type: "array",

      });

    const blob = new Blob(
      [excelBuffer],
      {
        type:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      }
    );

    saveAs(
      blob,
      "Question_Bank.xlsx"
    );

  }

  return (

    <button

      onClick={exportExcel}

      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold"

    >

      Export Excel

    </button>

  );

}