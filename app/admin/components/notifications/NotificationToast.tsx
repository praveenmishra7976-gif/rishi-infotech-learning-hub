"use client";

interface Props{

message:string;

show:boolean;

}

export default function NotificationToast({

message,

show,

}:Props){

if(!show) return null;

return(

<div className="fixed bottom-8 right-8 bg-green-600 text-white px-6 py-4 rounded-xl shadow-2xl animate-bounce z-50">

{message}

</div>

);

}