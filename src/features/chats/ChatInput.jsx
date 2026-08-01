import EmojiPicker from "emoji-picker-react";
import { Paperclip, Send, Smile } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";

const ChatInput = () => {
  const [showEmoji, setShowEmoji] = useState(false);

  const [message, setMessage] = useState("");

  const handleEmojiClick = (emojiData) => {
    setMessage((prevMessage) => prevMessage + emojiData.emoji);
  };

  const emojiref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (emojiref.current && !emojiref.current.contains(event.target)) {
        setShowEmoji(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="h-16 shrink-0 border-t border-green-400 bg-white px-6 flex items-center rounded-2xl">
      <div className="flex items-center gap-2 flex-1">
        <button className="text-gray-500 hover:text-gray-700 focus:outline-none space-x-3 cursor-pointer">
          <Paperclip size={24} />
        </button>
        <div className="relative" ref={emojiref}>
          <button
            onClick={() => setShowEmoji(!showEmoji)}
            className="text-gray-500 hover:text-gray-700 focus:outline-none cursor-pointer"
          >
            <Smile size={24} />
          </button>
          {showEmoji && (
            <div className="absolute bottom-full left-0 mb-2 z-50">
              <EmojiPicker onEmojiClick={handleEmojiClick} />
            </div>
          )}
        </div>
        <input
          type="text"
          placeholder="Type your message..."
          className="bg-transparent border-none focus:outline-none focus:ring-0"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-2">
        <button className="text-gray-500 hover:text-gray-700 focus:outline-none cursor-pointer">
          <Send size={24} />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
