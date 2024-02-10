import api from "./api";
import { useEffect, useState } from 'react';

//Contact
export default function Contact({ borderColour }) {

    const BorderStyle = {
        border: `2px solid  ${borderColour}`,
      };

    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchContacts = async () => {
            const currentDealId = localStorage.getItem('currentDealId');

            if (!currentDealId) {
                console.error('Deal ID not found in localStorage');
                return;
            }
            console.log(currentDealId)

            try {
                const response = await api.get(`deals/contacted-contacts/${currentDealId}`);
                // Assuming response.data contains the array of deals
                setContacts(response.data.data);
                // Set loading to false to indicate that data loading is complete
                setLoading(false);
            } catch (error) {
                setError(error);
                // Set loading to false to indicate that data loading is complete
                setLoading(false);
            }
        };

        fetchContacts();
    }, []);

    console.log('Type of contacts:', typeof contacts);

    if (loading) {
        return <div>Loading...</div>;
      }
    
    // Render error state if an error occurred during data fetching
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            {contacts.length === 0 ? (
            <div></div>
            ) : (
            contacts.map(contact => (
                <div key={contact.id} className="flex flex-col rounded-2xl max-w-34 mb-2 h-40" style={{...BorderStyle, minWidth: '150px'}}>
                <div className="flex flex-col p-2 rounded-t-2xl border-b-dark-blue items-start" style={{ background: borderColour }}>
                    <p className="font-extrabold text-sm">{contact.first_name} {contact.last_name}</p>
                    <p className="text-sm">{contact.organization_name}</p>
                </div>
                <div className="flex flex-col gap-1 p-2 items-start bg-light-grey rounded-2xl">
                    <div>
                    <p className="text-xs font-semibold">
                        {contact.meeting_date ? new Date(contact.meeting_date).toLocaleDateString() : ''}
                    </p>
                    {/* <p className="text-xs font-semibold">{contact.meeting_date}</p> */}
                    <p className="text-xs font-semibold">
                        Meeting: {contact.meeting_date ? new Date(contact.meeting_date).toLocaleString() : ''}
                    </p>
                    <p className="text-xs">{contact.email}</p>
                    </div>
                    <div className="flex flex-col justify-center items-start">
                    <p className="text-xs text-wrap">{contact.notes}</p>
                    </div>
                </div>
                </div>
            ))
            )}
      </>
    )
}
