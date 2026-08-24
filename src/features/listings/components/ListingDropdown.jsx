import { useState } from "react";
import { MapPinPlusInside } from "lucide-react";
import useThemeStore from "@/store/themeStore";

const ListingDropdown = ({
  title,
  description,
  children,
  defaultOpen = false,
}) => {
  const { theme } = useThemeStore();
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <section
      className={`transition-all duration-500 rounded-2xl bg- shadow-2xl mr-2 ml-2 ${theme === "dark" ? "bg-slate-900" : ""}`}
    >
      {/* Header */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between p-5 text-left cursor-pointer rounded-2xl"
      >
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>

          {description && <p className="mt-1 text-sm">{description}</p>}
        </div>

        <MapPinPlusInside
          size={28}
          className="transition-transform duration-500 cursor-pointer"
        />
      </button>

      {/* Content */}
      <div
        className={`grid transition-all duration-500 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <div className="p-5">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default ListingDropdown;
