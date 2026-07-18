import { FaBars } from "react-icons/fa6";
import useTheme from "../../hooks/useTheme";
import useThemeStore from "../../stores/ThemeStore";
import ThemeDropdown from "./ThemeDropDown";

const Header = ({ setIsOpen }) => {
  const currentTheme = useTheme();
  const { theme, setTheme } = useThemeStore();
  return (
    <header
      className={`
    h-16
    border-b
    flex
    items-center
    justify-between
    p-6
    shadow-sm
    ${currentTheme.header}
    ${currentTheme.text}
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

      <ThemeDropdown />
    </header>
  );
};

export default Header;
