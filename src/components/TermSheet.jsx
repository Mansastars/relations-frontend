import api from "./api";
import { useEffect, useState } from 'react';
import classNames from "classnames";
import { X, XCircleIcon } from "lucide-react";
import Swal from "sweetalert2";

//Contact
export default function TermSheet({ borderColour, titleColors }) {
    const currentDealId = localStorage.getItem('currentDealId');

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
        minWidth: '165px'
      };

      const ColumnStyle = {
        backgroundColor: 'rgb(255, 255, 255)',
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

    // Delete a card
    const handleDelete = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this contact entry!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it',
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    // YOUR_DELETE_ENDPOINT/${id}
                    await api.delete(`contacts/delete-contact/${currentDealId}/${id}`);
                    // Remove the deleted termSheet from the state
                    setTermSheets(termSheets.filter(termSheet => termSheet.id !== id));
                    Swal.fire('Deleted!', 'Your contact entry has been deleted.', 'success');
                } catch (error) {
                    console.error('Error:', error);
                    Swal.fire('Error', 'Failed to delete contact', 'error');
                }
            }
        });
    };

    // Truncate email address
    const truncateEmail = (email, maxLength) => {
        if (email.length <= maxLength) return email;

        const username = email.substring(0, email.lastIndexOf('@'));
        const domain = email.substring(email.lastIndexOf('@') + 1);

        if (username.length > maxLength - domain.length - 3) {
            return `${username.substring(0, maxLength - domain.length - 3)}...@${domain}`;
        } else {
            return `${username}@${domain}`;
        }
    };

    // Function to truncate phone number while ensuring inclusion of country code and '+' sign
    const truncatePhoneNumber = (phoneNumber, maxLength) => {
        // Remove all non-digit characters from the phone number
        const digitsOnly = phoneNumber.replace(/\D/g, '');

        // If the phone number is shorter than or equal to the maximum length, return it as is
        if (digitsOnly.length <= maxLength) return phoneNumber;

        // Truncate the phone number, preserving the country code and '+' sign
        const truncatedNumber = digitsOnly.substring(0, maxLength - 1) + '...';

        return '+' + truncatedNumber;
    };

    return (
        <>
            {termSheets.length > 0 ? (
                <div className=" flex flex-col gap-5 items-center">
                <div className={ColumnClasses} style={ ColumnStyle }>
                    <div className="font-bold text-xl p-5 text-center" style={TitleStyle}>Term Sheet</div>
                </div>
                <div style={{overflowY: 'auto', maxHeight: 'calc(100vh - 100px)'}}>
                    {
                        termSheets.map(termSheet => (
                            <div key={termSheet.id} className="flex flex-col rounded-2xl mb-2 h-40" style={{...BorderStyle, minWidth: '165px'}}>
                                <div className="flex flex-col p-2 rounded-t-2xl border-b-dark-blue items-start" style={{ background: borderColour }}>
                                    <div className="flex justify-between w-full">
                                        <p className="font-extrabold text-sm text-white">
                                            {`${termSheet.first_name} ${termSheet.last_name}`.length > 11 ? `${termSheet.first_name} ${termSheet.last_name}`.substring(0, 13) + '...' : `${termSheet.first_name} ${termSheet.last_name}`}
                                        </p>
                                        <button onClick={() => handleDelete(termSheet.id)} className="text-white hover:text-[#FF0000] cursor-pointer">
                                            <XCircleIcon className="h-4 w-4" />
                                        </button>
                                    </div>
                                    <p className="text-sm text-white">{termSheet.organization_name.length > 15 ? termSheet.organization_name.substring(0, 15) + '...' : termSheet.organization_name}</p>
                                </div>
                                <div className="flex flex-col gap-1 p-2 items-start bg-light-grey rounded-2xl">
                                    <div>
                                        <p className="text-xs font-semibold">
                                            Meeting: {termSheet.meeting_date ? new Date(termSheet.meeting_date).toLocaleString() : ''}
                                        </p>
                                        <p className="text-xs">
                                            {truncateEmail(termSheet.email, 25)}
                                        </p>
                                        <p className="text-xs">{truncatePhoneNumber(termSheet.phone_number, 15)}</p>
                                    </div>
                                    <div className="flex flex-col justify-center items-start">
                                        <p className="text-xs text-wrap">{termSheet.notes.length > 20 ? termSheet.notes.substring(0, 20) + '...' : termSheet.notes}</p>
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
