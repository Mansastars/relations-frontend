import React from "react";
import "./CSS/GoogleSignIn.css";
import { useGoogleLogin } from "@react-oauth/google";
import GoogleSignInLogo from "../../assets/SignUpImages/GoogleSignInLogo.svg";
import "react-toastify/dist/ReactToastify.css";
import api from "../../api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/AuthContext";
import Swal from "sweetalert2";

const GoogleSignUp = () => {
  const navigate = useNavigate();
  const { LoginWithGoogle } = useAuth();

  const register = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        Swal.fire({
          title: "Creating Your Account...",
          text: "We are processing your account creation. Please wait.",
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          },
        });

        await api.post("/users/google_signup", { tokenResponse });
        Swal.close();

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

          Swal.fire({
            icon: "error",
            title: "Login Failed",
            text: errorMessage,
            confirmButtonText: "Retry",
          });
          console.error("Login error:", error);
        }
      } catch (error) {
        Swal.close();
        let errorMessage = "An error occurred while creating your account.";

        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          errorMessage = error.response.data.message + ". Please try again.";
        }

        Swal.fire({
          icon: "error",
          title: "Sign Up Failed",
          text: errorMessage,
          confirmButtonText: "Retry",
        });
        console.log("Google sign up error", error);
      }
    },

    onError: async (errorResponse) => {
      console.log("Login failed ", errorResponse);
      Swal.fire({
        icon: "error",
        title: "Sign Up Error",
        text: "Failed to sign up with Google. Please try again.",
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
      <button className="google-button" onClick={() => register()}>
        <img src={GoogleSignInLogo} alt="Google Logo" className="w-8 h-8" />
        <span className="text-dark-blue font-semibold">
          Sign Up with Google
        </span>
      </button>
    </div>
  );
};

export default GoogleSignUp;
