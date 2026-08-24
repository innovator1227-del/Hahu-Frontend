import { twMerge } from "tailwind-merge";
//import ThemeBackground from "../ThemeBackground";

const Input = ({ label, error, className, ...props }) => {
  return (
    <div className="w-full ">
      {label && <label className="mb-2 text-sm font-medium">{label}</label>}
      <input
        className={twMerge(
          "w-full gap-2 h-12 rounded-2xl border border-slate-500 px-4 text-sm  outline-none transition-all duration-300  focus:ring-0.5",
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
