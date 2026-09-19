"use client";

import { Bell } from "lucide-react";
import { useState } from "react";
import NotificationList from "./NotificationList";

export default function NotificationBell() {

  const [open,setOpen]=useState(false);

  return(

<div className="relative">

<button

onClick={()=>setOpen(!open)}

className="relative p-3 rounded-full hover:bg-gray-100 transition"

>

<Bell size={24}/>

<span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">

3

</span>

</button>

{open && <NotificationList />}

</div>

);

}