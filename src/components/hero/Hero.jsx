import { motion } from "framer-motion";
import heroBg from "@/assets/Used.png";
import HeroPart from "./components/pages/HeroPart";
import HeroView from "./components/pages/HeroView";

const Hero = () => {
  return (
    <>
      <section className="relative min-h-[600px] overflow-hidden">
        {/* Content */}
        <div className="relative z-10 mx-auto w-full px-4 py-6">
          <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2">
            <HeroPart />
            <HeroView />
          </div>
        </div>
      </section>
      <h1>hero</h1>
    </>
  );
};

export default Hero;
