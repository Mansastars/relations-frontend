import React from "react";

const AppIntegrationIcon = ({ image, isComingSoon }) => {
  return (
    <div className=" relative">
      <img
        src={image}
        alt="Apps Integrated with Mansa's CRM"
        className="  h-16"
      />
      {isComingSoon && (
        <span
          class="absolute -bottom-3 left-8 inline-flex h-[20px] -translate-x-1/2
      items-center whitespace-nowrap rounded-full border-2 border-dark-blue
      border-opacity-20 bg-white px-2 text-[10px] font-medium tracking-md
      shadow-[4px_4px_20px_0px_#0000001A]"
        >
          coming soon
        </span>
      )}
    </div>
  );
};

export default AppIntegrationIcon;
