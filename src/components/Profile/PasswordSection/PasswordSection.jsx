import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import api from "../../../api";
import { FullInput } from "../../Reusables";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { EyeIcon, EyeOff } from "lucide-react";
import checkPasswordStrength from "../../ReusableComponents/checkPasswordStrength";

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    mainColor: createColor("#08a5aa"),
  },
});

const PasswordSection = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [currentVisible, setCurrentVisible] = useState(false);
  const [newVisible, setNewVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [passwordIsSubmitting, setPasswordIsSubmitting] = useState(false);
  const [formValue, setFormValue] = useState({
    old_password: "",
    new_password: "",
    confirm_password: "",
  });
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [canSubmit, setCanSubmit] = useState(false);

  // Handle user's password input
  const handlePasswordInput = (e) => {
    if (e && e.target) {
      const { name, value } = e.target;
      setFormValue((prevFormValue) => ({ ...prevFormValue, [name]: value }));
    }
    const strength = checkPasswordStrength(formValue.new_password);
    setPasswordStrength(strength);
    setCanSubmit(strength >= 2);
  };

  // Submit user's password update
  const handlePasswordSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      old_password: formValue.old_password,
      new_password: formValue.new_password,
      confirm_password: formValue.confirm_password,
    };
    setPasswordIsSubmitting(true);
    try {
      if (canSubmit) {
        const res = await api.patch(`users/change-password`, userData);
        setFormValue({
          old_password: "",
          new_password: "",
          confirm_password: "",
        });
        Swal.fire(
          "Password Update",
          "Your password was updated successfully",
          "success"
        );
      } else {
        Swal.fire(
          "Error",
          "Password must be at least eight characters long.",
          "error"
        );
      }
    } catch (error) {
      if (error.response.data.message) {
        Swal.fire("Success", `${error.response.data.message}`, "success");
      } else {
        Swal.fire(
          "Error",
          `An waiting error occurred while updating your information. Please try again.`,
          "error"
        );
      }
      console.log(error);
    } finally {
      setPasswordIsSubmitting(false);
    }
  };

  // Password visibility
  const toggleCurrentVisibility = () => {
    setCurrentVisible(!currentVisible);
  };

  const toggleConfirmVisibility = () => {
    setConfirmVisible(!confirmVisible);
  };

  const toggleNewVisibility = () => {
    setNewVisible(!newVisible);
  };

  return (
    <div className=" flex flex-col w-full px-3 items-center overflow-y-auto">
      <div
        className={`bg-white py-10 px-6 max-sm:px-3 flex flex-col justify-center mt-10 mb-10 rounded-2xl items-start gap-10 w-[75%] max-md:w-full`}
      >
        <form onSubmit={handlePasswordSubmit} className=" w-full">
          <div>
            <h1 className=" text-dark-blue font-bold text-3xl">Password</h1>
            <p className=" text-dark-blue text-base">
              Use this form to update your password.
            </p>
          </div>
          <div className="flex flex-col gap-5 mt-8">
            <div className=" flex flex-col gap-2">
              <div className=" flex flex-col gap-6">
                <FullInput
                  type={currentVisible ? "text" : "password"}
                  title="Current Password"
                  placeholder=""
                  id="old_password"
                  icon={
                    currentVisible ? (
                      <EyeIcon size={14} onClick={toggleCurrentVisibility} />
                    ) : (
                      <EyeOff size={14} onClick={toggleCurrentVisibility} />
                    )
                  }
                  value={formValue.old_password}
                  onChange={handlePasswordInput}
                />
                <div>
                  <FullInput
                    type={newVisible ? "text" : "password"}
                    title="New Password"
                    placeholder=""
                    id="new_password"
                    icon={
                      newVisible ? (
                        <EyeIcon size={14} onClick={toggleNewVisibility} />
                      ) : (
                        <EyeOff size={14} onClick={toggleNewVisibility} />
                      )
                    }
                    value={formValue.new_password}
                    onChange={handlePasswordInput}
                  />
                  {/* Display password strength */}
                  {passwordStrength > 0 && (
                    <p
                      className={`text-sm ${
                        passwordStrength >= 2
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {passwordStrength >= 2
                        ? "Strong password"
                        : "Weak password"}
                    </p>
                  )}
                </div>
                <FullInput
                  type={confirmVisible ? "text" : "password"}
                  title="Confirm Password"
                  placeholder=""
                  id="confirm_password"
                  icon={
                    confirmVisible ? (
                      <EyeIcon size={14} onClick={toggleConfirmVisibility} />
                    ) : (
                      <EyeOff size={14} onClick={toggleConfirmVisibility} />
                    )
                  }
                  value={formValue.confirm_password}
                  onChange={handlePasswordInput}
                />
              </div>
              <p className="text-dark-blue text-sm">
                Must be at least 8 characters long.
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
                disabled={passwordIsSubmitting && true}
              >
                Update Password
              </Button>
            </ThemeProvider>
          </div>
        </form>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default PasswordSection;
