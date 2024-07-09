import React from "react";
import "./CSS/glassmorphism.css";
import ImageContainerDesign from "./ImageContainerDesign";
import { Dashboard, Lightbulb, Star } from "@mui/icons-material";
import WebsiteShareImage from "../../assets/LoginImage/WebsiteShareImage.jpeg";

const LoginImageContainer = () => {
  return (
    <div
      className={`bg-[rgba(8,165,170,0.2)] w-full h-full relative flex justify-center p-8 max-sm:p-3`}
    >
      <div className=" glassmorphism w-full overflow-auto p-5 max-sm:p-2">
        <img
          src={WebsiteShareImage}
          alt="Dashboard"
          //   className="w-full h-full object-cover rounded-lg"
          className="rounded-lg w-full h-full "
        />
      </div>
      <div className=" absolute top-16 left-5 max-sm:left-0 max-sm:top-8">
        <ImageContainerDesign>
          <Dashboard className=" text-dark-blue" />
        </ImageContainerDesign>
      </div>
      <div className=" absolute bottom-16 left-5 max-sm:left-0 max-sm:bottom-8">
        <ImageContainerDesign>
          <Lightbulb className=" text-dark-blue" />
        </ImageContainerDesign>
      </div>
      <div className=" absolute top-56 right-2 max-sm:top-10 max-sm:-right-0">
        <ImageContainerDesign>
          <Star className=" text-dark-blue" />
        </ImageContainerDesign>
      </div>
    </div>
  );
};

export default LoginImageContainer;
