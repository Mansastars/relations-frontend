import { Linkedin, X } from "lucide-react";
import React, { useRef } from "react";
import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from "react-share";

function ContactUs({ onClose }) {
  const contactUsRef = useRef();

  const closeContactUsModal = (e) => {
    if (contactUsRef.current === e.target) {
      onClose();
    }
  };

  return (
    <>
      {
        <div
          ref={contactUsRef}
          onClick={closeContactUsModal}
          className=" fixed z-50 inset-0 bg-dark-blue bg-opacity-30 backdrop-blur-sm flex justify-center overflow-y-auto h-screen"
        >
          <div className=" mt-10 flex flex-col">
            <div className=" bg-white w-full rounded-xl px-20 max-md:px-5 py-10 flex flex-col gap-5 items-center mx-4 justify-center">
              <button
                onClick={onClose}
                className=" place-self-end text-red-500 hover:text-dark-blue"
              >
                <X size={30} />
              </button>
              <h1 className=" text-dark-blue text-3xl max-sm:text-xl font-extrabold">
                Contact Us
              </h1>
              <div className=" mt-5 flex max-md:flex-wrap items-center justify-center gap-5 text-dark-blue font-semibold">
                <div className=" flex flex-col items-center justify-center gap-5">
                  <a href="mailto:service@mansastars.com" target="_top">
                    <EmailIcon round size={40} />
                  </a>
                  <p>Email</p>
                </div>

                <div className=" flex flex-col items-center justify-center gap-5">
                  <a
                    href="https://www.linkedin.com/company/mansastars/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedinIcon round size={40} />
                  </a>
                  <p>LinkedIn</p>
                </div>

                <div className=" flex flex-col items-center justify-center gap-5">
                  <a
                    href="https://www.facebook.com/profile.php?id=100090464566088"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FacebookIcon round size={40} />
                  </a>
                  <p>Facebook</p>
                </div>

                <div className=" flex flex-col items-center justify-center gap-5">
                  <a
                    href="https://twitter.com/mansastars"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TwitterIcon round size={40} />
                  </a>
                  <p>Twitter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default ContactUs;
