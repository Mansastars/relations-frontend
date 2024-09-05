import React, { useState } from "react";
import SignUpNavbar from "../components/SignUp/SignUpWithMarketing/SignNavbar/SignUpNavbar";
import { WaitlistButton } from "../components/Reusables";
import WaitlistCard from "../components/Waitlist/WaitlistCard";
import WaitlistForm from "../components/Waitlist/WaitlistForm";
import RequestFeatureForm from "../components/Waitlist/RequestFeatureForm";
import Footer from "../components/SignUp/SignUpWithMarketing/Footer/Footer";
import AppInterations from "../components/SignUp/SignUpWithMarketing/AppIntegrations/AppIntegrations";
import { waitlistContent } from "../components/Waitlist/waitlistContent";

function Waitlist() {
  const [joinWaitlist, setJoinWaitlist] = useState(false);
  const [requestFeature, setRequestFeature] = useState(false);

  const handleCloseRequestFeature = () => setRequestFeature(false);
  const handleCloseWaitlistForm = () => setJoinWaitlist(false); // Corrected missing handleCloseWaitlistForm

  return (
    <div className="min-h-screen bg-light-grey">
      {/* Navbar */}
      <div className="mb-8 shadow-md">
        <SignUpNavbar />
      </div>

      {/* Main Content */}
      <div className="flex justify-center items-center min-h-screen mb-16"> {/* Full screen height */}
        <div className="w-10/12 max-w-7xl border-2 border-mansa-blue rounded-2xl p-8 bg-white shadow-lg">
          {/* Buttons */}
          <div className="flex justify-evenly mb-12">
            <WaitlistButton
              title="Request a feature"
              onClick={() => setRequestFeature(!requestFeature)}
              className="hover:scale-105 transition-transform transform duration-300 ease-in-out"
            />
          </div>

          {/* Waitlist Cards */}
          <div className="flex flex-wrap justify-center gap-8">
            {waitlistContent.map((item, index) => (
              <WaitlistCard
                key={index}
                title={item.title}
                image={item.image}
                note={item.note}
              />
            ))}
          </div>

          {/* App Integrations */}
          <div className="mt-16 flex justify-center">
            <div className="w-full md:w-4/5 m-4 p-6 rounded-2xl border-2 border-gray-200 shadow-md bg-light-grey">
              <AppInterations />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
      {requestFeature && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300"
        >
          <RequestFeatureForm onClose={handleCloseRequestFeature} />
        </div>
      )}
    </div>
  );
}

export default Waitlist;
