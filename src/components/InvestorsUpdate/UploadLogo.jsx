import React from "react";

const UploadLogo = () => {
  const handleUpload = () => {
    console.log("Upload button");
  };
  return (
    <button
      onClick={handleUpload}
      type="button"
      className=" bg-[#82D4D4] p-2 rounded font-medium hover:bg-transparent border-2 border-[#82D4D4] hover:text-[#82D4D4]"
    >
      Upload Logo
    </button>
  );
};

export default UploadLogo;
