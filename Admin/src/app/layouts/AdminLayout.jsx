import React, { useState } from "react";
import Sidebar from "@/components/common/sidebar/Sidebar";
import Header from "@/components/common/header/Header";
import useTheme from "@/hooks/useTheme";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const currentTheme = useTheme();

  return (
    <div
      className={`flex min-h-screen w-full ${currentTheme.background} ${currentTheme.text}`}
    >
      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-50 h-screen
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:sticky md:translate-x-0
        `}
      >
        <Sidebar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          onClose={() => setIsOpen(false)}
        />
      </aside>

      {/* Main area */}
      <div className="flex min-w-0 flex-1 flex-col">
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />

        <main className="min-w-0 flex-1 p-6">
          <Outlet />
        </main>

        <footer
          className={`
            flex h-14 items-center justify-center text-sm
            ${currentTheme.header}
            ${currentTheme.text}
          `}
        >
          © 2026 HAHU Market Admin Dashboard
        </footer>
      </div>
    </div>
  );
};

export default AdminLayout;
