import React, { useEffect, useState } from "react";
import MansaLogo from "../../../assets/MansaLogos/MansaLogo.png";
import StepsTitle from "../StepsUI/StepsTitle";
import StepsSubtitle from "../StepsUI/StepsSubtitle";
import CustomInput from "../StepsUI/CustomInput";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "@mui/material/Button";
import { ArrowBack, ArrowForward, Password } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Swal from "sweetalert2";
import api from "../../../api";

const schema = yup.object().shape({
  referral_code: yup.string(),
});

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    mainColor: createColor("#08a5aa"),
  },
});

const Step3 = ({
  updateData,
  next,
  back,
  isFirstStep,
  isLastStep,
  formData,
  clearForm,
}) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      referral_code: formData.referral_code || "",
    },
  });

  useEffect(() => {
    if (formData) {
      for (const key in formData) {
        setValue(key, formData[key]);
      }
    }
  }, [formData, setValue]);

  const onSubmit = async (formData) => {
    updateData(formData);
    Swal.fire({
      title: "Creating Account...",
      text: "Please wait while we create your account.",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      // Get the existing sign up data from local storage
      const savedData = localStorage.getItem("sign_up_data");
      const parsedData = savedData ? JSON.parse(savedData) : {};

      const { acceptTerms, ...dataToSubmit } = parsedData;

      // Send data to backend
      await api.post(`/users/register`, dataToSubmit);

      Swal.fire({
        icon: "success",
        title: "<span style='color: #1A1D32;'>Registration Successful</span>",
        html: `
          <p style="color: #1A1D32; font-size: 16px;">
            Your account has been created successfully! Please check your email 
            <strong style="color: #08a5aa;">${dataToSubmit.email}</strong> to verify your account.
          </p>
          <p style="color: #666; font-size: 16px; padding-top: 10px">
            If you do not see the email, please check your spam or junk folder.
          </p>
        `,
        confirmButtonText: "<span style='color: #FFF;'>OK</span>",
        confirmButtonColor: "#08a5aa",
      }).then(() => {
        localStorage.setItem("user_email", dataToSubmit.email);
        clearForm();
        next();
      });
    } catch (error) {
      Swal.close();

      let errorMessage = "An error occurred during the submission process.";
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        errorMessage = error.response.data.message;
      }

      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: errorMessage,
        confirmButtonText: "Retry",
      });
      console.error("Failed to submit sign up data:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-full pt-5 gap-5 w-full">
      <a href="https://relations.mansastars.com/">
        <img src={MansaLogo} alt="Mansa Logo" className=" h-20" />
      </a>
      <div className=" flex flex-col gap-2">
        <StepsTitle title="Enter Your Referral Code" />
        <div>
          <StepsSubtitle subtitle="Please provide the referral code you received." />
          <StepsSubtitle subtitle="If you don't have a code, you can skip this step." />
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex flex-col gap-3 w-[60%] max-md:w-full max-sm:w-full px-0 mt-5"
      >
        <CustomInput
          name="referral_code"
          control={control}
          error={errors.referral_code}
          label="Referral Code"
          autoFocus={true}
        />

        <div className=" flex gap-5">
          <ThemeProvider theme={theme}>
            <Button
              variant="outlined"
              startIcon={<ArrowBack />}
              onClick={back}
              className=" w-full"
              color="mainColor"
            >
              Back
            </Button>
          </ThemeProvider>

          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              // endIcon={<ArrowForward />}
              className=" w-full"
              color="mainColor"
              type="submit"
            >
              SIGN UP
            </Button>
          </ThemeProvider>
        </div>
      </form>
    </div>
  );
};

export default Step3;
