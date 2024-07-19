// Pop-up MoveContactModal
import { X } from "lucide-react";
import {
  Button,
  DropDown,
  FormInput,
  FormInputRequired,
  FormNotes,
} from "../Reusables";
import api from "../../api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MoveContactModal({ onClose }) {
  const moveContactModalRef = useRef();

  const closeMoveContactModal = (e) => {
    if (moveContactModalRef.current === e.target) {
      onClose();
    }
  };
  const [ErrorMessage, setErrorMessage] = useState("");
  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    moveContact: "",
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (userData) => {
      const currentDealId = localStorage.getItem("currentDealId");
      if (!currentDealId) {
        throw new Error("Deal ID not found in localStorage");
      }

      return await api.patch(`/deals/change-stage/${currentDealId}`, userData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries([
        "contacts",
        "deals",
        "followUps",
        "negotiations",
        "notAFits",
        "OnGoingReviews",
        "partners",
        "pitches",
        "prospects",
        "researches",
        "termSheets",
      ]); // or any relevant query keys
      setFormValue({ firstName: "", lastName: "", moveContact: "" });
      onClose();
      toast.success("Contact moved successfully.");
    },
    onError: () => {
      setErrorMessage("Something went wrong. Please try again.");
    },
  });

  // Interaction with API post request
  const handleInput = (e) => {
    if (e && e.target) {
      const { name, value } = e.target;
      setFormValue((prevFormValue) => ({ ...prevFormValue, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      first_name: formValue.firstName,
      last_name: formValue.lastName,
      stage: formValue.moveContact,
    };

    mutation.mutate(userData);
  };

  return (
    <div
      ref={moveContactModalRef}
      onClick={closeMoveContactModal}
      className=" fixed z-50 inset-0 bg-dark-blue bg-opacity-30 backdrop-blur-sm flex justify-center overflow-y-auto h-screen"
    >
      <div className=" mt-10 flex flex-col">
        <div className=" bg-white rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4">
          <button
            onClick={onClose}
            className=" place-self-end text-red-600 hover:text-dark-blue"
          >
            <X size={30} />
          </button>
          <h1 className=" text-dark-blue text-3xl font-extrabold mb-5">
            Move contacts within your pipeline
          </h1>
          <form
            action=""
            onSubmit={handleSubmit}
            className=" flex flex-col gap-5"
          >
            {mutation.isError && (
              <p className=" text-[#ff0000] font-semibold">{ErrorMessage}</p>
            )}
            <div className="flex flex-row items-center justify-center flex-wrap gap-5">
              <FormInputRequired
                type="text"
                title="First Name*"
                placeholder="Sundi"
                id="firstName"
                value={formValue.firstName}
                onChange={handleInput}
              />
              <FormInputRequired
                type="text"
                title="Last Name*"
                placeholder="Keita"
                id="lastName"
                value={formValue.lastName}
                onChange={handleInput}
              />
            </div>
            <div className="flex flex-row items-center justify-center flex-wrap gap-5">
              <DropDown
                label="Move Contact To"
                id="moveContact"
                value={formValue.moveContact}
                onChange={handleInput}
              />
            </div>
            <div className=" mt-8 w-full flex items-center justify-center">
              <Button
                type="submit"
                disabled={mutation.isLoading}
                text="Move Contact"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MoveContactModal;
