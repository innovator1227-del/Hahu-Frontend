import { FaBars } from "react-icons/fa6";
import useTheme from "@/hooks/useTheme";
import useThemeStore from "@/stores/ThemeStore";
import ThemeDropdown from "@/components/common/header/ThemeDropdown";
import AdminInput from "@/components/ui/AdminInput";
import { useState } from "react";
import { Bell, Search, ShoppingCart, User, User2 } from "lucide-react";
import { Link } from "react-router-dom";
import ProfileDropdown from "./ProfileDropdown";
import useAuthStore from "@/stores/AuthStore";
import Animate from "@/components/ui/Animate";

const Header = ({ setIsOpen }) => {
  const currentTheme = useTheme();
  const { theme, setTheme } = useThemeStore();

  const admin = useAuthStore((state) => state.admin);

  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchText.trim();
    setSearchQuery(query);
    navigate(query ? `/browse?search=${encodeURIComponent(query)}` : "/browse");
  };
  return (
    <header
      className={` sticky top-0 z-50 flex w-full min-w-0 items-center justify-between gap-3 px-3 py-3 sm:px-4 lg:px-8 shadow-lg
    ${currentTheme.header}
    ${currentTheme.text}
    transition-colors duration-500 ease-in-out
  `}
    >
      {/* LEFT: Menu + Dashboard title */}
      <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-lg text-xl transition-all duration-300 hover:scale-105"
        >
          <FaBars />
        </button>

        <div className="min-w-0">
          <h1 className="truncate text-sm font-black sm:text-lg md:text-xl lg:text-2xl">
            HAHU-DASHBOARD
          </h1>

          <p className="hidden truncate text-xs sm:block sm:text-sm">
            Welcome back to HAHU
          </p>
        </div>
      </div>

      {/* CENTER: Search */}
      <div className="hidden min-w-0 flex-1 md:flex md:max-w-md lg:max-w-lg">
        <form onSubmit={handleSearch} className="relative w-full">
          <AdminInput
            type="text"
            placeholder="Search and Track Hahu...."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="pr-10"
          />

          <button
            type="submit"
            className=" absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
          >
            <Search size={16} />
          </button>
        </form>
      </div>

      {/* RIGHT: Notifications + Cart + Profile + Theme */}
      <div className="flex shrink-0 items-center gap-1 sm:gap-2 md:gap-3">
        {/* Notification */}
        <Link
          to="/Notification"
          className="flex h-9 w-9  items-center justify-center rounded-full transition-all duration-200 hover:bg-slate-800/60"
        >
          <Bell size={20} />
        </Link>

        {/* Cart */}
        <Link
          to="/Order"
          className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full transition-all duration-200 hover:bg-slate-800/60"
        >
          <ShoppingCart size={20} />
        </Link>

        {/* Profile */}
        <div className="shrink-0 pr-3">
          <Animate show={admin && open} variant="slideDown">
            <ProfileDropdown />
          </Animate>
        </div>

        {/* Theme */}
        <div className="shrink-0">
          <Animate variant="fade">
            <ThemeDropdown />
          </Animate>
        </div>
      </div>
    </header>
  );
};

export default Header;
