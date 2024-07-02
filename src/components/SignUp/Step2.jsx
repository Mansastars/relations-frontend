import React, { useEffect, useState } from "react";
import MansaLogo from "../../assets/MansaLogos/MansaLogo.png";
import StepsTitle from "./StepsUI/StepsTitle";
import StepsSubtitle from "./StepsUI/StepsSubtitle";
import CustomInput from "./StepsUI/CustomInput";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "@mui/material/Button";
import { ArrowBack, ArrowForward, Password } from "@mui/icons-material";
import FormControlLabel from "@mui/material/FormControlLabel";
import PrivacyPolicyModal from "../../AuthPages/PrivacyPolicModal";
import TermOfUsageModal from "../../AuthPages/TermOfUsageModal";
import Checkbox from "@mui/material/Checkbox";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const schema = yup.object().shape({
  password: yup
    .string()
    .required("Please enter your password.")
    .min(8, "Password must be at least 8 characters long."),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password."),
  acceptTerms: yup
    .bool()
    .oneOf([true], "You must accept the terms and conditions.")
    .required("You must accept the terms and conditions."),
});

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    mainColor: createColor("#08a5aa"),
  },
});

const Step2 = ({
  updateData,
  next,
  back,
  isFirstStep,
  isLastStep,
  formData,
}) => {
  const [privacyPolicyModal, setPrivacyPolicyModal] = useState(false);
  const [openTermOfUsageModal, setOpenTermOfUsageModal] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      password: formData.password || "",
      confirm_password: formData.confirm_password || "",
      acceptTerms: formData.acceptTerms || false,
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
        <StepsTitle title="Choose a Password" />
        <StepsSubtitle subtitle="Create a strong password to secure your account." />
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex flex-col gap-3 w-[60%] max-md:w-full max-sm:w-full px-0 mt-5"
      >
        <CustomInput
          name="password"
          control={control}
          error={errors.first_name}
          label="Password"
          autoFocus={true}
          type="password"
        />
        <CustomInput
          name="confirm_password"
          control={control}
          error={errors.last_name}
          label="Confirm Password"
          type="password"
        />

        <div className="">
          <FormControlLabel
            control={
              <Controller
                name="acceptTerms"
                control={control}
                render={({ field }) => (
                  <Checkbox {...field} checked={field.value} />
                )}
              />
            }
            label={
              <p className="text-sm">
                Yes, I agree to the{" "}
                <span
                  onClick={() => setPrivacyPolicyModal(true)}
                  className="text-mansa-blue underline cursor-pointer hover:text-dark-blue"
                >
                  Privacy Policy
                </span>{" "}
                and{" "}
                <span
                  onClick={() => setOpenTermOfUsageModal(true)}
                  className="text-mansa-blue underline cursor-pointer hover:text-dark-blue"
                >
                  Terms of Usage
                </span>
                .
              </p>
            }
          />
          {errors.acceptTerms && (
            <p className="text-sm text-red-600">{errors.acceptTerms.message}</p>
          )}
        </div>

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
              endIcon={<ArrowForward />}
              type="submit"
              className=" w-full"
              color="mainColor"
            >
              Next
            </Button>
          </ThemeProvider>
        </div>
      </form>

      <PrivacyPolicyModal
        open={privacyPolicyModal}
        onClose={() => setPrivacyPolicyModal(false)}
      />
      <TermOfUsageModal
        open={openTermOfUsageModal}
        onClose={() => setOpenTermOfUsageModal(false)}
      />
    </div>
  );
};

export default Step2;
