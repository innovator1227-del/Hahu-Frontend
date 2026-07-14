import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "@/assets/logo.jpg";
import { useAuth } from "@/store/authStore.jsx";
import { useNavigate } from "react-router-dom";

import { LogOut, ChevronDown, ChevronRight, Store, Settings} from "lucide-react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { publicMenuItems, publicCategories, userMenuItems, adminMenuItems, adminSubMenus } from "./Data.jsx";

const Sidebar = ({ isOpen, variant = "public", onClose }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const { logout } = useAuth();
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const getMenuItems = () => {
    switch (variant) {
      case "user":
        return userMenuItems;
      case "admin":
        return adminMenuItems;
      default:
        return publicMenuItems;
    }
  };
  const menuItems = getMenuItems();
  const isActive = (link) => location.pathname === link;
  const handleNavClick = () => {
    if (window.innerWidth < 768) {
      onClose();
    }
  };
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen flex flex-col bg-[#020617] backdrop-blur-xl border-r border-white/5 transition-all duration-500 ease-in-out ${isOpen  ? "w-64 translate-x-0" : "-translate-x-full md:translate-x-0 md:w-[88px]" }
                    
        `}
      >
        {/* Header */}
        <div className="h-16 md:h-20 flex items-center px-5 border-b border-white/5 bg-transparent text-white">
          <div className="flex items-center gap-3">
            {/* Logo ALWAYS visible */}
            <img
              src={Logo}
              alt="HAHU Market Logo"
              className={`w-10 h-10 rounded-full ring-2 ring-white/5 object-cover transition-transform duration-500 ease-in-out ${isOpen ? "rotate-0 scale-100" : "rotate-12 scale-90"}`}
            />

            {/* Text only when open */}
              <span                                  
                className={` overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-out origin-left
                 ${ isOpen ? "opacity-100 scale-100 translate-x-0 max-w-[180px]": "opacity-0 scale-95 -translate-x-3 max-w-0"}
                `}
              >
                <span className="text-lg font-bold tracking-tight text-slate-100">
                  HAHU <span className="text-blue-400">MARKET</span>
                </span>
              </span>
          </div>
        </div>

        {/* Scrollable Menu */}
        <div className="flex-1 h-full overflow-y-auto custom-scrollbar flex flex-col gap-2 px-3 py-6">
          {/* Main Menu Items */}
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              onClick={handleNavClick}
              data-tooltip-id={!isOpen ? "sidebar-tooltip" : undefined}
              data-tooltip-content={!isOpen ? item.name : undefined}
              className={`group relative flex items-center gap-3 h-12 px-4 rounded-2xl transition-all duration-300 hover:translate-x-1 hover:scale-[1.02] text-slate-400 hover:text-white hover:bg-white/5 ${
                isActive(item.link)
                  ? "bg-white/10 border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] text-white"
                  : ""
              }`}
            >
              <item.icon
            size={20}
            className={`w-5 h-5 transition-colors ${
              isActive(item.link)
                ? "text-blue-400"
                : "text-slate-400 group-hover:text-white"
            }`}
          />
              <div className={`flex items-center justify-between flex-1 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "opacity-100 translate-x-0 max-w-52": "opacity-0  -translate-x-3 max-w-0"}`}>
                <span className="text-sm font-medium tracking-wide whitespace-nowrap">
                {item.name}
                </span>
                {item.badge && (
                    <span classsName="ml-2 px-2 py-0.5 rounded-full bg-blue-500 text-white text-[10px] font-semibold">
                      {item.badge}
                    </span>
                )}
              </div>
            </Link>
          ))}

          {/* Public Categories */}
          {variant === "public" && (
            <>
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "opacity-100 max-h-10" : "opacity-0   max-h-0"}
              `}
              >
            <div className ="pt-4 pb-2">
             <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
                Categories
             </h3>
            </div>
              </div>
              {publicCategories.map((cat) => (
                <Link
                  key={cat.id}
                  to={cat.link}
                  onClick={handleNavClick}
                  data-tooltip-id={!isOpen ? "sidebar-tooltip" : undefined}
                  data-tooltip-content={!isOpen ? cat.name : undefined}
                  className="group relative flex items-center gap-3 h-12 px-4 rounded-2xl transition-all duration-300 text-slate-400 hover:scale-[1.02] hover:text-white hover:bg-white/5"
                >
                  {/* Icon ALWAYS visible */}
                  <span className="text-lg group-hover:scale-110 transition-transform ">
                  {cat.icon}
                  </span>

                  {/* Text only when open */}
                 <span className={`block overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-out origin-left ${isOpen ? "opacity-100 translate-x-0 max-w-40" : "opacity-0 -translate-x-3 max-w-0"}`}>
                    {cat.name}
                 </span>
                </Link>
              ))}
            </>
          )}

          {/* Admin Sub Menus */}
          {variant === "admin" && isOpen && (
            <>
              <div className="pt-4"></div>
              {adminSubMenus.map((subMenu) => (
                <div key={subMenu.id} className="mb-2">
                  <button
                    onClick={() => toggleDropdown(subMenu.id)}
                    className="flex items-center justify-between w-full h-12 px-4 rounded-2xl transition-all duration-300 hover:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <subMenu.icon size={20} className="text-slate-400" />
                      <span className="text-sm">{subMenu.name}</span>
                    </div>
                    <ChevronDown
                      size={16}
                      className={`text-slate-500 transition-transform ${openDropdown === subMenu.id ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openDropdown === subMenu.id && (
                    <div className="ml-6 mt-1 space-y-1 animate-in slide-in-from-top-2 duration-200">
                      {subMenu.items.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.link}
                          onClick={handleNavClick}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-300 text-sm text-slate-300 hover:text-white transition-colors"
                        >
                          <ChevronRight size={14} className="text-slate-500" />
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </>
          )}
          {/* Bottom Actions */}
          {isOpen && (
            <div className="mt-auto border-t border-white/5 p-4">
              {variant === "user" && (
                <div className="space-y-1">
                  <Link
                    to="/app/settings"
                    onClick={handleNavClick}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-800 dark:hover:bg-slate-300 transition-colors"
                  >
                    <Settings size={20} className="text-slate-400" />
                    <span className="text-sm text-white">Settings</span>
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setUserMenuOpen(false);
                      navigate("/");
                    }}
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-300 dark:hover:bg-gray-300 text-sm text-red-500 transition-colors w-full"
                  >
                    <LogOut size={16} />
                    Sign Out
                  </button>
                </div>
              )}
              {variant === "admin" && (
                <Link
                  to="/admin/profile"
                  onClick={handleNavClick}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-800 dark:hover:bg-slate-300 transition-colors"
                >
                  <User size={20} className="text-slate-400" />
                  <span className="text-sm">Admin Profile</span>
                </Link>
              )}
              {variant === "public" && (
                <Link
                  to="/create-listing"
                  onClick={handleNavClick}
                  className="flex items-center justify-center gap-2 h-11 rounded-xl bg-blue-600 fonbt-medium text-white shadow-lg shadow-blue-900/30 transition-all duration-300 hover:bg-blue-700"
                >
                  <Store size={18} />
                  Sell an Item
                </Link>
              )}
            </div>
          )}
          
        </div>
        <Tooltip id="sidebar-tooltip"  place="right" delayShow={200} offset={40}
        /> 
      </aside>
    </>
  );
};
export default Sidebar;
