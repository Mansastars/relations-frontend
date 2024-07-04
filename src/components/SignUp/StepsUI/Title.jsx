import React from "react";

const Title = ({ title }) => {
  return (
    <div className=" text-center font-bold text-3xl max-md:text-2xl text-dark-blue">
      {title}
    </div>
  );
};

export default Title;
