import React from "react";

const ImageContainerDesign = ({ children }) => {
  return (
    <div className=" w-14 h-14 rounded-full bg-[rgba(26,29,50,20%)] flex items-center justify-center">
      {children}
    </div>
  );
};

export default ImageContainerDesign;
