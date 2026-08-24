import { Search } from "lucide-react";
import { chatData } from "../ChatData";
import ChatConversetionItem from "./ChatConversetionItem";
import { useState } from "react";
import useThemeStore from "@/store/themeStore";

const ChatSideBar = ({ selectedChat, setSelectedChat }) => {
  const { theme } = useThemeStore();
  const [filter, setFilter] = useState("all");

  const chatsToRender =
    filter === "unread" ? chatData.filter((chat) => chat.unread > 0) : chatData;
  return (
    <aside
      className={`w-80 flex flex-col rounded-xl ${theme === "dark" ? "bg-slate-900/80" : "bg-slate-200"}`}
    >
      {/* Title */}
      <div className="p-5">
        <h2 className="text-2xl font-bold">Hahu-Market Chat</h2>
      </div>

      {/* Search */}
      <div className="p-1 m-3 border border-slate-400 rounded-2xl">
        <div className="flex items-center gap-2 rounded-xl px-3 py-2">
          <Search size={18} />

          <input
            placeholder="Search previous chats..."
            className="bg-transparent outline-none flex-1"
          />
        </div>
      </div>

      {/* Filter */}
      <div className="flex gap-4 px-4 pb-4">
        <button
          className={`px-3 py-1 rounded-lg text-sm transition-all duration-500 ease-in-out cursor-pointer ${filter === "all" ? "bg-green-600 text-white" : "bg-slate-200 text-slate-700"}`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`px-3 py-1 rounded-lg text-sm transition-all duration-700 ease-in-out cursor-pointer ${filter === "unread" ? "bg-green-600 text-white" : "bg-slate-200 text-slate-700"}`}
          onClick={() => setFilter("unread")}
        >
          Unread
        </button>
      </div>

      {/* Conversation List */}
      <div>
        <div className="flex-1 overflow-y-auto px-3 pb-4 space-y-3">
          {chatsToRender.map((chat) => (
            <ChatConversetionItem
              key={chat.id}
              chat={chat}
              active={selectedChat?.id === chat.id}
              onClick={() => setSelectedChat(chat)}
            />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default ChatSideBar;
