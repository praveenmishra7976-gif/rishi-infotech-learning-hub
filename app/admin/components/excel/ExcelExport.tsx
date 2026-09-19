"use client";

import * as XLSX from "xlsx";

export default function ExcelExport(){

function exportExcel(){

const data=[

{

Name:"Physics",

Chapter:"Motion",

Notes:"Completed"

},

{

Name:"Chemistry",

Chapter:"Atoms",

Notes:"Completed"

}

];

const worksheet=XLSX.utils.json_to_sheet(data);

const workbook=XLSX.utils.book_new();

XLSX.utils.book_append_sheet(

workbook,

worksheet,

"Notes"

);

XLSX.writeFile(

workbook,

"Notes.xlsx"

);

}

return(

<div className="bg-white rounded-2xl shadow-lg p-6">

<h2 className="text-2xl font-bold">

Export Excel

</h2>

<button

onClick={exportExcel}

className="mt-6 bg-blue-700 text-white px-8 py-3 rounded-xl"

>

Download Excel

</button>

</div>

);

}