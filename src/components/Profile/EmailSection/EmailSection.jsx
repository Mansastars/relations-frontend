import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import api from "../../../api";
import { FullInput } from "../../Reusables";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    mainColor: createColor("#08a5aa"),
  },
});

const EmailSection = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [emailIsSubmitting, setEmailIsSubmitting] = useState(false);
  const [formValue, setFormValue] = useState({
    email: "",
  });

  // Get user's details
  useEffect(() => {
    const handleUserDetails = async () => {
      try {
        const response = await api.get(`users/single-user`);
        const userDetails = response.data.user;
        setUserDetails(userDetails);
        setFormValue({
          email: userDetails.email || "",
        });
      } catch (error) {
        if (error.response.data.message) {
          Swal.fire("Error", error.response.data.message, "error");
        } else {
          Swal.fire(
            "Error",
            `An error occurred while trying to get your information. Please refresh the page.`,
            "error"
          );
        }
        console.error("Error fetching user details:", error);
      }
    };
    handleUserDetails();
  }, []);

  //   Handle user's email input
  const handleEmailInput = (e) => {
    if (e && e.target) {
      const { name, value } = e.target;
      setFormValue((prevFormValue) => ({ ...prevFormValue, [name]: value }));
    }
  };

  // Submit user's email update
  const handleEmailSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email: formValue.email,
    };
    setEmailIsSubmitting(true);
    try {
      const res = await api.patch(`users/update-email`, userData);
      // Update local storage
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        user.email = formValue.email;
        localStorage.setItem("user", JSON.stringify(user));
      }
      Swal.fire(
        "Email Update",
        "Your email was updated successfully",
        "success"
      );
    } catch (error) {
      if (error.response.data.message) {
        Swal.fire("Error", error.response.data.message, "error");
      } else {
        Swal.fire(
          "Error",
          `An waiting error occurred while updating your information. Please try again.`,
          "error"
        );
      }
      console.log(error);
    } finally {
      setEmailIsSubmitting(false);
    }
  };

  return (
    <div className=" flex flex-col w-full px-3 items-center overflow-y-auto">
      <div
        className={`bg-white py-10 px-6 max-sm:px-3 flex flex-col justify-center mt-10 mb-10 rounded-2xl items-start gap-10 w-[75%] max-md:w-full`}
      >
        <form onSubmit={handleEmailSubmit} className=" w-full">
          <div>
            <h1 className=" text-dark-blue font-bold text-3xl">Email</h1>
            <p className=" text-dark-blue text-base">
              Use this form to update your email.
            </p>
          </div>
          <div className="flex flex-col gap-5 mt-8">
            <div>
              <FullInput
                type="email"
                title="Email"
                placeholder=""
                id="email"
                value={formValue.email}
                onChange={handleEmailInput}
              />
              <p className="text-dark-blue text-sm">
                You will need this email to log in.
              </p>
            </div>
          </div>
          <div className=" mt-5">
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                className=" w-full"
                color="mainColor"
                type="submit"
                disabled={emailIsSubmitting && true}
              >
                Update Email
              </Button>
            </ThemeProvider>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailSection;
