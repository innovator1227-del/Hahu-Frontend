import useThemeStore from "@/stores/ThemeStore";
import React from "react";

const RevenueChart = () => {
  const { theme, setTheme } = useThemeStore();
  return (
    <div
      className={`backdrop-blur-xl rounded-b-2xl rounded-2xl border-l-0 p-6 shadow-lg hover:shadow-lg transition-all duration-300 hover:translate-x-1 hover:scale-[1.02] w-lg
        ${
          theme === "black" || theme === "darkblue"
            ? "bg-slate-800"
            : "bg-slate-50"
        }`}
    >
      <div className="flex flex-1 items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font bold">Revenue Chart</h3>
          <p className="text-sm">Business and Proffit track chart</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gradient-to-r from-green-600 to-red-400 rounded-full"></div>
            <div className="text-sm">
              <span>Revenue</span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-60"></div>
    </div>
  );
};

export default RevenueChart;
