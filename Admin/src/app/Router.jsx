import AdminLogin from "@/components/pages/AdminLogin";
import Dashboard from "@/features/dashboards/Dashboard";
import Notification from "@/features/notifications/Notification";
import Order from "@/features/orders/Order";
import User from "@/features/users/User";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";

const Router = () => {
  return (
    <Routes>
      {/* public rouet */}
      <Route path="/login" element={<AdminLogin />} />

      {/* root redirect to login */}

      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* protected route */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/order" element={<Order />} />
        <Route path="/customer" element={<User />} />
      </Route>
    </Routes>
  );
};

export default Router;
