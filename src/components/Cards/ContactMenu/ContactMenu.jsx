// ContactMenu.js
import React from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ContactMenu = ({
  anchorEl,
  handleMenuClick,
  handleMenuClose,
  handleViewOrUpdate,
  handleDeleteClick,
}) => {
  return (
    <>
      <IconButton onClick={handleMenuClick} className="text-white" size="small">
        <MoreVertIcon htmlColor="#ffffff" />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleViewOrUpdate}>View or Edit Contact</MenuItem>
        <MenuItem onClick={handleDeleteClick}>Delete Contact</MenuItem>
      </Menu>
    </>
  );
};

export default ContactMenu;
