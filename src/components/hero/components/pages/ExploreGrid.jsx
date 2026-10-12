import ThemeBackground from "@/components/ThemeBackground";
import React from "react";
import { Link } from "react-router-dom";

const ExploreGrid = () => {
  return (
    <div>
      <ThemeBackground>
        <section className="px-5 py-16 text-center sm:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to discover something useful?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7">
            Explore second-hand products, discover new possibilities, and become
            part of the HAHU marketplace.
          </p>

          <Link
            to="/browse"
            className="mt-8 inline-flex rounded-xl px-7 py-3 font-semibold transition"
          >
            Start Exploring
          </Link>
        </section>
      </ThemeBackground>
    </div>
  );
};

export default ExploreGrid;
