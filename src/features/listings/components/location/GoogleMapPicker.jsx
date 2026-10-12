import useThemeStore from "@/store/themeStore";
import { MapIcon } from "lucide-react";

const GoogleMapPicker = () => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <button
      type="button"
      className={`group flex min-h-[180px] w-full flex-col items-center justify-center rounded-2xl px-6 py-8 text-center transition-all duration-300 hover:border-green-200 focus:outline-none focus:ring-0 focus:ring-offset-1 cursor-pointer ${theme === "dark" ? "border border-slate-600" : "border border-slate-300"} `}
    >
      <span className="text-base font-semibold">Google Map</span>

      <span className="mt-1 text-sm text-slate-500">
        Google Recommends authocomplete/ guide To fill and get Location
      </span>

      <span className="mt-3 text-xs text-slate-400">
        Be honest the location of yours
      </span>
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white text-slate-500 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:text-green-600">
        <MapIcon className="h-7 w-7" />
      </div>
    </button>
  );
};

export default GoogleMapPicker;
