import useTheme from "@/hooks/useTheme";
import useAuthStore from "@/stores/AuthStore";
import useThemeStore from "@/stores/ThemeStore";
import { ChevronDown, User2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ProfileDropdown = () => {
  const dropdownRef = useRef(null);
  const [open, setOpen] = useState(false);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();
  const { theme, setTheme } = useThemeStore();
  const currentTheme = useTheme();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div>
      <div ref={dropdownRef} className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center space-x-3 pl-4 pr-3 cursor-pointer"
        >
          <User2 className="w-8 h-8 rounded-full ring-2 ring-gray-600 hover:bg-slate-500" />

          <div className="hidden md:block text-left">
            <p className="text-sm font-medium">Hahu-Market</p>
            <p className="text-xs">Administrator</p>
          </div>

          <ChevronDown
            size={18}
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {open && (
          <div
            className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg overflow-hidden z-50
              ${currentTheme.dropdown}
              ${currentTheme.dropdownText}
              transition-colors duration-500 ease-in-out
            `}
          >
            <Link to="/profile" className="block px-4 py-3 hover:bg-slate-700">
              Profile
            </Link>

            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-3 text-red-400 hover:bg-slate-700"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileDropdown;
