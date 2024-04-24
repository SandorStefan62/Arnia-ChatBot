// shows a list of chips based on the number of conversations
// has a button to add new conversations
// has a button to set the active conversation
// the active conversation is highlighted

import { useState } from "react";

export default function Sidebar({ setActiveConversation }: { setActiveConversation: (id: number) => void }) {
  const [conversations, setConversations] = useState<string[]>([]);
  const [active, setActive] = useState<number | null>(null);

  const addConversation = () => {
    const newConversations = [...conversations, `Conversation ${conversations.length + 1}`];
    setConversations(newConversations);
    setActive(newConversations.length - 1);
    setActiveConversation(newConversations.length - 1);
  }

  const handleSetActive = (index: number) => {
    setActive(index);
    setActiveConversation(index);
  }

  return (
    <div className="w-1/4 p-4 border-r border-gray-200">
      <div className="mb-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded w-full" onClick={addConversation}>
          Add Conversation
        </button>
      </div>
      <div>
        {conversations.map((conversation, index) => (
          <div key={index} className={`px-4 py-2 cursor-pointer hover:bg-gray-200 ${active === index ? 'bg-gray-200' : ''}`} onClick={() => handleSetActive(index)}>
            {conversation}
          </div>
        ))}
      </div>
    </div>
  );
}
