import React, { useState, useRef, useEffect } from "react";
import { Menu, X, Search, ShoppingCart, Heart, PlusCircle, LogIn, LogOut, Bell, ChevronDown, User, Package, MessageCircle, ShoppingBag } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSearch } from "@/store/searchStore.jsx";
import { useAuth } from "@/store/authStore.jsx";
import { useCart } from "@/store/cartStore.jsx";
import Button from "@/components/ui/Button";

const Navbar = ({ toggleSidebar }) => {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const catRef = useRef();
  const userRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const { setSearchQuery } = useSearch();
  const { cartItems, message } = useCart();

  const categories = [
    { id: 1, name: "Electronics & Gadgets", icon: "📱", link: "/category/electronics", count: 234 },
    { id: 2, name: "Vehicles", icon: "🚗", link: "/category/vehicles", count: 89 },
    { id: 3, name: "Furniture", icon: "🛋️", link: "/category/furniture", count: 156 },
    { id: 4, name: "Clothing & Fashion", icon: "👕", link: "/category/clothing", count: 312 },
    { id: 5, name: "Books & Education", icon: "📚", link: "/category/books", count: 78 },
    { id: 6, name: "Sports & Outdoors", icon: "⚽", link: "/category/sports", count: 67 },
    { id: 7, name: "Home & Garden", icon: "🏡", link: "/category/home", count: 145 },
    { id: 8, name: "Baby & Kids", icon: "👶", link: "/category/baby", count: 89 },
  ];

  const menuItems = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Browse", link: "/browse" },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (catRef.current && !catRef.current.contains(e.target)) {
        setCatOpen(false);
      }
      if (userRef.current && !userRef.current.contains(e.target)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const userInitials = user?.name?.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase() || "JD";

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchText.trim();
    setSearchQuery(query);
    navigate(query ? `/browse?search=${encodeURIComponent(query)}` : "/browse");
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#020617] border-b border-slate-800 text-slate-100 shadow-lg">
      
      {/* Toast Alert message */}
      {message && (
        <div className="fixed top-24 right-4 bg-slate-800 border border-slate-700 text-white px-4 py-2.5 rounded-xl shadow-2xl z-50 animate-in fade-in slide-in-from-top-4 duration-300">
          {message}
        </div>
      )}

      {/* LINE 1: MAIN HEADER (Logo, Search, Action Icons) */}
      <div className="w-full px-4 sm:px-6 h-16 flex items-center gap-6 flex-2">
        
        {/* Left: Sidebar toggle & Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <Button
            onClick={toggleSidebar}
            variant="ghost"
            size="icon"
          >
            <Menu size={22} />
          </Button>
          
          <Link to="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center font-bold text-white shadow-md shadow-blue-900/40 transition-transform duration-300 group-hover:scale-105">
              H
            </div>
            <span className="hidden sm:block text-lg font-bold tracking-tight group-hover:tracking-wide hover:scale-105 text-white">
              HAHU<span className="text-blue-500">MARKET</span>
            </span>
          </Link>
        </div>

        {/* Center: Search Bar */}
        <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xl mx-auto">
          <div className="relative w-full">
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search items, brands, or categories..."
              className="w-full h-10 rounded-full bg-slate-900 border border-slate-800 pl-5 pr-12 text-sm text-white placeholder:text-slate-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
            >
              <Search size={16} />
            </button>
          </div>
        </form>

        {/* Right: Icon Buttons & User Profile */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          <Link
            to="/notifications"
            className="relative w-9 h-9 flex items-center justify-center rounded-full text-slate-400 hover:text-white hover:bg-slate-800/60 transition-all duration-200"
          >
            <Bell size={19} />
            <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-blue-500 border-2 border-[#020617] rounded-full"></span>
          </Link>

          <Link to="/wishlist" className="relative w-9 h-9 flex items-center justify-center rounded-full text-slate-400 hover:text-white hover:bg-slate-800/60 transition-all duration-200">
            <Heart size={19} />
            <span className="absolute top-0.5 right-0.5 bg-blue-600 text-[10px] font-bold text-white rounded-full w-4 h-4 flex items-center justify-center">3</span>
          </Link>

          <Link to="/cart" className="relative w-9 h-9 flex items-center justify-center rounded-full text-slate-400 hover:text-white hover:bg-slate-800/60 transition-all duration-200">
            <ShoppingCart size={19} />
            {cartItems.length > 0 && (
              <span className="absolute top-0.5 right-0.5 bg-blue-600 text-[10px] font-bold text-white rounded-full w-4 h-4 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>

          <div className="relative" ref={userRef}>
            {user ? (
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-1.5 pl-1.5 pr-2 h-9 rounded-full hover:bg-slate-800/60 transition-all duration-200"
              >
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-xs font-bold text-white">
                  {userInitials}
                </div>
                <ChevronDown size={14} className={`text-slate-400 transition-transform duration-200 ${userMenuOpen ? "rotate-180" : ""}`} />
              </button>
            ) : (
              <Button 
              variant="login" 
              size="md">
                <Link to="/login">
                <LogIn size={14} />
                <span>Sign In</span>
              </Link>
              </Button>
              
            )}

            {/* User Dropdown Menu */}
            {userMenuOpen && user && (
              <div className="absolute right-0 top-full mt-2 w-60 rounded-xl bg-slate-900 border border-slate-800 shadow-2xl py-1.5 z-50">
                <div className="px-4 py-2 border-b border-slate-800">
                  <p className="font-semibold text-sm text-white truncate">{user.name}</p>
                  <p className="text-xs text-slate-400 truncate">{user.email}</p>
                </div>
                <Link to="/profile" className="flex items-center gap-2.5 px-4 py-2 hover:bg-slate-800 text-sm text-slate-300 hover:text-white transition-colors">
                  <User size={15} /> My Profile
                </Link>
                <Link to="/my-listings" className="flex items-center gap-2.5 px-4 py-2 hover:bg-slate-800 text-sm text-slate-300 hover:text-white transition-colors">
                  <Package size={15} /> My Listings
                </Link>
                <Link to="/orders" className="flex items-center gap-2.5 px-4 py-2 hover:bg-slate-800 text-sm text-slate-300 hover:text-white transition-colors">
                  <ShoppingBag size={15} /> My Orders
                </Link>
                <Link to="/messages" className="flex items-center gap-2.5 px-4 py-2 hover:bg-slate-800 text-sm text-slate-300 hover:text-white transition-colors">
                  <MessageCircle size={15} /> Messages
                  <span className="ml-auto bg-blue-600 text-[10px] text-white px-1.5 py-0.5 rounded-full">2</span>
                </Link>
                <hr className="my-1.5 border-slate-800" />
                <button
                  onClick={() => {
                    logout();
                    setUserMenuOpen(false);
                    navigate("/");
                  }}
                  className="flex items-center gap-2.5 px-4 py-2 hover:bg-red-500/10 text-sm text-red-400 hover:text-red-300 transition-colors w-full text-left"
                >
                  <LogOut size={15} /> Sign Out
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full text-slate-400 hover:text-white hover:bg-slate-800/60 transition-all duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* LINE 2: SUB-NAVIGATION (Categories, Main Menu Items, Sell Button) - Desktop Only */}
      <div className="hidden md:block border-t border-slate-900 bg-slate-950/60">
        <div className="max-w-7xl mx-auto sm:px-6 h-12 flex items-center justify-between">
          <div className="flex items-center gap-2">
            
            {/* Category Dropdown Toggle */}
            <div className="relative flex flex-1 gap-6" ref={catRef}>
              {/* Menu Items Links */}
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  location.pathname === item.link
                    ? 'bg-slate-800 text-white font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                {item.name}
              </Link>
            ))}
              <button
                onClick={() => setCatOpen(!catOpen)}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all duration-200 text-slate-200 border border-slate-800/80 bg-slate-900/50"
              >
                Categories
                <ChevronDown size={14} className={`text-slate-400 transition-transform duration-200 ${catOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Category Dropdown Panel */}
              {catOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="grid grid-cols-2 gap-1 px-2">
                    {categories.map((cat) => (
                      <Link
                        key={cat.id}
                        to={cat.link}
                        className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-slate-800 transition-colors group"
                        onClick={() => setCatOpen(false)}
                      >
                        <span className="text-lg group-hover:scale-110 transition-transform duration-200">{cat.icon}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-slate-200 truncate">{cat.name}</p>
                          <p className="text-[10px] text-slate-400">{cat.count} listings</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-2.5 pt-2 border-t border-slate-800">
                    <Link to="/categories" className="flex items-center justify-center text-xs font-medium text-blue-400 hover:text-blue-300 py-1 transition-colors" onClick={() => setCatOpen(false)}>
                      View All Categories
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right: Header Row 2 Sell Action */}
          <Button as child variant="primary">
           <Link
            to="/create-listing">
            <PlusCircle size={15} />
            <span>Sell on Hahu</span>
          </Link>
          </Button>
          
        </div>
      </div>

      {/* MOBILE FULLSCREEN SIDE-PANEL / DROPDOWN MENU */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 py-4 animate-in slide-in-from-top-2 duration-300">
          <div className="px-4 space-y-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search items..."
                className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 pr-10 focus:outline-none focus:border-blue-500 text-sm text-white placeholder-slate-400"
              />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-slate-400">
                <Search size={16} />
              </button>
            </form>

            <div className="space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.link}
                  className={`block py-2 px-3 rounded-lg text-sm font-medium transition-colors ${location.pathname === item.link ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-800'}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <hr className="border-slate-800" />

            <div>
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-3">Top Categories</h4>
              <div className="grid grid-cols-2 gap-2">
                {categories.slice(0, 6).map((cat) => (
                  <Link
                    key={cat.id}
                    to={cat.link}
                    className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    <span className="text-base">{cat.icon}</span>
                    <span className="text-xs font-medium text-slate-300 truncate">{cat.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;