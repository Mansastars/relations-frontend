// Pop-up MoveContactModal
import { X } from 'lucide-react';
import { Button, DropDown, FormInput, FormInputRequired, FormNotes } from "./Reusables"
import { useRef } from 'react';
import api from "./api";
import { useState, useEffect } from "react";

function MoveContactModal({onClose}) {
    const moveContactModalRef = useRef();

    const closeMoveContactModal = (e) => {
        if(moveContactModalRef.current === e.target) {
            onClose();
        }
    }

    const [formValue, setFormValue] = useState({firstName:'', lastName:'', moveContact:''})
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Interaction with API post request
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
    
        const userData = {
            first_name: formValue.firstName,
            last_name: formValue.lastName,
            stage: formValue.moveContact,
        };
    
        try {
            const response = await api.patch(`/deals/change-stage/${currentDealId}`, userData);
            console.log(response);
            setSuccessMessage('Contact moved successfully.');
            window.location.reload();
            setErrorMessage('');
            setFormValue({ firstName:'', lastName:'', moveContact:'' });
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
      <div ref={moveContactModalRef} onClick={closeMoveContactModal} className=" fixed z-50 inset-0 bg-dark-blue bg-opacity-30 backdrop-blur-sm ml-56 flex justify-center overflow-y-auto h-screen">
        <div className=' mt-10 flex flex-col gap-5'>
            <button onClick={onClose} className=' place-self-end text-dark-blue'><X size={30}/></button>
            <div className=' bg-white rounded-xl px-20 py-10 flex flex-col gap-7 items-center mx-4'>
                <h1 className=' text-dark-blue text-3xl font-extrabold'>Move contacts within your pipeline</h1>
                <form action="" onSubmit={handleSubmit} className=' flex flex-col gap-5'>
                    {successMessage && <p className=" text-mansa-blue font-semibold">{successMessage}</p>}
                    {errorMessage && <p className=" text-[#ff0000] font-semibold">{errorMessage}</p>}
                    <div className='flex flex-row items-center justify-center flex-wrap gap-5'>
                        <FormInputRequired type="text" title="First Name*" placeholder="Sundi" id="firstName" value={formValue.firstName} onChange={handleInput} />
                        <FormInputRequired type="text" title="Last Name*" placeholder="Keita" id="lastName" value={formValue.lastName} onChange={handleInput} />
                    </div>
                    <div className='flex flex-row items-center justify-center flex-wrap gap-5'>
                        <DropDown label="Move Contact To" id="moveContact" value={formValue.moveContact} onChange={handleInput} />
                    </div>
                    <div className=' mt-8 w-full flex items-center justify-center'>
                        <Button type="submit" disabled={isSubmitting} text="Move Contact" />
                    </div>
                </form>
            </div>
        </div>
      </div>
    )
  }
  
  export default MoveContactModal;