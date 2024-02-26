// Created Deals
import { DeleteIcon, Edit2Icon } from "lucide-react";
import api from "../api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { XCircleIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import EditDealModal from "./EditDealModal";

export default function CreatedDeals() {
    const [deals, setDeals] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [dealDetails, setDealDetails] = useState(null); // Declare dealDetails state
    const navigate = useNavigate()

    useEffect(() => {
        const fetchDeals = async () => {
            try {
                const response = await api.get('/deals/deals');
                // Assuming response.data contains the array of deals
                const fetchedDeals = response.data.deals;
                console.log(fetchedDeals)
                setDeals(fetchedDeals);
            } catch (error) {
                console.error('Error fetching deals:', error);
            }
        };

        fetchDeals();
    }, []);

    if (!deals) {
        return <div></div>;
    }

    const handleDelete = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this deal!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it',
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await api.delete(`/deals/delete-deal/${id}`);
                    setDeals(deals.filter(deal => deal.id !== id));
                    Swal.fire('Deleted!', 'Your deal has been deleted.', 'success');
                    navigate(-1);
                } catch (error) {
                    console.error('Error:', error);
                    Swal.fire('Error', 'Failed to delete deal', 'error');
                }
            }
        });
    };

    // Edit a deal
    const handleEdit = async (id) => {
        try {
            const response = await api.get(`/deals/single-deal/${id}`);
            const dealDetails = response.data.deal; // Assuming response.data contains the deal details
            setDealDetails(dealDetails);
            setShowEditModal(true);
        } catch (error) {
            console.error('Error fetching deal details:', error);
        }
    };

    const handleCloseEditModal = () => {
        setShowEditModal(false);
        setDealDetails(null);
    };

    // Sort deals based on createdAt timestamp in descending order
    const sortedDeals = deals.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return (
        <div className="flex flex-col gap-10 items-start justify-center w-full bg-light-grey">
            <h1 className="text-dark-blue font-bold text-4xl self-center sticky top-0 bg-light-grey w-full text-center pb-5">Existing Deals</h1>
            <div className="flex flex-row flex-wrap justify-center items-start gap-5">
                {sortedDeals.map(deal => (
                    <div
                        key={deal.id}
                        className="flex flex-col justify-start items-start w-72 max-lg:w-64 gap-2 rounded-xl border border-mansa-blue hover:border-dark-blue"
                    >     
                        <div
                            className="flex flex-col justify-start items-start w-full gap-2 cursor-pointer"
                            onClick={() => {localStorage.setItem('currentDealId', deal.id), navigate(`/dashboard/${deal.id}`)}}
                        >
                            <div className=" flex flex-col w-full gap-2 bg-mansa-blue rounded-t-xl px-4 py-3">
                                <button onClick={() => handleDelete(deal.id)} className="text-white hover:text-[#FF0000] cursor-pointer">
                                    <XCircleIcon className="h-4 w-4" />
                                </button>
                                <div className=" flex flex-row gap-2 items-center">
                                    <h2 className="font-bold text-2xl text-white text-nowrap w-full ">
                                        {deal.deal_name.length > 14 ? `${deal.deal_name.substring(0, 14)}...` : deal.deal_name}
                                    </h2>
                                    <button onClick={(e) => { e.stopPropagation(); handleEdit(deal.id); }} className=" text-white hover:text-dark-blue cursor-pointer">
                                        <Edit2Icon size={24} />
                                    </button>
                                </div>
                                
                            </div>
                            <p className="text-dark-blue text-base px-4">
                                <span className="font-semibold">Deadline: </span>
                                {deal.dead_line ? new Date(deal.dead_line).toLocaleString() : 'No deadline set'}
                            </p>
                        </div>
                        <div className=" pl-5 self-start">
                            
                        </div>
                        {showEditModal && dealDetails && (
                        <EditDealModal
                            onClose={handleCloseEditModal}
                            dealDetails={dealDetails}
                        />
            )}
                    </div>
                ))}
            </div>
        </div>
    )
}
