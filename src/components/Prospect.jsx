import api from "./api";
import { useEffect, useState } from 'react';

// Contact
export default function Prospect({ borderColour }) {

    const BorderStyle = {
        border: `2px solid  ${borderColour}`,
    };

    const [prospects, setProspects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProspects = async () => {
            const currentDealId = localStorage.getItem('currentDealId');

            if (!currentDealId) {
                console.error('Deal ID not found in localStorage');
                return;
            }

            try {
                const response = await api.get(`deals/prospect-contacts/${currentDealId}`);
                // Assuming response.data contains the array of deals
                setProspects(response.data.data);
                // Set loading to false to indicate that data loading is complete
                setLoading(false);
            } catch (error) {
                setError(error);
                // Set loading to false to indicate that data loading is complete
                setLoading(false);
            }
        };

        fetchProspects();
    }, []);

    console.log('Type of prospects:', typeof prospects);

    if (loading) {
        return <div>Loading...</div>;
    }
    
    // Render error state if an error occurred during data fetching
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            {prospects.length === 0 ? (
                <div>No prospect data available</div>
            ) : (
                prospects.map(prospect => (
                    <div key={prospect.id} className="flex flex-col rounded-2xl max-w-34 mb-2 h-40" style={BorderStyle}>
                        <div className="flex flex-col p-2 rounded-t-2xl border-b-dark-blue items-start" style={{ background: borderColour }}>
                            <p className="font-extrabold text-sm">{prospect.first_name}</p>
                            <p className="text-sm">{prospect.organization_name}</p>
                        </div>
                        <div className="flex flex-col gap-1 p-2 items-start bg-light-grey rounded-2xl">
                            <div>
                                <p className="text-xs font-semibold">{prospect.meeting_date}</p>
                                <p className="text-xs">{prospect.email}</p>
                            </div>
                            <div className="flex flex-col justify-center items-start">
                                <p className="text-xs text-wrap">{prospect.notes}</p>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </>
    )
}

export function getProspectsLength(prospects) {
    return prospects.length;
}
