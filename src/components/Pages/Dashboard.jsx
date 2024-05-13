// Dashboard implementation
import Sidebar from "./SideBar";
import { Button } from "../Reusables";
import Modal from "../CardDetails/Modal";
import { useState, useEffect } from "react";
import { Tables } from "../TableDetails/Tables";
import MoveContactModal from "../CardDetails/MoveContactModal";
import api from "../api";
import addCommasToNumber from "../ReusableComponents/AddCommastoNum";
import FreeTrialBanner from "./FreeTrialBanner";
import Loader from "../ReusableComponents/Loader";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/AuthContext"
import SidePanel from "./SidePanel";
import ShareButton from "../ShareFeature/ShareButton";

function Dasboard() {
    const navigate = useNavigate(); // Use useNavigate hook to navigate programmatically
      
    const { isAuthenticated } = useAuth(); // Access isAuthenticated from useAuth hook
    const [showModal, setShowModal] = useState(false)
    const [showMoveContactModal, setShowMoveContactModal] = useState(false)
    const [singleDeals, setSingleDeals] = useState([]);
    const pathNameDealId = window.location.pathname.split('/').at(-1);
    const [userId, setUserId] = useState("")


    useEffect(() => {
      localStorage.setItem('currentDealId', pathNameDealId);
    }, [])

    const currentDealId = localStorage.getItem('currentDealId');
    const userDetails = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
      const fetchSingleDeals = async () => {
          // Check if currentDealId exists before making the request
          if (currentDealId) {
              try {
                  const response = await api.get(`deals/single-deal/${currentDealId}`);
                  setUserId(response.data.deal.owner_id);
                  // Assuming response.data contains the single deal object
                  const fetchedSingleDeal = response.data.deal;
                  setSingleDeals(fetchedSingleDeal);
              } catch (error) {
                  console.error('Error fetching a single deal:', error);
              }
          } else {
              console.error('Current deal ID not found in localStorage');
          }
      };

      fetchSingleDeals();
    }, [currentDealId]); // Include currentDealId in the dependency array

    // Check if user is authenticated
    // useEffect(() => {
    //     // Redirect to login page if not authenticated
    //     if (!isAuthenticated) {
    //       navigate('/auth/login');
    //     }
    //   }, [isAuthenticated, navigate]); // Dependency array ensures this effect runs when isAuthenticated changes

    return (
     <div>
        <div className=" sticky top-0 z-50">
          <FreeTrialBanner />
        </div>
        <div className=" flex gap-3 h-screen">
          <div className="">
            <SidePanel />
          </div>

          <div className=" flex flex-col gap-2 w-full mr-2 overflow-auto pt-2">
            {(userDetails && userDetails.id === userId) && <div className="flex w-full items-center justify-between">
              <div className=" flex items-center gap-4">
                <div onClick={() => setShowModal(true)} className="flex">
                  <Button text="Add a New Contact" />
                </div>
                <div onClick={() => setShowMoveContactModal(true)} className="flex">
                  <Button text="Move a Contact" />
                </div>
              </div>

              <div className="">
                  <ShareButton dealDetail={singleDeals} />
              </div>
            </div>}

            <div className={`flex flex-row w-full items-center`}>
              <div className=" bg-dark-blue text-white font-bold text-2xl py-6 rounded-l-xl w-[40%] text-center">
                {singleDeals && singleDeals.deal_name && singleDeals.deal_name.length > 15 ? `${singleDeals.deal_name.substring(0, 15)}...` : singleDeals && singleDeals.deal_name}
              </div>
              <div className=" flex flex-col w-[60%]">
                <div className=" bg-mansa-blue text-white py-2 text-center rounded-tr-xl">
                  Deal Size Amount: <span className=" font-semibold">${singleDeals.deal_size ? addCommasToNumber(singleDeals.deal_size) : '0'}</span>
                </div>
                <div className=" flex flex-row  ">
                  <div className=" bg-[orange] text-white w-1/2 max-md:w-full py-2 pl-5">
                    In-Negotiation Value: <span className=" font-semibold">${singleDeals.negotiation_value ? addCommasToNumber(singleDeals.negotiation_value) : '0'}</span>
                  </div>
                  <div className=" bg-[green] text-white w-1/2 max-md:w-full py-2 pl-5 rounded-br-xl">
                    Deal Signed Value: <span className=" font-semibold">${singleDeals.signed_value ? addCommasToNumber(singleDeals.signed_value) : '0'}</span>
                  </div>
                </div>
              </div>
            </div>
            <Tables />
          </div>
          {showModal && <Modal onClose={() => setShowModal(false)} />}
          {showMoveContactModal && <MoveContactModal onClose={() => setShowMoveContactModal(false)} />}
        </div>
     </div>
    )
}

export default Dasboard;
