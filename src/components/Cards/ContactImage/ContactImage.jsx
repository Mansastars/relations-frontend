import React from "react";
import { Avatar } from "@mui/material";

const ContactImage = ({ profile_url, firstName, lastName, color }) => {
  const getUserInitials = (firstName, lastName) => {
    return `${firstName[0]}${lastName[0]}`.toUpperCase();
  };

  return (
    <Avatar
      src={profile_url || ""}
      alt="User's profile"
      sx={{
        width: 40,
        height: 40,
        backgroundColor: profile_url ? "transparent" : "white",
        fontSize: 20,
        color: `${color}`,
      }}
    >
      {!profile_url && getUserInitials(firstName, lastName)}
    </Avatar>
  );
};

export default ContactImage;
