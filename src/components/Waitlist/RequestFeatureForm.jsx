import React, { useState } from "react";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";  // Import the useTranslation hook
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
  const { t } = useTranslation();  // Initialize translation
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    let data = formValue;
    try {
      const response = await api.post(`general/request-feature`, data);
      console.log(response);
      if (response.data.status === "success") {
        toast.success(response.data.message);
        onClose();
      } else {
        toast.error(t("form.errorSubmit"));  // Translation for error
        setIsSubmitting(false);
      }
    } catch (error) {
      toast.error(t("form.errorSubmit"));  // Translation for error
    }
  };

  return (
    <div className="fixed z-50 inset-0 bg-dark-blue bg-opacity-30 backdrop-blur-sm flex justify-center overflow-y-auto h-screen">
      <div className="mt-10 flex flex-col">
        <div className="bg-white w-full rounded-xl px-20 max-md:px-5 py-10 flex flex-col gap-10 items-center mx-4 justify-center">
          <button
            onClick={onClose}
            className="place-self-end text-red-500 hover:text-dark-blue"
          >
            <X size={30} />
          </button>
          <h1 className="text-dark-blue text-3xl max-sm:text-xl font-extrabold">
            {t("form.title")}  {/* Title Translation */}
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 justify-center w-full">
            <div className="flex justify-between flex-wrap">
              <FormInput
                type="text"
                title={t("form.firstName")} 
                placeholder={t("form.firstNamePlaceholder")}
                id="first_name"
                value={formValue.first_name}
                onChange={handleInput}
              />
              <FormInput
                type="text"
                title={t("form.lastName")}  
                placeholder={t("form.lastNamePlaceholder")}
                id="last_name"
                value={formValue.last_name}
                onChange={handleInput}
              />
            </div>
            <div className="flex justify-between flex-wrap">
              <FormInput
                type="text"
                title={t("form.email")}  
                placeholder={t("form.emailPlaceholder")}
                id="email"
                value={formValue.email}
                onChange={handleInput}
              />
              <FormInput
                type="text"
                title={t("form.mobile")} 
                placeholder={t("form.mobilePlaceholder")}
                id="phone_number"
                value={formValue.phone_number}
                onChange={handleInput}
              />
            </div>
            <FullInput
              type="text"
              title={t("form.featureTitle")}  
              placeholder={t("form.featureTitlePlaceholder")}
              id="feature_title"
              value={formValue.feature_title}
              onChange={handleInput}
            />
            <FormNotes
              value={formValue.feature_note}
              onChange={handleInput}
              title={t("form.featureNote")}  
              id="feature_note"
            />
            <DateForm
              title={t("form.featureDate")}  
              value={formValue.feature_date}
              onChange={handleInput}
              id={"feature_date"}
            />
            <FullInput
              type="text"
              title={t("form.amount")}  
              placeholder={t("form.amountPlaceholder")}
              id="amount"
              value={formValue.amount}
              onChange={handleInput}
            />
            <FullInput
              type="text"
              title={t("form.teamSize")} 
              placeholder={t("form.teamSizePlaceholder")}
              id="team_size"
              value={formValue.team_size}
              onChange={handleInput}
            />
            <div className="mt-8 w-full flex items-center justify-center">
              <Button type="submit" disabled={isSubmitting} text={t("form.submit")} />  {/* Submit button Translation */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RequestFeatureForm;
