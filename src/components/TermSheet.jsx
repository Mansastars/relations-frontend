import api from "./api";
import { useEffect, useState } from 'react';

//Contact
export default function TermSheet({ borderColour }) {

    const BorderStyle = {
        border: `2px solid  ${borderColour}`,
      };

    const [termSheets, setTermSheets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchtermSheets = async () => {
            const currentDealId = localStorage.getItem('currentDealId');

            if (!currentDealId) {
                console.error('Deal ID not found in localStorage');
                return;
            }
            console.log(currentDealId)

            try {
                const response = await api.get(`deals/offer-contacts/${currentDealId}`);
                // Assuming response.data contains the array of deals
                setTermSheets(response.data.data);
                // Set loading to false to indicate that data loading is complete
                setLoading(false);
            } catch (error) {
                setError(error);
                // Set loading to false to indicate that data loading is complete
                setLoading(false);
            }
        };

        fetchtermSheets();
    }, []);

    console.log('Type of offer contacts:', typeof termSheets);

    if (loading) {
        return <div>Loading...</div>;
      }
    
    // Render error state if an error occurred during data fetching
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            {termSheets.length === 0 ? (
            <div>No contact data available</div>
            ) : (
            termSheets.map(termSheet => (
                <div key={termSheet.id} className="flex flex-col rounded-2xl max-w-34 mb-2 h-40" style={BorderStyle}>
                <div className="flex flex-col p-2 rounded-t-2xl border-b-dark-blue items-start" style={{ background: borderColour }}>
                    <p className="font-extrabold text-sm">{termSheet.first_name}</p>
                    <p className="text-sm">{termSheet.organization_name}</p>
                </div>
                <div className="flex flex-col gap-1 p-2 items-start bg-light-grey rounded-2xl">
                    <div>
                    <p className="text-xs font-semibold">{termSheet.meeting_date}</p>
                    <p className="text-xs">{termSheet.email}</p>
                    </div>
                    <div className="flex flex-col justify-center items-start">
                    <p className="text-xs text-wrap">{termSheet.notes}</p>
                    </div>
                </div>
                </div>
            ))
            )}
      </>
    )
}

export function getTermSheetLength(termSheets) {
    return termSheets.length;
}
