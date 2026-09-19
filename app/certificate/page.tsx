"use client";

import { useState } from "react";
import jsPDF from "jspdf";
import Link from "next/link";
import { Download, Award, Home } from "lucide-react";

export default function CertificatePage() {

  const [name, setName] = useState("");

  const score =
    typeof window !== "undefined"
      ? Number(localStorage.getItem("quizScore") || 0)
      : 0;

  const total =
    typeof window !== "undefined"
      ? Number(localStorage.getItem("quizTotal") || 0)
      : 0;

  const percentage =
    total > 0 ? Math.round((score / total) * 100) : 0;

  function downloadCertificate() {

    if (!name) {
      alert("Please Enter Student Name");
      return;
    }

    const pdf = new jsPDF("landscape");

    pdf.setFont("helvetica", "bold");

    pdf.setFontSize(30);

    pdf.text("CERTIFICATE OF ACHIEVEMENT", 105, 35, {
      align: "center",
    });

    pdf.setFontSize(18);

    pdf.text("This Certificate is Proudly Presented To", 105, 60, {
      align: "center",
    });

    pdf.setFontSize(28);

    pdf.text(name, 105, 82, {
      align: "center",
    });

    pdf.setFontSize(18);

    pdf.text(
      `For Successfully Completing The Quiz With ${percentage}%`,
      105,
      105,
      {
        align: "center",
      }
    );

    pdf.setFontSize(16);

    pdf.text(
      `Score : ${score} / ${total}`,
      105,
      120,
      {
        align: "center",
      }
    );

    pdf.text(
      `Date : ${new Date().toLocaleDateString()}`,
      105,
      135,
      {
        align: "center",
      }
    );

    pdf.setFontSize(14);

    pdf.text(
      "Rishi Infotech Learning Hub",
      105,
      175,
      {
        align: "center",
      }
    );

    pdf.save(`${name}-Certificate.pdf`);

  }

  return (

<main className="min-h-screen bg-slate-100">

<section className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white py-16">

<div className="max-w-6xl mx-auto px-6">

<div className="flex items-center gap-4">

<Award size={60}/>

<div>

<h1 className="text-5xl font-black">

Certificate Generator

</h1>

<p className="mt-3">

Download Professional PDF Certificate

</p>

</div>

</div>

</div>

</section>

<section className="max-w-4xl mx-auto py-16 px-6">

<div className="bg-white rounded-3xl shadow-xl p-10">

<label className="font-bold">

Student Name

</label>

<input

value={name}

onChange={(e)=>setName(e.target.value)}

placeholder="Enter Your Name"

className="w-full border rounded-xl p-4 mt-3"

/>

<div className="grid md:grid-cols-3 gap-6 mt-10">

<div className="bg-blue-100 rounded-2xl p-6 text-center">

<h2 className="text-3xl font-black">

{score}

</h2>

<p>

Score

</p>

</div>

<div className="bg-green-100 rounded-2xl p-6 text-center">

<h2 className="text-3xl font-black">

{total}

</h2>

<p>

Total

</p>

</div>

<div className="bg-yellow-100 rounded-2xl p-6 text-center">

<h2 className="text-3xl font-black">

{percentage}%

</h2>

<p>

Percentage

</p>

</div>

</div>

<button

onClick={downloadCertificate}

className="w-full mt-10 bg-green-600 hover:bg-green-700 transition text-white py-4 rounded-2xl flex justify-center items-center gap-3 text-lg font-bold"

>

<Download/>

Download Certificate

</button>

<Link

href="/"

className="w-full mt-5 bg-blue-600 hover:bg-blue-700 transition text-white py-4 rounded-2xl flex justify-center items-center gap-3 text-lg font-bold"

>

<Home/>

Home

</Link>

</div>

</section>

</main>

  );

}