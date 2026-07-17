import React, { useState, useRef, useEffect } from "react";
import { Menu, X, Search, ShoppingCart, Heart, PlusCircle, LogIn, LogOut, Bell, ChevronDown, User, Package, MessageCircle, ShoppingBag } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSearch } from "@/store/searchStore.jsx";
import { useAuth } from "@/store/authStore.jsx";
import { useCart } from "@/store/cartStore.jsx";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

const Navbar = ({ toggleSidebar }) => {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  
  const catRef = useRef(null);
  const userRef = useRef(null);
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

  // Handle outside clicks to close dropdowns safely
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

  // Close mobile drawer on route changes
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
    <nav className="sticky top-0 z-50 bg-[#020617] border-b border-slate-800 text-slate-100 shadow-lg w-full">
      
      {/* Toast Alert message */}
      {message && (
        <div className="fixed top-24 right-4 bg-slate-800 border border-slate-700 text-white px-4 py-2.5 rounded-xl shadow-2xl z-50 animate-in fade-in slide-in-from-top-4 duration-300">
          {message}
        </div>
      )}

      {/* LINE 1: MAIN HEADER */}
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Left Section: Sidebar toggle & Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <Button
            onClick={toggleSidebar}
            variant="ghost"
            size="icon"
            className="text-slate-300 hover:text-white"
          >
            <Menu size={22} />
          </Button>
          
          <Link to="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center font-bold text-white shadow-md shadow-blue-900/40 transition-transform duration-300 group-hover:scale-105">
              H
            </div>
            <span className="hidden md:block text-lg font-bold tracking-tight text-white">
              HAHU<span className="text-blue-500">MARKET</span>
            </span>
          </Link>
        </div>
          <div className="flex flex-1 px-4 gap-2">
            <div className="relative" ref={catRef}>
              <button 
                onClick={() => setCatOpen(!catOpen)}
                className="hidden md:flex items-center gap-1.5 px-6 py-3 text-sm font-semibold hover:bg-slate-800 transition-all duration-200 text-slate-200 border border-blue-300 bg-slate-900/50"
              >
                All 
                <ChevronDown size={14} className={`text-slate-400 transition-transform duration-200 ${catOpen ? "rotate-180" : ""}`} />
              </button> 

              {/* Category Dropdown Panel */}
              <div className={`absolute top-full left-0 mt-2 w-80 bg-slate-950  rounded-xl shadow-2xl border border-slate-800 py-3 z-50 origin-top-left transition-all duration-200 ${catOpen ? "opacity-100 scale-100 translate-y-0 visible" : "opacity-0 scale-95 -translate-y-2 invisible pointer-events-none"}`}>
                <div className="grid grid-cols-1 gap-0.5 px-2 max-h-96 overflow-y-auto">
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      to={cat.link}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800/60 transition-all duration-200 group"
                      onClick={() => setCatOpen(false)}
                    >
                      <span className="text-lg group-hover:scale-110 transition-transform duration-150">{cat.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-slate-200 truncate group-hover:text-white">{cat.name}</p>
                        <p className="text-[10px] text-slate-500">{cat.count} listings</p>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-2 pt-2 border-t border-slate-800 px-3">
                  <Link to="/categories" className="flex items-center justify-center text-xs font-semibold text-blue-400 hover:text-blue-300 py-1 transition-colors" onClick={() => setCatOpen(false)}>
                    View All Categories
                  </Link>
                </div>
              </div>
            </div>

        {/* Middle Section: Search bar (Hidden on mobile, expands beautifully on desktop) */}
        <div className="hidden md:flex flex-1 max-w-lg mx-4">
          <form onSubmit={handleSearch} className="relative w-full">
            <Input 
              type="text"
              placeholder="Search On Hahu..."
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

        {/* Right Section: Icons & Profile & Mobile Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          
          {/* Search toggle for tablets (between mobile and full desktop size) */}
          <Link
            to="/browse"
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full text-slate-400 hover:text-white hover:bg-slate-800/60 transition-all duration-200"
          >
            <Search size={19} />
          </Link>

          <Link
            to="/notifications"
            className="relative w-9 h-9 flex items-center justify-center rounded-full text-slate-400 hover:text-white hover:bg-slate-800/60 transition-all duration-200"
          >
            <Bell size={19} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
          </Link>

          <Link to="/wishlist" className="relative w-9 h-9 flex items-center justify-center rounded-full text-slate-400 hover:text-white hover:bg-slate-800/60 transition-all duration-200">
            <Heart size={19} />
            <span className="absolute -top-0.5 -right-0.5 bg-blue-600 text-[10px] font-bold text-white rounded-full w-4.5 h-4.5 flex items-center justify-center">3</span>
          </Link>

          <Link to="/cart" className="relative w-9 h-9 flex items-center justify-center rounded-full text-slate-400 hover:text-white hover:bg-slate-800/60 transition-all duration-200">
            <ShoppingCart size={19} />
            {cartItems.length > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-blue-600 text-[10px] font-bold text-white rounded-full w-4.5 h-4.5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>

          {/* User Account Section */}
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
              <Link to="/login">
                <Button variant="login" size="sm" className="gap-1.5">
                  <LogIn size={14} />
                  <span className="hidden sm:inline">Sign In</span>
                </Button>
              </Link>
            )}

            {/* User Dropdown Menu */}
            {user && (
              <div className={`absolute top-full right-0 mt-2 w-56 bg-slate-950 rounded-xl shadow-2xl border border-slate-800 py-2 z-50 transition-all duration-200 origin-top-right ${userMenuOpen ? "opacity-100 scale-100 translate-y-0 visible" : "opacity-0 scale-95 -translate-y-2 invisible pointer-events-none"}`}>
                <div className="px-4 py-2 border-b border-slate-800/60">
                  <p className="font-semibold text-sm text-white truncate">{user.name}</p>
                  <p className="text-xs text-slate-400 truncate">{user.email}</p>
                </div>
                <div className="py-1">
                  <Link to="/profile" className="flex items-center gap-2.5 px-4 py-2 hover:bg-slate-800/60 text-sm text-slate-300 hover:text-white transition-colors">
                    <User size={15} /> My Profile
                  </Link>
                  <Link to="/my-listings" className="flex items-center gap-2.5 px-4 py-2 hover:bg-slate-800/60 text-sm text-slate-300 hover:text-white transition-colors">
                    <Package size={15} /> My Listings
                  </Link>
                  <Link to="/orders" className="flex items-center gap-2.5 px-4 py-2 hover:bg-slate-800/60 text-sm text-slate-300 hover:text-white transition-colors">
                    <ShoppingBag size={15} /> My Orders
                  </Link>
                  <Link to="/messages" className="flex items-center gap-2.5 px-4 py-2 hover:bg-slate-800/60 text-sm text-slate-300 hover:text-white transition-colors">
                    <MessageCircle size={15} /> Messages
                    <span className="ml-auto bg-blue-600 text-[10px] text-white px-1.5 py-0.5 rounded-full">2</span>
                  </Link>
                </div>
                <div className="border-t border-slate-800/60 pt-1 mt-1">
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
              </div>
            )}
          </div>

          {/* Mobile Navigation Drawer Toggle */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full text-slate-400 hover:text-white hover:bg-slate-800/60 transition-all duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* LINE 2: SUB-NAVIGATION (Desktop Only) */}
      <div className="hidden md:block border-t border-slate-900 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between">
          <div className="flex items-center gap-4">
            
            {/* Category Dropdown Container */}
            

            {/* Menu Links */}
            <div className="flex items-center gap-1">
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.link}
                  className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === item.link
                      ? 'bg-slate-800 text-white'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
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

      {/* MOBILE FULLSCREEN SIDE-PANEL / DROPDOWN */}
      {menuOpen && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800 py-4 px-4 space-y-4 animate-in slide-in-from-top-2 duration-300">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search items..."
              className="w-full rounded-xl border border-slate-800 bg-slate-900 px-4 py-2.5 pr-10 focus:outline-none focus:border-blue-500 text-sm text-white placeholder-slate-500"
            />
            <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-white">
              <Search size={16} />
            </button>
          </form>

          <div className="space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className={`block py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${location.pathname === item.link ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-800/60'}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <hr className="border-slate-800" />

          {/* Sell Button on Mobile */}
          <Link to="/create-listing" className="block">
            <Button variant="primary" className="w-full justify-center gap-1.5">
              <PlusCircle size={16} />
              <span>Sell on Hahu</span>
            </Button>
          </Link>

          <hr className="border-slate-800" />

          <div>
            <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-3 px-3">Top Categories</h4>
            <div className="grid grid-cols-2 gap-2">
              {categories.slice(0, 6).map((cat) => (
                <Link
                  key={cat.id}
                  to={cat.link}
                  className="flex items-center gap-2 py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800/60 border border-slate-800/40 transition-colors"
                >
                  <span className="text-base">{cat.icon}</span>
                  <span className="text-xs font-medium text-slate-300 truncate">{cat.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;