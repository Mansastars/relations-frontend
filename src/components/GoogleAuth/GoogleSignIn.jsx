import React from "react";
import "./CSS/GoogleSignIn.css";
import { useGoogleLogin } from "@react-oauth/google";
import GoogleSignInLogo from "../../assets/SignUpImages/GoogleSignInLogo.svg";
import "react-toastify/dist/ReactToastify.css";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/AuthContext";
import Swal from "sweetalert2";

const GoogleSignIn = () => {
  const navigate = useNavigate();
  const { LoginWithGoogle } = useAuth();

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        Swal.fire({
          title: "Logging In...",
          text: "We are processing your login details. This will only take a few moments.",
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
        let errorMessage = "An error occurred while logging in.";

        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          errorMessage = error.response.data.message + ". Please try again.";
        }

        if (
          error.response.data.message === "Account not found, Please Sign Up"
        ) {
          errorMessage =
            "Account not found. Please sign up to create a new account.";
          Swal.fire({
            icon: "error",
            title: "Account Not Found",
            text: errorMessage,
            confirmButtonText: "Sign Up",
          }).then(() => navigate("/auth/sign_up"));
        } else if (error.response.data.message === "Incorrect Password") {
          errorMessage =
            "This email is already registered with a password. Please sign in using your email and password.";
          Swal.fire({
            icon: "error",
            title: "Incorrect Password",
            text: errorMessage,
            confirmButtonText: "Retry",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Login Failed",
            text: errorMessage,
            confirmButtonText: "Retry",
          });
        }

        console.error("Failed to login: ", error);
      }
    },

    onError: async (errorResponse) => {
      console.log("Login failed ", errorResponse);
      Swal.fire({
        icon: "error",
        title: "Login Error",
        text: "Failed to login with Google. Please try again.",
        confirmButtonText: "Retry",
      });
    },
  });

  return (
    <div className="google-sign-in-container">
      <div className="separator">
        <hr className="line" />
        <span className="or-text">OR</span>
        <hr className="line" />
      </div>
      <button className="google-button" onClick={() => login()}>
        <img src={GoogleSignInLogo} alt="Google Logo" className="w-8 h-8" />
        <span className="text-dark-blue font-semibold">
          Sign in with Google
        </span>
      </button>
    </div>
  );
};

export default GoogleSignIn;
