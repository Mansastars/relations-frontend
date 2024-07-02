import React, { useEffect } from "react";
import FormContainer from "../components/InvestorsUpdate/FormContainer";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";

const InvestorsUpdate = () => {
  const navigate = useNavigate();

  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth/login");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className=" flex flex-col w-full px-3 items-center overflow-y-auto">
      <FormContainer />
    </div>
  );
};

export default InvestorsUpdate;
