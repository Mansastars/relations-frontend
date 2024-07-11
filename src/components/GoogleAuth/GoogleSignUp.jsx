import React from "react";
import "./CSS/GoogleSignIn.css";
import { useGoogleLogin } from "@react-oauth/google";
import GoogleSignInLogo from "../../assets/SignUpImages/GoogleSignInLogo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../api";
import { useNavigate } from "react-router-dom";

const GoogleSignUp = () => {
    const navigate = useNavigate()
  const register = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      try {
        const res = await api.post('/users/google_signup', { tokenResponse });
        console.log(res.data)
        console.log('User authenticated', res.data);
        res.data.status = `success` ?
        toast.success("Google Signup was successful, Please login"):
        toast.error(res.data.status);
        setTimeout(()=>{
            navigate("/auth/login")
        }, 1500)
        
        // Handle user session storage here
        
      } catch (error) {
        console.log(error.response.data.message)
        toast.error(error.response.data.message);
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
      <button className="google-button" onClick={() => register()}>
        <img src={GoogleSignInLogo} alt="Google Logo" className=" w-8 h-8" />
        <span className=" text-dark-blue font-semibold">
          Sign Up with Google
        </span>
      </button>
      <ToastContainer />
    </div>
  );
};

export default GoogleSignUp;
