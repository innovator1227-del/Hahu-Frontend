import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatSideBar from "./ChatSideBar";

const ChatPage = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <ChatSideBar />

      {/* Right */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <ChatHeader />

        {/* Messages */}
        <div className="flex-1 p-6 pt-20 bg-slate-400">
          <h1 className="text-2xl font-bold">Main Chat Space</h1>
        </div>
        <div>
          <ChatInput />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
