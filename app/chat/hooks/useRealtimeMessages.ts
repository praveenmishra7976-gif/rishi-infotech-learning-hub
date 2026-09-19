"use client";

import { useEffect } from "react";
import { supabase } from "@/app/lib/supabase";

export default function useRealtimeMessages(
  conversationId: string,
  refresh: () => void
) {
  useEffect(() => {
    const channel = supabase
      .channel(`messages-${conversationId}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "messages",
          filter: `conversation_id=eq.${conversationId}`,
        },
        () => {
          refresh();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [conversationId]);
}