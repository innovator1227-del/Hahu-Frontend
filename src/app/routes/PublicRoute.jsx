import Hero from "@/components/hero/Hero";
import { Login } from "@/features/auth";

export const PublicRoute = [
  { path: "/", element: <Hero /> },
  { path: "login", element: <Login /> },
];
