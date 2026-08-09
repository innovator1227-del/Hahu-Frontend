import Home from "@/pages/home/Home";

import Cart from "@/pages/Cart";
import CategoryPage from "@/pages/CategoryPage";
import StaticPage from "@/pages/StaticPage";
import BrowseListing from "@/features/listings/pages/BrowseListing";
import ProductDetail from "@/pages/product-detail/ProductDetail";

export const PublicRoute = [
  { index: true, element: <Home /> },
  { path: "browse", element: <BrowseListing /> },
  { path: "product/:id", element: <ProductDetail /> },
  { path: "cart", element: <Cart /> },
  { path: "category/:category", element: <CategoryPage /> },

  {
    path: "categories",
    element: <StaticPage title="Categories" description="Browse categories" />,
  },
];
