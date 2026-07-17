import React from "react";

const SideItem = ({ icon, text, isOpen, setisOpen }) => {
  return (
    <div className="flex items-center gap-4 cursor-pointer w-full hover:text-blue-400">
      <span
        onClick={() => setisOpen((prev) => !prev)}
        data-tooltip-id={!isOpen ? "admin-tooltip" : undefined}
        data-tooltip-content={!isOpen ? text : undefined}
        className="text-xl"
      >
        {icon}
      </span>
      {isOpen && <div>{text}</div>}
    </div>
  );
};

export default SideItem;
