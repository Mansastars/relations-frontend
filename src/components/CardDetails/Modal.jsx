import { X } from "lucide-react";
import {
  Button,
  DateForm,
  DropDown,
  FormInput,
  FormInputRequired,
  FormNotes,
} from "../Reusables";
import { useRef } from "react";
import api from "../../api";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactImage from "./ContactImage/ContactImage";
import { useTranslation } from "react-i18next";

function Modal({ onClose, data }) {
  const { t } = useTranslation(); // Initialize translation hook
  const modalRef = useRef();
  const formRef = useRef();
  const queryClient = useQueryClient();
  const currentDealId = localStorage.getItem("currentDealId");

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  const [formValue, setFormValue] = useState({
    title: data.title || "",
    firstName: data.first_name || "",
    lastName: data.last_name || "",
    company: data.organization_name || "",
    dealSize: 0,
    email: data.email || "",
    phoneNumber: data.phone_number || "",
    notes: "",
    currentStage: "",
    datetime: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInput = (e) => {
    if (e && e.target) {
      const { name, value } = e.target;
      setFormValue((prevFormValue) => ({ ...prevFormValue, [name]: value }));
    }
  };

  const createContactMutation = useMutation({
    mutationFn: async (userData) => {
      if (!currentDealId) {
        throw new Error("Deal ID not found in localStorage");
      }
      return api.post(`/deals/create-contact/${currentDealId}`, userData);
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
      ]);
      localStorage.removeItem("profile_pic");
      setFormValue({
        title: "",
        firstName: "",
        lastName: "",
        company: "",
        dealSize: 0,
        email: "",
        phoneNumber: "",
        notes: "",
        currentStage: "",
        datetime: "",
      });
      setIsSubmitting(false);
      onClose();
      toast.success(t("contact_created_success")); // Translated success message
    },
    onError: (error) => {
      setErrorMessage(error.response.data.message);
      formRef.current.scrollIntoView({ behavior: "smooth" });
      setIsSubmitting(false);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    let meetingDate;

    if (formValue.datetime) {
      meetingDate = new Date(formValue.datetime).toISOString();
    }

    const userData = {
      deal_id: currentDealId,
      title: formValue.title,
      first_name: formValue.firstName,
      last_name: formValue.lastName,
      organization_name: formValue.company,
      deal_size: formValue.dealSize,
      email: formValue.email,
      phone_number: formValue.phoneNumber,
      stage: formValue.currentStage,
      meeting_date: meetingDate,
      notes: formValue.notes,
      profile_pic: localStorage.getItem("profile_pic") || "",
    };
    createContactMutation.mutate(userData);
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className=" fixed z-50 inset-0 bg-dark-blue bg-opacity-30 backdrop-blur-sm flex justify-center overflow-y-auto h-screen"
    >
      <div className=" mt-10 flex flex-col w-full">
        <div className=" bg-white rounded-xl px-20 max-md:px-5 py-10 flex flex-col gap-7 items-center mx-20 max-md:mx-10">
          <button
            onClick={onClose}
            className=" self-end hover:text-dark-blue text-red-500"
          >
            <X size={30} />
          </button>
          <h1
            ref={formRef}
            className=" text-dark-blue text-3xl max-md:text-2xl max-sm:text-xl font-extrabold"
          >
            {t("add_new_contact")} {/* Translated header */}
          </h1>
          <form
            action=""
            onSubmit={handleSubmit}
            className=" flex flex-col gap-5 w-full"
          >
            {errorMessage && (
              <p className=" text-[#ff0000] font-semibold">{errorMessage}</p>
            )}
            <div className="flex flex-col gap-8 w-full">
              <ContactImage />
              <div className=" flex flex-row flex-wrap gap-5 justify-center max-md:justify-start">
                <FormInput
                  type="text"
                  title={t("title")}
                  placeholder={t("title_placeholder")}
                  id="title"
                  value={formValue.title}
                  onChange={handleInput}
                />
                <FormInputRequired
                  type="text"
                  title={t("first_name_required")}
                  placeholder={t("first_name_placeholder")}
                  id="firstName"
                  value={formValue.firstName}
                  onChange={handleInput}
                />
                <FormInputRequired
                  type="text"
                  title={t("last_name_required")}
                  placeholder={t("last_name_placeholder")}
                  id="lastName"
                  value={formValue.lastName}
                  onChange={handleInput}
                />
              </div>
              <div className=" flex flex-row flex-wrap gap-x-5 gap-y-8 justify-center max-md:justify-start">
                <FormInput
                  type="text"
                  title={t("company")}
                  placeholder={t("company_placeholder")}
                  id="company"
                  value={formValue.company}
                  onChange={handleInput}
                />
                <FormInput
                  type="number"
                  title={t("deal_size")}
                  placeholder={t("deal_size_placeholder")}
                  id="dealSize"
                  min={0}
                  value={formValue.dealSize}
                  onChange={handleInput}
                />
                <FormInput
                  type="email"
                  title={t("email")}
                  placeholder={t("email_placeholder")}
                  id="email"
                  value={formValue.email}
                  onChange={handleInput}
                />
                <FormInput
                  type="tel"
                  title={t("phone_number")}
                  placeholder={t("phone_number_placeholder")}
                  id="phoneNumber"
                  maxLength={15}
                  value={formValue.phoneNumber}
                  onChange={handleInput}
                />
                <DropDown
                  label={t("current_stage")}
                  id="currentStage"
                  value={formValue.currentStage}
                  onChange={handleInput}
                />
                <DateForm
                  title={t("meeting_date")}
                  value={formValue.datetime}
                  onChange={handleInput}
                  id={"datetime"}
                />
              </div>
              <div>
                <FormNotes value={formValue.notes} onChange={handleInput} title={t("notes")} id={"notes"}/>
              </div>
            </div>

            <div className=" mt-8 w-full flex items-center justify-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                text={t("create_contact")}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
