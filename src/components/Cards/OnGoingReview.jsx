import api from "../api";
import { useEffect, useState } from 'react';
import classNames from "classnames";
import { X, XCircleIcon } from "lucide-react";
import Swal from 'sweetalert2';
import {Oval} from 'react-loader-spinner';
import EditContactDetails from "../CardDetails/EditContactDetails";
import addCommasToNumber from "../ReusableComponents/AddCommastoNum";

//Contact
export default function OnGoingReview({ borderColour, titleColors }) {
    const pathNameDealId = window.location.pathname.split('/').at(-1);
    const currentDealId = localStorage.getItem('currentDealId') || pathNameDealId;

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

    const [OnGoingReviews, setOnGoingReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [contactDetails, setContactDetails] = useState(null);

    useEffect(() => {
        const fetchOnGoingReviews = async () => {
            const currentDealId = localStorage.getItem('currentDealId') || pathNameDealId;

            if (!currentDealId) {
                console.error('Deal ID not found in localStorage');
                return;
            }

            try {
                const response = await api.get(`deals/review-contacts/${currentDealId}`);
                // Assuming response.data contains the array of deals
                setOnGoingReviews(response.data.data);
                // Set loading to false to indicate that data loading is complete
                setLoading(false);
            } catch (error) {
                setError(error);
                // Set loading to false to indicate that data loading is complete
                setLoading(false);
            }
        };

        fetchOnGoingReviews();
    }, []);

    // console.log('Type of OnGoingReview:', typeof OnGoingReview);

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
                    // Remove the deleted OnGoingReview from the state
                    setOnGoingReviews(OnGoingReviews.filter(OnGoingReview => OnGoingReview.id !== id));
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

        return `${email.substring(0, maxLength - 3)}...`;
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
            {OnGoingReviews.length > 0 ? (
                <div className=" flex flex-col gap-5 items-center">
                <div className={ColumnClasses} style={ ColumnStyle }>
                    <div className="font-bold text-xl p-5 text-center" style={TitleStyle}>Review</div>
                </div>
                <div style={{overflowY: 'auto', maxHeight: 'calc(100vh - 100px)'}}>
                    {
                        OnGoingReviews.map(OnGoingReview => (
                            <div key={OnGoingReview.id} title="Double click to edit contact" onDoubleClick={() => handleEdit(OnGoingReview.id)} className="flex flex-col rounded-2xl mb-2 h-44 cursor-pointer " style={{...BorderStyle, minWidth: '165px'}}>
                            <div className="flex flex-col p-2 rounded-t-2xl border-b-dark-blue items-start" style={{ background: borderColour }}>
                                <div className="flex justify-between w-full">
                                    <p className="font-extrabold text-sm text-white">
                                        {`${OnGoingReview.first_name} ${OnGoingReview.last_name}`.length > 13 ? `${OnGoingReview.first_name} ${OnGoingReview.last_name}`.substring(0, 10) + '...' : `${OnGoingReview.first_name} ${OnGoingReview.last_name}`}
                                    </p>
                                    <button onClick={() => handleDelete(OnGoingReview.id)} className="text-white hover:text-[#FF0000] cursor-pointer">
                                        <XCircleIcon className="h-4 w-4" />
                                    </button>
                                </div>
                                <p className="text-sm text-white">
                                    {OnGoingReview.organization_name ? (OnGoingReview.organization_name.length > 15 ? OnGoingReview.organization_name.substring(0, 15) + '...' : OnGoingReview.organization_name) : 'No company entered'}
                                </p>
                            </div>
                            <div className="flex flex-col gap-1 p-2 items-start bg-light-grey rounded-2xl">
                                <div>
                                <p className="text-xs font-semibold">
                                    Deal Size: {OnGoingReview.deal_size ? (OnGoingReview.deal_size.length > 15 ? '$' + addCommasToNumber(OnGoingReview.deal_size.substring(0, 15)) + '...' : '$' + addCommasToNumber(OnGoingReview.deal_size)) : '$0'}
                                </p>
                                    <p className="text-xs font-semibold">
                                        Meeting: {OnGoingReview.meeting_date ? new Date(OnGoingReview.meeting_date).toLocaleString() : 'No meeting date entered'}
                                    </p>
                                    <p className="text-xs">
                                        {OnGoingReview.email ? truncateEmail(OnGoingReview.email, 20) : 'No email entered'}
                                    </p>
                                    <p className="text-xs">
                                        {OnGoingReview.phone_number ? (truncatePhoneNumber(OnGoingReview.phone_number, 15)) : 'No phone number entered'}
                                    </p>
                                </div>
                                <div className="flex flex-col justify-center items-start">
                                    <p className="text-xs text-wrap">{OnGoingReview.notes.length > 20 ? OnGoingReview.notes.substring(0, 20) + '...' : OnGoingReview.notes}</p>
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

export function getOnGoingReviewsLength(OnGoingReviews) {
    return OnGoingReviews ? OnGoingReviews.length : 0;
}
