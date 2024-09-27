import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import NewDealModal from "../components/DealDetails/NewDealModal";
import CreatedDeals from "../components/DealDetails/CreatedDeal";
import FreeTrialBanner from "./FreeTrialBanner";
import { Button } from "../components/Reusables";

export default function NewDealPage() {
  const { t } = useTranslation(); // Initialize translation function
  const [showNewDealModal, setShowNewDealModal] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth/login");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="h-screen w-full">
      <div className="sticky top-0 w-full z-50">
        <FreeTrialBanner />
      </div>
      <div className="flex flex-col gap-20 w-full h-screen max-sm:w-full max-sm:pr-2 pl-3">
        <div className="flex pt-2 items-center gap-4">
          <div onClick={() => setShowNewDealModal(true)} className="flex">
            <Button text={t('CreateDashboard')} /> {/* Use translation */}
          </div>
        </div>
        <div className="overflow-x-auto pb-5 items-center">
          <CreatedDeals />
        </div>
      </div>
      {showNewDealModal && (
        <NewDealModal onClose={() => setShowNewDealModal(false)} />
      )}
    </div>
  );
}
