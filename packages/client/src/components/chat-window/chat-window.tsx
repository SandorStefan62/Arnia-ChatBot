// shows a list of message based on internal message state
// has a method to add new messages
// simulates replies to messages (useEffect + setTimeout)
// has a child component that holds the text input & button to add new messages

import { useEffect, useState } from "react";
import Message from "../message/message";
import MessageInput from "../message-input/message-input";

export default function ChatWindow({ activeConversation }: { activeConversation: number | null }) {
  const [messages, setMessages] = useState<{ id: number; conversationId: number; text: string; isUserMessage: boolean }[]>([]);
  const [messageId, setMessageId] = useState<number>(0);

  const addMessage = (message: string) => {
    setMessages(prevMessages => [...prevMessages, { id: messageId, conversationId: activeConversation as number, text: message, isUserMessage: true }]);
    setMessageId(prevId => prevId + 1);
  }

  console.log(activeConversation);

  useEffect(() => {
    const simulateReply = () => {
      const replies = [
        'I am busy right now, I will get back to you later.',
        'Sure, let me check that for you.',
        'Yes, I can help with that.',
        'Sorry, I cannot help with that.',
        'Please provide more details.',
      ];

      const randomReply = replies[Math.floor(Math.random() * replies.length)];
      setMessages(prevMessages => [...prevMessages, { id: messageId, conversationId: activeConversation as number, text: randomReply, isUserMessage: false }]);
      setMessageId(prevId => prevId + 1);
    }

    if (activeConversation !== null && messages.length > 0 && messages[messages.length - 1].isUserMessage) {
      setTimeout(() => {
        simulateReply();
      }, 1000);
    }
  }, [activeConversation, messages]);

  if (activeConversation === null) {
    return null;
  }

  console.log("Messages:");
  console.log(messages);

  const activeConversationMessages = messages.filter(message => message.conversationId === activeConversation)

  console.log("Active convo messages:")
  console.log(activeConversationMessages);

  return (
    <div className="flex-1 p-4 border-1 border-gray-200 h-full">
      <div className="h-5/6 border rounded-lg overflow-y-auto bg-gray-100">
        {activeConversationMessages.map((message) => (
          <Message key={message.id} text={message.text} />
        ))}
      </div>
      <MessageInput addMessage={addMessage} />
    </div>
  );
}
