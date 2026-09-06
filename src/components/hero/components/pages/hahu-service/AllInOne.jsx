import useThemeStore from "@/store/themeStore";
import { slideRight } from "@/utils/animate";
import { motion } from "framer-motion";
import { Asterisk, Blocks, CircleCheckBig } from "lucide-react";
import React from "react";

const AllInOne = () => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <motion.div
      variants={slideRight(0)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`flex flex-col rounded-2xl w-full max-w-2xl shadow-2xl mx-auto md:mx-auto lg:mx-36  hover:translate-x-1.5 transition-all duration-300 ${theme === "dark" ? "bg-slate-900" : "bg-slate-100"} `}
    >
      <div
        className={`flex flex-1 gap-0.5 p-2 rounded-2xl ${theme === "dark" ? "bg-slate-800" : "bg-slate-200"} `}
      >
        <Blocks size={50} className="text-green-600 bg-blue-300 rounded-2xl" />
        <h1 className="text-xl flex-1 p-2">
          All in one platform to post and compare products
        </h1>
      </div>
      <div className="m-4">
        <div className="flex flex-1 gap-0.5">
          <Asterisk className="text-green-800" />
          <p className="font-semibold">
            we are provide verified all in one platform to post and explore
            items without scrolling
          </p>
        </div>
        <div className="m-4 grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-1 gap-1 m-2">
            <CircleCheckBig size={18} className="text-green-500" />
            <h1>buy smart, save more use again</h1>
          </div>

          <div className="flex flex-1 gap-1 m-2">
            <CircleCheckBig size={18} className="text-green-500" />
            <h1>Everything You Need, All in One Place</h1>
          </div>
          <div className="flex flex-1 gap-1 m-2">
            <CircleCheckBig size={18} className="text-green-500" />
            <h1>One Platform, Endless Possibilities</h1>
          </div>
          <div className="flex flex-1 gap-1 m-2">
            <CircleCheckBig size={18} className="text-green-500" />
            <h1>A Marketplace Built for Everyone</h1>
          </div>
          <div className="flex flex-1 gap-1 m-2">
            <CircleCheckBig size={18} className="text-green-500" />
            <h1>Discover Products That Match Your Style</h1>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AllInOne;
