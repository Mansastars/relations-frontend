import React from "react";
import "./CSS/GoogleSignIn.css";
import { useGoogleLogin } from "@react-oauth/google";
import GoogleSignInLogo from "../../assets/SignUpImages/GoogleSignInLogo.svg";

const GoogleSignIn = () => {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      // try {
      //   const res = await api.post('http://localhost:5000/auth/google', { tokenId });
      //   console.log('User authenticated', res.data);
      //   // Handle user session storage here
      // } catch (error) {
      //   console.error('Login failed', error);
      // }
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
    </div>
  );
};

export default GoogleSignIn;
