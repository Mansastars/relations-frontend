// Dashboard implementation

import { Button, SearchBar } from "../components/Reusables";
import Modal from "../components/CardDetails/Modal";
import { useState, useEffect } from "react";
import { Tables } from "../components/TableDetails/Tables";
import MoveContactModal from "../components/CardDetails/MoveContactModal";
import api from "../api";
import addCommasToNumber from "../components/ReusableComponents/AddCommastoNum";
import FreeTrialBanner from "./FreeTrialBanner";
import Loader from "../components/ReusableComponents/Loader";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthContext";
import ShareButton from "../components/ShareFeature/ShareButton";
import { getFilteredContacts } from "../components/Search/getFilteredContacts.js";

function Dasboard() {
  const navigate = useNavigate(); 
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const { isAuthenticated } = useAuth(); 
  const [showModal, setShowModal] = useState(false);
  const [showMoveContactModal, setShowMoveContactModal] = useState(false);
  const [singleDeals, setSingleDeals] = useState([]);
  const pathNameDealId = window.location.pathname.split("/").at(-1);
  const [userId, setUserId] = useState("");
  localStorage.setItem("currentDealId", pathNameDealId);

  const currentDealId = localStorage.getItem("currentDealId");
  const userDetails = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchFilteredContacts = async () => {
      const contacts = await getFilteredContacts(searchTerm);
      setFilteredContacts(contacts);
    };

    fetchFilteredContacts();
  }, [searchTerm]);

  useEffect(() => {
    const fetchSingleDeals = async () => {
      if (currentDealId) {
        try {
          const response = await api.get(`deals/single-deal/${currentDealId}`);
          setUserId(response.data.deal.owner_id);
          const fetchedSingleDeal = response.data.deal;
          setSingleDeals(fetchedSingleDeal);
        } catch (error) {
          console.error("Error fetching a single deal:", error);
        }
      } else {
        console.error("Current deal ID not found in localStorage");
      }
    };

    fetchSingleDeals();
  }, [currentDealId]);

  const addFromSearch = (contact) => {
    setSelectedContact(contact);
  };

  const finishAddFromSearch = () => {
    setSelectedContact(null);
    setSearchTerm('');
  };

  return (
    <div className="">
      <div className=" sticky top-0 z-50">
        <FreeTrialBanner />
      </div>
      <div className=" flex flex-col gap-2 w-full mr-2 h-screen overflow-auto pt-2 px-3">
        {userDetails && userDetails.id === userId && (
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-4 w-full pr-4">
              <div className="w-full">
                <SearchBar
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeHolder={"Search Contact Database"}
                />
                {searchTerm && (
                  <ul className="absolute z-50 min-w-80 p-2 bg-light-grey shadow-lg rounded-lg overflow-y-auto">
                    {filteredContacts.map((contact) => (
                      <li
                        key={contact.id}
                        className="hover:bg-dark-blue hover:text-white p-2 flex items-center"
                        title="Click to add to this dashboard"
                        onClick={() => addFromSearch(contact)}
                      >
                        {contact.profile_pic ? (
                          <img
                            src={contact.profile_pic}
                            className="h-12 w-12 rounded-full"
                          />
                        ) : ((contact.first_name && contact.last_name) ?
                          <div className="h-12 w-12 rounded-full border-2 border-white bg-dark-blue text-blue items-center flex justify-center">
                            <h3 className="text-white">
                              {contact.first_name[0].toUpperCase()}{" "}
                              {contact.last_name[0].toUpperCase()}
                            </h3>
                          </div> :
                          <div className="h-12 w-12 rounded-full border-2 border-white bg-dark-blue text-blue items-center flex justify-center">
                        </div> 
                        )}
                        <div className="px-2">
                          <h3>
                            {contact.first_name} {contact.last_name}
                          </h3>
                          <p>{contact.email}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div onClick={() => setShowModal(true)} className="flex">
                <Button text="Add a New Contact" />
              </div>
              <div
                onClick={() => setShowMoveContactModal(true)}
                className="flex"
              >
                <Button text="Move a Contact" />
              </div>
            </div>

            <div className="">
              <ShareButton dealDetail={singleDeals} />
            </div>
          </div>
        )}
        {singleDeals.deal_name &&
        <div className={`flex flex-row max-md:flex-col w-full items-center`}>
          <div className=" bg-dark-blue text-white font-bold text-2xl max-md:text-base py-6 max-md:py-2 rounded-l-xl max-md:rounded-xl w-[40%] max-md:w-full text-center">
            {singleDeals &&
            singleDeals.deal_name &&
            singleDeals.deal_name.length > 15
              ? `${singleDeals.deal_name.substring(0, 15)}...`
              : singleDeals && singleDeals.deal_name}
          </div>
          <div className=" flex flex-col w-[60%] max-md:w-full">
            <div className=" bg-mansa-blue text-white py-2 text-center rounded-tr-xl max-md:rounded-t-xl">
              Deal Size Amount:{" "}
              <span className=" font-semibold">
                $
                {singleDeals.deal_size
                  ? addCommasToNumber(singleDeals.deal_size)
                  : "0"}
              </span>
            </div>
            <div className=" flex flex-row  ">
              <div className=" bg-[orange] text-white w-1/2 max-md:w-full py-2 pl-5 max-md:rounded-bl-xl">
                In-Negotiation Value:{" "}
                <span className=" font-semibold">
                  $
                  {singleDeals.negotiation_value
                    ? addCommasToNumber(singleDeals.negotiation_value)
                    : "0"}
                </span>
              </div>
              <div className=" bg-[green] text-white w-1/2 max-md:w-full py-2 pl-5 rounded-br-xl ">
                Deal Signed Value:{" "}
                <span className=" font-semibold">
                  $
                  {singleDeals.signed_value
                    ? addCommasToNumber(singleDeals.signed_value)
                    : "0"}
                </span>
              </div>
            </div>
          </div>
        </div>

        }
        <Tables />
      </div>
      {showModal && <Modal onClose={() => setShowModal(false)} data={{}} />}
      {showMoveContactModal && (
        <MoveContactModal onClose={() => setShowMoveContactModal(false)} />
      )}
      {selectedContact && <Modal onClose={finishAddFromSearch} data={selectedContact} />}
    </div>
  );
}

export default Dasboard;
