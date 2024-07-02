import React, { useEffect } from "react";
import MansaLogo from "../../assets/MansaLogos/MansaLogo.png";
import StepsTitle from "./StepsUI/StepsTitle";
import StepsSubtitle from "./StepsUI/StepsSubtitle";
import CustomInput from "./StepsUI/CustomInput";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "@mui/material/Button";
import { ArrowForward } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import GoogleSignIn from "../GoogleSignIn/GoogleSignIn";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email")
    .required("Please enter your email.")
    .max(255, "Email must be less than 255 characters"),
  first_name: yup
    .string()
    .required("Please enter your first name.")
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters"),
  last_name: yup
    .string()
    .required("Please enter your last name.")
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be less than 50 characters"),
});

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    mainColor: createColor("#08a5aa"),
  },
});

const Step1 = ({
  updateData,
  next,
  back,
  isFirstStep,
  isLastStep,
  formData,
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
      email: formData.email || "",
      first_name: formData.first_name || "",
      last_name: formData.last_name || "",
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
    next();
  };

  return (
    <div className="flex flex-col justify-center items-center h-full pt-5 gap-5 w-full">
      <a href="https://relations.mansastars.com/">
        <img src={MansaLogo} alt="Mansa Logo" className=" h-20" />
      </a>
      <div className=" flex flex-col gap-2">
        <StepsTitle title="Enter your details" />
        <StepsSubtitle subtitle="Please provide your name and email address to proceed." />
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex flex-col gap-3 w-[60%] max-md:w-full max-sm:w-full px-0 mt-5"
      >
        <div className=" flex gap-3 max-sm:flex-col">
          <CustomInput
            name="first_name"
            control={control}
            error={errors.first_name}
            label="First Name"
            autoFocus={true}
          />
          <CustomInput
            name="last_name"
            control={control}
            error={errors.last_name}
            label="Last Name"
          />
        </div>

        <CustomInput
          name="email"
          control={control}
          error={errors.email}
          label="Email"
        />
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            endIcon={<ArrowForward />}
            className=" w-full"
            color="mainColor"
            type="submit"
          >
            Next
          </Button>
        </ThemeProvider>
      </form>

      <div className="w-[60%] max-md:w-full max-sm:w-full">
        <GoogleSignIn />
      </div>
    </div>
  );
};

export default Step1;
