import React from "react";
import CustomStepper from "./Stepper";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import "../CSS/hover-underline-animation.css";
import { useNavigate } from "react-router-dom";

const SignUpWorkFlow = ({ currentStepIndex, className }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`
    bg-[rgba(8,165,170,0.2)] min-h-screen
    rounded-r-[50px] max-md:rounded-r-[25px] flex flex-col py-5 ${className} blob`}
    >
      {/* <div className="blob-top-left"></div>
      <div className="blob-bottom-right"></div> */}

      <div className=" mt-5">
        <CustomStepper activeStep={currentStepIndex} />
      </div>

      <div className=" mt-auto flex max-md:flex-col max-md:gap-3 justify-between px-5 pr-8 font-semibold text-[#2B3144]">
        <a
          href="https://relations.mansastars.com/"
          className=" flex items-center "
        >
          <ArrowBack />
          <span className="hover-underline-animation">Back to home</span>
        </a>

        <div
          className=" max-md:self-end flex items-center"
          onClick={() => navigate("/auth/login")}
        >
          <span className="hover-underline-animation">Sign in</span>
          <span className=" hidden max-md:block">
            <ArrowForward />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUpWorkFlow;
