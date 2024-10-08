import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"; // i18next hook
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
  const { t } = useTranslation(); // Use translation hook
  const [userDetails, setUserDetails] = useState(null);
  const [generalInfoIsSubmitting, setGeneralInfoIsSubmitting] = useState(false);
  const [formValue, setFormValue] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    bio: "",
  });

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
        Swal.fire(
          t("error"),
          t("errorFetchingDetails"),
          "error"
        );
        console.error("Error fetching user details:", error);
      }
    };
    handleUserDetails();
  }, [t]);

  const handleGeneralInfoInput = (e) => {
    if (e && e.target) {
      const { name, value } = e.target;
      setFormValue((prevFormValue) => ({ ...prevFormValue, [name]: value }));
    }
  };

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
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        user.first_name = formValue.first_name;
        user.last_name = formValue.last_name;
        user.phone_number = formValue.phone_number;
        user.bio = formValue.bio;
        localStorage.setItem("user", JSON.stringify(user));
      }
      Swal.fire(
        t("profileUpdate"),
        t("profileUpdateSuccess"),
        "success"
      );
    } catch (error) {
      Swal.fire(
        t("error"),
        t("errorUpdatingInfo"),
        "error"
      );
      console.log(error);
    } finally {
      setGeneralInfoIsSubmitting(false);
    }
  };

  return (
    <div className=" flex flex-col w-full px-3 items-center overflow-y-auto">
      <div className="bg-white py-10 px-6 flex flex-col justify-center mt-10 mb-10 rounded-2xl items-start gap-10 w-[75%]">
        <form onSubmit={handleGeneralInfoSubmit} className=" w-full">
          <div className=" w-full">
            <h1 className=" text-dark-blue font-bold text-3xl">
              {t("profile")}
            </h1>
            <p className=" text-dark-blue text-base">
              {t("updateProfile")}
            </p>
          </div>
          <div className="flex flex-col gap-5 mt-8 w-full">
            <div className=" w-full mb-5">
              <ProfileImage />
            </div>
            <div className="flex max-[768px]:flex-col gap-5 w-full">
              <FullInput
                type="text"
                title={t("firstName")}
                placeholder=""
                value={formValue.first_name}
                onChange={handleGeneralInfoInput}
              />
              <FullInput
                type="text"
                title={t("lastName")}
                placeholder=""
                value={formValue.last_name}
                onChange={handleGeneralInfoInput}
              />
            </div>
            <div className=" flex flex-col gap-1 w-1/2 max-[768px]:w-full">
              <FullInput
                type="tel"
                title={t("phoneNumber")}
                placeholder="+123456789"
                maxLength={15}
                value={formValue.phone_number}
                onChange={handleGeneralInfoInput}
              />
              <p className=" text-dark-blue text-sm">
                {t("phoneNumberDescription")}
              </p>
            </div>
            <div className="">
              <div className=" relative col-span-full">
                <label
                  htmlFor="bio"
                  className=" absolute -top-3 left-3 bg-white px-1 text-sm leading-6 text-dark-blue font-semibold"
                >
                  {t("bio")}
                </label>
                <div className="mt-1">
                  <textarea
                    name="bio"
                    rows={2}
                    className="block w-full rounded-md border border-dark-blue py-2.5 pl-2 text-dark-blue"
                    placeholder=""
                    value={formValue.bio}
                    onChange={handleGeneralInfoInput}
                  />
                </div>
              </div>
              <p className="text-dark-blue text-sm">
                {t("bioDescription")}
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
                {t("updateProfileButton")}
              </Button>
            </ThemeProvider>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSection;
