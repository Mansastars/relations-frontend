import { Edit2Icon, XCircleIcon } from "lucide-react";
import api from "../../api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import EditDealModal from "./EditDealModal";
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

export default function CreatedDeals() {
  const { t } = useTranslation(); // Initialize translation function
  const [deals, setDeals] = useState([]);
  const navigate = useNavigate();
  const isSmallScreen = window.innerWidth < 680;
  const [showEditDealModal, setShowEditDealModal] = useState(false);
  const [selectedDeal, setSelectedDeal] = useState(null);

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const response = await api.get("/deals/deals");
        const fetchedDeals = response.data.deals;

        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("showBanner", response.data.showBanner.toString());
        localStorage.setItem(
          "showBilling",
          response.data.showBilling.toString()
        );

        setDeals(fetchedDeals);
      } catch (error) {
        console.error("Error fetching deals:", error);
      }
    };

    fetchDeals();
  }, []);

  if (!deals) {
    return <div></div>;
  }

  const handleDelete = async (id) => {
    Swal.fire({
      title: t('DeleteConfirmationTitle'),
      text: t('DeleteConfirmationText'),
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: t('DeleteConfirmationConfirm'),
      cancelButtonText: t('DeleteConfirmationCancel'),
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await api.delete(`/deals/delete-deal/${id}`);
          setDeals(deals.filter((deal) => deal.id !== id));
          Swal.fire(t('DeleteSuccess'), t('DeleteSuccessText'), "success");
          navigate("/alldashboards");
        } catch (error) {
          console.error("Error:", error);
          Swal.fire(t('DeleteError'), t('DeleteErrorText'), "error");
        }
      }
    });
  };

  const handleDealUpdate = async (dealId) => {
    try {
      const response = await api.get(`/deals/single-deal/${dealId}`);
      const dealDetails = response.data.deal;
      setSelectedDeal(dealDetails);
      setShowEditDealModal(true);
    } catch (error) {
      console.error("Error updating deal details:", error);
      Swal.fire(t('UpdateError'), t('UpdateErrorText'), "error");
    }
  };

  const sortedDeals = deals.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  const handleClickDeal = (dealId) => {
    if (isSmallScreen) {
      navigate("/move-to-larger-screen");
    } else {
      localStorage.setItem("currentDealId", dealId);
      navigate(`/dashboard/${dealId}`);
    }
  };

  return (
    <div className="flex flex-col gap-10 items-start justify-center w-full bg-light-grey max-sm:items-center">
      <h1 className="text-dark-blue font-bold text-4xl max-sm:text-2xl self-center bg-light-grey w-full text-center pb-5">
        {t('ExistingDashboards')}
      </h1>
      <div className="flex flex-row flex-wrap justify-center items-start gap-5">
        {sortedDeals.map((deal) => (
          <div
            key={deal.id}
            className="flex justify-start items-start w-64 max-sm:w-56 rounded-xl border-2 border-mansa-blue hover:border-2 hover:border-dark-blue cursor-pointer"
          >
            <div
              className="flex flex-col justify-start items-start w-full gap-2"
              onClick={() => handleClickDeal(deal.id)}
            >
              <div className="flex flex-col w-full gap-2 bg-mansa-blue rounded-tl-xl pl-4 py-3">
                <div>
                  <button
                    onClick={() => handleDelete(deal.id)}
                    className="text-white hover:text-[#FF0000]"
                  >
                    <XCircleIcon className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <h2 className="font-bold text-2xl max-sm:text-xl text-white text-nowrap w-full">
                    {deal.deal_name.length > 14
                      ? `${deal.deal_name.substring(0, 11)}...`
                      : deal.deal_name}
                  </h2>
                </div>
              </div>
              <p className="text-dark-blue text-base px-4 rounded-bl-xl bg-light-grey">
                <span className="font-semibold">{t('Deadline')}:</span>
                {deal.dead_line
                  ? new Date(deal.dead_line).toLocaleString()
                  : t('NoDeadline')}
              </p>
            </div>
            <div className="pr-4 py-3 bg-mansa-blue rounded-tr-xl flex flex-col gap-10 max-sm:gap-9">
              <button
                onClick={() => handleDealUpdate(deal.id)}
                className="text-white hover:text-dark-blue cursor-pointer"
              >
                <Edit2Icon size={24} />
              </button>
              <p className="text-mansa-blue"></p>
            </div>
          </div>
        ))}
        {showEditDealModal && (
          <EditDealModal
            onClose={() => setShowEditDealModal(false)}
            dealDetails={selectedDeal}
          />
        )}
      </div>
    </div>
  );
}
