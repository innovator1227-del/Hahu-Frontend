import { twMerge } from "tailwind-merge";
import useTheme from "../../hooks/useTheme";

const AdminInput = ({ label, error, className, ...props }) => {
  const currentTheme = useTheme();

  return (
    <div className={twMerge("w-full", currentTheme.header, currentTheme.text)}>
      {label && (
        <label className="mb-2 block text-sm font-medium">{label}</label>
      )}

      <input
        className={twMerge(
          `block w-full  h-10 rounded-xl border px-4 text-sm outline-none shadow-none placeholder:text-slate-400 transition-colors duration-300 focus:border-gray-500 focus:ring-1 focus:ring-gray-500`,
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
