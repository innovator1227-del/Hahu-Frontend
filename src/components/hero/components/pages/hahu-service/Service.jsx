import ThemeBackground from "@/components/ThemeBackground";
import useThemeStore from "@/store/themeStore";
import AllInOne from "./AllInOne";
import UsedFocus from "./UsedFocus";
import IntegratedChat from "./IntegratedChat";
import Escrow from "./Escrow";

const Service = () => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <ThemeBackground>
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700">
              Our services
            </span>

            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Our comprehensive marketplace solution
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 sm:text-base">
              Unlock the value of your pre-loved items and discover quality
              second-hand products on HAHU. Buy. Sell. Reuse. Give every item a
              second life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-7xl mx-auto">
            <AllInOne />
            <UsedFocus />
            <IntegratedChat />
            <Escrow />
          </div>
        </div>
      </section>
    </ThemeBackground>
  );
};

export default Service;
