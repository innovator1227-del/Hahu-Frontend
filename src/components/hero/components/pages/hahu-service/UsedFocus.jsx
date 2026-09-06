import useThemeStore from "@/store/themeStore";
import { slideLeft } from "@/utils/animate";
import { motion } from "framer-motion";
import { Asterisk, CircleCheckBig, RefreshCcw } from "lucide-react";
import React from "react";

const UsedFocus = () => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <motion.div
      variants={slideLeft(0)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`flex flex-col gap-0.5 rounded-2xl w-full max-w-xl  shadow-2xl hover:translate-x-1.5 transition-all duration-300 ${theme === "dark" ? "bg-slate-900" : "bg-slate-100"} `}
    >
      <div
        className={`flex flex-1 gap-0.5 p-2 rounded-2xl ${theme === "dark" ? "bg-slate-800" : "bg-slate-200"} `}
      >
        <RefreshCcw
          size={50}
          className="text-green-600 bg-blue-300 rounded-2xl p-2"
        />
        <h1 className="text-xl flex-1 p-2">
          second Hand focused and easy searching for listed items
        </h1>
      </div>
      <div className="m-1">
        <div className="flex flex-1 gap-0.5">
          <Asterisk className="text-green-800" />
          <p className="font-semibold">
            our core focus is to unluck second items and reuse those item a a
            new lexury conditon, let's find second and pre-owned items
          </p>
        </div>
        <div className="m-6 grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-1 gap-1">
            <CircleCheckBig size={18} className="text-green-500" />
            <h1>Give It a Second Life</h1>
          </div>

          <div className="flex flex-1 gap-1">
            <CircleCheckBig size={26} className="text-green-500" />
            <h1>
              Buy quality second-hand products while saving money and reducing
              waste.
            </h1>
          </div>
          <div className="flex flex-1 gap-1">
            <CircleCheckBig size={26} className="text-green-500" />
            <h1>
              HAHU connects sellers with buyers looking for quality second-hand
              products.
            </h1>
          </div>
          <div className="flex flex-1 gap-1">
            <CircleCheckBig size={18} className="text-green-500" />
            <h1>Explore second-hand products that offer quality</h1>
          </div>
          <div className="flex flex-1 gap-1">
            <CircleCheckBig size={18} className="text-green-500" />
            <h1>Give your unused items value</h1>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UsedFocus;
