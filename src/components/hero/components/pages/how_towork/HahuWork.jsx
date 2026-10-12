import useThemeStore from "@/store/themeStore";
import React from "react";

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
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="font-semibold uppercase tracking-widest text-blue-500">
            Simple and Convenient
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            How HAHU works
          </h2>

          <p className={`mt-4 leading-7 ${mutedText}`}>
            A straightforward way to give products a new home.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              number: "01",
              title: "Discover",
              description:
                "Browse available second-hand products and find items that meet your needs.",
            },
            {
              number: "02",
              title: "Connect",
              description:
                "Explore product details and connect with sellers to learn more about listings.",
            },
            {
              number: "03",
              title: "Give It a New Home",
              description:
                "Help useful products continue their journey with someone who needs them.",
            },
          ].map((step) => (
            <article
              key={step.number}
              className={`rounded-2xl border p-7 ${cardStyle}`}
            >
              <span className="text-sm font-bold tracking-widest text-blue-500">
                STEP {step.number}
              </span>

              <h3 className="mt-4 text-xl font-bold">{step.title}</h3>

              <p className={`mt-3 leading-7 ${mutedText}`}>
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HahuWork;
