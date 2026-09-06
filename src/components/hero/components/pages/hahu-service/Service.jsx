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
      <div className="flex-1 py-8 items-center justify-center px-4 sm:px-6 font-serif">
        <div className="flex flex-col space-y-3 items-center justify-between">
          <h1 className="text-sm bg-blue-300 text-black rounded-2xl p-2 mb-3">
            our service
          </h1>
          <h1 className="text-2xl font-bold items-center justify-center">
            Our comprhensive market solution
          </h1>

          <p className="text-sm font-extralight space-y-2.5">
            Unlock the value of your pre-loved items and discover premium
            second-hand items on HAHU. Buy. Sell. Reuse. — Give every item a
            second life.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-0 mt-4">
          <AllInOne />
          <UsedFocus />
          <IntegratedChat />
          <Escrow />
        </div>
      </div>
    </ThemeBackground>
  );
};

export default Service;
