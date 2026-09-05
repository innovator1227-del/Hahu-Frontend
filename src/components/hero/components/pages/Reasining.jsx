import useThemeStore from "@/store/themeStore";
import { slideUp } from "@/utils/animate";
import { motion } from "framer-motion";
import {
  Asterisk,
  Astroid,
  CircleDollarSign,
  ShieldCheck,
  Star,
  Van,
} from "lucide-react";
import React from "react";

const Reasining = () => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <div
      className={`min-h-[40vh] flex-1 py-12 items-center justify-center px-4 sm:px-6 font-serif  ${theme === "dark" ? "bg-slate-900" : "bg-slate-50"} `}
    >
      <div className="flex flex-col space-y-3 items-center justify-between">
        <h1 className="text-2xl font-bold items-center justify-center">
          Why you choice us
        </h1>

        <p className="text-sm font-extralight space-y-2.5">
          only verified users by its natinal-id and other verification
          requirement allowed to access HAHU-MARKET
        </p>
      </div>

      <div className="mb-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center justify-between">
        <motion.div
          variants={slideUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className={`flex flex-col items-center justify-center m-5 p-4 rounded-lg shadow-2xl hover:translate-x-2 transition-all duration-500 ${theme === "dark" ? "bg-slate-800" : "bg-slate-200"} `}
        >
          <ShieldCheck
            size={50}
            className="text-green-600 bg-blue-300 rounded-2xl p-2 m-3"
          />
          <div className="flex flex-1 gap-1">
            <Astroid size={20} className="text-green-800" />
            <h1 className="text-lg font-semibold">verified user</h1>
          </div>

          <div className="flex flex-1 gap-1">
            <Asterisk size={50} className="text-green-600" />
            <p className="text-sm font-extralight space-y-4 mt-3">
              every thing inside HAHU is verified further from its id also
              including face detaction and matching to id photo, mainly users
              and products and also verification matters authenticity trust and
              safety
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={slideUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className={`flex flex-col items-center justify-center m-5 p-4 rounded-lg shadow-2xl hover:translate-x-2 transition-all duration-500 ${theme === "dark" ? "bg-slate-800" : "bg-slate-200"} `}
        >
          <CircleDollarSign
            size={50}
            className="text-green-600 bg-blue-300 rounded-2xl p-2 m-3"
          />
          <div className="flex flex-1 gap-1">
            <Astroid size={20} className="text-green-800" />
            <h1 className="text-lg font-semibold">integrated payment</h1>
          </div>

          <div className="flex flex-1 gap-1">
            <Asterisk size={50} className="text-green-600" />
            <p className="text-sm font-extralight mt-4">
              connects you payment proceesing directly to your bussines fetching
              account by capturing data, authoraization and authomatic
              syncronzaton for saving time, better experiance and real-time
              insights
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={slideUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className={`flex flex-col items-center justify-center m-5 p-4 rounded-lg shadow-2xl hover:translate-x-2 transition-all duration-500 ${theme === "dark" ? "bg-slate-800" : "bg-slate-200"} `}
        >
          <Van
            size={50}
            className="text-green-600 bg-blue-300 rounded-2xl p-2 m-3"
          />
          <div className="flex flex-1 gap-1">
            <Astroid size={20} className="text-green-800" />
            <h1 className="text-lg font-semibold">delivery option</h1>
          </div>
          <div className="flex flex-1 gap-1">
            <Asterisk size={50} className="text-green-600" />
            <p className="text-sm font-extralight mt-4">
              pick-up and take also store your product to delivery office for
              more trusty and saving you time, transfer your products and goods
              and take yours by your time setup
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={slideUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className={`flex flex-col items-center justify-center m-5 p-4 rounded-lg shadow-2xl hover:translate-x-2 transition-all duration-500 ${theme === "dark" ? "bg-slate-800" : "bg-slate-200"} `}
        >
          <Star
            size={50}
            className="text-green-600 bg-blue-300 rounded-2xl p-2 m-3"
          />
          <div className="flex flex-1 gap-1">
            <Astroid size={20} className="text-green-800" />
            <h1 className="text-lg font-semibold">rating</h1>
          </div>

          <div className="flex flex-1 gap-1">
            <Asterisk size={50} className="text-green-600" />
            <p className="text-sm font-extralight mt-4">
              help your product promotion and us by rating the product as much
              as possible, also you can see and take top rated product and
              rating rating i also usefull for customer feedback
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Reasining;
