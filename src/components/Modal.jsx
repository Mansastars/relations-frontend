// Pop-up Modal
import { X } from 'lucide-react';
import { Button, FormInput } from "./Reusables"
import { useRef } from 'react';

function Modal({onClose}) {
    const modalRef = useRef();

    const closeModal = (e) => {
        if(modalRef.current === e.target) {
            onClose();
        }
    }

    return (
      <div ref={modalRef} onClick={closeModal} className=" fixed inset-0 bg-dark-blue bg-opacity-30 backdrop-blur-sm ml-56 flex justify-center items-center">
        <div className=' mt-10 flex flex-col gap-5'>
            <button onClick={onClose} className=' place-self-end text-dark-blue'><X size={30}/></button>
            <div className=' bg-white rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4'>
                <h1 className=' text-dark-blue text-3xl font-extrabold'>Add a new deal to your pipeline</h1>
                <form action="">
                    <div className='flex flex-row items-center justify-center flex-wrap gap-5'>
                        <FormInput type="text" title="First Name" placeholder="Sundi" htmlFor="first-name" name="first-name" id="first-name" />
                        <FormInput type="text" title="Last Name" placeholder="Keita" htmlFor="Last-name" name="last-name" id="last-name" />
                        <FormInput type="text" title="Company" placeholder="Mansa, LLC" htmlFor="company" name="company" id="company" />
                        <FormInput type="number" title="Value ($)" placeholder="1,000,000" htmlFor="value" name="value" id="value" />
                    </div>
                    <div className=' mt-8 w-full flex items-center justify-center'>
                        <Button text="Create deal" />
                    </div>
                </form>
            </div>
        </div>
      </div>
    )
  }
  
  export default Modal;