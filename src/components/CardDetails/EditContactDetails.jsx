import { useRef } from "react";
import api from "../../api";
import { useState } from "react";
import { X } from "lucide-react";
import { Button, DateForm, DropDown, FormInput, FormNotes } from "../Reusables";
import Swal from "sweetalert2";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditContactImage from "./ContactImage/EditContactImage";

function EditContactDetails({ onClose, contactDetails }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const pathName = window.location.pathname.split("/").at(-1);
  const queryClient = useQueryClient();
  let contactID = contactDetails.id;

  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

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

  // console.log(contactDetails);
  // Interaction with API post request
  const [formValue, setFormValue] = useState({
    title: contactDetails.title,
    first_name: contactDetails.first_name,
    last_name: contactDetails.last_name,
    organization_name: contactDetails.organization_name,
    deal_size: contactDetails.deal_size,
    email: contactDetails.email,
    phone_number: contactDetails.phone_number,
    stage: contactDetails.stage,
    datetime: formatDateTime(contactDetails.meeting_date),
    notes: contactDetails.notes,
    profile_pic: contactDetails.profile_pic,
  });

  let meetingDate;

  if (formValue.datetime) {
    meetingDate = new Date(formValue.datetime).toISOString();
  }

  const updateContactMutation = useMutation({
    mutationFn: async (userData) => {
      const currentDealId = localStorage.getItem("currentDealId") || pathName;
      return await api.patch(
        `deals/edit-contact/${currentDealId}/${contactDetails.id}`,
        userData
      );
    },
    onSuccess: () => {
      setErrorMessage("");
      setIsSubmitting(false);
      onClose();
      toast.success("Contact updated successfully.");
      queryClient.invalidateQueries([
        "contacts",
        "deals",
        pathName,
        "followUps",
        "negotiations",
        "notAFits",
        "OnGoingReviews",
        "partners",
        "pitches",
        "prospects",
        "researches",
        "termSheets",
      ]);
    },
    onError: (error) => {
      if (
        error.response.data.message === "unable to edit contact at this time"
      ) {
        onClose();
        Swal.fire(
          "Error",
          "You are not allowed to edit this dashboard.",
          "error"
        );
      }
      setErrorMessage("Something went wrong. Please try again.");
      setIsSubmitting(false);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const currentDealId = localStorage.getItem("currentDealId") || pathName;
    if (!currentDealId) {
      console.error("Deal ID not found in localStorage");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      onClose();
      Swal.fire(
        "Error",
        "You are not allowed to edit this dashboard.",
        "error"
      );
    }

    const userData = {
      userId: user.id,
      title: formValue.title,
      first_name: formValue.first_name,
      last_name: formValue.last_name,
      organization_name: formValue.organization_name,
      deal_size: formValue.deal_size,
      email: formValue.email,
      phone_number: formValue.phone_number,
      stage: formValue.stage,
      meeting_date: meetingDate,
      notes: formValue.notes,
    };

    updateContactMutation.mutate(userData);
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed z-50 inset-0 bg-dark-blue bg-opacity-30 backdrop-blur-sm flex justify-center overflow-y-auto h-screen"
    >
      <div className=" mt-10 flex flex-col">
        <div className="bg-white rounded-xl px-20 max-md:px-5 py-10 flex flex-col gap-7 items-center mx-20 max-md:mx-10">
          <button
            onClick={onClose}
            className="self-end text-red-500 hover:text-dark-blue"
          >
            <X size={30} />
          </button>
          <h1 className="text-dark-blue text-3xl max-md:text-2xl max-sm:text-xl font-extrabold">
            Edit Contact Details
          </h1>
          <form
            action=""
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            {errorMessage && (
              <p className="text-[#ff0000] font-semibold">{errorMessage}</p>
            )}
            <EditContactImage
              profile_url={formValue.profile_pic}
              contactId={contactID}
            />
            <div className="flex flex-row items-center justify-center flex-wrap gap-5 w-full">
                <FormInput
                  type="text"
                  title="Title"
                  placeholder="Mr./Mrs./Ms./Dr./Engr."
                  id="title"
                  value={formValue.title}
                  onChange={handleInput}
                />
                <FormInput
                  type="text"
                  title="First Name"
                  placeholder="Sundi"
                  id="first_name"
                  value={formValue.first_name}
                  onChange={handleInput}
                />
                <FormInput
                  type="text"
                  title="Last Name"
                  placeholder="Keita"
                  id="last_name"
                  value={formValue.last_name}
                  onChange={handleInput}
                />
                <FormInput
                  type="text"
                  title="Company"
                  placeholder="Mansa, LLC"
                  id="organization_name"
                  value={formValue.organization_name}
                  onChange={handleInput}
                />
                <FormInput
                  type="number"
                  title="Deal Size ($)"
                  placeholder="1,000,000"
                  id="deal_size"
                  min={0}
                  value={formValue.deal_size}
                  onChange={handleInput}
                />
                <FormInput
                  type="email"
                  title="Contact Email"
                  placeholder="sundi@sankore.com"
                  id="email"
                  value={formValue.email}
                  onChange={handleInput}
                />
              
                <FormInput
                  type="tel"
                  title="Phone Number"
                  placeholder="+123456789"
                  id="phone_number"
                  value={formValue.phone_number}
                  onChange={handleInput}
                  maxLength={15}
                />
                <DropDown
                  label="Current Stage"
                  id="stage"
                  value={formValue.stage}
                  onChange={handleInput}
                />
                <DateForm
                  title="Meeting Date"
                  value={formValue.datetime}
                  onChange={handleInput}
                  id={"datetime"}
                />
            </div>
            <div>
              <FormNotes
                value={formValue.notes}
                onChange={handleInput}
                id={"notes"}
              />
            </div>
            <div className="mt-8 w-full flex items-center justify-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                text="Update Contact"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditContactDetails;
