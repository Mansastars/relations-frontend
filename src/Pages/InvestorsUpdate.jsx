import React, { useEffect } from "react";
import FormContainer from "../components/InvestorsUpdate/FormContainer";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";
import FreeTrialBanner from "./FreeTrialBanner";

const InvestorsUpdate = () => {
  const navigate = useNavigate();

  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth/login");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className=" w-full h-full">
      <div className=" sticky top-0 w-full z-50">
        <FreeTrialBanner />
      </div>
      <div className=" flex flex-col w-full px-3 items-center overflow-y-auto">
        <FormContainer />
      </div>
    </div>
  );
};

export default InvestorsUpdate;
