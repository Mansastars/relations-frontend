import api from "./api";
import { useEffect, useState } from 'react';
import classNames from "classnames";

//Contact
export default function FollowUp({ borderColour, titleColors }) {

    const BorderStyle = {
        border: `2px solid  ${borderColour}`,
      };

      const ColumnClasses = classNames(
        'shadow-lg',
        'rounded-2xl',
        'w-full',
        // 'relative',
    );

    const TitleStyle = {
        color: titleColors,
      };

      const ColumnStyle = {
        backgroundColor: 'rgb(255, 255, 255)',
    };

    const [followUps, setFollowUps] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFollowUps = async () => {
            const currentDealId = localStorage.getItem('currentDealId');

            if (!currentDealId) {
                console.error('Deal ID not found in localStorage');
                return;
            }
            console.log(currentDealId)

            try {
                const response = await api.get(`deals/followup-contacts/${currentDealId}`);
                // Assuming response.data contains the array of deals
                setFollowUps(response.data.data);
                // Set loading to false to indicate that data loading is complete
                setLoading(false);
            } catch (error) {
                setError(error);
                // Set loading to false to indicate that data loading is complete
                setLoading(false);
            }
        };

        fetchFollowUps();
    }, []);

    console.log('Type of followup:', typeof followUps);

    if (loading) {
        return <div>Loading...</div>;
      }
    
    // Render error state if an error occurred during data fetching
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            {followUps.length > 0 && followUps.length !== undefined? (
                <div className=" flex flex-col gap-5 items-center">
                    <div className={ColumnClasses} style={ ColumnStyle }>
                        <div className="font-bold text-xl p-5 text-center min-w-40" style={TitleStyle}>Follow-up</div>
                    </div>
                    <div style={{overflowY: 'auto', maxHeight: 'calc(100vh - 100px)'}}>
                        {
                            followUps.map(followUp => (
                                <div key={followUp.id} className="flex flex-col rounded-2xl max-w-34 mb-2 h-40" style={{...BorderStyle, minWidth: '150px'}}>
                                <div className="flex flex-col p-2 rounded-t-2xl border-b-dark-blue items-start" style={{ background: borderColour }}>
                                    <p className="font-extrabold text-sm">{followUp.first_name} {followUp.last_name}</p>
                                    <p className="text-sm">{followUp.organization_name}</p>
                                </div>
                                <div className="flex flex-col gap-1 p-2 items-start bg-light-grey rounded-2xl">
                                    <div>
                                    <p className="text-xs font-semibold">
                                        {followUp.meeting_date ? new Date(followUp.meeting_date).toLocaleString() : ''}
                                    </p>
                                    {/* <p className="text-xs font-semibold">{followUp.meeting_date}</p> */}
                                    <p className="text-xs">{followUp.email}</p>
                                    </div>
                                    <div className="flex flex-col justify-center items-start">
                                    <p className="text-xs text-wrap">{followUp.notes}</p>
                                    </div>
                                </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            ) : (
                null
            )}
      </>
    )
}

export function getfollowUpsLength(followUps) {
    return followUps ? followUps.length : 0;
}
