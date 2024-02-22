// Created Deals
import { DeleteIcon } from "lucide-react";
import api from "./api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { XCircleIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CreatedDeals() {
    const [deals, setDeals] = useState([]);
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

    // Sort deals based on createdAt timestamp in descending order
    const sortedDeals = deals.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return (
        <div className="flex flex-col gap-10 items-start justify-center w-full">
            <h1 className="text-dark-blue font-bold text-4xl self-center">Existing Deals</h1>
            <div className="flex flex-row flex-wrap justify-center items-start gap-5">
                {sortedDeals.map(deal => (
                    <div
                        key={deal.id}
                        className="flex flex-col justify-start items-start w-72 max-lg:w-64 gap-2 rounded-xl border border-mansa-blue hover:border-dark-blue"
                    >     
                        <Link
                            to={`/dashboard/${deal.id}`}
                            className="flex flex-col justify-start items-start w-full gap-2"
                            onClick={() => localStorage.setItem('currentDealId', deal.id)}
                        >
                            <div className=" flex flex-row w-full justify-between bg-mansa-blue rounded-t-xl px-5 py-5">
                                <h2 className="font-bold text-2xl text-white text-nowrap w-full ">{deal.deal_name}</h2>
                                <button onClick={() => handleDelete(deal.id)} className="text-white hover:text-[#FF0000] cursor-pointer">
                                    <XCircleIcon className="h-6 w-6" />
                                </button>
                            </div>
                            <p className="text-dark-blue text-base px-5">
                                <span className="font-semibold">Deadline: </span>
                                {deal.dead_line ? new Date(deal.dead_line).toLocaleString() : 'No deadline set'}
                            </p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
