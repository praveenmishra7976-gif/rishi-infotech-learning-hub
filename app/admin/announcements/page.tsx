import ExcelImport from "../components/excel/ExcelImport";
import ExcelExport from "../components/excel/ExcelExport";
<div className="grid md:grid-cols-2 gap-8 mt-10">

<ExcelImport />

<ExcelExport />

</div>
export default function AnnouncementPage(){

return(

<div>

<h1 className="text-4xl font-bold text-blue-700">

Announcements

</h1>

<div className="bg-white rounded-3xl shadow-lg p-8 mt-8">

<input

placeholder="Announcement Title"

className="w-full border rounded-xl p-4 mb-4"

/>

<textarea

rows={8}

placeholder="Announcement"

className="w-full border rounded-xl p-4"

/>

<button

className="mt-6 bg-blue-700 text-white px-8 py-3 rounded-xl"

>

Publish

</button>

</div>

</div>

);

}