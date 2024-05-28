// Pop-up NewDealModal
import { X } from "lucide-react";
import {
  Button,
  DropDown,
  FormInput,
  FormInputRequired,
  FormNotes,
  FullInput,
  SignUpRequired,
} from "../Reusables";
import { useRef } from "react";
import api from "../../api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DateForm } from "../Reusables";

/**
 * Renders a modal for creating a new deal.
 *
 * @param {function} onClose - Callback function to close the modal.
 *
 * @returns {JSX.Element} The rendered modal component.
 */

function EditDealModal({ onClose, dealDetails }) {
  const NewDealModalRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [formValue, setFormValue] = useState({
    dealName: dealDetails ? dealDetails.deal_name : "",
    datetime: dealDetails ? dealDetails.dead_line : "",
    dealSize: dealDetails ? dealDetails.deal_size : "",
  });

  const closeNewDealModal = (e) => {
    if (NewDealModalRef.current === e.target) {
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

  let meetingDate;

  if (formValue.datetime) {
    meetingDate = new Date(formValue.datetime).toISOString();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      deal_name: formValue.dealName,
      dead_line: meetingDate,
      deal_size: formValue.dealSize,
    };

    try {
      const response = await api.patch(
        `/deals/edit-deal/${dealDetails.id}`,
        userData
      );
      setSuccessMessage("Dashboard details updated successfully.");
      // Refresh the deals list or update the specific deal in the list
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (error) {
      console.log(error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div
      ref={NewDealModalRef}
      onClick={closeNewDealModal}
      className=" fixed z-50 inset-0 bg-dark-blue bg-opacity-30 backdrop-blur-sm flex justify-center overflow-y-auto h-screen"
    >
      <div className=" mt-10 flex flex-col">
        <div className=" bg-white w-full rounded-xl px-20 max-md:px-5 py-10 flex flex-col gap-10 items-center mx-4 justify-center">
          <button
            onClick={onClose}
            className=" place-self-end text-red-500 hover:text-dark-blue"
          >
            <X size={30} />
          </button>
          <h1 className=" text-dark-blue text-3xl max-sm:text-xl font-extrabold">
            Update Dashboard Details
          </h1>
          <form
            onSubmit={handleSubmit}
            className=" flex flex-col gap-5 justify-center w-full"
          >
            {errorMessage && (
              <p className=" text-red-500 font-semibold">{errorMessage}</p>
            )}
            {successMessage && (
              <p className=" text-green-500 font-semibold">{successMessage}</p>
            )}
            <div className="flex flex-col gap-5 w-full ">
              <SignUpRequired
                type="text"
                title="Dashboard Name*"
                placeholder="Sundi"
                id="dealName"
                value={formValue.dealName}
                onChange={handleInput}
              />
              <DateForm
                title="Deadline"
                value={formatDateTime(formValue.datetime)}
                onChange={handleInput}
              />
              <FullInput
                type="number"
                title="Deal Size ($)"
                placeholder="1,000,000"
                min={0}
                id="dealSize"
                value={formValue.dealSize}
                onChange={handleInput}
              />
            </div>
            <div className=" mt-8 w-full flex items-center justify-center">
              <Button type="submit" text="Update Dashboard" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditDealModal;
