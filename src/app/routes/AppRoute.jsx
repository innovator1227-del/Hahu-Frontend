import SellerAddProduct from "@/features/listings/SellerAddProduct";
import StaticPage from "@/pages/StaticPage";
import Dashboard from "@/pages/Dashboard";
import MyListings from "@/pages/MyListings";
import Wishlist from "@/pages/Wishlist";
import Orders from "@/pages/Orders";
import ChatPage from "@/features/chats/ChatPage";
import SellerDetail from "@/pages/product-detail/SellerDetail";
import ProductDetail from "@/pages/product-detail/ProductDetail";
import Cart from "@/pages/Cart";
import BrowseListing from "@/features/listings/BrowseListing";
import Home from "@/pages/home/Home";
import CategoryPage from "@/pages/CategoryPage";

export const AppRoute = [
  { path: "home", element: <Home /> },
  { path: "create-listing", element: <SellerAddProduct /> },
  {
    path: "profile",
    element: <StaticPage title="Profile" description="User profile" />,
  },
  { path: "wishlist", element: <Wishlist /> },
  { path: "dashboard", element: <Dashboard /> },
  { path: "my-listings", element: <MyListings /> },
  { path: "orders", element: <Orders /> },
  { path: "chat", element: <ChatPage /> },
  { path: "sellerdetail", element: <SellerDetail /> },
  { path: "product/:id", element: <ProductDetail /> },
  { path: "cart", element: <Cart /> },
  { path: "browse", element: <BrowseListing /> },
  { path: "category/:category", element: <CategoryPage /> },

  {
    path: "categories",
    element: <StaticPage title="Categories" description="Browse categories" />,
  },
];
