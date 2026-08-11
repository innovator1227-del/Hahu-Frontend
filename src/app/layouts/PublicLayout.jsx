import { useState } from "react";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/header/Navbar";
import Sidebar from "@/components/common/sidebar/Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/store/authStore.jsx";

const PublicLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const { user } = useAuth();
  const location = useLocation();

  const showHero = location.pathname === "/" || location.pathname === "/browse";

  return (
    <div className="h-screen overflow-hidden bg-slate-50 text-black">
      <Sidebar
        isOpen={showSidebar}
        variant={user ? "user" : "public"}
        onClose={() => setShowSidebar(false)}
      />

      <div
        className={`h-full min-w-0 flex flex-col transition-[margin] duration-500 ease-in-out
          ${showSidebar ? "md:ml-64" : "md:ml-[88px]"}
        `}
      >
        <Navbar toggleSidebar={() => setShowSidebar((prev) => !prev)} />

        <main className="flex-1 min-h-0 min-w-0 overflow-y-auto overflow-x-hidden bg-slate-50 rounded-tl-3xl">
          <div className="min-h-full flex flex-col">
            {showHero && (
              <section className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">
                  Welcome to HAHU MARKET
                </h1>

                <p className="max-w-2xl text-gray-600">
                  Browse trusted second-hand items, post listings, and manage
                  orders with a responsive market experience.
                </p>
              </section>
            )}

            <div className="flex-1">
              <Outlet />
            </div>

            <footer className="mt-auto bg-slate-300 text-black pt-2 pb-3 shadow-lg shadow-slate-600">
              <Footer />
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PublicLayout;
