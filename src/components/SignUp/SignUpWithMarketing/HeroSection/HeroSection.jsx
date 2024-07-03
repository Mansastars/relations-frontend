import React from "react";
import HeroContent from "./HeroContent";
import FormContainer from "./FormContainer";
import Testimonal from "./Testimonal";

const HeroSection = () => {
  return (
    <div className=" relative">
      <HeroContent />
      <div className=" absolute top-20 right-10 w-[45%] max-md:w-full max-md:static">
        <FormContainer />
      </div>
      <Testimonal />
    </div>
  );
};

export default HeroSection;
