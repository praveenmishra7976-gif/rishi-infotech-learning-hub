"use client";

import * as XLSX from "xlsx";

export default function ExcelImport() {

  function handleImport(
    e: React.ChangeEvent<HTMLInputElement>
  ) {

    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {

      const data = event.target?.result;

      const workbook = XLSX.read(data, {
        type: "binary",
      });

      const sheet =
        workbook.Sheets[
          workbook.SheetNames[0]
        ];

      const json = XLSX.utils.sheet_to_json(sheet);

      console.log(json);

      alert("Excel Imported Successfully");

    };

    reader.readAsBinaryString(file);

  }

  return (

    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold">

        Import Excel

      </h2>

      <input

        type="file"

        accept=".xlsx,.xls"

        onChange={handleImport}

        className="mt-6"

      />

    </div>

  );

}