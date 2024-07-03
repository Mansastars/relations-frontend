import React, { useEffect, useState } from "react";
import MansaLogo from "../../../assets/MansaLogos/MansaLogo.png";
import StepsTitle from "../StepsUI/StepsTitle";
import StepsSubtitle from "../StepsUI/StepsSubtitle";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Swal from "sweetalert2";
import api from "../../../api";
import { useNavigate } from "react-router-dom";

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    mainColor: createColor("#08a5aa"),
  },
});

const VerifyEmail = () => {
  const navigate = useNavigate();
  const user_email = localStorage.getItem("user_email");
  const [isLoading, setIsLoading] = useState(false);

  const resendMail = async () => {
    setIsLoading(true);
    const userData = {
      email: user_email,
    };

    try {
      await api.post("users/resend-verification", userData);
      Swal.fire({
        icon: "success",
        title: "<span style='color: #1A1D32;'>Verification Email Resent</span>",
        html: `
          <p style="color: #1A1D32; font-size: 16px;">
            A new verification email has been sent to 
            <strong style="color: #08a5aa;">${user_email}</strong>.
          </p>
          <p style="color: #666; font-size: 16px; padding-top: 10px">
            Please check your inbox or spam folder.
          </p>
        `,
        confirmButtonText: "<span style='color: #FFF;'>OK</span>",
        confirmButtonColor: "#1A1D32",
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "<span style='color: #F44336;'>Error</span>",
        html: `
          <p style="color: #1A1D32; font-size: 16px;">
            There was an error resending the verification email to 
            <strong style="color: #08a5aa;">${user_email}</strong>.
          </p>
          <p style="color: #666; font-size: 16px; padding-top: 16px">
            Please try again later.
          </p>
        `,
        confirmButtonText: "<span style='color: #FFF;'>OK</span>",
        confirmButtonColor: "#F44336",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className=" w-full">
      <div className="flex flex-col justify-center items-center h-full pt-5 gap-5 w-full">
        <a href="https://relations.mansastars.com/">
          <img src={MansaLogo} alt="Mansa Logo" className=" h-20" />
        </a>
        <div className=" flex flex-col gap-2">
          <StepsTitle title="Email Address Verification" />
          <StepsSubtitle subtitle="Check Your Inbox or Spam Folder" />
        </div>
      </div>

      <div className=" w-full mt-5 flex justify-center">
        <div className=" flex flex-col gap-3 w-[90%] max-md:w-full max-sm:w-full px-0 ">
          <p className="text-center text-dark-blue max-sm:text-base">
            We have sent an email to{" "}
            <span className="text-mansa-blue font-bold">{user_email}</span> to
            confirm the validity of your email address. After receiving the
            email, please follow the link provided to complete your
            registration.
          </p>
          <p className="text-center text-dark-blue max-sm:text-base mt-5">
            If you do not see the email, please check your{" "}
            <span className=" font-bold">spam or junk folder</span>. If you
            still haven't received it, click the button below to resend the
            verification email.
          </p>

          <div className="flex gap-5 max-md:flex-col justify-center items-center mt-5">
            <ThemeProvider theme={theme}>
              <Button
                variant="outlined"
                onClick={resendMail}
                className=" w-full"
                color="mainColor"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Resend Verification"}
              </Button>
            </ThemeProvider>

            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                className=" w-full"
                color="mainColor"
                onClick={() => navigate("/auth/login")}
              >
                Login
              </Button>
            </ThemeProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
