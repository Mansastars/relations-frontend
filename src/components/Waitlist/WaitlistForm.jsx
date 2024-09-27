import React, { useState } from "react";
import { X } from "lucide-react";
import {
  Button,
  DateForm,
  DropDown,
  FormInput,
  FullInput,
  FormNotes,
  CustomDropDown,
} from "../Reusables";
import { toast } from "react-toastify";
import { useWaitlistContent } from "./waitlistContent";
import api from "../../api";

function WaitlistForm({ onClose }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleInput = (e) => {
    if (e && e.target) {
      const { name, value } = e.target;
      setFormValue((prevFormValue) => ({ ...prevFormValue, [name]: value }));
    }
  };
  const waitlistContent = useWaitlistContent()
  const [formValue, setFormValue] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    email_provider: "",
    company: "",
    role: "",
    team_size: "",
    feature: ""
  });
  const waitlistOptions = [];
  waitlistContent.map((item) => {
    waitlistOptions.push(item.title);
  });
  console.log(formValue)
  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsSubmitting(true)
    let data = formValue
    try{
      const response = await api.post(
        `general/waitlist`,
        data
      );
      console.log(response)
      if(response.data.status == 'success'){
        toast.success(response.data.message)
        onClose()
      }else{
         toast.success('Something went wrong')
         setIsSubmitting(false)
      }
    }catch(error){
      toast.success('Something went wrong')
    }
  };
  return (
    <div className=" fixed z-50 inset-0 bg-dark-blue bg-opacity-30 backdrop-blur-sm flex justify-center overflow-y-auto h-screen">
      <div className=" mt-10 flex flex-col items-center">
        <div className=" bg-white w-2/3 rounded-xl px-20 max-md:px-5 py-10 flex flex-col gap-10 items-center mx-4 justify-center">
          <button
            onClick={onClose}
            className=" place-self-end text-red-500 hover:text-dark-blue"
          >
            <X size={30} />
          </button>
          <h1 className=" text-dark-blue text-3xl max-sm:text-xl font-extrabold">
            Join Waitlist
          </h1>
          <form
            onSubmit={handleSubmit}
            className=" flex flex-col gap-5 justify-center w-full"
          >
            <div className="flex flex-row items-center justify-center flex-wrap gap-5 w-full">
              <FullInput
                type="text"
                title="First Name"
                placeholder="John"
                id="first_name"
                value={formValue.first_name}
                onChange={handleInput}
              />
              <FullInput
                type="text"
                title="Last Name"
                placeholder="Doe"
                id="last_name"
                value={formValue.last_name}
                onChange={handleInput}
              />
              <FullInput
                type="text"
                title="Mobile"
                placeholder="+1 234 5678 901"
                id="phone_number"
                value={formValue.phone_number}
                onChange={handleInput}
              />
              <FullInput
                type="email"
                title="Email"
                placeholder="johndoe@gmail.com"
                id="email"
                value={formValue.email}
                onChange={handleInput}
              />
              <FullInput
                type="text"
                title="Email provider"
                placeholder="e.g Gmail"
                id="email_provider"
                value={formValue.email_provider}
                onChange={handleInput}
              />
              <FullInput
                type="text"
                title="Company"
                placeholder="optional"
                id="company"
                value={formValue.company}
                onChange={handleInput}
              />
              <FullInput
                type="text"
                title="Role"
                placeholder="optional"
                id="role"
                value={formValue.role}
                onChange={handleInput}
              />
              <FullInput
                type="text"
                title="Sales/Marketing team size"
                placeholder="optional"
                id="team_size"
                value={formValue.team_size}
                onChange={handleInput}
              />
              <CustomDropDown
                options={waitlistOptions}
                label={"Feature"}
                id={"feature"}
                value={formValue.feature}
                onChange={handleInput}
              />
              <div className="mt-8 w-full flex items-center justify-center">
                <Button type="submit" disabled={isSubmitting} text="Submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default WaitlistForm;
