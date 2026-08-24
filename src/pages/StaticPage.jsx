import useThemeStore from "@/store/themeStore";
import { Link } from "react-router-dom";

const StaticPage = ({ title, description }) => {
  const { theme } = useThemeStore();
  return (
    <div
      className={`max-w-5xl mx-auto p-6 shadow-2xl rounded-2xl ${theme === "dark" ? "bg-slate-900" : ""}`}
    >
      <div className="rounded-3xl p-8 shadow-sm">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="mt-3 max-w-2xl">{description}</p>
        </div>
        <div className="space-y-4 text-sm">
          <p>
            This page is part of the main HAHU marketplace experience. Use the
            links below to continue browsing the app or return home.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <Link
              to="/app/home"
              className="inline-flex items-center justify-center rounded-full  px-4 py-2 text-sm font-medium transition-all duration-500 ease-in-out hover:scale-105"
            >
              Go Home
            </Link>
            <Link
              to="/app/browse"
              className="inline-flex items-center justify-center rounded-full  px-4 py-2 text-sm font-medium transition-all duration-500 ease-in-out hover:scale-105"
            >
              Browse Listings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticPage;
