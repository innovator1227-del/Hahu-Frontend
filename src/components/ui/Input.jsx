import useThemeStore from "@/store/themeStore";
import { twMerge } from "tailwind-merge";

const Input = ({ label, error, className, ...props }) => {
  const { theme } = useThemeStore();

  return (
    <div className="w-full">
      {label && <label className="mb-2 text-sm font-medium">{label}</label>}

      <input
        className={twMerge(
          `w-full h-12 gap-2 rounded-2xl px-4 text-sm outline-none
           transition-all duration-300 focus:ring-0.5
           ${
             theme === "dark"
               ? "border border-slate-600"
               : "border border-slate-300"
           }`,
          error && "border-red-500 focus:border-red-400 focus:ring-red-400",
          className,
        )}
        {...props}
      />

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
