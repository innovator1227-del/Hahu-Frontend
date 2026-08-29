import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  MessageCircle,
  Heart,
  History,
  Store,
} from "lucide-react";


// User Sidebar - Logged in user features
export const userMenuItems = [
  {
    id: 1,
    name: "Dashboard",
    icon: LayoutDashboard,
    link: "/app/dashboard",
    section: "Main",
  },
  {
    id: 2,
    name: "Browse All",
    icon: ShoppingBag,
    link: "/app/browse",
    section: "Main",
  },
  {
    id: 3,
    name: "Wishlist",
    icon: Heart,
    link: "/app/wishlist",
    section: "Main",
  },
  {
    id: 4,
    name: "Messages",
    icon: MessageCircle,
    link: "/app/messages",
    badge: 2,
    section: "Main",
  },
  {
    id: 5,
    name: "My Listings",
    icon: Package,
    link: "/app/my-listings",
    section: "Sell",
  },
  {
    id: 6,
    name: "Create Listing",
    icon: Store,
    link: "/app/create-listing",
    section: "Sell",
  },
  {
    id: 7,
    name: "My Orders",
    icon: ShoppingBag,
    link: "/app/orders",
    section: "Orders",
  },
];
