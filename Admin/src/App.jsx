import React from "react";
import Sidebar from "./components/common/Sidebar/Sidebar";
//import Header from "./components/common/Header";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      {/*<Header />*/}
      <div className="flex flex-1 items-center justify-center min-h-screen bg-blue-200">
        <h3 className="font-bold text-3xl">Administrator Dashboard</h3>
      </div>
    </div>
  );
};

export default App;
