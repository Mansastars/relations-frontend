// Created Deals
import { Edit2Icon } from "lucide-react";
import api from "../api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { XCircleIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CreatedDeals() {
    const [deals, setDeals] = useState([]);
    const navigate = useNavigate()
    const isSmallScreen = window.innerWidth < 765;

    useEffect(() => {
        const fetchDeals = async () => {
            try {
                const response = await api.get('/deals/deals');
                // Assuming response.data contains the array of deals
                const fetchedDeals = response.data.deals;
                
                localStorage.setItem('user', JSON.stringify(response.data.user));
                localStorage.setItem('showBanner', response.data.showBanner.toString());
                localStorage.setItem('showBilling', response.data.showBilling.toString());

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
                try {screen
                    await api.delete(`/deals/delete-deal/${id}`);
                    setDeals(deals.filter(deal => deal.id !== id));
                    Swal.fire('Deleted!', 'Your deal has been deleted.', 'success');
                    navigate('/alldashboards');
                } catch (error) {
                    console.error('Error:', error);
                    Swal.fire('Error', 'Failed to delete deal', 'error');
                }
            }
        });
    };

    // Update or Edit a deal
    const handleDealUpdate = async (dealId) => {
        try {
            const response = await api.get(`/deals/single-deal/${dealId}`);
            const dealDetails = response.data.deal;
    
            const formatDateTime = (isoDate) => {
                if (!isoDate) return '';
                const date = new Date(isoDate);
                const formattedDate = date.toISOString().slice(0, 16); // Format "yyyy-MM-ddThh:mm"
                return formattedDate;
            };
    
            const { value: updatedDealDetails } = await Swal.fire({
                title: 'Update Deal Details',
                html:
                    `<div>` +
                    `<label class="swal2-title">Deal Name</label>` +
                    `<input id="dealName" class="swal2-input" value="${dealDetails.deal_name}" placeholder="Deal Name">` +
                    `</div>` +
                    `<div>` +
                    `<label class="swal2-label">Deadline</label>` +
                    `<input type="datetime-local" id="deadline" value="${formatDateTime(dealDetails.dead_line)}" class="swal2-input">` +
                    `</div>` +
                    `<div>` +
                    `<label class="swal2-label">Dead Size</label>` +
                    `<input type="number" id="dealSize" min=0 value="${dealDetails.deal_size}" class="swal2-input" placeholder="Deal Size">` +
                    `</div>`,
                focusConfirm: false,
                preConfirm: () => {
                    const deal_name = document.getElementById('dealName').value;
                    const deadlineInputValue = document.getElementById('deadline').value;
                    const deal_size = document.getElementById('dealSize').value;
                    // Convert deadline input value to ISO format
                    const dead_line = new Date(deadlineInputValue).toISOString();
                    return {
                        deal_name,
                        dead_line,
                        deal_size,
                    };
                }
            });
    
            if (updatedDealDetails) {
                // Make the patch request with updated deal details
                await api.patch(`/deals/edit-deal/${dealId}`, updatedDealDetails);
                Swal.fire('Success', 'Deal details updated successfully', 'success');
                // Refresh the deals list or update the specific deal in the list
                window.location.reload();
            }
        } catch (error) {
            console.error('Error updating deal details:', error);
            Swal.fire('Error', 'Failed to update deal details', 'error');
        }
    };
    
    const sortedDeals = deals.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    // Check if the user is on a smaller screen or device
    const handleClickDeal = (dealId) => {
        if (isSmallScreen) {
            navigate("/move-to-larger-screen");
        } else {
            localStorage.setItem('currentDealId', dealId);
            navigate(`/dashboard/${dealId}`);
        }
    };

    return (
        <div className="flex flex-col gap-10 items-start justify-center w-full bg-light-grey max-sm:items-center">
            <h1 className="text-dark-blue font-bold text-4xl max-sm:text-2xl self-center  bg-light-grey w-full text-center pb-5">Existing Dashboards</h1>
            <div className="flex flex-row flex-wrap justify-center items-start gap-5">
                {sortedDeals.map(deal => (
                    <div
                        key={deal.id}
                        className="flex flex-col justify-start items-start w-72 max-lg:w-64 max-sm:w-56 gap-2 rounded-xl border border-mansa-blue hover:border-dark-blue"
                    >     
                        <div
                            className="flex flex-col justify-start items-start w-full gap-2 cursor-pointer"
                            onClick={() => handleClickDeal(deal.id)}
                        >
                            <div className=" flex flex-col w-full gap-2 bg-mansa-blue rounded-t-xl px-4 py-3">
                                <div>
                                    <button onClick={() => handleDelete(deal.id)} className="text-white hover:text-[#FF0000] cursor-pointer">
                                        <XCircleIcon className="h-4 w-4" />
                                    </button>
                                </div>
                                <div className=" flex flex-row gap-2 items-center">
                                    <h2 className="font-bold text-2xl max-sm:text-xl text-white text-nowrap w-full ">
                                        {deal.deal_name.length > 14 ? `${deal.deal_name.substring(0, 11)}...` : deal.deal_name}
                                    </h2>
                                    <button onClick={() => handleDealUpdate(deal.id)} className=" text-white hover:text-dark-blue cursor-pointer">
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
                    </div>
                ))}
            </div>
        </div>
    )
}
