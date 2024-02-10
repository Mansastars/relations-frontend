import api from "./api";
import { useEffect, useState } from 'react';

//Contact
export default function Deals({ borderColour }) {

    const BorderStyle = {
        border: `2px solid  ${borderColour}`,
      };

    const [deals, setDeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDeals = async () => {
            const currentDealId = localStorage.getItem('currentDealId');

            if (!currentDealId) {
                console.error('Deal ID not found in localStorage');
                return;
            }
            console.log(currentDealId)

            try {
                const response = await api.get(`deals/deal-contacts/${currentDealId}`);
                // Assuming response.data contains the array of deals
                setDeals(response.data.data);
                // Set loading to false to indicate that data loading is complete
                setLoading(false);
            } catch (error) {
                setError(error);
                // Set loading to false to indicate that data loading is complete
                setLoading(false);
            }
        };

        fetchDeals();
    }, []);

    console.log('Type of deals:', typeof deals);

    if (loading) {
        return <div>Loading...</div>;
      }
    
    // Render error state if an error occurred during data fetching
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            {deals.length === 0 ? (
            <div></div>
            ) : (
            deals.map(deal => (
                <div key={deal.id} className="flex flex-col rounded-2xl max-w-34 mb-2 h-40" style={{...BorderStyle, minWidth: '150px'}}>
                <div className="flex flex-col p-2 rounded-t-2xl border-b-dark-blue items-start" style={{ background: borderColour }}>
                    <p className="font-extrabold text-sm">{deal.first_name} {deal.last_name}</p>
                    <p className="text-sm">{deal.organization_name}</p>
                </div>
                <div className="flex flex-col gap-1 p-2 items-start bg-light-grey rounded-2xl">
                    <div>
                    <p className="text-xs font-semibold">
                        {deal.meeting_date ? new Date(deal.meeting_date).toLocaleDateString() : ''}
                    </p>
                    {/* <p className="text-xs font-semibold">{deal.meeting_date}</p> */}
                    <p className="text-xs font-semibold">
                        Meeting: {deal.meeting_date ? new Date(deal.meeting_date).toLocaleString() : ''}
                    </p>
                    <p className="text-xs">{deal.email}</p>
                    </div>
                    <div className="flex flex-col justify-center items-start">
                    <p className="text-xs text-wrap">{deal.notes}</p>
                    </div>
                </div>
                </div>
            ))
            )}
      </>
    )
}
