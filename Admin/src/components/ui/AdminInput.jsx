import { twMerge } from "tailwind-merge";
import useTheme from "../../hooks/useTheme";
import useThemeStore from "../../stores/ThemeStore";

const AdminInput = ({ label, error, className, ...props }) => {
  const currentTheme = useTheme();
  const { theme, setTheme } = useThemeStore();
  return (
    <div
      className={`w-full ${currentTheme.header}
    ${currentTheme.text} `}
    >
      {label && (
        <label className="mb-2 text-sm font-medium text-slate-700">
          {label}
        </label>
      )}
      <input
        className={twMerge(
          "w-xl gap-2 h-12 rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-300 focus:border-gray-500 focus:ring-0.5 focus:ring-gray-400",
          error && "border-red-500 focus:border-red-400 focus:ring-red-400",
          className,
        )}
        {...props}
      />

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default AdminInput;
