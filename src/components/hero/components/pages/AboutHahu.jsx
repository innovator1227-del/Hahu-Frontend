import ThemeBackground from "@/components/ThemeBackground";
import useThemeStore from "@/store/themeStore";
import { Flower, Flower2, Lightbulb, Rose } from "lucide-react";
import React from "react";
import { FaConnectdevelop } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { slideRight, slideUp } from "@/utils/animate";

const AboutHahu = () => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <div>
      <ThemeBackground>
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-4 sm:px-5 lg:grid-cols-2 lg:py-8">
            <div>
              <span className="inline-block rounded-full border border-blue-300/30 bg-white/10 px-4 py-2 text-sm font-medium">
                Get to know HAHU
              </span>

              <motion.h1
                variants={slideRight(0)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="mt-6 text-2xl font-semibold leading-tight sm:text-xl lg:text-3xl"
              >
                Every product deserves
                <span className="block">a second chance.</span>
              </motion.h1>

              <motion.p
                variants={slideRight(0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="mt-6 max-w-xl text-base leading-8 sm:text-lg"
              >
                HAHU is a second-hand ecommerce platform designed to connect
                buyers and sellers, make pre-loved products easier to discover,
                and give useful items a new home.
              </motion.p>

              <motion.div
                variants={slideRight(0.4)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <Link
                  to="/browse"
                  className={`rounded-xl px-6 py-3 font-semibold transition-all duration-300 hover:translate-x-1 shadow-xl ${theme === "dark" ? "bg-slate-800 border border-slate-700" : "bg-slate-100 border border-slate-300"} `}
                >
                  Explore Products
                </Link>

                <a
                  href="#our-story"
                  className={`rounded-xl px-6 py-3 font-semibold transition-all duration-300 hover:translate-x-1 shadow-xl ${theme === "dark" ? "bg-slate-800 border border-slate-700" : "bg-slate-100 border border-slate-300"} `}
                >
                  Our Story
                </a>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <motion.div
                variants={slideUp(0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className={`mt-10 rounded-3xl p-6 backdrop-blur-sm shadow-xl ${theme === "dark" ? "bg-slate-800 border border-slate-700" : "bg-slate-100 border border-slate-300"} `}
              >
                <Rose className="text-4xl text-green-700" />
                <h2 className="mt-5 text-xl font-bold">Reuse</h2>
                <p className="mt-2 text-sm leading-6">
                  Give pre-loved products another opportunity to be useful.
                </p>
              </motion.div>

              <motion.div
                variants={slideUp(0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className={`mt-10 rounded-3xl p-6 backdrop-blur-sm shadow-xl  ${theme === "dark" ? "bg-slate-800 border border-slate-700" : "bg-slate-100 border border-slate-300"} `}
              >
                <FaConnectdevelop className="text-4xl text-green-700" />
                <h2 className="mt-5 text-xl font-bold">Connect</h2>
                <p className="mt-2 text-sm leading-6">
                  Bring people together through buying and selling.
                </p>
              </motion.div>

              <motion.div
                variants={slideUp(0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className={`mt-10 rounded-3xl p-6 backdrop-blur-sm shadow-xl  ${theme === "dark" ? "bg-slate-800 border border-slate-700" : "bg-slate-100 border border-slate-300"} `}
              >
                <Lightbulb className="text-4xl text-green-600" />
                <h2 className="mt-5 text-xl font-bold">Innovate</h2>
                <p className="mt-2 text-sm leading-6">
                  Use technology to simplify the shopping experience.
                </p>
              </motion.div>

              <motion.div
                variants={slideUp(0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className={`mt-10 rounded-3xl p-6 backdrop-blur-sm shadow-xl  ${theme === "dark" ? "bg-slate-800 border border-slate-700" : "bg-slate-100 border border-slate-300"} `}
              >
                <Flower className="text-5xl text-green-600" />
                <h2 className="mt-5 text-xl font-bold">Grow</h2>
                <p className="mt-2 text-sm leading-6">
                  Encourage more thoughtful product reuse.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </ThemeBackground>
    </div>
  );
};

export default AboutHahu;
