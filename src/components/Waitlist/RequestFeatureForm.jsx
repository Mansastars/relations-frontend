import React, { useState } from "react";
import { X } from "lucide-react";
import {
  Button,
  DateForm,
  DropDown,
  FormInput,
  FormNotes,
  FullInput,
} from "../Reusables";
import { toast } from "react-toastify";
import api from "../../api";

function RequestFeatureForm({ onClose }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleInput = (e) => {
    if (e && e.target) {
      const { name, value } = e.target;
      setFormValue((prevFormValue) => ({ ...prevFormValue, [name]: value }));
    }
  };
  const formatDateTime = (isoDate) => {
    if (!isoDate) return "";
    const date = new Date(isoDate);
    const formattedDate = date.toISOString().slice(0, 16); // Format "yyyy-MM-ddThh:mm"
    return formattedDate;
  };
  const [formValue, setFormValue] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    feature_title: "",
    feature_note: "",
    feature_date: formatDateTime(""),
    team_size: "",
    amount: "",
  });
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsSubmitting(true)
    let data = formValue
    try{
      const response = await api.post(
        `general/request-feature`,
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
      <div className=" mt-10 flex flex-col">
        <div className=" bg-white w-full rounded-xl px-20 max-md:px-5 py-10 flex flex-col gap-10 items-center mx-4 justify-center">
          <button
            onClick={onClose}
            className=" place-self-end text-red-500 hover:text-dark-blue"
          >
            <X size={30} />
          </button>
          <h1 className=" text-dark-blue text-3xl max-sm:text-xl font-extrabold">
            Request Feature
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 justify-center w-full"
          >
            {/* <div className="flex flex-row items-center justify-center flex-wrap gap-5"> */}
            <div className="flex justify-between flex-wrap">
              <FormInput
                type="text"
                title="First name"
                placeholder="John"
                id="first_name"
                value={formValue.first_name}
                onChange={handleInput}
              />
              <FormInput
                type="text"
                title="Last name"
                placeholder="Doe"
                id="last_name"
                value={formValue.last_name}
                onChange={handleInput}
              />
            </div>
            <div className="flex justify-between flex-wrap">
              <FormInput
                type="text"
                title="Email"
                placeholder="johndoe@gmail.com"
                id="email"
                value={formValue.email}
                onChange={handleInput}
              />
              <FormInput
                type="text"
                title="Mobile"
                placeholder="+1 483 7468 838"
                id="phone_number"
                value={formValue.phone_number}
                onChange={handleInput}
              />
            </div>
            <div className="">
              <FullInput
                type="text"
                title="Title of Feature"
                placeholder="Enter a title for the feature you want"
                id="feature_title"
                value={formValue.feature_title}
                onChange={handleInput}
              />
            </div>
            <div>
              <FormNotes
                value={formValue.feature_note}
                onChange={handleInput}
                title={"What do you expect from this feature"}
                id={"feature_note"}
              />
            </div>
            <div>
              <DateForm
                title="When do you want this feature"
                value={formValue.feature_date}
                onChange={handleInput}
                id={"feature_date"}
              />
            </div>
            <div className="">
              <FullInput
                type="text"
                title="How much are you willing to pay per month per user"
                placeholder="Amount to pay"
                id="amount"
                value={formValue.amount}
                onChange={handleInput}
              />
            </div>
            <div className="">
              <FullInput
                type="text"
                title="How many users do you have"
                placeholder="Number of users"
                id="team_size"
                value={formValue.team_size}
                onChange={handleInput}
              />
            </div>

            {/* </div> */}
            <div className="mt-8 w-full flex items-center justify-center">
              <Button type="submit" disabled={isSubmitting} text="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RequestFeatureForm;
