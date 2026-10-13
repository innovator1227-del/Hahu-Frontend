import ThemeBackground from "@/components/ThemeBackground";
import useThemeStore from "@/store/themeStore";
import { slideRight } from "@/utils/animate";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ExploreGrid = () => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <div>
      <ThemeBackground>
        <section className="px-5 py-16 text-center sm:px-8">
          <motion.h2
            variants={slideRight(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-3xl font-bold sm:text-4xl"
          >
            Ready to discover something useful?
          </motion.h2>

          <motion.p
            variants={slideRight(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto mt-4 max-w-2xl leading-7"
          >
            Explore second-hand products, discover new possibilities, and become
            part of the HAHU marketplace.
          </motion.p>

          <Link
            to="/browse"
            className={`mt-8 inline-flex rounded-xl px-7 py-3 font-semibold transition  ${theme === "dark" ? "bg-slate-800 border border-slate-700" : "bg-slate-100 border border-slate-300"} `}
          >
            Start Exploring
          </Link>
        </section>
      </ThemeBackground>
    </div>
  );
};

export default ExploreGrid;
