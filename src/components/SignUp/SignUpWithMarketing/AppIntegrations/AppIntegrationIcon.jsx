import React from "react";

const AppIntegrationIcon = ({ image, isComingSoon }) => {
  return (
    <div className="relative group">
      <img
        src={image}
        alt="Apps Integrated with Mansa's CRM"
        className="h-16 w-16 rounded-lg shadow-md transition-transform transform group-hover:scale-105 group-hover:shadow-lg duration-300 ease-in-out object-cover"
      />
      {isComingSoon && (
        <span
          className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 inline-flex h-[20px]
          items-center whitespace-nowrap rounded-full border-2 border-dark-blue border-opacity-20 
          bg-white px-2 py-1 text-[10px] font-medium tracking-md shadow-md transition-all 
          duration-300 ease-in-out group-hover:bg-dark-blue group-hover:text-white"
        >
          Coming Soon
        </span>
      )}
    </div>
  );
};

export default AppIntegrationIcon;
