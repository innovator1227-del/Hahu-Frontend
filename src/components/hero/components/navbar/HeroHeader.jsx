import ThemeBackground from "@/components/ThemeBackground";
import ThemeToggle from "@/components/ThemeToggle";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeroHeader = ({ heroMenu }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <ThemeBackground>
      <div className="w-full shadow-2xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg p-2 text-2xl md:hidden"
          >
            <FaBars size={20} />
          </button>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-2 md:flex">
            {heroMenu.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className="whitespace-nowrap rounded-full flex items-center px-5 py-2.5 text-sm font-medium transition hover:text-green-700"
              >
                {item.icon && <item.icon size={20} className="mr-2" />}
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Login */}
          <Link
            to="/login"
            className="rounded-lg bg-green-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-800"
          >
            Login
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="px-4 py-3 md:hidden border-t border-slate-400">
            <nav className="flex flex-col gap-1">
              {heroMenu.map((item) => (
                <Link
                  key={item.id}
                  to={item.link}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </ThemeBackground>
  );
};

export default HeroHeader;
