import { useState } from "react";
import Navbar from "@/components/common/header/Navbar";
import Sidebar from "@/components/common/sidebar/Sidebar";
import { Outlet, useLocation } from "react-router-dom";

const AppLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const location = useLocation();

  const isChatPage = location.pathname === "/app/chat";

  return (
    <div className="h-screen overflow-hidden bg-slate-50 text-black">
      <Sidebar
        isOpen={showSidebar}
        variant="user"
        onClose={() => setShowSidebar(false)}
      />

      <div
        className={`h-full min-w-0 flex flex-col transition-all duration-500 ease-in-out
          ${showSidebar ? "md:ml-64" : "md:ml-[88px]"}
        `}
      >
        <Navbar toggleSidebar={() => setShowSidebar((prev) => !prev)} />

        <main
          className={`flex-1 min-h-0 min-w-0
          ${isChatPage ? "overflow-hidden" : "overflow-y-auto overflow-x-hidden"}
        `}
        >
          {!isChatPage && (
            <div className="min-h-full flex flex-col">
              <div className="flex-1 px-4 py-6 md:px-8">
                <Outlet />
              </div>

              <footer className="mt-auto bg-slate-300 text-black pt-4 pb-6 shadow-lg border-t border-slate-400">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center text-gray-950 text-lg">
                    &copy; {new Date().getFullYear()} Bahirdar Universty BiT
                    HAHU MARKET. All rights reserved.
                  </div>
                </div>
              </footer>
            </div>
          )}

          {isChatPage && (
            <div className="h-full">
              <Outlet />
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
