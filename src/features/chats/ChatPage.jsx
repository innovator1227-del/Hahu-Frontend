import { useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatSideBar from "./ChatSideBar";
import { chatData } from "./ChatData";

const ChatPage = () => {
  // State to manage the selected chat
  const [selectedChat, setSelectedChat] = useState(chatData[0]);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "seller",
      content:
        "Hello! How can I help you? I am available to answer any questions you may have about the product.",
      timestamp: "10:00 AM",
    },
    {
      id: 2,
      sender: "buyer",
      content: "I have a question about the product.",
      timestamp: "10:01 AM",
    },
    {
      id: 3,
      sender: "seller",
      content: "Sure! What would you like to know?",
      timestamp: "10:02 AM",
    },
  ]);

  const handleSendMessage = (text) => {
    if (text.trim() !== "") {
      const newMessage = {
        id: messages.length + 1,
        sender: "buyer",
        content: text,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, newMessage]);
    }
  };

  return (
    <div className="flex h-full overflow-hidden m-5 p-4 pb-24 rounded-xl border border-slate-300 bg-slate-100">
      {/* Sidebar */}
      <ChatSideBar
        selectedChat={selectedChat}
        setSelectedChat={setSelectedChat}
      />

      {/* Right */}
      <div className="flex flex-col flex-1">
        <ChatHeader selectedChat={selectedChat} />

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 bg-slate-400">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-4 p-3 rounded-lg max-w-xs whitespace-pre-wrap break-words ${
                message.sender === "buyer"
                  ? "bg-blue-300 text-white ml-auto"
                  : "bg-gray-300 text-gray-800"
              }`}
            >
              <p>{message.content}</p>
              <p className="text-xs text-gray-500 mt-1">{message.timestamp}</p>
            </div>
          ))}
        </div>
        <div>
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
