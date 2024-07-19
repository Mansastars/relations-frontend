import { useEffect, useState } from "react";
import api from "../../../api";
import { FullInput } from "../../Reusables";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Swal from "sweetalert2";
import ProfileImage from "./ProfileImage";

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    mainColor: createColor("#08a5aa"),
  },
});

const ProfileSection = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [generalInfoIsSubmitting, setGeneralInfoIsSubmitting] = useState(false);
  const [formValue, setFormValue] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    bio: "",
  });

  // Get user's details
  useEffect(() => {
    const handleUserDetails = async () => {
      try {
        const response = await api.get(`users/single-user`);
        const userDetails = response.data.user;
        setUserDetails(userDetails);
        setFormValue({
          first_name: userDetails.first_name || "",
          last_name: userDetails.last_name || "",
          phone_number: userDetails.phone_number || "",
          bio: userDetails.bio || "",
        });
      } catch (error) {
        if (error.response.data.message) {
          Swal.fire("Error", error.response.data.message, "error");
        } else {
          Swal.fire(
            "Error",
            `An error occurred while trying to get your information. \
            Please refresh the page.`,
            "error"
          );
        }
        console.error("Error fetching user details:", error);
      }
    };
    handleUserDetails();
  }, []);

  // Handle user's general info input
  const handleGeneralInfoInput = (e) => {
    if (e && e.target) {
      const { name, value } = e.target;
      setFormValue((prevFormValue) => ({ ...prevFormValue, [name]: value }));
    }
  };

  // Submit user's general info update
  const handleGeneralInfoSubmit = async (e) => {
    setGeneralInfoIsSubmitting(true);
    e.preventDefault();

    const userData = {
      first_name: formValue.first_name,
      last_name: formValue.last_name,
      phone_number: formValue.phone_number,
      bio: formValue.bio,
    };

    try {
      const res = await api.patch(`users/update-profile`, userData);
      // Update local storage
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        user.first_name = formValue.first_name;
        user.last_name = formValue.last_name;
        user.phone_number = formValue.phone_number;
        user.bio = formValue.bio;
        localStorage.setItem("user", JSON.stringify(user));
      }
      Swal.fire(
        "Profile Update",
        "Your profile was updated successfully",
        "success"
      );
    } catch (error) {
      if (error.response.data.message) {
        Swal.fire("Error", error.response.data.message, "error");
      } else {
        Swal.fire(
          "Eror",
          `An waiting error occurred while updating your information. Please try again.`,
          "error"
        );
      }
      console.log(error);
    } finally {
      setGeneralInfoIsSubmitting(false);
    }
  };

  return (
    <div className=" flex flex-col w-full px-3 items-center overflow-y-auto">
      <div
        className={`bg-white py-10 px-6 max-sm:px-3 flex flex-col justify-center mt-10 mb-10 rounded-2xl items-start gap-10 w-[75%] max-md:w-full`}
      >
        <form onSubmit={handleGeneralInfoSubmit} className=" w-full">
          <div className=" w-full">
            <h1 className=" text-dark-blue font-bold text-3xl">Profile</h1>
            <p className=" text-dark-blue text-base">
              Use the form below to update your profile.
            </p>
          </div>
          <div className="flex flex-col gap-5 mt-8 w-full">
            <div className=" w-full mb-5">
              <ProfileImage />
            </div>
            <div className="flex max-[768px]:flex-col gap-5 w-full">
              <FullInput
                type="text"
                title="First Name"
                placeholder=""
                // id="first_name"
                value={formValue.first_name}
                onChange={handleGeneralInfoInput}
              />
              <FullInput
                type="text"
                title="Last Name"
                placeholder=""
                // id="last_name"
                value={formValue.last_name}
                onChange={handleGeneralInfoInput}
              />
            </div>
            <div className=" flex flex-col gap-1 w-1/2 max-[768px]:w-full">
              <FullInput
                type="tel"
                title="Phone Number"
                placeholder="+123456789"
                // id="phone_number"
                maxLength={15}
                value={formValue.phone_number}
                onChange={handleGeneralInfoInput}
              />
              <p className=" text-dark-blue text-sm">
                We collect this incase of emergencies.
              </p>
            </div>
            <div className="">
              <div className=" relative col-span-full">
                <label
                  htmlFor="bio"
                  className=" absolute -top-3 left-3 bg-white px-1 text-sm leading-6 text-dark-blue font-semibold"
                >
                  Bio
                </label>
                <div className="mt-1">
                  <textarea
                    // id="bio"
                    name="bio"
                    rows={2}
                    className="block w-full rounded-md border border-dark-blue py-2.5 pl-2 text-dark-blue focus:outline-none shadow-sm placeholder:text-gray-400 focus:border focus:border-mansa-blue sm:text-sm sm:leading-6 hover:border-mansa-blue"
                    placeholder=""
                    value={formValue.bio}
                    onChange={handleGeneralInfoInput}
                  />
                </div>
              </div>
              <p className="text-dark-blue text-sm">
                Brief description of your profile.
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
                disabled={generalInfoIsSubmitting && true}
              >
                Update Profile
              </Button>
            </ThemeProvider>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSection;
