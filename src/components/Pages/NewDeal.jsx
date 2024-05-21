// New Deal Page
import { SearchBar } from "../Reusables";
import { Button } from "../Reusables";
import { useState } from "react";
import NewDealModal from "../DealDetails/NewDealModal";
import CreatedDeals from "../DealDetails/CreatedDeal";
import FreeTrialBanner from "./FreeTrialBanner";
import Loader from "../ReusableComponents/Loader";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/AuthContext";
import { useEffect } from "react";

// The all dashbord page. All dashboards appear here annd one can also create a dashboard on this page.
export default function NewDealPage() {
  const [showNewDealModal, setShowNewDealModal] = useState(false);
  const navigate = useNavigate(); // Use useNavigate hook to navigate programmatically

  const { isAuthenticated } = useAuth(); // Access isAuthenticated from useAuth hook

  useEffect(() => {
    // Redirect to login page if not authenticated
    if (!isAuthenticated) {
      navigate("/auth/login");
    }
  }, [isAuthenticated, navigate]); // Dependency array ensures this effect runs when isAuthenticated changes

  return (
    <div className=" h-screen w-full">
      <div className=" sticky top-0 w-full z-50">
        <FreeTrialBanner />
      </div>
      <div className=" flex flex-col gap-20 w-full h-screen max-sm:w-full max-sm:pr-2 pl-3">
        <div className=" flex pt-2 items-center gap-4">
          <div onClick={() => setShowNewDealModal(true)} className="flex">
            <Button text="Create a Dashboard" />
          </div>
        </div>
        <div className=" overflow-x-auto pb-5 items-center">
          <CreatedDeals />
        </div>
      </div>
      {showNewDealModal && (
        <NewDealModal onClose={() => setShowNewDealModal(false)} />
      )}
    </div>
  );
}
