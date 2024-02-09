// Pop-up NewDealModal
import { X } from 'lucide-react';
import { Button, DropDown, FormInput, FormInputRequired, FormNotes } from "./Reusables"
import { useRef } from 'react';
import api from "./api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DateForm } from './Reusables';

/**
 * Renders a modal for creating a new deal.
 * 
 * @param {function} onClose - Callback function to close the modal.
 * 
 * @returns {JSX.Element} The rendered modal component.
*/

function NewDealModal({onClose}) {
    const NewDealModalRef = useRef();

    const closeNewDealModal = (e) => {
        if(NewDealModalRef.current === e.target) {
            onClose();
        }
    }

    // Interaction with API post request
    const [formValue, setFormValue] = useState({dealName:'', dealSize:0, negotiationValue: 0, dealSignedValue: 0, datetime:''})
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const handleInput = (e) => {
        if (e && e.target) {
            const { name, value } = e.target;
            setFormValue((prevFormValue) => ({ ...prevFormValue, [name]: value }));
        }
    }

    let meetingDate;

    if (formValue.datetime) {
        meetingDate = new Date(formValue.datetime).toISOString();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const userData = {
            deal_name: formValue.dealName,
            deal_size: formValue.dealSize,
            dead_line: meetingDate,
            negotiation_value: formValue.negotiationValue,
            signed_value: formValue.dealSignedValue
        };
    
        try {
            const response = await api.post('/deals/create-deal', userData);
            console.log(response);
            window.location.reload();
            // Store deal ID in localStorag
            localStorage.setItem('currentDealId', response.data.findDeal.id);
            console.log(localStorage)
            navigate(`/dashboard/${response.data.findDeal.id}`);
        } catch (error) {
            console.log(error);
            setErrorMessage("Something went wrong. Please try again."); // set error message
            window.scrollTo(0, 0); //scroll to the top of the page
        }
    };

    return (
      <div ref={NewDealModalRef} onClick={closeNewDealModal} className=" fixed z-50 inset-0 bg-dark-blue bg-opacity-30 backdrop-blur-sm ml-56 flex justify-center overflow-y-auto h-screen">
        <div className=' mt-10 flex flex-col gap-5'>
            <button onClick={onClose} className=' place-self-end text-dark-blue'><X size={30}/></button>
            <div className=' bg-white rounded-xl px-20 py-10 flex flex-col gap-7 items-center mx-4'>
                <h1 className=' text-dark-blue text-3xl font-extrabold'>Create a New Deal</h1>
                <form onSubmit={ handleSubmit } className=' flex flex-col gap-5'>
                    {errorMessage && <p className=" text-[#ff0000] font-semibold">{errorMessage}</p>}
                    <div className='flex flex-row max-md:flex-col gap-5'>
                        <FormInputRequired type="text" title="Deal Name*" placeholder="Sundi" id="dealName" value={formValue.dealName} onChange={handleInput} />
                        <FormInput type="number" title="Deal Size ($)*" placeholder="1,000,000" id="dealSize" value={formValue.dealSize} onChange={handleInput} />
                    </div>
                    <div className='flex flex-row gap-5 justify-center items-center'>
                        <DateForm value={formValue.datetime} onChange={handleInput} />
                    </div>
                    <div className=' flex flex-row max-md:flex-col gap-5'>
                        <FormInput type="number" title="Negotiation value" placeholder="" id="negotiationValue" value={formValue.negotiationValue} onChange={handleInput} />
                        <FormInput type="number" title="Deal signed value" placeholder="" id="dealSignedValue" value={formValue.dealSignedValue} onChange={handleInput} />
                    </div>
                    <div className=' mt-8 w-full flex items-center justify-center'>
                        <Button type="submit" text="Create a Deal" />
                    </div>
                </form>
            </div>
        </div>
        {/* {newDealId && <ContactForm selectedDealId={newDealId} /> && <Research selectedDealId={newDealId} />} */}
      </div>
    )
  }
  
  export default NewDealModal;