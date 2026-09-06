import useThemeStore from "@/store/themeStore";
import { slideLeft } from "@/utils/animate";
import { motion } from "framer-motion";
import { Asterisk, CircleCheckBig, Wallet } from "lucide-react";
import React from "react";

const Escrow = () => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <motion.div
      variants={slideLeft(0)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`flex flex-col gap-0.5 rounded-2xl mt-4 w-full max-w-xl shadow-2xl hover:translate-x-1.5 transition-all duration-300 ${theme === "dark" ? "bg-slate-900" : "bg-slate-100"} `}
    >
      <div
        className={`flex flex-1 gap-0.5 p-2 rounded-2xl ${theme === "dark" ? "bg-slate-800" : "bg-slate-200"} `}
      >
        <Wallet
          size={50}
          className="text-green-600 bg-blue-300 rounded-2xl p-2"
        />
        <h1 className="text-xl flex-1">
          secure transctions are guaranteed throught an escrow system
        </h1>
      </div>
      <div className="m-1">
        <div className="flex flex-1 gap-0.5">
          <Asterisk className="text-green-800" />
          <p className="font-semibold">
            Secure Escrow Protection — Your payment stays protected until the
            transaction is completed and both sides are satisfied.
          </p>
        </div>
        <div className="m-6 grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-1 gap-1 m-2.5">
            <CircleCheckBig size={18} className="text-green-500" />
            <h1>Pay Securely. Receive Safely. Release with Confidence.</h1>
          </div>

          <div className="flex flex-1 gap-1 m-2.5">
            <CircleCheckBig size={18} className="text-green-500" />
            <h1>Secure. Protected. Trusted.</h1>
          </div>
          <div className="flex flex-1 gap-1 m-2.5">
            <CircleCheckBig size={18} className="text-green-500" />
            <h1>Price Negotiation and pay accros admin</h1>
          </div>
          <div className="flex flex-1 gap-1 m-2.5">
            <CircleCheckBig size={18} className="text-green-500" />
            <h1>Safer Transactions</h1>
          </div>
          <div className="flex flex-1 gap-1 m-2.5">
            <CircleCheckBig size={18} className="text-green-500" />
            <h1>Keep your account from escammer</h1>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Escrow;
