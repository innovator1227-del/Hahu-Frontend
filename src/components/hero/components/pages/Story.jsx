import useThemeStore from "@/store/themeStore";
import { Heart } from "lucide-react";
import React from "react";

const Story = () => {
  const theme = useThemeStore((state) => state.theme);
  const isDark = theme === "dark";

  const mutedText = isDark ? "text-slate-300" : "text-slate-600";

  const cardStyle = isDark
    ? "bg-slate-800 border-slate-700"
    : "bg-white border-slate-200";
  return (
    <div>
      <section id="our-story" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-semibold uppercase tracking-widest text-blue-500">
              Our Story
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              A simple idea with a meaningful purpose.
            </h2>

            <p className={`mt-6 leading-8 ${mutedText}`}>
              HAHU was created as a way to make second-hand shopping more
              convenient. We believe that products people no longer need can
              still be valuable to someone else.
            </p>

            <p className={`mt-4 leading-8 ${mutedText}`}>
              By bringing buyers and sellers together in one platform, we aim to
              make it easier to find useful products, sell pre-loved items, and
              make better use of the things around us.
            </p>
          </div>

          <div className={`rounded-3xl border p-8 sm:p-10 ${cardStyle}`}>
            <Heart className="text-4xl text-red-600" />

            <h3 className="mt-5 text-2xl font-bold">More than a marketplace</h3>

            <p className={`mt-4 leading-7 ${mutedText}`}>
              HAHU represents our commitment to learning, creativity, teamwork,
              and building technology that can solve everyday problems.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;
