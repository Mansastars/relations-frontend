import React, { useState } from "react";
import MansaLogo from "../../assets/MansaLogos/MansaLogo.png";
import Title from "./LoginUI/Title";
import Subtitle from "./LoginUI/Subtitle";
import CustomInput from "./LoginUI/CustomInput";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/AuthContext";
import EmailNotVerified from "../../AuthPages/EmailNotVerified";
import ResendVerificationEmail from "../../AuthPages/ResendVerificationEmail";
import Swal from "sweetalert2";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import GoogleSignIn from "../GoogleSignIn/GoogleSignIn";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email")
    .required("Please enter your email.")
    .max(255, "Email must be less than 255 characters"),
  password: yup.string().required("Please enter your password."),
});

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    mainColor: createColor("#08a5aa"),
  },
});

const LoginFormContainer = () => {
  const { login } = useAuth();
  const [emailNotVerifiedModal, setEmailNotVerifiedModal] = useState(false);
  const [openConfirmEmailModal, setOpenConfirmEmailModal] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const closeEmailNotVerifiedModal = () => {
    setEmailNotVerifiedModal(false);
  };

  const closeConfirmEmailModal = () => {
    setOpenConfirmEmailModal(false);
    reset();
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      Swal.fire({
        title: "Logging In...",
        text: "We are processing your login details. This will only take a few moments.",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      setUserEmail(data.email);
      await login(data);
      const user = localStorage.getItem("user");
      const userDetails = JSON.parse(user);

      Swal.close();
      if (userDetails.isVerified === false || userDetails.isVerified === null) {
        setEmailNotVerifiedModal(true);
      } else {
        navigate("/alldashboards");
      }
      reset();
    } catch (error) {
      Swal.close();
      let errorMessage = "An error occurred while logging in";
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
        text: `${errorMessage}. Please try again.`,
        confirmButtonText: "Retry",
      });
      console.error("Failed to login: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white w-full flex justify-center pb-8">
      <div className=" w-full max-md:w-[80%] max-sm:w-full max-lg:w-[50%] h-full p-5 flex flex-col gap-3">
        <a href="https://relations.mansastars.com/" className=" self-center">
          <img src={MansaLogo} alt="Mansa Logo" className=" h-20" />
        </a>

        <div className=" flex flex-col gap-2">
          <Title title="Welcome back!" />
          <Subtitle subtitle="You talk, We organise." />
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col gap-5 px-2 mt-5 max-md:px-0 max-md:mt-2"
        >
          <CustomInput
            name="email"
            control={control}
            error={errors.email}
            label="Email"
            autoFocus={true}
          />

          <div className=" flex flex-col gap-1">
            <CustomInput
              name="password"
              control={control}
              error={errors.first_name}
              label="Password"
              type="password"
            />
            <Link
              to="/verify_email"
              className=" text-sm text-mansa-blue hover:text-dark-blue self-end"
            >
              <u>Forgot your password?</u>
            </Link>
          </div>

          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              className=" w-full"
              color="mainColor"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Log In"}
            </Button>
          </ThemeProvider>
        </form>

        <div className=" w-full px-2">
          <GoogleSignIn />
        </div>

        <div className=" self-center mt-3">
          <span>
            Don't have an account?{" "}
            <Link
              to="/auth/sign_up"
              className=" text-mansa-blue hover:text-dark-blue"
            >
              <u>Register</u>
            </Link>
          </span>
        </div>

        {setEmailNotVerifiedModal && (
          <EmailNotVerified
            onClose={closeEmailNotVerifiedModal}
            show={emailNotVerifiedModal}
            onClick={() => {
              closeEmailNotVerifiedModal();
              setOpenConfirmEmailModal(true);
            }}
          />
        )}

        {setOpenConfirmEmailModal && (
          <ResendVerificationEmail
            onClose={closeConfirmEmailModal}
            show={openConfirmEmailModal}
            userEmail={userEmail}
          />
        )}
      </div>
    </div>
  );
};

export default LoginFormContainer;
