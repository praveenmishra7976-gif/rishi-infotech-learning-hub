const stats=[

["Physics",120],

["Chemistry",98],

["Mathematics",150],

["Computer",82],

["Sanskrit",45]

];

export default function SubjectStats(){

return(

<div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

<h2 className="text-2xl font-bold">

Subject Statistics

</h2>

<div className="space-y-5 mt-8">

{stats.map(([name,count])=>(

<div key={name}>

<div className="flex justify-between">

<span>{name}</span>

<span>{count}</span>

</div>

<div className="bg-gray-200 rounded-full h-3 mt-2">

<div

className="bg-blue-600 h-3 rounded-full"

style={{width:`${Number(count)/2}%`}}

></div>

</div>

</div>

))}

</div>

</div>

);

}