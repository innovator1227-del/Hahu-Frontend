import { useState } from "react";
import { MapPinPlusInside } from "lucide-react";

const ListingDropdown = ({
  title,
  description,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <section className="transition-all duration-500 rounded-2xl border border-slate-200 bg-white shadow-lg">
      {/* Header */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between p-5 text-left cursor-pointer bg-slate-50 rounded-2xl"
      >
        <div>
          <h2 className="text-lg font-semibold text-slate-900">{title}</h2>

          {description && (
            <p className="mt-1 text-sm text-slate-500">{description}</p>
          )}
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
          <div className="border-t border-slate-200 p-5">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default ListingDropdown;
