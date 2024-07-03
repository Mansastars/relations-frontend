import React from "react";

const HeroContent = () => {
  return (
    <div className="px-14 max-md:px-10 max-sm:px-5 pt-10 bg-dark-blue w-full">
      <div className="py-12 max-md:py-5 w-[45%] max-md:w-full">
        <div>
          <h1 className=" text-mansa-blue text-4xl max-md:text-3xl font-semibold">
            Manage Your Customer Relationships on Autopilot
          </h1>
          <br />
        </div>
        <div className=" text-white">
          <span className=" text-lg">
            Mansa is building an AI-native CRM to fully automate the customer
            and investor relations management for start-ups and SMEs
          </span>
          <div className=" h-16 max-lg:h-0 max-md:h-16"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
