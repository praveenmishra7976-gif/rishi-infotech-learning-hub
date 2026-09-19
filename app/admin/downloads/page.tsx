"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import {
  Plus,
  Trash2,
  Download,
  FileText,
} from "lucide-react";

interface DownloadFile {
  id: string;
  title: string;
  subject: string;
  file_url: string;
  file_size: string;
}

export default function DownloadsPage() {

  const [files, setFiles] = useState<DownloadFile[]>([]);

  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [url, setUrl] = useState("");
  const [size, setSize] = useState("");

  async function loadFiles() {

    const { data } = await supabase
      .from("downloads")
      .select("*")
      .order("created_at", { ascending: false });

    setFiles(data || []);

  }

  useEffect(() => {

    loadFiles();

  }, []);

  async function addFile() {

    if (!title || !subject || !url) return;

    await supabase.from("downloads").insert({

      title,
      subject,
      file_url: url,
      file_size: size,

    });

    setTitle("");
    setSubject("");
    setUrl("");
    setSize("");

    loadFiles();

  }

  async function deleteFile(id: string) {

    if (!confirm("Delete File?"))
      return;

    await supabase
      .from("downloads")
      .delete()
      .eq("id", id);

    loadFiles();

  }

  return (

    <main className="space-y-8">

      <h1 className="text-5xl font-black">

        Downloads Management

      </h1>

      <div className="bg-white rounded-3xl shadow-lg p-8 space-y-4">

        <input
          placeholder="Title"
          className="border rounded-xl p-4 w-full"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />

        <input
          placeholder="Subject"
          className="border rounded-xl p-4 w-full"
          value={subject}
          onChange={(e)=>setSubject(e.target.value)}
        />

        <input
          placeholder="PDF URL"
          className="border rounded-xl p-4 w-full"
          value={url}
          onChange={(e)=>setUrl(e.target.value)}
        />

        <input
          placeholder="File Size"
          className="border rounded-xl p-4 w-full"
          value={size}
          onChange={(e)=>setSize(e.target.value)}
        />

        <button
          onClick={addFile}
          className="bg-green-600 text-white px-6 py-3 rounded-xl flex gap-2"
        >

          <Plus size={18}/>

          Add File

        </button>

      </div>

      <div className="space-y-5">

        {files.map((file)=>(

          <div
            key={file.id}
            className="bg-white rounded-3xl shadow-lg p-6 flex justify-between"
          >

            <div>

              <h2 className="font-bold text-2xl flex gap-2">

                <FileText/>

                {file.title}

              </h2>

              <p className="mt-2 text-blue-600">

                {file.subject}

              </p>

              <p className="mt-2">

                {file.file_size}

              </p>

              <a
                href={file.file_url}
                target="_blank"
                className="text-green-600 flex gap-2 mt-4"
              >

                <Download/>

                Download

              </a>

            </div>

            <button
              onClick={()=>deleteFile(file.id)}
              className="text-red-600"
            >

              <Trash2/>

            </button>

          </div>

        ))}

      </div>

    </main>

  );

}