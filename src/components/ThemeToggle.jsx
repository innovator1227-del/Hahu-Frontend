import useThemeStore from "@/store/themeStore";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="flex h-10 w-10 items-center justify-center rounded-full transition-call duration-500 cursor-pointer hover:scale-105 shadow-lg shadow-purple-700 hover:shadow-xl hover:shadow-purple-800"
    >
      {theme === "dark" ? (
        <Sun
          className="h-5 w-5 text-yellow-500 transition-transform duration-300"
          size={38}
        />
      ) : (
        <Moon
          className="h-5 w-5 text-slate-700 transition-transform duration-300"
          size={28}
        />
      )}
    </button>
  );
};

export default ThemeToggle;
