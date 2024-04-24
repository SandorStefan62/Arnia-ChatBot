"use client"

import ChatWindow from "@/components/chat-window/chat-window";
import Sidebar from "@/components/sidebar/sidebar";
import { useState } from "react";

/**
 *
 * Orchestrates convesation state
 * Orchestrates active convesation state
 * Splits the UI into sidebar and conversation
 */
export default function Chat() {
  const [activeConversation, setActiveConversation] = useState<number | null>(null);

  return (
    <div className="flex h-screen">
      <Sidebar setActiveConversation={setActiveConversation} />
      <ChatWindow activeConversation={activeConversation} />
    </div>
  );
}
