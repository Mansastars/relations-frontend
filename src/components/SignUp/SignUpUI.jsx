import React from "react";
import { useMultiStepSignUp } from "./useMultiStepSignUp";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import Step1 from "./Step1";
import SignUpWorkFlow from "./SignUpWorkFlow";
import SignUpForm from "./Step2";
import Step2 from "./Step2";
import Step3 from "./Step3";
import VerifyEmail from "./VerifyEmail";
import Box from "@mui/material/Box";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "rgb(8, 165, 170, 20%)",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor:
      theme.palette.mode === "light" ? "rgba(26,29,50,90%)" : "#308fe8",
  },
}));

const SignUpMain = () => {
  const stepsArray = [Step1, Step2, Step3, VerifyEmail];

  const {
    steps,
    currentStepIndex,
    next,
    back,
    isFirstStep,
    isLastStep,
    updateData,
    formData,
    clearForm,
  } = useMultiStepSignUp(stepsArray); // Wrap each step in a function

  const progress = ((currentStepIndex + 1) / steps.length) * 100;

  const StepComponent = steps[currentStepIndex];
  return (
    <div className=" flex w-full">
      <SignUpWorkFlow
        className="w-[40%] md:w-[50%] max-sm:hidden"
        currentStepIndex={currentStepIndex}
      />

      <div className="bg-white p-5 flex flex-col w-full min-h-screen pb-8">
        <div>
          <StepComponent
            updateData={updateData}
            next={next}
            back={back}
            isFirstStep={isFirstStep}
            isLastStep={isLastStep}
            formData={formData}
            clearForm={clearForm}
          />
        </div>

        <div className=" flex items-center justify-evenly w-full mt-auto pt-16">
          <Box sx={{ width: "60%" }}>
            <BorderLinearProgress variant="determinate" value={progress} />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default SignUpMain;
