import ThemeBackground from "@/components/ThemeBackground";
import { Rose } from "lucide-react";
import React from "react";
import { FaConnectdevelop } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutHahu = () => {
  return (
    <div>
      <ThemeBackground>
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
            <div>
              <span className="inline-block rounded-full border border-blue-300/30 bg-white/10 px-4 py-2 text-sm font-medium">
                Get to know HAHU
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Every product deserves
                <span className="block">a second chance.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 sm:text-lg">
                HAHU is a second-hand ecommerce platform designed to connect
                buyers and sellers, make pre-loved products easier to discover,
                and give useful items a new home.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/browse"
                  className="rounded-xl px-6 py-3 font-semibold transition border border-slate-500 hover:bg-white/10"
                >
                  Explore Products
                </Link>

                <a
                  href="#our-story"
                  className="rounded-xl border border-white/40 px-6 py-3 font-semibold transition hover:bg-white/10"
                >
                  Our Story
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="mt-10 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
                <Rose className="text-4xl text-green-700" />
                <h2 className="mt-5 text-xl font-bold">Reuse</h2>
                <p className="mt-2 text-sm leading-6">
                  Give pre-loved products another opportunity to be useful.
                </p>
              </div>

              <div className="mt-10 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
                <FaConnectdevelop className="text-4xl text-green-700" />
                <h2 className="mt-5 text-xl font-bold">Connect</h2>
                <p className="mt-2 text-sm leading-6">
                  Bring people together through buying and selling.
                </p>
              </div>

              <div className="mt-10 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
                <span className="text-4xl">💡</span>
                <h2 className="mt-5 text-xl font-bold">Innovate</h2>
                <p className="mt-2 text-sm leading-6">
                  Use technology to simplify the shopping experience.
                </p>
              </div>

              <div className="mt-10 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
                <span className="text-4xl">🌱</span>
                <h2 className="mt-5 text-xl font-bold">Grow</h2>
                <p className="mt-2 text-sm leading-6">
                  Encourage more thoughtful product reuse.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ThemeBackground>
    </div>
  );
};

export default AboutHahu;
