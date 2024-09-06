import React, { useState, useEffect } from "react";
import { WaitlistButton } from "../Reusables";
import WaitlistForm from "./WaitlistForm";

function WaitlistCard({ image, title, note }) {
  const list = note.split("- ");
  const [joinWaitlist, setJoinWaitlist] = useState(false);

  // Function to handle closing the WaitlistForm
  const handleCloseWaitlistForm = () => setJoinWaitlist(false);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (joinWaitlist) {
      document.body.style.overflow = "hidden"; // Disable background scrolling
    } else {
      document.body.style.overflow = "auto"; // Re-enable background scrolling when modal is closed
    }

    return () => {
      document.body.style.overflow = "auto"; // Clean up when component unmounts or modal closes
    };
  }, [joinWaitlist]);

  return (
    <>
      <div className=" flex flex-col justify-between w-[300px] md:w-[350px] m-4 p-6 rounded-3xl border shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out bg-white">
        <div>
          {/* Image */}
          <div className="flex justify-center">
            <img
              src={image}
              alt="img"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-gray-200 hover:rounded-2xl transition-all duration-500 ease-in-out object-cover"
            />
          </div>

          {/* Title */}
          <div className="text-center mt-6">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 hover:text-mansa-blue transition-colors duration-300">
              {title}
            </h1>
          </div>

          {/* List Items */}
          <ul className="list-disc mt-4 p-4 space-y-2 text-gray-600">
            {list.map((item, index) => (
              <li
                key={index}
                className="text-lg leading-6 hover:text-gray-900 transition-colors duration-200 ease-in-out"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Join Waitlist Button */}
        <div className="flex justify-center py-4">
          <WaitlistButton
            title="Join Waitlist"
            onClick={() => setJoinWaitlist(true)} // Show modal on click
            className="hover:scale-105 transition-transform transform duration-300 ease-in-out"
          />
        </div>
      </div>

      {joinWaitlist && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
          <WaitlistForm onClose={handleCloseWaitlistForm} />
        </div>
      )}
    </>
  );
}

export default WaitlistCard;
