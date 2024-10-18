import React, { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { Button, FullInput, FormNotes, SearchBar } from "../Reusables";
import { toast } from "react-toastify";
import api from "../../api";
import { getFilteredContacts } from "../Search/getFilteredContacts.js";
import UploadLogo from "../InvestorsUpdate/UploadLogo.jsx";
import JoditEditor from "jodit-react";
import { useTranslation } from "react-i18next";
import EmailEditor from "react-email-editor";
import { render } from "react-dom";

function Email({ onClose }) {
  const { t } = useTranslation();
  const editor = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [formValue, setFormValue] = useState({
    sender_email: "",
    recipients_email: "",
    subject: "",
    email_content: "",
    address: "",
    name: "",
    logo: "",
    phone_number: "",
    send_to_all: false,
  });
  const emailEditorRef = useRef(null);
  const exportHtml = () => {
    const unlayer = emailEditorRef.current?.editor;

    unlayer?.exportHtml((data) => {
      const { design, html } = data;
      setFormValue((prevFormValue) => ({
        ...prevFormValue,
        email_content: html,
      }))
      console.log("exportHtml", html);
    });
  };
  const onLoad = () => {
    // editor instance is created
    // you can load your template here;
    // const templateJson = {};
    // emailEditorRef.current.editor.loadDesign(templateJson);
  };
  const onReady = (unlayer) => {
    // editor is ready
    // you can load your template here;
    // the design json can be obtained by calling
    // unlayer.loadDesign(callback) or unlayer.exportHtml(callback)
    // const templateJson = { DESIGN JSON GOES HERE };
    // unlayer.loadDesign(templateJson);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValue((prevFormValue) => ({ ...prevFormValue, [name]: value }));
  };

  const handleCheckboxChange = () => {
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      send_to_all: !prevFormValue.send_to_all,
      recipients_email: "",
    }));
  };

  useEffect(() => {
    const fetchFilteredContacts = async () => {
      const contacts = await getFilteredContacts(searchTerm);
      setFilteredContacts(contacts);
    };
    if (searchTerm) {
      fetchFilteredContacts();
    } else {
      setFilteredContacts([]);
    }
  }, [searchTerm]);

  const addRecipientEmail = (email) => {
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      recipients_email: prevFormValue.recipients_email
        ? `${prevFormValue.recipients_email} ${email}`
        : email,
    }));
    setSearchTerm("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    // Export the email content and send email after content is updated
    const unlayer = emailEditorRef.current?.editor;
    unlayer?.exportHtml(async (data) => {
      const { design, html } = data;
      
      setFormValue((prevFormValue) => ({
        ...prevFormValue,
        email_content: html,
      }));
  
      try {
        // Wait for the state update and then send the email
        const response = await api.post("general/broadcast-email", {
          ...formValue,
          email_content: html, // Use the updated content directly
        });
        
        console.log(response);
        if (response.data.status === "success") {
          toast.success(response.data.message);
          localStorage.removeItem("InvestorsUpdate");
          onClose();
        }
      } catch (error) {
        toast.error(t("somethingWentWrong"));
        setIsSubmitting(false);
      }
      
      setIsSubmitting(false);
    });
  };
  

  const handleLogoUpdate = (data) => {
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      logo: data.logoUrl,
    }));
  };

  return (
    <div className="fixed z-50 inset-0 bg-dark-blue bg-opacity-30 backdrop-blur-sm flex justify-center overflow-y-auto h-screen">
      <div className="mt-10 flex flex-col w-[80%]">
        <div className="bg-white w-full rounded-xl px-20 max-md:px-5 py-10 flex flex-col gap-10 items-center mx-4 justify-center">
          <button
            onClick={onClose}
            className="place-self-end text-red-500 hover:text-dark-blue"
          >
            <X size={30} />
          </button>
          <h1 className="text-dark-blue text-3xl max-sm:text-xl font-extrabold">
            {t("sendBroadcastEmail")}
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 justify-center w-full"
          >
            {!formValue.send_to_all && (
              <>
                <div className="flex items-center gap-4 w-full pr-4">
                  <div className="w-full">
                    <SearchBar
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeHolder={t("addRecipient")}
                    />
                    {searchTerm && (
                      <ul className="absolute z-50 min-w-80 p-2 bg-light-grey shadow-lg rounded-lg overflow-y-auto">
                        {filteredContacts.map((contact) => (
                          <li
                            key={contact.id}
                            className="hover:bg-dark-blue hover:text-white p-2 flex items-center"
                            title={t("clickToAdd")}
                            onClick={() => addRecipientEmail(contact.email)}
                          >
                            {contact.profile_pic ? (
                              <img
                                src={contact.profile_pic}
                                className="h-12 w-12 rounded-full"
                              />
                            ) : contact.first_name && contact.last_name ? (
                              <div className="h-12 w-12 rounded-full border-2 border-white bg-dark-blue text-blue items-center flex justify-center">
                                <h3 className="text-white">
                                  {contact.first_name[0].toUpperCase()}{" "}
                                  {contact.last_name[0].toUpperCase()}
                                </h3>
                              </div>
                            ) : (
                              <div className="h-12 w-12 rounded-full border-2 border-white bg-dark-blue text-blue items-center flex justify-center"></div>
                            )}
                            <div className="px-2">
                              <h3>
                                {contact.first_name} {contact.last_name}
                              </h3>
                              <p>{contact.email}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                <div>
                  <FullInput
                    id="recipients_email"
                    type="text"
                    title={t("recipientsEmail")}
                    placeholder={t("enterRecipientEmails")}
                    name="recipients_email"
                    value={formValue.recipients_email}
                    onChange={handleInput}
                  />
                </div>
              </>
            )}

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="send_to_all"
                checked={formValue.send_to_all}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="send_to_all">{t("sendToAll")}</label>
            </div>

            <div className="w-full mt-4">
              <UploadLogo updateData={handleLogoUpdate} />
            </div>

            <div>
              <FullInput
                id="sender_email"
                type="email"
                title={t("senderEmail")}
                placeholder={t("enterYourEmail")}
                name="sender_email"
                value={formValue.sender_email}
                onChange={handleInput}
              />
            </div>
            <div>
              <FullInput
                id="name"
                type="text"
                title={t("senderName")}
                placeholder={t("enterYourName")}
                name="name"
                value={formValue.name}
                onChange={handleInput}
              />
            </div>
            <div>
              <FullInput
                id="address"
                type="text"
                title={t("senderAddress")}
                placeholder={t("enterYourAddress")}
                name="address"
                value={formValue.address}
                onChange={handleInput}
              />
            </div>

            <div>
              <FullInput
                id="phone_number"
                type="text"
                title={t("senderPhoneNumber")}
                placeholder={t("enterYourPhone")}
                name="phone_number"
                value={formValue.phone_number}
                onChange={handleInput}
              />
            </div>
            <div>
              <FullInput
                id="subject"
                type="text"
                title={t("subject")}
                placeholder={t("enterSubject")}
                name="subject"
                value={formValue.subject}
                onChange={handleInput}
              />
            </div>
            <div>
              <label
                className={`bg-white px-1 text-sm font-semibold leading-6`}
              >
                {t("emailContent")}
              </label>
              <EmailEditor
                ref={emailEditorRef}
                onLoad={onLoad}
                onReady={onReady}
              />
            </div>
            <div className="mt-8 w-full flex items-center justify-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                text={t("submit")}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Email;
