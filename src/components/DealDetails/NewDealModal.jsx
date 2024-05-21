// Pop-up NewDealModal
import { X } from "lucide-react";
import Swal from "sweetalert2";
import { Button, FullInput, SignUpRequired } from "../Reusables";
import { useRef } from "react";
import api from "../api";
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

function NewDealModal({ onClose }) {
  const NewDealModalRef = useRef();

  const closeNewDealModal = (e) => {
    if (NewDealModalRef.current === e.target) {
      onClose();
    }
  };

  // Interaction with API post request
  const [formValue, setFormValue] = useState({
    dealName: "",
    datetime: "",
    dealSize: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleInput = (e) => {
    if (e && e.target) {
      const { name, value } = e.target;
      setFormValue((prevFormValue) => ({ ...prevFormValue, [name]: value }));
    }
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
      const response = await api.post("/deals/create-deal", userData);
      console.log("Response: ", response);
      if (
        response.data.message ===
        "You have to upgrade your subscription to create a neww dashboard"
      ) {
        onClose();
        Swal.fire({
          icon: "warning",
          title: "Subscription Upgrade Required",
          text: "You have reached your limit. Please upgrade your subscription to create a new dashboard.",
          showCancelButton: true,
          confirmButtonText: "Upgrade",
          cancelButtonText: "Cancel",
        }).then((result) => {
          if (result.isConfirmed) {
            // Redirect to pricing page
            navigate("/pricing");
          }
        });
      } else {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("Something went wrong. Please try again."); // set error message
      window.scrollTo(0, 0); //scroll to the top of the page
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
            Create a New Dashboard
          </h1>
          <form
            onSubmit={handleSubmit}
            className=" flex flex-col gap-5 justify-center w-full"
          >
            {errorMessage && (
              <p className=" text-[#ff0000] font-semibold">{errorMessage}</p>
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
                value={formValue.datetime}
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
              <Button type="submit" text="Create a Deal" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewDealModal;
