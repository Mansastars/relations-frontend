import api from "./api";
import { useEffect, useState } from 'react';

//Contact
export default function Negotiation({ borderColour }) {

    const BorderStyle = {
        border: `2px solid  ${borderColour}`,
      };

    const [negotiations, setNegotiations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNegotiation = async () => {
            const currentDealId = localStorage.getItem('currentDealId');

            if (!currentDealId) {
                console.error('Deal ID not found in localStorage');
                return;
            }
            console.log(currentDealId)

            try {
                const response = await api.get(`deals/negotiation-contacts/${currentDealId}`);
                // Assuming response.data contains the array of deals
                setNegotiations(response.data.data);
                // Set loading to false to indicate that data loading is complete
                setLoading(false);
            } catch (error) {
                setError(error);
                // Set loading to false to indicate that data loading is complete
                setLoading(false);
            }
        };

        fetchNegotiation();
    }, []);

    console.log('Type of negotiation:', typeof negotiations);

    if (loading) {
        return <div>Loading...</div>;
      }
    
    // Render error state if an error occurred during data fetching
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            {negotiations.length === 0 || undefined ? (
            <div></div>
            ) : (
            negotiations.map(negotiation => (
                <div key={negotiation.id} className="flex flex-col rounded-2xl max-w-34 mb-2 h-40" style={{...BorderStyle, minWidth: '150px'}}>
                <div className="flex flex-col p-2 rounded-t-2xl border-b-dark-blue items-start" style={{ background: borderColour }}>
                    <p className="font-extrabold text-sm">{negotiation.first_name} {negotiation.last_name}</p>
                    <p className="text-sm">{negotiation.organization_name}</p>
                </div>
                <div className="flex flex-col gap-1 p-2 items-start bg-light-grey rounded-2xl">
                    <div>
                    {/* <p className="text-xs font-semibold">{negotiation.meeting_date}</p> */}
                    <p className="text-xs font-semibold">
                        {negotiation.meeting_date ? new Date(negotiation.meeting_date).toLocaleString() : ''}
                    </p>
                    <p className="text-xs">{negotiation.email}</p>
                    </div>
                    <div className="flex flex-col justify-center items-start">
                    <p className="text-xs text-wrap">{negotiation.notes}</p>
                    </div>
                </div>
                </div>
            ))
            )}
      </>
    )
}
