const ChatSidebar = () => {
  return (
    <div className="w-48 h-screen border-r border-slate-300 bg-slate-200 p-5 top-0 z-40 sticky left-0">
      <h2 className="text-xl font-bold mb-6">Chats Page</h2>

      <div className="space-y-4">
        <div className="rounded-xl border border-slate-300 p-4 cursor-pointer hover:bg-slate-50">
          Name John
        </div>

        <div className="rounded-xl border border-slate-400 p-4 cursor-pointer hover:bg-slate-50">
          Profile
        </div>

        <div className="rounded-xl border border-slate-300 p-4 cursor-pointer hover:bg-slate-50">
          Last Chat
        </div>
      </div>
    </div>
  );
};

export default ChatSidebar;
