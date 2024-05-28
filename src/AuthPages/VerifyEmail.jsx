import React from "react";
import { Button, SignUpRequired } from "../components/Reusables";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ForgotPasswordModal from "./VerifyEmailModal";

function VerifyEmail() {
  const [formValue, setFormValue] = useState({ email: "" });
  const [openConfirmEmailModal, setOpenConfirmEmailModal] = useState(false);

  const navigate = useNavigate();

  const handleInput = (e) => {
    if (e && e.target) {
      const { name, value } = e.target;
      setFormValue((prevFormValue) => ({ ...prevFormValue, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setOpenConfirmEmailModal(true);
  };

  const closeModal = () => {
    setFormValue({ email: "" });
    setOpenConfirmEmailModal(false);
    // navigate('/reset-password/:verificationToken');
  };

  return (
    <div className=" mx-2 flex justify-center relative top-10">
      <div className="bg-white px-5 py-8 flex flex-col mt-10 mb-5 rounded-2xl h-full w-1/2 max-lg:w-[70%] max-md:w-[90%]">
        <div className=" flex flex-col justify-center items-center gap-10 h-fit ">
          <div className=" flex flex-col justify-center items-center">
            <h1 className=" text-dark-blue font-extrabold text-4xl max-sm:text-3xl mb-5 text-center">
              Account Recovery
            </h1>
            <p className=" text-base text-dark-blue text-center mt-5 w-[80%]">
              Please enter the email address associated with your account below,
              and we'll send you instructions on how to reset your password.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className=" flex flex-col gap-16 justify-center items-center w-[80%]"
          >
            <SignUpRequired
              type="email"
              title="Email*"
              placeholder="SundiJoe@gmail.com"
              id="email"
              autoComplete="email"
              value={formValue.email}
              onChange={handleInput}
            />
            <Button type="submit" text="Send Reset Instructions" />
          </form>
        </div>
      </div>
      {setOpenConfirmEmailModal && (
        <ForgotPasswordModal
          userEmail={formValue.email}
          onClose={closeModal}
          show={openConfirmEmailModal}
        />
      )}
    </div>
  );
}

export default VerifyEmail;
