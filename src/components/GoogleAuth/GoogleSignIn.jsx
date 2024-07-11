import React from "react";
import "./CSS/GoogleSignIn.css";
import { useGoogleLogin } from "@react-oauth/google";
import GoogleSignInLogo from "../../assets/SignUpImages/GoogleSignInLogo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../api";
import { useNavigate } from "react-router-dom";

const GoogleSignIn = () => {
  const navigate = useNavigate()
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      try {
        
        const response = await api.post('/users/google_login', { tokenResponse });
        console.log('User authenticated', response.data);
        const { user, token, showBanner, showBilling, numberOfDaysLeft } = response.data;
        // Handle user session storage here
        // Save user data and token to localStorage
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
      localStorage.setItem("showBanner", response.data.showBanner.toString());
      localStorage.setItem("showBilling", response.data.showBilling.toString());
      localStorage.setItem("numberOfDaysLeft", numberOfDaysLeft);

      navigate("/alldashboards");
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong. Please try again."); // set generic error message
      }
    },

    onError: async (errorResponse) =>
      console.log("Login failed ", errorResponse),
  });

  return (
    <div className="google-sign-in-container">
      <div className="separator">
        <hr className="line" />
        <span className="or-text">OR</span>
        <hr className="line" />
      </div>
      <button className="google-button" onClick={() => login()}>
        <img src={GoogleSignInLogo} alt="Google Logo" className=" w-8 h-8" />
        <span className=" text-dark-blue font-semibold">
          Sign in with Google
        </span>
      </button>
      <ToastContainer />
    </div>
  );
};

export default GoogleSignIn;
