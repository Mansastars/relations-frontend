import { Modal } from "flowbite-react";
import x_button from "../assets/PaymentIcon/x-button.png";
import { Button } from "../components/Reusables";

export default function EmailNotVerified({ onClose, show, onClick }) {
  return (
    <>
      <Modal show={show} onClose={onClose}>
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <div className="flex flex-col gap-5 items-center">
            <img
              src={x_button}
              alt="Error Icon"
              width={100}
              className=" max-sm:w-14"
            />
            <h1 className=" font-bold text-3xl text-red-500 max-sm:text-xl">
              Unverified Account
            </h1>
            <p className="text-center text-dark-blue max-sm:text-base">
              Your account is not verified. Please verify your email address.
            </p>
            <div className=" mt-5">
              <Button text="Verify Account" onClick={onClick} />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
