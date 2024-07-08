import React from "react";

const Title = ({ title, className }) => {
  return (
    <div
      className={` text-center font-bold text-3xl max-md:text-2xl text-dark-blue ${className}`}
    >
      {title}
    </div>
  );
};

export default Title;
