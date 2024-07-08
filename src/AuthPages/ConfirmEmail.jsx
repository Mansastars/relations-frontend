import { Modal } from "flowbite-react";
import SuccessIcon from "../assets/PaymentIcon/Sucess.png";
import api from "../api";
import { useState, useEffect } from "react";
import x_button from "../assets/PaymentIcon/x-button.png";

export default function ConfirmEmail({ userEmail, onClose, show }) {
  const [successMessage, setSuccessMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let timer;
    if (isSuccess) {
      timer = setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [isSuccess]);

  const resendMail = async () => {
    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);

    const userData = {
      email: userEmail,
    };

    try {
      await api.post("users/resend-verification", userData);
      setIsSuccess(true);
      setSuccessMessage(
        "Success! Your verification email has been resent. Please check your inbox."
      );
    } catch (error) {
      console.log(error);
      setSuccessMessage("");
      setIsSuccess(false);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Modal show={show} onClose={onClose}>
        <Modal.Header>
          {isSuccess && (
            <p className=" text-mansa-blue font-bold max-sm:text-base">
              {successMessage}
            </p>
          )}
        </Modal.Header>
        <Modal.Body>
          <div className="flex flex-col gap-5 items-center">
            {!isError ? (
              <img
                src={SuccessIcon}
                alt="Sucsess icon"
                width={100}
                className=" max-sm:w-14"
              />
            ) : (
              <img
                src={x_button}
                alt="Error Icon"
                width={100}
                className="max-sm:w-14"
              />
            )}
            <h1 className=" font-bold text-3xl text-dark-blue max-sm:text-xl">
              Registration Sucessful
            </h1>
            {isLoading && (
              <p className="text-center text-dark-blue max-sm:text-base">
                Processing...
              </p>
            )}
            {!isError && !isLoading && (
              <div>
                <p className="text-center text-dark-blue max-sm:text-base">
                  Your registration was successful! The next step is to verify
                  your email address (
                  <span className="text-mansa-blue">{userEmail}</span>). Please
                  check your email inbox for a verification message. Follow the
                  link provided to verify your email address.
                </p>
                <strong>
                  <p className="text-center text-dark-blue max-sm:text-base mt-5">
                    If you do not see the email, please check your{" "}
                    <span className=" font-bold">spam or junk folder</span>.
                  </p>
                </strong>
              </div>
            )}
            {isError && (
              <p className="text-center text-red-500 max-sm:text-base">
                Unable to send the email. Please try again later.
              </p>
            )}
          </div>
        </Modal.Body>
        {!isLoading ? (
          <Modal.Footer>
            <p className="text-dark-blue text-center max-sm:text-base">
              If you did not receive the email,{" "}
              <span
                className="text-mansa-blue font-semibold cursor-pointer hover:text-dark-blue"
                onClick={resendMail}
              >
                Resend confirmation mail
              </span>
            </p>
          </Modal.Footer>
        ) : null}
      </Modal>
    </>
  );
}
