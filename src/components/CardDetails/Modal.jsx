// Pop-up Modal
import { X } from 'lucide-react';
import { Button, DateForm, DropDown, FormInput, FormInputRequired, FormNotes } from "../Reusables"
import { useRef } from 'react';
import api from "../api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Modal({onClose}) {
    const modalRef = useRef();

    const closeModal = (e) => {
        if(modalRef.current === e.target) {
            onClose();
        }
    }

    // Interaction with API post request
    // linkedin_url:'', profile_url:''
    const [formValue, setFormValue] = useState({ title:'', firstName:'', lastName:'', company: '', dealSize:0, email:'', phoneNumber:'', notes:'', currentStage:'', datetime:'',})
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInput = (e) => {
        if (e && e.target) {
            const { name, value } = e.target;
            setFormValue((prevFormValue) => ({ ...prevFormValue, [name]: value }));
        }
    }   

    const handleSubmit = async (e) => {
        e.preventDefault();

        const currentDealId = localStorage.getItem('currentDealId');
        if (!currentDealId) {
            console.error('Deal ID not found in localStorage');
            return;
        }

        let meetingDate;

        if (formValue.datetime) {
            meetingDate = new Date(formValue.datetime).toISOString();
        }

        const userData = {
            deal_id: currentDealId,
            title: formValue.title,
            first_name: formValue.firstName,
            last_name: formValue.lastName,
            organization_name: formValue.company,
            deal_size: formValue.dealSize,
            email: formValue.email,
            phone_number: formValue.phoneNumber,
            stage: formValue.currentStage,
            meeting_date: meetingDate,
            notes: formValue.notes,
            // linkedin_url: formValue.linkedin_url,
            // profile_pic: formValue.profile_url,
        };
    
        try {
            const response = await api.post(`/deals/create-contact/${currentDealId}`, userData);
            console.log(response);
            setSuccessMessage('Contact created successfully.');
            window.location.reload();
            setErrorMessage('');
            // linkedin_url:'', profile_url:''
            setFormValue({ title:'', firstName:'', lastName:'', company: '', dealSize:0, email:'', phoneNumber:'', notes:'', currentStage:'', datetime:'', });
            // Close the modal after a delay (e.g., 2 seconds)
            setTimeout(() => {
                setIsSubmitting(false);
                setSuccessMessage('');
                onClose();
                // Close the modal (you need to implement modal closing logic here)
            }, 2000);
        } catch (error) {
            console.log(error);
            setErrorMessage("Something went wrong. Please try again."); // set error message
            // window.scrollTo(0, 0); //scroll to the top of the page
            setSuccessMessage('');
            setIsSubmitting(false);
        }
    };

    return (
      <div ref={modalRef} onClick={closeModal} className=" fixed z-50 inset-0 bg-dark-blue bg-opacity-30 backdrop-blur-sm flex justify-center overflow-y-auto h-screen">
        <div className=' mt-10 flex flex-col gap-5 w-full'>
            <button onClick={onClose} className=' mr-20 max-sm:mr-10 self-end text-dark-blue'><X size={30}/></button>
            <div className=' bg-white rounded-xl px-20 max-md:px-5 py-10 flex flex-col gap-7 items-center mx-20 max-md:mx-10'>
                <h1 className=' text-dark-blue text-3xl max-md:text-2xl max-sm:text-xl font-extrabold'>Add a new contact to your pipeline</h1>
                <form action="" onSubmit={handleSubmit} className=' flex flex-col gap-5 w-full'>
                    {successMessage && <p className=" text-mansa-blue font-semibold">{successMessage}</p>}
                    {errorMessage && <p className=" text-[#ff0000] font-semibold">{errorMessage}</p>}
                    <div className='flex flex-col gap-8 w-full'>
                        <div className=' flex flex-row flex-wrap gap-5 justify-center max-md:justify-start'>
                            <FormInput type="text" title="Title" placeholder="Mr./Mrs./Ms./Dr./Engr." id="title" value={formValue.title} onChange={handleInput} />
                            <FormInputRequired type="text" title="First Name*" placeholder="Sundi" id="firstName" value={formValue.firstName} onChange={handleInput} />
                            <FormInputRequired type="text" title="Last Name*" placeholder="Keita" id="lastName" value={formValue.lastName} onChange={handleInput} />
                        </div>
                       <div className=' flex flex-row flex-wrap gap-x-5 gap-y-8 justify-center max-md:justify-start'>
                            <FormInput type="text" title="Company" placeholder="Mansa, LLC" id="company" value={formValue.company} onChange={handleInput} />
                            <FormInput type="number" title="Deal Size ($)" placeholder="1,000,000" id="dealSize" min={0} value={formValue.dealSize} onChange={handleInput} />
                            <FormInput type="email" title="Contact Email" placeholder="sundi@sankore.com" id="email" value={formValue.email} onChange={handleInput} />
                            <FormInput type='tel' title="Phone Number" placeholder="+123456789" id="phoneNumber" maxLength={15} value={formValue.phoneNumber} onChange={handleInput} />
                            <DropDown label="Current Stage" id="currentStage" value={formValue.currentStage} onChange={handleInput} />
                            <DateForm title="Meeting Date" value={formValue.datetime} onChange={handleInput} />
                            {/* <FormInput type="url" title="Profile Image URL" placeholder="https://" id="profile_url" value={formValue.profile_url} onChange={handleInput} />
                            <FormInput type="url" title="LinkedIn URL" placeholder="https://www.linkedin.com/in/..." id="linkedin_url" value={formValue.linkedin_url} onChange={handleInput} /> */}
                       </div>
                       <div>
                            <FormNotes value={formValue.notes} onChange={handleInput} />
                        </div>
                    </div>
                    
                    <div className=' mt-8 w-full flex items-center justify-center'>
                        <Button type='submit' disabled={isSubmitting} text="Create Contact" />
                    </div>
                </form>
            </div>
        </div>
      </div>
    )
}
  
export default Modal;