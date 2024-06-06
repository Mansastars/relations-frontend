import React from "react";

const Title = () => {
  return (
    <div className=" bg-white flex flex-col rounded-xl items-start w-full">
      <div className=" h-3 w-full bg-[#82D4D4] rounded-tl-xl rounded-tr-xl">
        {" "}
      </div>
      <div className=" p-5 py-4 max-sm:py-3 border-b border-gray-200 w-full">
        <h1 className=" text-2xl font-bold text-dark-blue max-sm:text-center">
          Monthly Investor Update
        </h1>
      </div>
      <div className=" p-5 py-3">
        <p className=" text-red-600">* Indicates required question</p>
      </div>
    </div>
  );
};

export default Title;
