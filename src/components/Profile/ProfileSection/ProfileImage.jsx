import React, { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Swal from "sweetalert2";
import { Avatar, CircularProgress } from "@mui/material";
import api from "../../../api";
import { User } from "lucide-react";

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    mainColor: createColor("#08a5aa"),
  },
});

const ProfileImage = () => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  const [logoUrl, setLogoUrl] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize Cloudinary upload widget
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
        uploadPreset: import.meta.env.VITE_APP_CLOUDINARY_UPLOAD_PRESET,
        multiple: false,
        maxFiles: 1,
        clientAllowedFormats: ["jpg", "jpeg", "png"], // Only allow image formats
      },
      (error, result) => {
        if (error) {
          Swal.fire({
            icon: "error",
            title: "Upload Error",
            text: "An error occurred while uploading the image. Please try again or contact support.",
          });
        } else if (result && result.event === "success") {
          const imageUrl = result.info.secure_url;
          // Update the state with the new logoUrl
          setLogoUrl(imageUrl);

          // Update local storage
          const user = JSON.parse(localStorage.getItem("user"));
          if (user) {
            user.profile_picture = imageUrl;
            localStorage.setItem("user", JSON.stringify(user));
          }

          // Send to backend
          try {
            const userData = { profile_picture: imageUrl };
            api
              .patch("users/update_photo", userData)
              .then(() =>
                Swal.fire({
                  icon: "success",
                  title: "Upload Successful",
                  text: "Your profile image was uploaded successfully",
                })
              )
              .catch((error) => {
                Swal.fire({
                  icon: "error",
                  title: "Upload Error",
                  text: "An error occurred while uploading the image. Please try again.",
                });
                console.error("Error updating profile picture:", error);
              });
          } catch (error) {
            Swal.fire({
              icon: "error",
              title: "Upload Error",
              text: "An error occurred while uploading the image. Please try again.",
            });
            console.error("Error in patch request:", error);
          }
        }
      }
    );

    // Fetch the current image and user details from backend if exists
    api
      .get("users/single-user")
      .then((res) => {
        if (res.data.user) {
          if (res.data.user.profile_picture) {
            setLogoUrl(res.data.user.profile_picture);
          }
          setFirstName(res.data.user.first_name);
          setLastName(res.data.user.last_name);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error(
          "Error fetching profile picture and user details:",
          error
        );
        setLoading(false);
      });
  }, []);

  const handleUpload = () => {
    widgetRef.current.open();
  };

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to delete your profile image?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await api.patch("users/delete_photo");
        setLogoUrl("");

        // Update local storage
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
          user.profile_picture = "";
          localStorage.setItem("user", JSON.stringify(user));
        }

        Swal.fire({
          icon: "success",
          title: "Image Deleted",
          text: "Your profile image has been deleted successfully.",
        });
      } catch (error) {
        console.error("Error deleting profile picture:", error);
        Swal.fire({
          icon: "error",
          title: "Delete Error",
          text: "An error occurred while deleting the image. Please try again.",
        });
      }
    }
  };

  const getUserInitials = (firstName, lastName) => {
    return `${firstName[0]}${lastName[0]}`.toUpperCase();
  };

  return (
    <div className="w-full flex flex-row max-md:flex-col justify-between max-md:justify-center max-md:gap-5 items-center">
      <div className="w-full flex max-md:justify-center">
        {loading ? (
          <Avatar
            sx={{
              width: 128,
              height: 128,
              backgroundColor: "rgba(8,165,170,70%)",
              fontSize: 32,
            }}
          >
            <User size={48} />
          </Avatar>
        ) : logoUrl ? (
          <Avatar
            src={logoUrl}
            alt="User's image"
            sx={{ width: 128, height: 128 }}
          />
        ) : (
          <Avatar
            sx={{
              width: 128,
              height: 128,
              backgroundColor: "rgba(8,165,170,70%)",
              fontSize: 32,
            }}
          >
            {getUserInitials(firstName, lastName)}
          </Avatar>
        )}
      </div>
      <div className="flex gap-5 justify-end max-md:justify-center w-full">
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            onClick={handleUpload}
            type="button"
            color="mainColor"
          >
            Upload Image
          </Button>
        </ThemeProvider>
        <ThemeProvider theme={theme}>
          <Button
            variant="outlined"
            onClick={handleDelete}
            type="button"
            color="mainColor"
          >
            Delete Image
          </Button>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default ProfileImage;
