"use client";

import { useEffect, useState } from "react";
import MessageBubble from "./MessageBubble";
import { getMessages } from "../lib/getMessages";
import { sendMessage } from "../lib/sendMessage";
import useRealtimeMessages from "../hooks/useRealtimeMessages";
import { supabase } from "@/app/lib/supabase";

export default function ChatWindow({
  conversationId,
}: {
  conversationId: string;
}) {
  const [messages, setMessages] = useState<any[]>([]);
  const [text, setText] = useState("");
  const [userId, setUserId] = useState("");

  async function loadMessages() {
    const data = await getMessages(conversationId);
    setMessages(data);
  }

  useRealtimeMessages(conversationId, loadMessages);

  useEffect(() => {
    loadMessages();

    async function loadUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) setUserId(user.id);
    }

    loadUser();
  }, [conversationId]);

  async function handleSend() {
    if (!text.trim()) return;

    await sendMessage(conversationId, userId, text);

    setText("");

    loadMessages();
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl flex flex-col h-[700px]">

      <div className="bg-blue-700 text-white p-5 rounded-t-3xl">
        <h2 className="text-xl font-bold">
          Conversation
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">

        {messages.map((msg) => (
          <MessageBubble
            key={msg.id}
            mine={msg.sender_id === userId}
            message={msg.message}
          />
        ))}

      </div>

      <div className="border-t p-5 flex gap-4">

        <input
          className="flex-1 border rounded-xl p-4"
          placeholder="Type your message..."
          value={text}
          onChange={(e) =>
            setText(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
        />

        <button
          onClick={handleSend}
          className="bg-blue-700 text-white px-8 rounded-xl"
        >
          Send
        </button>

      </div>

    </div>
  );
}