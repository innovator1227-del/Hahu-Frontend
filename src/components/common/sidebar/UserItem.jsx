import { useAuth } from "@/store/authStore";

import { LogOut, Settings } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const UserItem = ({ isOpen, variant, onClose }) => {
  const item = [
    {
      id: 1,
      name: "Settings",
      icon: Settings,
      path: "/app/settings",
      type: "link",
    },
    { id: 2, name: "Logout", icon: LogOut, path: "/", type: "logout" },
  ];

  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const { logout } = useAuth();

  const navigate = useNavigate();

  const handleNavClick = () => {
    if (window.innerWidth < 768) {
      onClose();
    }
  };
  const handleLogout = () => {
    logout();
    setUserMenuOpen(false);
    navigate("/");
  };

  const Component = item.type === "logout" ? "button" : Link;

  return (
    <div className="flex flex-col flex-1 pb-6">
      {item.map((item) => (
        <div key={item.id} className="pb-0">
          {variant === "user" && (
            <div className="space-y-0.5">
              <Component
                {...(item.type === "logout"
                  ? {
                      type: "button",
                      onClick: handleLogout,
                    }
                  : {
                      to: item.path,
                      onClick: handleNavClick,
                    })}
                data-tooltip-id={!isOpen ? "sidebar-tooltip" : undefined}
                data-tooltip-content={!isOpen ? item.name : undefined}
                className="group relative flex items-center gap-3 h-12 px-4 rounded-2xl transition-all duration-300 text-slate-400 hover:scale-[1.02] hover:text-white hover:bg-white/5"
              >
                <span className="text-lg group-hover:scale-105 transition-transform">
                  <item.icon size={20} />
                </span>

                <span
                  className={`block overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-out origin-left ${
                    isOpen
                      ? "opacity-100 translate-x-0 max-w-40"
                      : "opacity-0 -translate-x-3 max-w-0"
                  }`}
                >
                  {item.name}
                </span>
              </Component>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default UserItem;
