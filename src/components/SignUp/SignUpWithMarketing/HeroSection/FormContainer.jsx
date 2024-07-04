import React, { useState } from "react";
import schema from "./SignUpFormDetails/Shema";
import CustomInput from "../../StepsUI/CustomInput";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormControlLabel from "@mui/material/FormControlLabel";
import PrivacyPolicyModal from "../../../../AuthPages/PrivacyPolicModal";
import TermOfUsageModal from "../../../../AuthPages/TermOfUsageModal";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import GoogleSignIn from "../../../GoogleSignIn/GoogleSignIn";

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    mainColor: createColor("#08a5aa"),
  },
});

const FormContainer = () => {
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
      email: "",
      first_name: "",
      last_name: "",
      password: "",
      confirm_password: "",
      referral_code: "",
      acceptTerms: false,
    },
  });

  const onSubmit = async (formData) => {
    console.log(formData);
  };

  return (
    <div className=" w-full bg-white rounded-lg px-10 py-10 flex flex-col gap-5 shadow-xl">
      <div>
        <p className="font-semibold text-lg">
          Get started with your free account today.
        </p>
        <p className=" text-md text-gray-500">
          No credit card required. Enjoy a 7-day free trial.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex flex-col gap-3 w-full"
      >
        <div className=" flex gap-3 max-sm:flex-col">
          <CustomInput
            name="first_name"
            control={control}
            error={errors.first_name}
            label="First Name *"
            autoFocus={true}
          />
          <CustomInput
            name="last_name"
            control={control}
            error={errors.last_name}
            label="Last Name *"
          />
        </div>

        <CustomInput
          name="email"
          control={control}
          error={errors.email}
          label="Business Email *"
        />

        <CustomInput
          name="password"
          control={control}
          error={errors.first_name}
          label="Password *"
          type="password"
        />
        <CustomInput
          name="confirm_password"
          control={control}
          error={errors.last_name}
          label="Confirm Password *"
          type="password"
        />
        <CustomInput
          name="referral_code"
          control={control}
          error={errors.referral_code}
          label="Referral Code"
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
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            className=" w-full"
            color="mainColor"
            type="submit"
          >
            SIGN UP
          </Button>
        </ThemeProvider>
      </form>
      <div className="w-full">
        <GoogleSignIn />
      </div>
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

export default FormContainer;
