import { FileText } from "lucide-react";

const papers = [

{
year:"2025",
question:"State Newton's Second Law of Motion."
},

{
year:"2024",
question:"Derive the equation of motion v²=u²+2as."
},

{
year:"2023",
question:"Explain Universal Law of Gravitation."
},

{
year:"2022",
question:"Define Work, Energy and Power."
},

{
year:"2021",
question:"Explain SHM with diagram."
}

];

export default function PreviousYearQuestions(){

return(

<div className="bg-white rounded-3xl shadow-xl p-10 mt-10">

<div className="flex gap-3 items-center mb-8">

<FileText className="text-red-700"/>

<h2 className="text-3xl font-bold">

Previous Year Questions

</h2>

</div>

<div className="space-y-5">

{papers.map((paper,index)=>(

<div
key={index}
className="border rounded-xl p-5 hover:bg-red-50"
>

<h3 className="font-bold text-red-700">

{paper.year}

</h3>

<p className="mt-2">

{paper.question}

</p>

</div>

))}

</div>

</div>

);

}