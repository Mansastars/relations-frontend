import React, { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Swal from "sweetalert2";
import { Avatar } from "@mui/material";
import { User } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../../../api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
  palette: {
    mainColor: createColor("#08a5aa"),
  },
});

const EditContactImage = ({ profile_url, contactId }) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  const [logoUrl, setLogoUrl] = useState(profile_url || "");
  const currentDealId = localStorage.getItem("currentDealId");
  const queryClient = useQueryClient();

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
        cropping: true, // Enable cropping
        croppingAspectRatio: 1, // Optional: set aspect ratio for cropping
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
          updateMutation.mutate({ contactId, profile_pic: imageUrl });
        }
      }
    );
  }, []);

  const updateMutation = useMutation({
    mutationFn: ({ contactId, profile_pic }) =>
      api.patch(`deals/edit-contact/${currentDealId}/${contactId}`, {
        profile_pic,
      }),
    onSuccess: () => {
      toast.success("Contact image updated successfully.");
      queryClient.invalidateQueries(["contacts", currentDealId]);
    },
    onError: () => {
      toast.error("Contact image failed to update, please try again.");
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (contactId) =>
      api.patch(`/contacts/delete_photo/${currentDealId}/${contactId}`),
    onSuccess: () => {
      setLogoUrl("");
      toast.success("Contact image deleted successfully.");
      queryClient.invalidateQueries(["contacts", currentDealId]);
    },
    onError: () => {
      toast.error("Contact image failed to delete, please try again.");
    },
  });

  const handleUpload = () => {
    widgetRef.current.open();
  };

  const handleDelete = async () => {
    deleteMutation.mutate(contactId);
  };

  return (
    <div className="w-full flex flex-row max-md:flex-col justify-center max-md:gap-5 items-center">
      <div className="w-full flex justify-center">
        {logoUrl ? (
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
            <User size={48} />
          </Avatar>
        )}
      </div>
      <div className="flex gap-5 max-md:justify-center w-full">
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
            disabled={logoUrl === "" && true}
          >
            Delete Image
          </Button>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default EditContactImage;
