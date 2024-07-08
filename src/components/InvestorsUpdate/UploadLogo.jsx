import React, { useRef, useEffect, useState } from "react";
import Swal from "sweetalert2";

const UploadLogo = ({ updateData }) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  const [logoUrl, setLogoUrl] = useState("");

  useEffect(() => {
    // Initialize Cloudinary upload widget
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
        uploadPreset: import.meta.env.VITE_APP_CLOUDINARY_UPLOAD_PRESET,
        multiple: false,
        maxFiles: 1,
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

          // Store the logoUrl in localStorage
          const savedData = localStorage.getItem("InvestorsUpdate");
          const parsedData = savedData ? JSON.parse(savedData) : {};
          parsedData.logoUrl = imageUrl;
          localStorage.setItem("InvestorsUpdate", JSON.stringify(parsedData));

          // Update the parent component's state with the new logoUrl
          updateData({ logoUrl: imageUrl });
        }
      }
    );

    // Check if logoUrl exists in local storage
    const savedData = localStorage.getItem("InvestorsUpdate");
    const parsedData = savedData ? JSON.parse(savedData) : {};
    const imageUrl = parsedData.logoUrl || "";
    setLogoUrl(imageUrl);
  }, [updateData]);

  const handleUpload = () => {
    widgetRef.current.open();
  };

  return (
    <div className="w-full flex flex-col items-center">
      {logoUrl && (
        <div className="mb-4 self-start">
          <img
            src={logoUrl}
            alt="Uploaded Logo"
            className="w-24 h-24 rounded"
          />
          <p className="text-sm text-gray-600">An image has been uploaded.</p>
        </div>
      )}
      <button
        onClick={handleUpload}
        type="button"
        className="bg-[#82D4D4] w-[70%] max-md:w-full p-2 rounded font-semibold hover:bg-transparent border-2 border-[#82D4D4] hover:text-[#82D4D4]"
      >
        Upload Logo
      </button>
    </div>
  );
};

export default UploadLogo;
