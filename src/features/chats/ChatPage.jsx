import { useEffect, useState } from "react";
import ChatHeader from "./components/ChatHeader";
import ChatInput from "./components/ChatInput";
import ChatSideBar from "./components/ChatSideBar";
import { chatData } from "./ChatData";
import ChatList from "./components/ChatList";
import { Menu } from "lucide-react";

const ChatPage = () => {
  const [showside, setShowside] = useState(false);
  // State to manage the selected chat
  const [selectedChat, setSelectedChat] = useState(chatData[0]);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "seller",
      type: "text",
      content:
        "Hello! How can I help you? I am available to answer any questions you may have about the product.",
      timestamp: "10:00 AM",
    },
    {
      id: 2,
      sender: "buyer",
      type: "text",
      content: "I have a question about the product.",
      timestamp: "10:01 AM",
    },
    {
      id: 3,
      sender: "seller",
      type: "text",
      content: "Sure! What would you like to know?",
      timestamp: "10:02 AM",
    },
  ]);

  const handleSendMessage = (newMessage) => {
    if (newMessage.type === "text" && !newMessage.content.trim()) {
      return;
    }

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: "buyer",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        ...newMessage,
      },
    ]);
  };

  return (
    <div
      className={`relative min-w-0 flex h-full overflow-hidden m-5 p-4 pb-12 rounded-2xl transition-all duration-700 ease-in-out shadow-2xl

    ${loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
    >
      {/* Sidebar */}
      <ChatSideBar
        isOpen={showside}
        onClose={() => setShowside(false)}
        selectedChat={selectedChat}
        setSelectedChat={setSelectedChat}
      />

      {/* Right */}
      <div className="flex min-w-0 flex-col flex-1">
        <ChatHeader
          selectedChat={selectedChat}
          onOPenSidebar={() => setShowside(true)}
        />

        {/* Messages */}
        <div className="min-h-0 flex-1 overflow-y-auto">
          <ChatList messages={messages} />
        </div>
        <div>
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
