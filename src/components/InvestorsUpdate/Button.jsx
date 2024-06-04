import React from "react";

const Button = ({ text, onClick, className, type = "submit" }) => {
  return (
    <button
      className={`py-3 px-6 rounded-md shadow-lg hover:bg-mansa-blue text-mansa-blue border border-mansa-blue ${className}`}
      onClick={onClick}
      type={type}
    >
      <p className=" font-semibold ">{text}</p>
    </button>
  );
};

export default Button;
