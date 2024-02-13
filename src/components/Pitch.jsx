import api from "./api";
import { useEffect, useState } from 'react';

// Research
export default function Pitch({ borderColour }) {

    const BorderStyle = {
        border: `2px solid  ${borderColour}`,
      };

    const [pitches, setPitches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPitches = async () => {
            const currentDealId = localStorage.getItem('currentDealId');

            if (!currentDealId) {
                console.error('Deal ID not found in localStorage');
                return;
            }
            console.log(currentDealId)

            try {
                const response = await api.get(`deals/pitch-contacts/${currentDealId}`);
                // Assuming response.data contains the array of deals
                setPitches(response.data.data);
                // Set loading to false to indicate that data loading is complete
                setLoading(false);
            } catch (error) {
                setError(error);
                // Set loading to false to indicate that data loading is complete
                setLoading(false);
            }
        };

        fetchPitches();
    }, []);

    console.log('Type of pitch:', typeof pitches);

    if (loading) {
        return <div>Loading...</div>;
      }
    
    // Render error state if an error occurred during data fetching
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            {pitches.length === 0 || undefined ? (
            <div></div>
            ) : (
            pitches.map(pitch => (
                <div key={pitch.id} className="flex flex-col rounded-2xl max-w-34 mb-2 h-40" style={{...BorderStyle, minWidth: '150px'}}>
                <div className="flex flex-col p-2 rounded-t-2xl border-b-dark-blue items-start" style={{ background: borderColour }}>
                    <p className="font-extrabold text-sm">{pitch.first_name} {pitch.last_name}</p>
                    <p className="text-sm">{pitch.organization_name}</p>
                </div>
                <div className="flex flex-col gap-1 p-2 items-start bg-light-grey rounded-2xl">
                    <div>
                    {/* <p className="text-xs font-semibold">{pitch.meeting_date}</p> */}
                    <p className="text-xs font-semibold">
                        {pitch.meeting_date ? new Date(pitch.meeting_date).toLocaleString() : ''}
                    </p>
                    <p className="text-xs">{pitch.email}</p>
                    </div>
                    <div className="flex flex-col justify-center items-start">
                    <p className="text-xs text-wrap">{pitch.notes}</p>
                    </div>
                </div>
                </div>
            ))
            )}
      </>
    )
}
