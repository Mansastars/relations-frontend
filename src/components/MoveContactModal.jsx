// Pop-up MoveContactModal
import { X } from 'lucide-react';
import { Button, DropDown, FormInput, FormInputRequired, FormNotes } from "./Reusables"
import { useRef } from 'react';
import api from "./api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MoveContactModal({onClose}) {
    const moveContactModalRef = useRef();

    const closeMoveContactModal = (e) => {
        if(moveContactModalRef.current === e.target) {
            onClose();
        }
    }

    // Interaction with API post request
    const [formValue, setFormValue] = useState({firstName:'', lastName:'', moveContact:''})
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate();

    const handleInput = (e) => {
        if (e && e.target) {
            const { name, value } = e.target;
            setFormValue((prevFormValue) => ({ ...prevFormValue, [name]: value }));
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const userData = {
            deal_name: formValue.dealName,
            deal_size: formValue.dealSize,
            dead_line: formValue.deadline,
            negotiation_value: formValue.negotiationValue,
            signed_value: formValue.dealSignedValue
        };
    
        try {
            const response = await api.post('', userData);
            console.log(response);
            // navigate(`/dashboard/${response.data.findDeal.id}`);
        } catch (error) {
            console.log(error);
            setErrorMessage("Something went wrong. Please try again."); // set error message
            window.scrollTo(0, 0); //scroll to the top of the page
        }
    };

    return (
      <div ref={moveContactModalRef} onClick={closeMoveContactModal} className=" fixed z-50 inset-0 bg-dark-blue bg-opacity-30 backdrop-blur-sm ml-56 flex justify-center overflow-y-auto h-screen">
        <div className=' mt-10 flex flex-col gap-5'>
            <button onClick={onClose} className=' place-self-end text-dark-blue'><X size={30}/></button>
            <div className=' bg-white rounded-xl px-20 py-10 flex flex-col gap-7 items-center mx-4'>
                <h1 className=' text-dark-blue text-3xl font-extrabold'>Move contacts within your pipeline</h1>
                <form action="" onSubmit={handleSubmit} className=' flex flex-col gap-5'>
                    <div className='flex flex-row items-center justify-center flex-wrap gap-5'>
                        <FormInputRequired type="text" title="First Name*" placeholder="Sundi" id="firstName" value={formValue.firstName} onChange={handleInput} />
                        <FormInputRequired type="text" title="Last Name*" placeholder="Keita" id="lastName" value={formValue.lastName} onChange={handleInput} />
                    </div>
                    <div className='flex flex-row items-center justify-center flex-wrap gap-5'>
                        <DropDown label="Move Contact To" id="moveContact" value={formValue.moveContact} onChange={handleInput} />
                    </div>
                    <div className=' mt-8 w-full flex items-center justify-center'>
                        <Button type="submit" text="Move Contact" />
                    </div>
                </form>
            </div>
        </div>
      </div>
    )
  }
  
  export default MoveContactModal;