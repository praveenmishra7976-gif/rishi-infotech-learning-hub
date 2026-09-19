"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function RichTextEditor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Start writing your notes...</p>",
  });

  if (!editor) return null;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="border rounded-xl min-h-[350px] p-4">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}