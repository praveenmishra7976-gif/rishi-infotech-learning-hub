"use client";

import { useEffect, useState } from "react";
import ConversationList from "./components/ConversationList";
import ChatWindow from "./components/ChatWindow";
import { getConversations } from "./lib/getConversations";
import { supabase } from "@/app/lib/supabase";

export default function ChatPage() {
  const [conversations, setConversations] = useState<any[]>([]);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    async function load() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const data = await getConversations(user.id);

      setConversations(data);

      if (data.length) {
        setSelected(data[0].id);
      }
    }

    load();
  }, []);

  return (
    <main className="max-w-7xl mx-auto py-10 px-6">

      <h1 className="text-5xl font-bold text-blue-700 mb-8">
        💬 Student Teacher Chat
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">

        <ConversationList
          conversations={conversations}
          onSelect={setSelected}
        />

        <div className="lg:col-span-2">
          {selected && (
            <ChatWindow
              conversationId={selected}
            />
          )}
        </div>

      </div>

    </main>
  );
}