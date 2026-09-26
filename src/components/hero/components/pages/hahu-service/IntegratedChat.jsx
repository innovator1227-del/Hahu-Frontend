import useThemeStore from "@/store/themeStore";
import { slideRight } from "@/utils/animate";
import { motion } from "framer-motion";
import {
  Asterisk,
  ArrowRight,
  CircleCheckBig,
  MessageCircle,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const IntegratedChat = () => {
  const theme = useThemeStore((state) => state.theme);

  const isDark = theme === "dark";

  return (
    <motion.div
      variants={slideRight(0)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`group flex h-full w-full flex-col overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-1 ${
        isDark ? "bg-slate-900" : "bg-slate-100"
      }`}
    >
      <div
        className={`flex items-center gap-4 p-4 ${
          isDark ? "bg-slate-800" : "bg-slate-200"
        }`}
      >
        <MessageCircle
          size={30}
          className="shrink-0 rounded-xl bg-blue-300 p-2 text-green-600"
        />

        <h2
          className={`min-w-0 text-lg font-semibold leading-snug sm:text-xl ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          Negotiate through HAHU's integrated marketplace chat
        </h2>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex gap-2">
          <Asterisk size={18} className="mt-1 shrink-0 text-green-600" />

          <p
            className={`text-sm font-medium leading-6 ${
              isDark ? "text-slate-500" : "text-slate-400"
            }`}
          >
            Connect directly with sellers through HAHU's integrated chat. Ask
            questions and about product
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex items-start gap-2">
            <CircleCheckBig
              size={18}
              className="mt-0.5 shrink-0 text-green-500"
            />

            <p
              className={`text-sm leading-5 ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              Chat, offer, negotiate, agree, and buy.
            </p>
          </div>

          <div className="flex items-start gap-2">
            <CircleCheckBig
              size={18}
              className="mt-0.5 shrink-0 text-green-500"
            />

            <p
              className={`text-sm leading-5 ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              Real-time communication with sellers.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <CircleCheckBig
              size={18}
              className="mt-0.5 shrink-0 text-green-500"
            />

            <p
              className={`text-sm leading-5 ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              Negotiate prices and discuss directly.
            </p>
          </div>

          <div className="flex items-start gap-2">
            <CircleCheckBig
              size={18}
              className="mt-0.5 shrink-0 text-green-500"
            />

            <p
              className={`text-sm leading-5 ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              Receive notifications for new messages.
            </p>
          </div>

          <div className="flex items-start gap-2">
            <CircleCheckBig
              size={18}
              className="mt-0.5 shrink-0 text-green-500"
            />

            <p
              className={`text-sm leading-5 ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              Keep chat records for future reference.
            </p>
          </div>
        </div>

        <div className="mt-auto pt-6">
          <Link
            to="/app/services/integrated-chat"
            className="group/btn inline-flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-green-700"
          >
            Explore chat
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover/btn:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default IntegratedChat;
