import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";
import CategoryList from "./CategoryList";
import { categories } from "./Categories";
import SearchInput from "./SearchInput";
import QuickLink from "./QuickLink";
import UserProfile from "./UserProfile";
import SubNavbar from "./SubNavbar";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "@/components/ThemeToggle";
import ThemeBackground from "@/components/ThemeBackground";
const Navbar = ({ toggleSidebar }) => {
  return (
    <ThemeBackground>
      <nav className="w-full shrink-0 shadow-2xl">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 shrink-0">
            <Button onClick={toggleSidebar} variant="ghost" size="icon">
              <Menu
                size={22}
                className="rounded-full hover:scale-110 transition-all duration-500 ease-in-out"
              />
            </Button>

            <Link
              to="/app/home"
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-full bg-linear-to-br from-blue-600 to-cyan-500 flex items-center justify-center font-bold text-white shadow-md shadow-blue-900/40 transition-transform duration-300 group-hover:scale-105">
                H
              </div>
              <span className="hidden md:block text-lg font-bold tracking-tight">
                HAHU<span className="text-blue-500">MARKET</span>
              </span>
            </Link>
          </div>
          <div className="flex flex-1 px-4 gap-2">
            <CategoryList categories={categories} />
            <SearchInput />
          </div>

          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <QuickLink />
            <ThemeToggle />
            <UserProfile />
          </div>
        </div>

        {/* LINE 2: SUB-NAVIGATION (Desktop Only) */}
        <div className="hidden md:block border-t border-slate-900 ring-0">
          <SubNavbar />
        </div>

        {/* MOBILE Responsive*/}
        <MobileMenu categories={categories} />
      </nav>
    </ThemeBackground>
  );
};

export default Navbar;
