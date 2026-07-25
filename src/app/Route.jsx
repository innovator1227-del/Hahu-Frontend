import { Routes, Route } from "react-router-dom";
import Checkout from "@/pages/Checkout";

import PublicLayout from "./layouts/PublicLayout";
import AppLayout from "./layouts/AppLayout";

import ProtectedRoute from "./guards/ProtectedRoute";
import GuestRoute from "./guards/GuestRoute";

import Login from "@/features/auth/pages/Login";
import Register from "@/features/auth/pages/Register";
import NotFound from "@/pages/NotFound";

import { PublicRoute } from "./routes/PublicRoute";
import { AppRoute } from "./routes/AppRoute";

const AppRouter = () => {
  return (
    <Routes>
      {/* PUBLIC */}
      <Route path="/" element={<PublicLayout />}>
        {PublicRoute.map((route, i) => (
          <Route key={i} {...route} />
        ))}

        <Route element={<GuestRoute />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Route>

      {/* USER */}
      <Route element={<ProtectedRoute />}>
        <Route path="/app" element={<AppLayout />}>
          {AppRoute.map((route, i) => (
            <Route key={i} {...route} />
          ))}

          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
