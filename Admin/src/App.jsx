import React, { useState } from "react";
import Sidebar from "./components/common/Sidebar/Sidebar";
import Header from "./components/common/Header";
import useTheme from "./hooks/useTheme";

const App = () => {
  const [isOpen, setIsOpen] = useState(true);

  const currentTheme = useTheme();

  return (
    <div
      className={`flex h-screen ${currentTheme.background} ${currentTheme.text}`}
    >
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex flex-col flex-1">
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />

        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold">Administrator Dashboard</h1>
        </main>
      </div>
    </div>
  );
};

export default App;
