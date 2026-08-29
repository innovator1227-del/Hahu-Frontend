import React from "react";
import { Link, useLocation } from "react-router-dom";
import { userMenuItems } from "./SideData";

const MenuItem = ({ isOpen, variant, onClose }) => {
  const getMenuItems = () => {
    switch (variant) {
      case "user":
        return userMenuItems;
      default:
        return userMenuItems;
    }
  };
  const menuItems = getMenuItems();

  const location = useLocation();

  const isActive = (link) => location.pathname === link;

  const handleNavClick = () => {
    if (window.innerWidth < 768) {
      onClose();
    }
  };

  return (
  <div className="space-y-4">
    {["Main", "Sell", "Orders"].map((section) => {
      const sectionItems = menuItems.filter(
        (item) => item.section === section
      );

      if (sectionItems.length === 0) return null;

      return (
        <div key={section}>
          {/* Section title */}
          {isOpen && (
            <h3 className="px-4 mb-2 text-[11px] font-semibold uppercase tracking-widest text-slate-400">
              {section}
            </h3>
          )}

          {/* Section items */}
          <div className="space-y-1">
            {sectionItems.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                onClick={handleNavClick}
                data-tooltip-id={!isOpen ? "sidebar-tooltip" : undefined}
                data-tooltip-content={!isOpen ? item.name : undefined}
                className={`group relative flex items-center gap-3 h-12 px-4 rounded-2xl transition-all duration-300
                  hover:translate-x-1 hover:bg-white/5
                  ${
                    isActive(item.link)
                      ? "bg-white/10 border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
                      : ""
                  }`}
              >
                <item.icon
                  size={20}
                  className={`shrink-0 transition-colors ${
                    isActive(item.link)
                      ? "text-blue-400"
                      : "text-slate-400 group-hover:text-white"
                  }`}
                />

                <div
                  className={`flex items-center justify-between flex-1 overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "opacity-100 translate-x-0 max-w-52"
                      : "opacity-0 -translate-x-3 max-w-0"
                  }`}
                >
                  <span className="text-sm font-medium tracking-wide whitespace-nowrap">
                    {item.name}
                  </span>

                  {item.badge && (
                    <span className="ml-2 min-w-5 h-5 flex items-center justify-center rounded-full bg-blue-500 text-white text-[10px] font-semibold">
                      {item.badge}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      );
    })}
  </div>
);
};

export default MenuItem;
