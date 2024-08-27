import React from "react";

const Tooltip = ({ text }) => {
  return (
    <div className="relative group">
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-[-10px] px-2 py-1 bg-black text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
