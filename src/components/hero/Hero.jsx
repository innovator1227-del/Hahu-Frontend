import HeroPart from "./components/pages/HeroPart";
import HeroView from "./components/pages/HeroView";
import Reasining from "./components/pages/Reasining";
import Service from "./components/pages/hahu-service/Service";

const Hero = () => {
  return (
    <>
      <section className="relative min-h-[600px] overflow-hidden">
        {/* Content */}
        <div className="relative z-10 mx-auto w-full px-4 py-6">
          <div className="grid grid-cols-1 items-stretch gap-6 xl:grid-cols-2">
            <HeroPart />
            <HeroView />
          </div>
        </div>
      </section>
      <Reasining />

      <Service />
    </>
  );
};

export default Hero;
