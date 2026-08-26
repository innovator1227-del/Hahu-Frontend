import React from "react";
import { Link, useLocation } from "react-router-dom";
import { publicMenuItems, userMenuItems } from "./SideData";

const MenuItem = ({ isOpen, variant, onClose }) => {
  const getMenuItems = () => {
    switch (variant) {
      case "user":
        return userMenuItems;
      default:
        return publicMenuItems;
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
    <div>
      {menuItems.map((item) => (
        <Link
          key={item.id}
          to={item.link}
          onClick={handleNavClick}
          data-tooltip-id={!isOpen ? "sidebar-tooltip" : undefined}
          data-tooltip-content={!isOpen ? item.name : undefined}
          className={`group relative flex items-center gap-3 h-12 px-4 rounded-2xl hover:translate-x-1 hover:scale-[1.02] hover:bg-white/5 hover:transition-all hover:duration-500 ${
            isActive(item.link)
              ? "bg-white/10 border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
              : ""
          }`}
        >
          <item.icon
            size={20}
            className={`w-5 h-5 ${
              isActive(item.link) ? "text-blue-400" : "null"
            }`}
          />
          <div
            className={`flex items-center justify-between flex-1 overflow-hidden ${isOpen ? "opacity-100 translate-x-0 max-w-52" : "opacity-0  -translate-x-3 max-w-0"}`}
          >
            <span className="text-sm font-medium tracking-wide whitespace-nowrap">
              {item.name}
            </span>
            {item.badge && (
              <span className="ml-2 px-2 py-0.5 rounded-full bg-blue-500 text-white text-[10px] font-semibold">
                {item.badge}
              </span>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuItem;
