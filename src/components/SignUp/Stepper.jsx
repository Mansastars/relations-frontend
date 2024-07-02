import React from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  styled,
} from "@mui/material";
import { Check, Info, Email, Edit, People } from "@mui/icons-material";

const CustomStepLabel = styled(StepLabel)(({ theme }) => ({
  "& .MuiStepLabel-labelContainer .Mui-active": {
    color: "rgba(26,29,50,0.9)",
  },
  "& .MuiStepIcon-root.Mui-active": {
    color: "rgba(26,29,50,0.9)",
  },
  "& .MuiStepIcon-root.Mui-completed": {
    color: "rgba(26,29,50,0.9)",
  },
  "& .MuiStepIcon-text": {
    display: "none",
  },
}));

const SquareIconContainer = styled(Box)(({ bgcolor }) => ({
  width: 40,
  height: 40,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 8,
  backgroundColor: bgcolor,
}));

const steps = [
  {
    label: "Your details",
    description: "Get started with your free account",
    icon: <Info />,
  },
  {
    label: "Choose a password",
    description: "Choose a secure password",
    icon: <Edit />,
  },
  {
    label: "Referral",
    description: "Let us know who referred you",
    icon: <People />,
  },
  {
    label: "Verify your email",
    description: "Check your inbox and spam for verification link",
    icon: <Email />,
  },
];

export default function CustomStepper({ activeStep }) {
  return (
    <Box
      sx={{
        // backgroundColor: "rgba(8,165,170, 0.2)",
        padding: 2,
        borderRadius: 2,
      }}
    >
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => {
          const isActive = activeStep === index;
          const isCompleted = activeStep > index;
          const bgcolor = isCompleted
            ? "rgba(26,29,50,0.9)"
            : isActive
            ? "rgb(8,165,170)"
            : "rgba(26,29,50,0.3)"; // Lightened for undone steps

          return (
            <Step key={step.label}>
              <CustomStepLabel
                StepIconComponent={() => (
                  <SquareIconContainer bgcolor={bgcolor}>
                    {isCompleted ? (
                      <Check style={{ color: "#ffffff" }} />
                    ) : (
                      React.cloneElement(step.icon, {
                        style: {
                          color: isActive ? "#ffffff" : "rgba(26,29,50,0.9)",
                        },
                      })
                    )}
                  </SquareIconContainer>
                )}
              >
                <span style={{ fontWeight: isActive ? "bold" : "normal" }}>
                  {step.label}
                </span>
              </CustomStepLabel>
              <StepContent>
                <span className=" max-md:hidden">{step.description}</span>
              </StepContent>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}
