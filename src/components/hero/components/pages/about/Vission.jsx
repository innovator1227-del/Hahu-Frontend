import useThemeStore from "@/store/themeStore";
import { slideUp } from "@/utils/animate";
import { motion } from "framer-motion";
import { Eye, MinusSquareIcon } from "lucide-react";
import { SiDreamstime } from "react-icons/si";

const Vission = () => {
  const theme = useThemeStore((state) => state.theme);
  const isDark = theme === "dark";

  const cardStyle = isDark
    ? "bg-slate-800 border-slate-700"
    : "bg-white border-slate-200";

  const mutedText = isDark ? "text-slate-300" : "text-slate-600";
  return (
    <div>
      {/* Mission and Vision */}
      <section
        className={`border-y py-20 ${
          isDark ? "border-slate-800 bg-slate-900" : "border-slate-200 bg-white"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            variants={slideUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto mb-12 max-w-2xl text-center"
          >
            <p className="font-semibold uppercase tracking-widest text-green-500">
              What Drives Us
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Our mission and vision
            </h2>

            <p className={`mt-4 leading-7 ${mutedText}`}>
              The principles behind what we are building.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              variants={slideUp(0.4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className={`rounded-2xl border p-8 transition hover:-translate-y-1 shadow-xl ${cardStyle}`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-300 text-2xl">
                <SiDreamstime className="text-4xl text-green-950" />
              </div>

              <h3 className="mt-5 text-2xl font-bold">Our Mission</h3>

              <p className={`mt-4 leading-7 ${mutedText}`}>
                To make second-hand buying and selling more accessible by
                providing a convenient platform where people can discover
                products, connect with sellers, and give useful items a second
                life.
              </p>
            </motion.div>

            <motion.div
              variants={slideUp(0.4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className={`rounded-2xl border p-8 transition hover:-translate-y-1 shadow-xl ${cardStyle}`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-300 text-2xl">
                <Eye className="text-4xl text-green-950" />
              </div>

              <h3 className="mt-5 text-2xl font-bold">Our Vision</h3>

              <p className={`mt-4 leading-7 ${mutedText}`}>
                To become a trusted and accessible second-hand marketplace that
                encourages reuse, supports connections between people, and
                contributes to a more resource-conscious future.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vission;
