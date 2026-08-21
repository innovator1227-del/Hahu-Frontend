import Home from "@/pages/home/Home";

import CategoryPage from "@/pages/CategoryPage";
import StaticPage from "@/pages/StaticPage";

export const PublicRoute = [
  { path: "/", element: <Home /> },

  { path: "category/:category", element: <CategoryPage /> },

  {
    path: "categories",
    element: <StaticPage title="Categories" description="Browse categories" />,
  },
];
