import useThemeStore from "@/store/themeStore";
import { slideUp } from "@/utils/animate";
import { motion } from "framer-motion";

const HahuWork = () => {
  const theme = useThemeStore((state) => state.theme);
  const isDark = theme === "dark";

  const cardStyle = isDark
    ? "bg-slate-800 border-slate-700"
    : "bg-white border-slate-200";

  const mutedText = isDark ? "text-slate-300" : "text-slate-600";

  return (
    <div>
      {/* How HAHU Works */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <motion.div
          variants={slideUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <p className="font-semibold uppercase tracking-widest text-green-500">
            Simple and Convenient
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            How HAHU works
          </h2>

          <p className={`mt-4 leading-7 ${mutedText}`}>
            A straightforward way to give products a new home.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              number: "01",
              title: "Find",
              description:
                "Browse available second-hand products and find items that meet your needs.",
            },
            {
              number: "02",
              title: "Chat",
              description:
                "Explore product details and connect with sellers to learn more about the prodcut.",
            },
            {
              number: "03",
              title: "Give Wishlist",
              description:
                "Help useful products continue their journey by Reacting the product.",
            },
          ].map((step) => (
            <motion.div
              variants={slideUp(0.4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              key={step.number}
              className={`rounded-2xl border p-7 shadow-xl hover:-translate-y-1 transition-all duration-300 ${cardStyle}`}
            >
              <span className="text-sm font-bold tracking-widest text-green-500">
                STEP {step.number}
              </span>

              <h3 className="mt-4 text-xl font-bold">{step.title}</h3>

              <p className={`mt-3 leading-7 ${mutedText}`}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HahuWork;
