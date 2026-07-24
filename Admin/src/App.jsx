import React, { useState } from "react";
import Sidebar from "./components/common/Sidebar/Sidebar";
import Header from "./components/common/Header";
import useTheme from "./hooks/useTheme";
import Router from "./app/Router";

const App = () => {
  const [isOpen, setIsOpen] = useState(true);

  const currentTheme = useTheme();

  return (
    <div
      className={`flex min-h-screen w-full ${currentTheme.background} ${currentTheme.text}`}
    >
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex flex-col flex-1">
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />

        <main className="flex-1 p-6">
          <Router />
        </main>
        <footer
          className={`
      h-14
      flex
      items-center
      justify-center
      text-sm
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

export default App;
