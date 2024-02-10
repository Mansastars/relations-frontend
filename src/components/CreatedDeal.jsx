// Created Deals
import api from "./api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CreatedDeals() {
    const [deals, setDeals] = useState([]);

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

    // Sort deals based on createdAt timestamp in descending order
    const sortedDeals = deals.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return (
        <div className="flex flex-col gap-10 items-center justify-center w-full">
            <h1 className="text-dark-blue font-bold text-4xl">Existing Deals</h1>
            <div className="flex flex-row max-md:flex-col flex-wrap justify-center items-start gap-5">
                {sortedDeals.map(deal => (
                    <Link
                        to={`/dashboard/${deal.id}`}
                        key={deal.id}
                        className="flex flex-col justify-start items-start w-72 max-lg:w-64 gap-2 rounded-xl border border-mansa-blue hover:border-dark-blue"
                        onClick={() => localStorage.setItem('currentDealId', deal.id)}
                    >
                        <h2 className="font-bold text-2xl text-white text-nowrap bg-mansa-blue w-full px-5 py-5 rounded-t-xl">{deal.deal_name}</h2>
                        {/* <p className="text-dark-blue text-base font-semibold text-wrap">23 contacts created</p> */}
                        <p className="text-dark-blue text-base px-5">
                            <span className="font-semibold">Deadline: </span>
                            {deal.dead_line ? new Date(deal.dead_line).toLocaleString() : 'No deadline set'}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    )
}
