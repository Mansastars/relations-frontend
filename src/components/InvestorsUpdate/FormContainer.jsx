import React, { useMemo, useState } from "react";
import Title from "./Title";
import Button from "./Button";
import { useMultistepForm } from "./useMultistepForm";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";
import Swal from "sweetalert2";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 500 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#08A5AA" : "#308fe8",
  },
}));

const FormContainer = () => {
  const stepsArray = [Step1, Step2, Step3, Step4, Step5, Step6, Step7, Step8];

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
  } = useMultistepForm(stepsArray); // Wrap each step in a function

  const progress = ((currentStepIndex + 1) / steps.length) * 100;

  const handleClearForm = () => {
    Swal.fire({
      title: "Clear form?",
      text: "This will remove your answers from all questions and cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Clear Form",
    }).then((result) => {
      if (result.isConfirmed) {
        clearForm();
      }
    });
  };

  const StepComponent = steps[currentStepIndex];

  return (
    <div className="flex flex-col justify-center mt-10 mb-10 gap-10 w-[80%] lg:w-[70%] max-md:w-full">
      <Title />

      <div className="flex flex-col gap-10 ">
        <div>
          <StepComponent
            updateData={updateData}
            next={next}
            back={back}
            isFirstStep={isFirstStep}
            isLastStep={isLastStep}
            formData={formData}
          />
        </div>

        <div className=" flex max-sm:flex-col max-sm:gap-3 justify-between items-center">
          <div className="">
            <Button
              text="Clear Form"
              type="button"
              onClick={handleClearForm}
              className="bg-transparent border-red-500 hover:bg-red-500 hover:text-white text-red-500"
            />
          </div>
          <div className=" flex items-center justify-evenly w-full">
            <Box sx={{ width: "50%" }}>
              <BorderLinearProgress variant="determinate" value={progress} />
            </Box>
            <span>
              Page {currentStepIndex + 1} of {steps.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
