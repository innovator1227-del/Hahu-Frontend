import React, { useState } from "react";

const ListingDropdown = () => {
  const [isOpen, setIsOpen] = useState(defaultOPen);
  return (
    <div
      className={`grid transition-all duration-300 ${
        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      }`}
    >
      <div className="overflow-hidden">{children}</div>
    </div>
  );
};

export default ListingDropdown;
