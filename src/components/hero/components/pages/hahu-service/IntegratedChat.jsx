import useThemeStore from "@/store/themeStore";
import { slideRight } from "@/utils/animate";
import { motion } from "framer-motion";
import { Asterisk, CircleCheckBig, MessageCircle } from "lucide-react";
import React from "react";

const IntegratedChat = () => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <motion.div
      variants={slideRight(0)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`flex flex-col gap-0.5 rounded-2xl mt-4 w-full max-w-2xl mx-auto md:mx-auto lg:mx-36 shadow-2xl hover:translate-x-1.5 transition-all duration-300 ${theme === "dark" ? "bg-slate-900" : "bg-slate-100"} `}
    >
      <div
        className={`flex flex-1 gap-0.5 p-2 rounded-2xl ${theme === "dark" ? "bg-slate-800" : "bg-slate-200"} `}
      >
        <MessageCircle
          size={50}
          className="text-green-600 bg-blue-300 rounded-2xl p-2"
        />
        <h1 className="text-xl flex-1 p-2">
          Negotiation throught an integative website chat provide a safer
          alternative to direct contact
        </h1>
      </div>
      <div className="m-2">
        <div className="flex flex-1 gap-0.5">
          <Asterisk className="text-green-800" />
          <p className="font-semibold">
            Connect directly with sellers through HAHU's real-time chat. Ask
            questions, request additional photos, discuss product condition, and
            negotiate prices instantly — all without leaving the marketplace.
          </p>
        </div>
        <div className="m-6 grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-1 gap-1 m-2.5">
            <CircleCheckBig size={18} className="text-green-500" />
            <h1>Chat. Offer. Negotiate. Agree. Buy.</h1>
          </div>

          <div className="flex flex-1 gap-1 m-2.5">
            <CircleCheckBig size={18} className="text-green-500" />
            <h1>Real-Time Chat</h1>
          </div>
          <div className="flex flex-1 gap-1 m-2.5">
            <CircleCheckBig size={18} className="text-green-500" />
            <h1>Price Negotiation and deal</h1>
          </div>
          <div className="flex flex-1 gap-1 m-2.5">
            <CircleCheckBig size={18} className="text-green-500" />
            <h1>Instant Notifications</h1>
          </div>
          <div className="flex flex-1 gap-1 m-2.5">
            <CircleCheckBig size={18} className="text-green-500" />
            <h1>Keep the negotiation record available for reference.</h1>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default IntegratedChat;
