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
import GoogleSignIn from "../GoogleAuth/GoogleSignIn";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher";

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
  const { t } = useTranslation();
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
        title: t("login_logging_in"),
        text: t("login_logging_in_text"),
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
      let errorMessage = t("login_error_occurred");
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        errorMessage = error.response.data.message;
      }

      Swal.fire({
        icon: "error",
        title: t("login_submission_failed"),
        text: `${errorMessage}. ${t("login_try_again")}`,
        confirmButtonText: t("login_retry"),
      });
      console.error("Failed to login: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white w-full h-full min-h-screen max-lg:min-h-fit flex justify-center pb-8">
      <div className=" w-full max-md:w-[80%] max-sm:w-full max-lg:w-[50%] h-full p-5 flex flex-col gap-3">
        <a href="https://relations.mansastars.com/" className=" self-center">
          <img src={MansaLogo} alt="Mansa Logo" className=" h-20" />
        </a>

        <div className=" flex flex-col gap-2">
          <Title title={t("login_title")} />
          <Subtitle subtitle={t("login_subtitle")} />
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col gap-5 px-2 mt-5 max-md:px-0 max-md:mt-2"
        >
          <CustomInput
            name="email"
            control={control}
            error={errors.email}
            label={t("login_email_label")}
            autoFocus={true}
          />

          <div className=" flex flex-col gap-1">
            <CustomInput
              name="password"
              control={control}
              error={errors.first_name}
              label={t("login_password_label")}
              type="password"
            />
            <Link
              to="/verify_email"
              className=" text-sm text-mansa-blue hover:text-dark-blue self-end"
            >
              <u>{t("login_forgot_password")}</u>
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
              {isLoading ? t("login_button_loading") : t("login_button")}
            </Button>
          </ThemeProvider>
        </form>

        <div className=" w-full px-2">
          <GoogleSignIn />
        </div>

        <div className=" self-center mt-3">
          <span>
            {t("login_no_account")}{" "}
            <Link
              to="/auth/sign_up"
              className=" text-mansa-blue hover:text-dark-blue"
            >
              <u>{t("login_register")}</u>
            </Link>
          </span>
        </div>
        <div className="flex justify-center">
          <LanguageSwitcher />
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
