// Pop-up Modal
import { X } from 'lucide-react';
import { Button, DropDown, FormInput, FormInputRequired, FormNotes } from "./Reusables"
import { useRef } from 'react';

function Modal({onClose}) {
    const modalRef = useRef();

    const closeModal = (e) => {
        if(modalRef.current === e.target) {
            onClose();
        }
    }

    return (
      <div ref={modalRef} onClick={closeModal} className=" fixed z-50 inset-0 bg-dark-blue bg-opacity-30 backdrop-blur-sm ml-56 flex justify-center overflow-y-auto h-screen">
        <div className=' mt-10 flex flex-col gap-5'>
            <button onClick={onClose} className=' place-self-end text-dark-blue'><X size={30}/></button>
            <div className=' bg-white rounded-xl px-20 py-10 flex flex-col gap-7 items-center mx-4'>
                <h1 className=' text-dark-blue text-3xl font-extrabold'>Add a new contact to your pipeline</h1>
                <form action="" className=' flex flex-col gap-5'>
                    <div className='flex flex-row items-center justify-center flex-wrap gap-5'>
                        <FormInputRequired type="text" title="First Name" placeholder="Sundi" htmlFor="first-name" name="first-name" id="first-name" />
                        <FormInputRequired type="text" title="Last Name" placeholder="Keita" htmlFor="Last-name" name="last-name" id="last-name" />
                        <FormInput type="text" title="Company" placeholder="Mansa, LLC" htmlFor="company" name="company" id="company" />
                        <FormInput type="number" title="Deal Size ($)" placeholder="1,000,000" htmlFor="value" name="value" id="value" />
                    </div>
                    <div className='flex flex-row items-center justify-center flex-wrap gap-5'>
                        <FormInput type="text" title="Deal Name" placeholder="Website Development" htmlFor="deal-name" name="deal-name" id="deal-name" />
                        <FormInput type="email" title="Contact Email" placeholder="sundi@sankore.com" htmlFor="email" name="email" id="contanct-email" />
                        <DropDown />
                    </div>
                    <div>
                        <FormNotes />
                    </div>
                    <div className=' mt-8 w-full flex items-center justify-center'>
                        <Button text="Create Contact" />
                    </div>
                </form>
            </div>
        </div>
      </div>
    )
  }
  
  export default Modal;