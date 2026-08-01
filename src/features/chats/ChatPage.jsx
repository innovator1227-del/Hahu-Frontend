import { useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatSideBar from "./ChatSideBar";
import { chatData } from "./ChatData";

const ChatPage = () => {
  // State to manage the selected chat
  const [selectedChat, setSelectedChat] = useState(chatData[0]);
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
          {[...Array(100)].map((_, i) => (
            <p key={i} className="mb-4">
              Message {i + 1}
            </p>
          ))}
        </div>
        <div>
          <ChatInput />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
