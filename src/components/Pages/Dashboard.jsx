// Dashboard implementation
import Sidebar from "./SideBar";
import { Button } from "../Reusables";
import Modal from "../CardDetails/Modal";
import { useState } from "react";
import { Tables } from "../TableDetails/Tables";
import MoveContactModal from "../CardDetails/MoveContactModal";
import api from "../api";
import { useEffect } from "react";

function Dasboard() {
    const [showModal, setShowModal] = useState(false)
    const [showMoveContactModal, setShowMoveContactModal] = useState(false)
    const [singleDeals, setSingleDeals] = useState([]);
    const currentDealId = localStorage.getItem('currentDealId');

    useEffect(() => {
      const fetchSingleDeals = async () => {
          // Check if currentDealId exists before making the request
          if (currentDealId) {
              try {
                  const response = await api.get(`deals/single-deal/${currentDealId}`);
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

    return (
      <div className=" flex gap-5 h-screen">
        <div className=" fixed w-56 max-[768px]:w-20 h-full min-h-screen">
          <Sidebar />
        </div>
        <div className=" flex flex-col gap-2 w-full pl-56 max-[768px]:pl-20 mx-2 overflow-auto">
          <div className=" flex pt-2 items-center gap-4">
            {/* <SearchBar /> */}
            <div onClick={() => setShowModal(true)} className="flex">
              <Button text="Add a New Contact" />
            </div>
            <div onClick={() => setShowMoveContactModal(true)} className="flex">
              <Button text="Move a Contact" />
            </div>
          </div>
          <div className=" flex flex-row w-full items-center">
            <div className=" bg-dark-blue text-white font-bold text-2xl py-6 rounded-l-xl w-[40%] text-center">
              {singleDeals && singleDeals.deal_name && singleDeals.deal_name.length > 15 ? `${singleDeals.deal_name.substring(0, 15)}...` : singleDeals && singleDeals.deal_name}
            </div>
            <div className=" flex flex-col w-[60%]">
              <div className=" bg-mansa-blue text-white py-2 text-center rounded-tr-xl">
                Deal Size Amount: <span className=" font-semibold">${singleDeals.deal_size}</span>
              </div>
              <div className=" flex flex-row  ">
                <div className=" bg-[orange] text-white w-1/2 max-md:w-full py-2 pl-5">
                  In-Negotiation Value: <span className=" font-semibold">${singleDeals.negotiation_value}</span>
                </div>
                <div className=" bg-[green] text-white w-1/2 max-md:w-full py-2 pl-5 rounded-br-xl">
                  Deal Signed Value: <span className=" font-semibold">${singleDeals.signed_value}</span>
                </div>
              </div>
            </div>
          </div>
          <Tables />
        </div>
        {showModal && <Modal onClose={() => setShowModal(false)} />}
        {showMoveContactModal && <MoveContactModal onClose={() => setShowMoveContactModal(false)} />}
      </div>
    )
}

export default Dasboard;