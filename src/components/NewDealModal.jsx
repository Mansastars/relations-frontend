// Pop-up NewDealModal
import { X } from 'lucide-react';
import { Button, DropDown, FormInput, FormInputRequired, FormNotes } from "./Reusables"
import { useRef } from 'react';
import api from "./api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    const [formValue, setFormValue] = useState({dealName:'', dealSize:'', deadline:'', negotiationValue: '', dealSignedValue:''})
    const [errorMessage, setErrorMessage] = useState("");

    const handleInput = (e) => {
        if (e && e.target) {
            const { name, value } = e.target;
            setFormValue((prevFormValue) => ({ ...prevFormValue, [name]: value }));
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        // const allInputvalue = { address: formValue.address, store_name: formValue.store_name, brand_name: formValue.brand_name, first_name: formValue.first_name, last_name: formValue.last_name, email: formValue.email, password: formValue.password, phone: formValue.phone }

        let formData = new FormData();

        formData.append("dealName", formValue.dealName);
        formData.append("dealSize", formValue.dealSize);
        formData.append("deadline", formValue.deadline);
        formData.append("negotiationValue", formValue.negotiationValue);
        formData.append("dealSignedValue", formValue.dealSignedValue);
        
        api.post('', formData) //API URL
            .then(function (response) {
                console.log(response);
                navigate(""); // Url tp open a dashboard
            }) 
            .catch(function (error) {
                console.log(error);
                setErrorMessage("Something went wrong. Please try again."); // set error message
                window.scrollTo(0, 0); //scroll to the top of the page
            })

        // console.log(formData.values)
    }

    return (
      <div ref={NewDealModalRef} onClick={closeNewDealModal} className=" fixed z-50 inset-0 bg-dark-blue bg-opacity-30 backdrop-blur-sm ml-56 flex justify-center overflow-y-auto h-screen">
        <div className=' mt-10 flex flex-col gap-5'>
            <button onClick={onClose} className=' place-self-end text-dark-blue'><X size={30}/></button>
            <div className=' bg-white rounded-xl px-20 py-10 flex flex-col gap-7 items-center mx-4'>
                <h1 className=' text-dark-blue text-3xl font-extrabold'>Create a New Deal</h1>
                <form onSubmit={ handleSubmit } className=' flex flex-col gap-5'>
                    {errorMessage && <p className=" text-[#ff0000] font-semibold">{errorMessage}</p>}
                    <div className='flex flex-row items-center justify-center flex-wrap gap-5'>
                        <FormInputRequired type="text" title="Deal Name*" placeholder="Sundi" id="dealName" value={formValue.dealName} onChange={handleInput} />
                        <FormInput type="number" title="Deal Size ($)*" placeholder="1,000,000" id="dealSize" value={formValue.dealSize} onChange={handleInput} />
                    </div>
                    <div className='flex flex-row items-center justify-center flex-wrap gap-5'>
                        <div className="relative sm:col-span-3">
                            <label htmlFor="deadline" className="absolute -top-3 left-3 bg-white px-1 text-sm font-semibold leading-6 text-dark-blue">Deadline</label>
                            <div className="mt-1">
                                <input
                                type="date"
                                id="deadline"
                                name="date"
                                className="block w-full rounded-md border border-dark-blue py-2.5 pl-2 text-dark-blue focus:outline-none shadow-sm placeholder:text-gray-400 focus:border-2 focus:border-mansa-blue sm:text-sm sm:leading-6 hover:border-mansa-blue"
                                // value={formValue.deadline}
                                onChange={handleInput}
                                />
                            </div>
                        </div>
                    </div>
                    <div className=' flex flex-row gap-5'>
                        <FormInput type="text" title="Negotiation value" placeholder="" id="negotiationValue" value={formValue.negotiationValue} onChange={handleInput} />
                        <FormInput type="text" title="Deal signed value" placeholder="" id="dealSignedValue" value={formValue.dealSignedValue} onChange={handleInput} />
                    </div>
                    <div className=' mt-8 w-full flex items-center justify-center'>
                        <Button type="submit" text="Create a Deal" />
                    </div>
                </form>
            </div>
        </div>
      </div>
    )
  }
  
  export default NewDealModal;