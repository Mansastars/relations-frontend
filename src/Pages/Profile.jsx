// // This file contains content of the Proile page

import FreeTrialBanner from "./FreeTrialBanner";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";
import { useEffect, useState } from "react";
import ProfilePageUI from "../components/Profile/ProfilePageUI";

export default function Profile() {
  const navigate = useNavigate(); // Use useNavigate hook to navigate programmatically
  const { isAuthenticated } = useAuth(); // Access isAuthenticated from useAuth hook

  // Check if user is authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth/login");
    }
  }, [isAuthenticated, navigate]); // Dependency array ensures this effect runs when isAuthenticated changes

  return (
    <div className="">
      <div className=" sticky top-0 z-50">
        <FreeTrialBanner />
      </div>
      <ProfilePageUI />
    </div>
  );
}
