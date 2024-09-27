import React from "react";
import "./CSS/GoogleSignIn.css";
import { useGoogleLogin } from "@react-oauth/google";
import GoogleSignInLogo from "../../assets/SignUpImages/GoogleSignInLogo.svg";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/AuthContext";
import { useTranslation } from "react-i18next";

const GoogleSignIn = () => {
  const navigate = useNavigate();
  const { LoginWithGoogle } = useAuth();
  const { t } = useTranslation();

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        Swal.fire({
          title: t("google_login_processing"),
          text: t("google_login_processing_text"),
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          },
        });

        await LoginWithGoogle({ tokenResponse });
        Swal.close();
        navigate("/alldashboards");
      } catch (error) {
        Swal.close();
        let errorMessage = t("google_login_error_occurred");

        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          errorMessage = `${error.response.data.message}. ${t("google_retry")}`;
        }

        if (error.response.data.message === "Account not found, Please Sign Up") {
          errorMessage = t("google_sign_up_prompt");
          Swal.fire({
            icon: "error",
            title: t("google_account_not_found"),
            text: errorMessage,
            confirmButtonText: t("google_sign_up"),
          }).then(() => navigate("/auth/sign_up"));
        } else if (error.response.data.message === "Incorrect Password") {
          errorMessage = t("google_incorrect_password_text");
          Swal.fire({
            icon: "error",
            title: t("google_incorrect_password_title"),
            text: errorMessage,
            confirmButtonText: t("google_retry"),
          });
        } else {
          Swal.fire({
            icon: "error",
            title: t("google_login_failed"),
            text: errorMessage,
            confirmButtonText: t("google_retry"),
          });
        }

        console.error("Failed to login: ", error);
      }
    },

    onError: async (errorResponse) => {
      console.log("Login failed ", errorResponse);
      Swal.fire({
        icon: "error",
        title: t("google_login_error"),
        text: t("google_failed_google_login"),
        confirmButtonText: t("google_retry"),
      });
    },
  });

  return (
    <div className="google-sign-in-container">
      <div className="separator">
        <hr className="line" />
        <span className="or-text">{t("google_or")}</span>
        <hr className="line" />
      </div>
      <button className="google-button" onClick={() => login()}>
        <img src={GoogleSignInLogo} alt="Google Logo" className="w-8 h-8" />
        <span className="text-dark-blue font-semibold">
          {t("google_sign_in_with_google")}
        </span>
      </button>
    </div>
  );
};

export default GoogleSignIn;
