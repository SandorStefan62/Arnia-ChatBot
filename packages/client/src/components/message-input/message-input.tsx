import { useState } from "react";

export default function MessageInput({ addMessage }: { addMessage: (message: string) => void }) {
    const [message, setMessage] = useState<string>('');

    const handleMessageSubmit = () => {
        if (message.trim() !== '') {
            addMessage(message);
            setMessage('');
        }
    }

    return (
        <div className="h-1/6 flex justify-between items-center border-t border-gray-200 pt-4 mt-4">
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Type a message..." />
            <button className="ml-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded" onClick={handleMessageSubmit}>
                Send
            </button>
        </div>
    )
}