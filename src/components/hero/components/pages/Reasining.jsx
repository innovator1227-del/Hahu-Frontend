import useThemeStore from "@/store/themeStore";
import { slideUp } from "@/utils/animate";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CircleDollarSign,
  ShieldCheck,
  Star,
  Van,
} from "lucide-react";
import { Link } from "react-router-dom";

const Reasining = () => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <div
      className={`min-h-[40vh] flex-1 py-8 items-center justify-center px-4 sm:px-6 font-serif  ${theme === "dark" ? "bg-slate-900" : "bg-slate-50"} `}
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
          viewport={{ once: true, amount: 0.3 }}
          className={`flex flex-col items-center justify-center m-5 p-4 rounded-2xl shadow-lg hover:shadow-2xl hover:translate-x-2 transition-all duration-500 ${theme === "dark" ? "bg-slate-800" : "bg-slate-100"} `}
        >
          <ShieldCheck
            size={38}
            className="text-green-600 bg-blue-300 rounded-2xl p-2 m-3"
          />
          <div className="flex flex-1 gap-1">
            <h1 className="text-lg font-semibold">verified user</h1>
          </div>

          <div className="flex flex-1 gap-0">
            <p className="text-sm font-extralight space-y-4 mt-3">
              every thing inside HAHU is verified, mainly users and products
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={slideUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className={`flex flex-col items-center justify-center m-5 p-4 rounded-2xl shadow-lg hover:shadow-2xl hover:translate-x-2 transition-all duration-500 ${theme === "dark" ? "bg-slate-800" : "bg-slate-100"} `}
        >
          <CircleDollarSign
            size={30}
            className="text-green-600 bg-blue-300 rounded-2xl p-2 m-3"
          />
          <div className="flex flex-1 gap-1">
            <h1 className="text-lg font-semibold">integrated payment</h1>
          </div>

          <div className="flex flex-1 gap-1">
            <p className="text-sm font-extralight mt-4">
              connects you payment proceesing directly to your bussines fetching
              account by capturing data.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={slideUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className={`flex flex-col items-center justify-center m-5 p-4 rounded-2xl shadow-lg hover:shadow-2xl hover:translate-x-2 transition-all duration-500 ${theme === "dark" ? "bg-slate-800" : "bg-slate-100"} `}
        >
          <Van
            size={30}
            className="text-green-600 bg-blue-300 rounded-2xl p-2 m-3"
          />
          <div className="flex flex-1 gap-1">
            <h1 className="text-lg font-semibold">delivery option</h1>
          </div>
          <div className="flex flex-1 gap-1">
            <p className="text-sm font-extralight mt-4">
              pick-up and take also store your product to delivery office.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={slideUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className={`flex flex-col items-center justify-center m-5 p-4 rounded-2xl shadow-lg hover:shadow-2xl hover:translate-x-2 transition-all duration-500 ${theme === "dark" ? "bg-slate-800" : "bg-slate-100"} `}
        >
          <Star
            size={30}
            className="text-green-600 bg-blue-300 rounded-2xl p-2 m-3"
          />
          <div className="flex flex-1 gap-1">
            <h1 className="text-lg font-semibold">rating</h1>
          </div>

          <div className="flex flex-1 gap-1">
            <p className="text-sm font-extralight mt-4">
              help your product promotion and us by rating the product, usefull
              for customer feedback.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="mt-auto pt-6 flex justify-center">
        <Link
          to="/app/about"
          className="group/btn inline-flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-green-700"
        >
          More about us
          <ArrowRight
            size={17}
            className="transition-transform duration-300 group-hover/btn:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
};

export default Reasining;
