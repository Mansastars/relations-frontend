import React from "react";
import "./CSS/glassmorphism.css";
import WebsiteShareImage from "../../assets/LoginImage/WebsiteShareImage.jpeg";

const LoginImageContainer = () => {
  return (
    <div
      className={`bg-[rgba(8,165,170,0.2)] w-full h-full relative flex flex-col justify-center p-8 max-sm:p-3`}
    >
      <div className=" glassmorphism w-full h-fit p-5 max-sm:p-2">
        <img src={WebsiteShareImage} alt="Dashboard" className="rounded-lg " />
      </div>
    </div>
  );
};

export default LoginImageContainer;
