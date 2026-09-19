"use client";

import { useState } from "react";
import { createClient } from "@/lib/auth/client";
import { useRouter } from "next/navigation";

export default function LoginForm() {

  const router = useRouter();

  const supabase = createClient();

  const [email,setEmail]=useState("");

  const [password,setPassword]=useState("");

  async function login(

    e:React.FormEvent

  ){

    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({

      email,

      password,

    });

    if(error){

      alert(error.message);

      return;

    }

    router.push("/admin");

    router.refresh();

  }

  return(

<form

onSubmit={login}

className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md space-y-6"

>

<h1 className="text-3xl font-bold text-blue-700">

Admin Login

</h1>

<input

type="email"

placeholder="Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

className="w-full border rounded-xl p-4"

/>

<input

type="password"

placeholder="Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

className="w-full border rounded-xl p-4"

/>

<button

className="w-full bg-blue-700 text-white py-4 rounded-xl"

>

Login

</button>

</form>

);

}