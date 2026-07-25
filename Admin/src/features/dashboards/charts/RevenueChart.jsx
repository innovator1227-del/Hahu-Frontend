import useThemeStore from "@/stores/ThemeStore";
import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { RevenueData } from "./ChartData";
import useTheme from "@/hooks/useTheme";

const RevenueChart = () => {
  const currentTheme = useTheme();
  const { theme, setTheme } = useThemeStore();
  return (
    <div
      className={`backdrop-blur-xl rounded-b-2xl rounded-2xl border-l-0 p-6 shadow-lg hover:shadow-lg transition-all duration-300 hover:translate-x-1 hover:scale-[1.02] min-w-0
        ${
          theme === "black" || theme === "darkblue"
            ? "bg-slate-900"
            : "bg-slate-50"
        }

        ${currentTheme.background}
        ${currentTheme.text}

        `}
    >
      <div className="flex flex-1 items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font bold">Revenue Chart</h3>
          <p className="text-sm">Business and Proffit track chart</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gradient-to-r from-red-600 to-green-600 rounded-full"></div>
            <div className="text-sm">
              <span>Revenue</span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={RevenueData}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={theme === "white" ? "#E2F8E0" : "#334155"}
            />
            <XAxis
              stroke={theme === "white" ? "#64748B" : "#CBD5E1"}
              dataKey="month"
            />
            <YAxis stroke={theme === "white" ? "#64748B" : "#CBD5E1"} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#3B82F6"
              fill="#60A5FA"
              fillOpacity={0.25}
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
