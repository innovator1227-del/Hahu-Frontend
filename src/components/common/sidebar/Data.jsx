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

// Public Sidebar - Categories for second-hand store
  export const publicMenuItems = [
    { id: 1, name: "Dashboard", icon: LayoutDashboard, link: "/" },
    { id: 2, name: "Browse All", icon: ShoppingBag, link: "/browse" },
    { id: 3, name: "My Listings", icon: Package, link: "/my-listings" },
    { id: 4, name: "Wishlist", icon: Heart, link: "/wishlist" },
    { id: 5, name: "Order History", icon: History, link: "/orders" },
    { id: 6, name: "Messages", icon: MessageCircle, link: "/messages" },
  ];

  export const publicCategories = [
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
  export const userMenuItems = [
    { id: 1, name: "Dashboard", icon: LayoutDashboard, link: "/app/dashboard" },
    { id: 2, name: "My Listings", icon: Package, link: "/app/my-listings" },
    { id: 3, name: "Create Listing", icon: Store, link: "/app/create-listing" },
    { id: 4, name: "Wishlist", icon: Heart, link: "/app/wishlist" },
    { id: 5, name: "My Orders", icon: ShoppingBag, link: "/app/orders" },
    { id: 6, name: "Order History", icon: History, link: "/app/order-history" },
    {
      id: 7,
      name: "Messages",
      icon: MessageCircle,
      link: "/app/messages",
      badge: 2,
    },
  ];

  // Admin Sidebar - Admin features
  export const adminMenuItems = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutDashboard,
      link: "/admin/dashboard",
    },
    { id: 2, name: "All Listings", icon: Package, link: "/admin/listings" },
    { id: 3, name: "All Users", icon: User, link: "/admin/users" },
    { id: 4, name: "Categories", icon: Tag, link: "/admin/categories" },
    { id: 5, name: "Orders", icon: ShoppingBag, link: "/admin/orders" },
    { id: 6, name: "Reports", icon: TrendingUp, link: "/admin/reports" },
  ];

  export const adminSubMenus = [
    {
      id: "settings",
      name: "Settings",
      icon: Settings,
      items: [
        { name: "Site Settings", link: "/admin/settings" },
        { name: "Payment Settings", link: "/admin/payment-settings" },
        { name: "Notification Settings", link: "/admin/notifications" },
      ],
    },
    {
      id: "content",
      name: "Content",
      icon: Package,
      items: [
        { name: "Banners", link: "/admin/banners" },
        { name: "Pages", link: "/admin/pages" },
        { name: "FAQ", link: "/admin/faq" },
      ],
    },
  ];