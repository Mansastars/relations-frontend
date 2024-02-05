// Pop-up NewDealModal
import { X } from 'lucide-react';
import { Button, DateTimeForm, DropDown, FormInput, FormInputRequired, FormNotes } from "./Reusables"
import { useRef } from 'react';

function NewDealModal({onClose}) {
    const NewDealModalRef = useRef();

    const closeNewDealModal = (e) => {
        if(NewDealModalRef.current === e.target) {
            onClose();
        }
    }

    return (
      <div ref={NewDealModalRef} onClick={closeNewDealModal} className=" fixed z-50 inset-0 bg-dark-blue bg-opacity-30 backdrop-blur-sm ml-56 flex justify-center overflow-y-auto h-screen">
        <div className=' mt-10 flex flex-col gap-5'>
            <button onClick={onClose} className=' place-self-end text-dark-blue'><X size={30}/></button>
            <div className=' bg-white rounded-xl px-20 py-10 flex flex-col gap-7 items-center mx-4'>
                <h1 className=' text-dark-blue text-3xl font-extrabold'>Create a New Deal</h1>
                <form action="" className=' flex flex-col gap-5'>
                    <div className='flex flex-row items-center justify-center flex-wrap gap-5'>
                        <FormInputRequired type="text" title="Deal Name" placeholder="Sundi" htmlFor="deal-name" name="deal-name" id="deal-name" />
                        <FormInput type="tel" title="Deal Size ($)" placeholder="1,000,000" htmlFor="value" name="value" id="value" />
                    </div>
                    <div className='flex flex-row items-center justify-center flex-wrap gap-5'>
                        <div className="relative sm:col-span-3">
                            <label htmlFor="date" className="absolute -top-3 left-3 bg-white px-1 text-sm font-semibold leading-6 text-dark-blue">Deadline</label>
                            <div className="mt-1">
                                <input
                                type="date"
                                id="date"
                                name="date"
                                className="block w-full rounded-md border border-dark-blue py-2.5 pl-2 text-dark-blue focus:outline-none shadow-sm placeholder:text-gray-400 focus:border-2 focus:border-mansa-blue sm:text-sm sm:leading-6 hover:border-mansa-blue"
                                />
                            </div>
                        </div>
                    </div>
                    <div className=' flex flex-row gap-5'>
                        <FormInput type="value" title="Negotiation value" placeholder="" htmlFor="value" name="value" id="Negotiation-value" />
                        <FormInput type="value" title="Deal signed value" placeholder="" htmlFor="value" name="value" id="Deal-signed-value" />
                    </div>
                    <div className=' mt-8 w-full flex items-center justify-center'>
                        <Button text="Create a Deal" />
                    </div>
                </form>
            </div>
        </div>
      </div>
    )
  }
  
  export default NewDealModal;