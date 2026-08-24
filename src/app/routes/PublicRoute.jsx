//import Home from "@/pages/home/Home";

import HeroPart from "@/components/hero/components/pages/HeroPart";
import { Login } from "@/features/auth";

export const PublicRoute = [
  { path: "/", element: <Login /> },
  { path: "hero", element: <HeroPart /> },
];
