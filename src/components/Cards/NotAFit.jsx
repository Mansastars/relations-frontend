import api from "../api";
import { useEffect, useState } from 'react';
import { X, XCircleIcon } from "lucide-react";
import Swal from 'sweetalert2';
import {Oval} from 'react-loader-spinner';
import EditContactDetails from "../CardDetails/EditContactDetails";
import addCommasToNumber from "../ReusableComponents/AddCommastoNum";

//Contact
export default function NotAFit({ borderColour }) {
    const currentDealId = localStorage.getItem('currentDealId');

    const BorderStyle = {
        border: `2px solid  ${borderColour}`,
      };

    const [notAFits, setnotAFits] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [contactDetails, setContactDetails] = useState(null);

    useEffect(() => {
        const fetchNotAFits = async () => {
            const currentDealId = localStorage.getItem('currentDealId');

            if (!currentDealId) {
                console.error('Deal ID not found in localStorage');
                return;
            }

            try {
                const response = await api.get(`deals/rejection-contacts/${currentDealId}`);
                // Assuming response.data contains the array of deals
                setnotAFits(response.data.data);
                // Set loading to false to indicate that data loading is complete
                setLoading(false);
            } catch (error) {
                setError(error);
                // Set loading to false to indicate that data loading is complete
                setLoading(false);
            }
        };

        fetchNotAFits();
    }, []);

    // console.log('Type of NotAFit:', typeof notAFits);

    if (loading) {
        return (
            <div className="flex justify-center items-center">
              <Oval
                visible={true}
                height={20}
                width={20}
                color="#32384b"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </div>
        );
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
                    // Remove the deleted not a fit from the state
                    setnotAFits(notAFits.filter(notAFit => notAFit.id !== id));
                    Swal.fire('Deleted!', 'Your contact entry has been deleted.', 'success');
                } catch (error) {
                    console.error('Error:', error);
                    Swal.fire('Error', 'Failed to delete contact', 'error');
                }
            }
        });
    };

    // Edit a contact
    const handleEdit = async (id) => {
        try {
            const response = await api.get(`contacts/single-contact/${currentDealId}/${id}`);
            const contactDetails = response.data.contact; // Assuming response.data contains the deal details
            setContactDetails(contactDetails)
            setShowEditModal(true);
        } catch (error) {
            console.error('Error fetching contact details:', error);
        }
    };

    const handleCloseEditModal = () => {
        setShowEditModal(false);
        setContactDetails(null);
    };

    // Truncate email address
    const truncateEmail = (email, maxLength) => {
        if (email.length <= maxLength) return email;

        return `${email.substring(0, maxLength - 3)}...`;
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
            {notAFits.length === 0 || undefined ? (
            <div></div>
            ) : (
            notAFits.map(notAFit => (
                <div key={notAFit.id} onDoubleClick={() => handleEdit(notAFit.id)} title="Double click to edit contact" className="flex flex-col rounded-2xl mb-2 h-44 cursor-pointer" style={{...BorderStyle, minWidth: '165px'}}>
                <div className="flex flex-col p-2 rounded-t-2xl border-b-dark-blue items-start" style={{ background: borderColour }}>
                    <div className="flex justify-between w-full">
                        <p className="font-extrabold text-sm text-white">
                            {`${notAFit.title} ${notAFit.first_name} ${notAFit.last_name}`.length > 13 ? `${notAFit.title} ${notAFit.first_name} ${notAFit.last_name}`.substring(0, 10) + '...' : `${notAFit.title} ${notAFit.first_name} ${notAFit.last_name}`}
                        </p>
                        <button onClick={() => handleDelete(notAFit.id)} className="text-white cursor-pointer">
                            <XCircleIcon className="h-4 w-4" />
                        </button>
                    </div>
                    <p className="text-sm text-white">
                        {notAFit.organization_name ? (notAFit.organization_name.length > 15 ? notAFit.organization_name.substring(0, 15) + '...' : notAFit.organization_name) : 'No company entered'}
                    </p>
                </div>
                <div className="flex flex-col gap-1 p-2 items-start bg-light-grey rounded-2xl">
                    <div>
                        <p className="text-xs font-semibold">
                            Deal Size: {notAFit.deal_size ? (notAFit.deal_size.length > 15 ? '$' + addCommasToNumber(notAFit.deal_size.substring(0, 15)) + '...' : '$' + addCommasToNumber(notAFit.deal_size)) : '$0'}
                        </p>
                        <p className="text-xs font-semibold">
                            Meeting: {notAFit.meeting_date ? new Date(notAFit.meeting_date).toLocaleString() : 'No meeting date entered'}
                        </p>
                        <p className="text-xs">
                            {notAFit.email ? truncateEmail(notAFit.email, 20) : 'No email entered'}
                        </p>
                        <p className="text-xs">
                            {notAFit.phone_number ? (truncatePhoneNumber(notAFit.phone_number, 15)) : 'No phone number entered'}
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-start">
                        <p className="text-xs text-wrap">{notAFit.notes.length > 20 ? notAFit.notes.substring(0, 20) + '...' : notAFit.notes}</p>
                    </div>
                </div>
                </div>
            ))
            )}

            {showEditModal && contactDetails && (
                <EditContactDetails
                    onClose={handleCloseEditModal}
                    contactDetails={contactDetails}
                />
            )}
      </>
    )
}
