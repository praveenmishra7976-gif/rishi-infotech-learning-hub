"use client";

const notifications=[

{
title:"New User Registered",
time:"2 min ago"
},

{
title:"Physics Notes Updated",
time:"10 min ago"
},

{
title:"AI Tool Published",
time:"20 min ago"
},

{
title:"Quiz Added",
time:"35 min ago"
},

{
title:"Website Backup Completed",
time:"1 hour ago"
}

];

export default function NotificationList(){

return(

<div className="absolute right-0 mt-4 w-96 bg-white rounded-2xl shadow-2xl border z-50">

<div className="p-5 border-b">

<h2 className="text-xl font-bold">

Notifications

</h2>

</div>

<div className="max-h-96 overflow-y-auto">

{notifications.map((item,index)=>(

<div

key={index}

className="border-b p-5 hover:bg-gray-50 transition"

>

<h3 className="font-semibold">

{item.title}

</h3>

<p className="text-sm text-gray-500 mt-1">

{item.time}

</p>

</div>

))}

</div>

</div>

);

}