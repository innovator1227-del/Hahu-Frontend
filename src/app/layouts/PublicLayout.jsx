import Footer from "@/components/common/Footer";
import HeroHeader from "@/components/hero/components/navbar/HeroHeader";
import { heroMenu } from "@/components/hero/components/navbar/HeroHeaderData";
import ThemeBackground from "@/components/ThemeBackground";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <ThemeBackground>
      <div className="h-screen overflow-hidden">
        <div className="h-full min-w-0 flex flex-col transition-[margin] duration-500 ease-in-out">
          <HeroHeader heroMenu={heroMenu} />
          <main className="flex-1 min-h-0 min-w-0 overflow-y-auto overflow-x-hidden">
            <div className="min-h-full flex flex-col">
              <div className="flex-1">
                <Outlet />
              </div>
              <footer className="mt-auto shadow-2xl">
                <Footer />
              </footer>
            </div>
          </main>
        </div>
      </div>
    </ThemeBackground>
  );
};

export default PublicLayout;
