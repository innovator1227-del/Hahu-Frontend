import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa6";
import { menuItems } from "./Data";
import SideItem from "./SideItem";
import { TbTooltip } from "react-icons/tb";
import { Tooltip } from "react-tooltip";

const Sidebar = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div>
      <motion.div
        initial={{ width: 60 }}
        animate={{ width: isOpen ? 240 : 60 }}
        transition={{ duration: 0.4 }}
        className="bg-white h-screen p-4 text-gray-950 flex flex-col gap-6"
      >
        <button
          className="text-xl mb-4"
          onClick={() => setisOpen((prev) => !prev)}
          className="cursor-pointer"
        >
          <FaBars />
        </button>

        <nav
          className={`flex flex-col gap-11 h-full overflow-y-auto ${!isOpen && "no-scrollbar"} `}
        >
          {menuItems.map((item, index) => (
            <SideItem
              key={index}
              icon={item.icon}
              text={item.text}
              isOpen={isOpen}
              setisOpen={setisOpen}
            />
          ))}
        </nav>
      </motion.div>
      {!isOpen && <Tooltip id="admin-tooltip" offset={40} />}
    </div>
  );
};

export default Sidebar;
