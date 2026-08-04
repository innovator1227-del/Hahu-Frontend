import Button from "@/components/ui/Button";
import { PlusCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SubNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Browse", link: "/browse" },
  ];

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Menu Links */}
          <div className="flex items-center gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === item.link
                    ? "bg-slate-800 text-white"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/40"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Sell CTA button */}
        <Link to="/create-listing">
          <Button variant="primary" size="sm" className="gap-1.5">
            <PlusCircle size={15} />
            <span>Sell on Hahu</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SubNavbar;
