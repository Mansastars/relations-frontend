import api from "../api";
import { useEffect, useState } from 'react';
import classNames from "classnames";
import { X, XCircleIcon } from "lucide-react";
import Swal from "sweetalert2";
import {Oval} from 'react-loader-spinner';
import EditContactDetails from "../CardDetails/EditContactDetails";

//Contact
export default function Partner({ borderColour, titleColors }) {
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

    const [partners, setPartners] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [contactDetails, setContactDetails] = useState(null);

    useEffect(() => {
        const fetchPartners = async () => {
            const currentDealId = localStorage.getItem('currentDealId');

            if (!currentDealId) {
                console.error('Deal ID not found in localStorage');
                return;
            }

            try {
                const response = await api.get(`deals/partner-contacts/${currentDealId}`);
                // Assuming response.data contains the array of deals
                setPartners(response.data.data);
                // Set loading to false to indicate that data loading is complete
                setLoading(false);
            } catch (error) {
                setError(error);
                // Set loading to false to indicate that data loading is complete
                setLoading(false);
            }
        };

        fetchPartners();
    }, []);

    // console.log('Type of partners:', typeof partners);

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
                    // Remove the deleted partner from the state
                    setPartners(partners.filter(partner => partner.id !== id));
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
            {partners.length > 0 ? (
                <div className=" flex flex-col gap-5 items-center">
                    <div className={ColumnClasses} style={ ColumnStyle }>
                        <div className="font-bold text-xl p-5 text-center" style={TitleStyle}>Partner</div>
                    </div>
                    <div style={{overflowY: 'auto', maxHeight: 'calc(100vh - 100px)'}}>
                    {
                        partners.map(partner => (
                            <div key={partner.id} onDoubleClick={() => handleEdit(partner.id)} className="flex flex-col rounded-2xl mb-2 h-40 cursor-pointer" style={{...BorderStyle, minWidth: '165px'}}>
                            <div className="flex flex-col p-2 rounded-t-2xl border-b-dark-blue items-start" style={{ background: borderColour }}>
                                <div className="flex justify-between w-full">
                                    <p className="font-extrabold text-sm text-white">
                                        {`${partner.title} ${partner.first_name} ${partner.last_name}`.length > 11 ? `${partner.title} ${partner.first_name} ${partner.last_name}`.substring(0, 13) + '...' : `${partner.title} ${partner.first_name} ${partner.last_name}`}
                                    </p>
                                    <button onClick={() => handleDelete(partner.id)} className="text-white hover:text-[#FF0000] cursor-pointer">
                                        <XCircleIcon className="h-4 w-4" />
                                    </button>
                                </div>
                                <p className="text-sm text-white">
                                    {partner.organization_name ? (partner.organization_name.length > 15 ? partner.organization_name.substring(0, 15) + '...' : partner.organization_name) : 'No company entered'}
                                </p>
                            </div>
                            <div className="flex flex-col gap-1 p-2 items-start bg-light-grey rounded-2xl">
                                <div>
                                    <p className="text-xs font-semibold">
                                        Meeting: {partner.meeting_date ? new Date(partner.meeting_date).toLocaleString() : 'No meeting date entered'}
                                    </p>
                                    <p className="text-xs">
                                        {partner.email ? truncateEmail(partner.email, 25) : 'No email entered'}
                                    </p>
                                    <p className="text-xs">
                                        {partner.phone_number ? (truncatePhoneNumber(partner.phone_number, 15)) : 'No phone number entered'}
                                    </p>
                                </div>
                                <div className="flex flex-col justify-center items-start">
                                    <p className="text-xs text-wrap">{partner.notes.length > 20 ? partner.notes.substring(0, 20) + '...' : partner.notes}</p>
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

            {showEditModal && contactDetails && (
                <EditContactDetails
                    onClose={handleCloseEditModal}
                    contactDetails={contactDetails}
                />
            )}
      </>
    )
}

export function getPartnerLength(partners) {
    return partners ? partners.length : 0;
}
