import { X } from "lucide-react";
import { FormInput, Button } from "../../Reusables";
import { useState } from "react";
import { toast } from "react-toastify";
import api from "../../../api";


function EditSingleContact({ onClose, title, firstName, lastName, email, phoneNumber, org, id, onUpdate, gender, linkedin_url }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formValue, setFormValue] = useState({
        title: title,
        first_name: firstName,
        last_name: lastName,
        organization_name: org,
        email: email,
        phone_number: phoneNumber,
        gender: gender,
        linkedin_url: linkedin_url
    });

    const handleInput = (e) => {
        if (e && e.target) {
            const { name, value } = e.target;
            setFormValue((prevFormValue) => ({ ...prevFormValue, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
          const res = await api.patch(`contacts/edit-single-contact/${id}`, formValue);
          if (res.status === 200) {
            toast.success(res.data.message);
            onUpdate({ ...formValue, id });
          } else {
            toast.error(res.data.message);
          }
        } catch (error) {
          console.log(error);
          toast.error(error.response?.data?.message || "Failed to update contact");
        } finally {
          setIsSubmitting(false);
        }
      };
    return (
        <div
            className=" fixed z-50 inset-0 bg-dark-blue bg-opacity-30 backdrop-blur-sm flex justify-center overflow-y-auto h-screen"
        >
            <div className=" mt-10 flex flex-col">
                <div className=" bg-white w-full rounded-xl px-20 max-md:px-5 py-10 flex flex-col gap-10 items-center mx-4 justify-center">

                    <button
                        onClick={onClose}
                        className=" place-self-end text-red-500 hover:text-dark-blue"                    >
                        <X size={30} />
                    </button>
                    <h1 className=" text-dark-blue text-3xl max-sm:text-xl font-extrabold">
                        Update Contact
                    </h1>
                    <form
                        onSubmit={handleSubmit}
                        className=" flex flex-col gap-5 justify-center w-full"
                    >
                        <div className="flex flex-col gap-5 w-full ">
                            <div className="flex justify-between">
                                <FormInput
                                    type="text"
                                    title="Title"
                                    placeholder=""
                                    id="title"
                                    value={formValue.title}
                                    onChange={handleInput}
                                />
                                <FormInput
                                    type="text"
                                    title="First name"
                                    placeholder=""
                                    id="first_name"
                                    value={formValue.first_name}
                                    onChange={handleInput}
                                />
                                <FormInput
                                    type="text"
                                    title="Last name"
                                    placeholder=""
                                    id="last_name"
                                    value={formValue.last_name}
                                    onChange={handleInput}
                                />
                            </div>
                            <div className="flex justify-between">
                                <FormInput
                                    type="text"
                                    title="Phone number"
                                    placeholder=""
                                    id="phone_number"
                                    value={formValue.phone_number}
                                    onChange={handleInput}
                                />
                                <FormInput
                                    type="text"
                                    title="Email"
                                    placeholder=""
                                    id="email"
                                    value={formValue.email}
                                    onChange={handleInput}
                                />
                                <FormInput
                                    type="text"
                                    title="Gender"
                                    placeholder=""
                                    id="gender"
                                    value={formValue.gender}
                                    onChange={handleInput}
                                />
                            </div>
                            <div className="flex justify-between">
                                <FormInput
                                    type="text"
                                    title="Organization"
                                    placeholder=""
                                    id="organization_name"
                                    value={formValue.organization_name}
                                    onChange={handleInput}
                                />
                                <FormInput
                                    type="text"
                                    title="Linkedin Url"
                                    placeholder=""
                                    id="linkin_url"
                                    value={formValue.linkedin_url}
                                    onChange={handleInput}
                                />
                            </div>
                            <div className="mt-8 w-full flex items-center justify-center">
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    text="Update Contact"
                                    // onClick={(e) => handleSubmit(e)}
                                />
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditSingleContact