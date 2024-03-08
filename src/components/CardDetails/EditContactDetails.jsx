import { useRef } from 'react';
import api from "../api";
import { useState } from "react";
import { X } from 'lucide-react'; 
import { Button, DateForm, DropDown, FormInput, FormInputRequired, FormNotes, TimeForm } from "../Reusables";

function EditContactDetails({ onClose, contactDetails }) {
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const modalRef = useRef();

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    }

    const handleInput = (e) => {
        if (e && e.target) {
            const { name, value } = e.target;
            setFormValue((prevFormValue) => ({ ...prevFormValue, [name]: value }));
        }
    }

    const formatDateTime = (isoDate) => {
        if (!isoDate) return '';
        const date = new Date(isoDate);
        const formattedDate = date.toISOString().slice(0, 16); // Format "yyyy-MM-ddThh:mm"
        return formattedDate;
    };

    // console.log(contactDetails);
    // Interaction with API post request
    const [formValue, setFormValue] = useState({
        title: contactDetails.title,
        first_name: contactDetails.first_name,
        last_name: contactDetails.last_name,
        organization_name: contactDetails.organization_name,
        deal_size: contactDetails.deal_size,
        email: contactDetails.email,
        phone_number: contactDetails.phone_number,
        stage: contactDetails.stage,
        datetime: formatDateTime(contactDetails.meeting_date),
        notes: contactDetails.notes
    })

    let meetingDate;

    if (formValue.datetime) {
        meetingDate = new Date(formValue.datetime).toISOString();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const currentDealId = localStorage.getItem('currentDealId');
        if (!currentDealId) {
            console.error('Deal ID not found in localStorage');
            return;
        }

        const user = localStorage.getItem('user');
        const userData = {
            userId: user.id,
            title: formValue.title,
            first_name: formValue.first_name,
            last_name: formValue.last_name,
            organization_name: formValue.organization_name,
            deal_size: formValue.deal_size,
            email: formValue.email,
            phone_number: formValue.phone_number,
            stage: formValue.stage,
            meeting_date: meetingDate,
            notes: formValue.notes
        };

        try {
            await api.patch(`deals/edit-contact/${currentDealId}/${contactDetails.id}`, userData);
            setSuccessMessage('Contact updated successfully.');
            setErrorMessage('');
            setTimeout(() => {
                setIsSubmitting(false);
                setSuccessMessage('');
                onClose();
                window.location.reload();
            }, 2000);
        } catch (error) {
            console.log(error);
            setErrorMessage("Something went wrong. Please try again.");
            setSuccessMessage('');
            setIsSubmitting(false);
        }
    };

    return (
        <div ref={modalRef} onClick={closeModal} className="fixed z-50 inset-0 bg-dark-blue bg-opacity-30 backdrop-blur-sm flex justify-center overflow-y-auto h-screen">
            <div className=' mt-10 flex flex-col gap-5'>
                <button onClick={onClose} className='mr-20 self-end text-dark-blue'><X size={30} /></button>
                <div className='bg-white rounded-xl px-20 py-10 flex flex-col gap-7 items-center mx-20'>
                    <h1 className='text-dark-blue text-3xl font-extrabold'>Edit Contact Details</h1>
                    <form action="" onSubmit={handleSubmit} className='flex flex-col gap-5'>
                        {successMessage && <p className="text-mansa-blue font-semibold">{successMessage}</p>}
                        {errorMessage && <p className="text-[#ff0000] font-semibold">{errorMessage}</p>}
                        <div className='flex flex-row items-center justify-center flex-wrap gap-5 w-full'>
                            <FormInput type="text" title="Title" placeholder="Mr./Mrs./Ms./Dr./Engr." id="title" value={formValue.title} onChange={handleInput} />
                            <FormInput type="text" title="First Name" placeholder="Sundi" id="first_name" value={formValue.first_name} onChange={handleInput} />
                            <FormInput type="text" title="Last Name" placeholder="Keita" id="last_name" value={formValue.last_name} onChange={handleInput} />
                            <FormInput type="text" title="Company" placeholder="Mansa, LLC" id="organization_name" value={formValue.organization_name} onChange={handleInput} />
                            <FormInput type="number" title="Deal Size ($)" placeholder="1,000,000" id="deal_size" value={formValue.deal_size} onChange={handleInput} />
                            <FormInput type="email" title="Contact Email" placeholder="sundi@sankore.com" id="email" value={formValue.email} onChange={handleInput} />
                            <FormInput type="number" title="Phone Number" placeholder="+123456789" id="phone_number" value={formValue.phone_number} onChange={handleInput} />
                            <DropDown label="Current Stage" id="stage" value={formValue.stage} onChange={handleInput} />
                            <div className=''>
                                <DateForm title="Meeting Date" value={formValue.datetime} onChange={handleInput} />
                            </div>
                        </div>
                        <div>
                            <FormNotes value={formValue.notes} onChange={handleInput} />
                        </div>
                        <div className='mt-8 w-full flex items-center justify-center'>
                            <Button type='submit' disabled={isSubmitting} text="Update Contact" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditContactDetails;
