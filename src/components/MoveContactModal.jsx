// Pop-up MoveContactModal
import { X } from 'lucide-react';
import { Button, DateTimeForm, DropDown, FormInput, FormInputRequired, FormNotes } from "./Reusables"
import { useRef } from 'react';

function MoveContactModal({onClose}) {
    const moveContactModalRef = useRef();

    const closeMoveContactModal = (e) => {
        if(moveContactModalRef.current === e.target) {
            onClose();
        }
    }

    return (
      <div ref={moveContactModalRef} onClick={closeMoveContactModal} className=" fixed z-50 inset-0 bg-dark-blue bg-opacity-30 backdrop-blur-sm ml-56 flex justify-center overflow-y-auto h-screen">
        <div className=' mt-10 flex flex-col gap-5'>
            <button onClick={onClose} className=' place-self-end text-dark-blue'><X size={30}/></button>
            <div className=' bg-white rounded-xl px-20 py-10 flex flex-col gap-7 items-center mx-4'>
                <h1 className=' text-dark-blue text-3xl font-extrabold'>Move contacts within your pipeline</h1>
                <form action="" className=' flex flex-col gap-5'>
                    <div className='flex flex-row items-center justify-center flex-wrap gap-5'>
                        <FormInputRequired type="text" title="First Name" placeholder="Sundi" htmlFor="first-name" name="first-name" id="first-name" />
                        <FormInputRequired type="text" title="Last Name" placeholder="Keita" htmlFor="Last-name" name="last-name" id="last-name" />
                    </div>
                    <div className='flex flex-row items-center justify-center flex-wrap gap-5'>
                        <DropDown label="Move Contact" id="move-contact" />
                    </div>
                    <div className=' mt-8 w-full flex items-center justify-center'>
                        <Button text="Move Contact" />
                    </div>
                </form>
            </div>
        </div>
      </div>
    )
  }
  
  export default MoveContactModal;