const users=[

"Rishi",

"Amit",

"Rahul",

"Priya",

"Anjali"

];

export default function LatestUsers(){

return(

<div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

<h2 className="text-2xl font-bold">

Latest Users

</h2>

<ul className="space-y-4 mt-8">

{users.map((user)=>(

<li key={user}>

{user}

</li>

))}

</ul>

</div>

);

}