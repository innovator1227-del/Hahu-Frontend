import { FaBars } from "react-icons/fa6";
import useTheme from "../../hooks/useTheme";
import useThemeStore from "../../stores/ThemeStore";
import ThemeDropdown from "./ThemeDropDown";
import AdminInput from "../ui/AdminInput";
import { useState } from "react";
import { Search } from "lucide-react";

const Header = ({ setIsOpen }) => {
  const currentTheme = useTheme();
  const { theme, setTheme } = useThemeStore();
  const [searchText, setSearchText] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchText.trim();
    setSearchQuery(query);
    navigate(query ? `/browse?search=${encodeURIComponent(query)}` : "/browse");
  };
  return (
    <header
      className={`
    h-16
    flex
    items-center
    justify-between
    p-6
    shadow-sm
    ${currentTheme.header}
    ${currentTheme.text}
    transition-colors
    duration-1000
    ease-in-out
`}
    >
      <div className="flex items-center space-x-4 gap-6">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="cursor-pointer text-xl p-2 rounded-lg w-5 h-5"
        >
          <FaBars />
        </button>
        <div className="hidden md:block">
          <h1 className="text-2xl font-black">HAHU-DASHBOARD</h1>
          <p> welcome back to hahu</p>
        </div>
      </div>

      <div>
        <div className="hidden md:flex flex-1 w-full">
          <form onSubmit={handleSearch} className="relative w-full">
            <AdminInput
              type="text"
              placeholder="Search And Track Hahu...."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors duration-200"
            >
              <Search size={16} />
            </button>
          </form>
        </div>
      </div>

      <ThemeDropdown />
    </header>
  );
};

export default Header;
