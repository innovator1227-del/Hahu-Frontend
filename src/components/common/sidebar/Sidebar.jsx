import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "@/assets/logo.jpg";
import { useAuth } from "@/store/authStore.jsx";
import { useNavigate } from "react-router-dom";
import {
    LayoutDashboard,
    Package,
    ShoppingBag,
    MessageCircle,
    Heart,
    History,
    ChevronDown,
    ChevronRight,
    Settings,
    User,
    LogOut,
    Store,
    Tag,
    TrendingUp,
} from "lucide-react";

const Sidebar = ({ isOpen, variant = "public", onClose }) => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const location = useLocation();
    const { logout } = useAuth();
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const navigate = useNavigate();

    // Public Sidebar - Categories for second-hand store
    const publicMenuItems = [
        { id: 1, name: "Dashboard", icon: LayoutDashboard, link: "/" },
        { id: 2, name: "Browse All", icon: ShoppingBag, link: "/browse" },
        { id: 3, name: "My Listings", icon: Package, link: "/my-listings" },
        { id: 4, name: "Wishlist", icon: Heart, link: "/wishlist" },
        { id: 5, name: "Order History", icon: History, link: "/orders" },
        { id: 6, name: "Messages", icon: MessageCircle, link: "/messages" },
    ];

    const publicCategories = [
        { id: 1, name: "Electronics", icon: "📱", link: "/category/electronics" },
        { id: 2, name: "Vehicles", icon: "🚗", link: "/category/vehicles" },
        { id: 3, name: "Furniture", icon: "🛋️", link: "/category/furniture" },
        { id: 4, name: "Clothing", icon: "👕", link: "/category/clothing" },
        { id: 5, name: "Books", icon: "📚", link: "/category/books" },
        { id: 6, name: "Sports", icon: "⚽", link: "/category/sports" },
        { id: 7, name: "Home & Garden", icon: "🏡", link: "/category/home" },
        { id: 8, name: "Baby & Kids", icon: "👶", link: "/category/baby" },
    ];

    // User Sidebar - Logged in user features
    const userMenuItems = [
        { id: 1, name: "Dashboard", icon: LayoutDashboard, link: "/app/dashboard" },
        { id: 2, name: "My Listings", icon: Package, link: "/app/my-listings" },
        { id: 3, name: "Create Listing", icon: Store, link: "/app/create-listing" },
        { id: 4, name: "Wishlist", icon: Heart, link: "/app/wishlist" },
        { id: 5, name: "My Orders", icon: ShoppingBag, link: "/app/orders" },
        { id: 6, name: "Order History", icon: History, link: "/app/order-history" },
        { id: 7, name: "Messages", icon: MessageCircle, link: "/app/messages", badge: 2 },
    ];

    // Admin Sidebar - Admin features
    const adminMenuItems = [
        { id: 1, name: "Dashboard", icon: LayoutDashboard, link: "/admin/dashboard" },
        { id: 2, name: "All Listings", icon: Package, link: "/admin/listings" },
        { id: 3, name: "All Users", icon: User, link: "/admin/users" },
        { id: 4, name: "Categories", icon: Tag, link: "/admin/categories" },
        { id: 5, name: "Orders", icon: ShoppingBag, link: "/admin/orders" },
        { id: 6, name: "Reports", icon: TrendingUp, link: "/admin/reports" },
    ];

    const adminSubMenus = [
        {
            id: "settings",
            name: "Settings",
            icon: Settings,
            items: [
                { name: "Site Settings", link: "/admin/settings" },
                { name: "Payment Settings", link: "/admin/payment-settings" },
                { name: "Notification Settings", link: "/admin/notifications" },
            ]
        },
        {
            id: "content",
            name: "Content",
            icon: Package,
            items: [
                { name: "Banners", link: "/admin/banners" },
                { name: "Pages", link: "/admin/pages" },
                { name: "FAQ", link: "/admin/faq" },
            ]
        }
    ];

    const toggleDropdown = (id) => {
        setOpenDropdown(openDropdown === id ? null : id);
    };

    const getMenuItems = () => {
        switch (variant) {
            case "user": return userMenuItems;
            case "admin": return adminMenuItems;
            default: return publicMenuItems;
        }
    };

    const menuItems = getMenuItems();

    const isActive = (link) => location.pathname === link;

    const handleNavClick = () => {
        if (window.innerWidth < 768) {
            onClose();
        }
    };

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                    onClick={onClose}
                />
            )}
            <aside
                className={`fixed top-0 left-0 z-50 h-screen flex flex-col bg-[#020617] backdrop-blur-xl border-r border-white/5 transition-all duration-500 ease-in-out
                    ${isOpen
                ? "w-64 translate-x-0"
                : "-translate-x-full md:translate-x-0 md:w-[88px]"
                }
                `}
                >
                {/* Header */}
                <div className="h-16 md:h-20 flex items-center px-5 border-b border-white/5 bg-transparent text-white">
                    <div className="flex items-center gap-3">

                        {/* Logo ALWAYS visible */}
                        <img
                            src={Logo}
                            alt="HAHU Market Logo"
                            className="w-10 h-10 rounded-full ring-2 ring-white/5 object-cover"
                        />

                        {/* Text only when open */}
                        {isOpen && (
                            <span className="text-lg font-bold tracking-tight text-slate-100">
                                HAHU <span className="text-white ">MARKET</span>
                            </span>
                        )}

                    </div>
                </div>

                {/* Scrollable Menu */}
                <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col gap-2 px-3 py-6">
                    {/* Main Menu Items */}
                    {menuItems.map((item) => (
                        <Link
                            key={item.id}
                            to={item.link}
                            onClick={handleNavClick}
                            className={`group relative flex items-center gap-3 h-12 px-4 rounded-2xl transition-all duration-300 text-slate-400 hover:text-white hover:bg-white/5 $${isActive(item.link)
                            ?
                            "bg-white/10 border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] text-white"
                            :
                            ""
                            }`}
                        >
                            <item.icon size={20} className={`w-5 h-5 transition-colors ${isActive(item.link)? "text-blue-400 ": "text-slate-400 group-hover:text-white"}
                            `} />
                            {isOpen && (
                                <>
                                    <span className="text-sm font-medium flex-1 tracking-wide">{item.name}</span>
                                    {item.badge && (
                                        <span className="px-2 py-0.5 rounded-full bg-blue-500 text-white text-[10px] font-semibold">{item.badge}</span>
                                    )}
                                </>
                            )}
                        </Link>
                    ))}

                    {/* Public Categories */}
                    {variant === "public" && (
                        <>
                            {isOpen && (
                                <div className="pt-4 pb-2">
                                    <h3 className="px-4 text-xs uppercase tracking-[0.25em] font-semibold text-slate-500">
                                        Categories
                                    </h3>
                                </div>
                            )}
                            {publicCategories.map((cat) => (
                                <Link
                                    key={cat.id}
                                    to={cat.link}
                                    onClick={handleNavClick}
                                    className="group relative flex items-center gap-3 h-12 px-4 rounded-2xl transition-all duration-300 text-slate-400 hover:text-white hover:bg-white/5"
                                >
                                    {/* Icon ALWAYS visible */}
                                    <span className="text-lg group-hover:scale-110 transition-transform">
                                        {cat.icon}
                                    </span>

                                    {/* Text only when open */}
                                    {isOpen && (
                                        <span className="text-sm">{cat.name}</span>
                                    )}
                                </Link>
                            ))}
                        </>
                    )}

                    {/* Admin Sub Menus */}
                    {variant === "admin" && isOpen && (
                        <>
                            <div className="pt-4"></div>
                            {adminSubMenus.map((subMenu) => (
                                <div key={subMenu.id} className="mb-2">
                                    <button
                                        onClick={() => toggleDropdown(subMenu.id)}
                                        className="flex items-center justify-between w-full h-12 px-4 rounded-2xl transition-all duration-300 hover:bg-white/5"
                                    >
                                        <div className="flex items-center gap-3">
                                            <subMenu.icon size={20} className="text-slate-400" />
                                            <span className="text-sm">{subMenu.name}</span>
                                        </div>
                                        <ChevronDown
                                            size={16}
                                            className={`text-slate-500 transition-transform ${openDropdown === subMenu.id ? "rotate-180" : ""}`}
                                        />
                                    </button>
                                    {openDropdown === subMenu.id && (
                                        <div className="ml-6 mt-1 space-y-1 animate-in slide-in-from-top-2 duration-200">
                                            {subMenu.items.map((item, idx) => (
                                                <Link
                                                    key={idx}
                                                    to={item.link}
                                                    onClick={handleNavClick}
                                                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-300 text-sm text-slate-300 hover:text-white transition-colors"
                                                >
                                                    <ChevronRight size={14} className="text-slate-500" />
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </>
                    )}

                    {/* Bottom Actions */}
                    {isOpen && (
                        <div className="mt-auto border-t border-white/5 p-4">
                            {variant === "user" && (
                                <div className="space-y-1">
                                    <Link
                                        to="/app/settings"
                                        onClick={handleNavClick}
                                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-800 dark:hover:bg-slate-300 transition-colors"
                                    >
                                        <Settings size={20} className="text-slate-400" />
                                        <span className="text-sm">Settings</span>
                                    </Link>
                                    <button
                                        onClick={() => {
                                            logout();
                                            setUserMenuOpen(false);
                                            navigate("/");
                                        }}
                                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-300 dark:hover:bg-gray-300 text-sm text-red-500 transition-colors w-full"
                                    >
                                        <LogOut size={16} />
                                        Sign Out
                                    </button>
                                </div>
                            )}
                            {variant === "admin" && (
                                <Link
                                    to="/admin/profile"
                                    onClick={handleNavClick}
                                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-800 dark:hover:bg-slate-300 transition-colors"
                                >
                                    <User size={20} className="text-slate-400" />
                                    <span className="text-sm">Admin Profile</span>
                                </Link>
                            )}
                            {variant === "public" && (
                                <Link
                                    to="/create-listing"
                                    onClick={handleNavClick}
                                    className="flex items-center justify-center gap-2 h-11 rounded-xl bg-blue-600 fonbt-medium text-white shadow-lg shadow-blue-900/30 transition-all duration-300 hover:bg-blue-700"
                                >
                                    <Store size={18} />
                                    Sell an Item
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </aside>
        </>
    );
}
export default Sidebar