import React from "react";
import Title from "../../StepsUI/Title";
import AppIntegrationIcon from "./AppIntegrationIcon";
import GoogleCalenderIcon from "../../../../assets/SignUpImages/GoogleCalenderIcon.svg";
import CalendlyLogo from "../../../../assets/SignUpImages/CalendlyLogo.svg";
import Duo from "../../../../assets/SignUpImages/Duo.svg";
import GmailIcon from "../../../../assets/SignUpImages/GmailIcon.svg";
import GoogleMeet from "../../../../assets/SignUpImages/GoogleMeet.svg";
import LinkedInLogo from "../../../../assets/SignUpImages/LinkedInLogo.svg";
import MicrosoftTeamsIcon from "../../../../assets/SignUpImages/MicrosoftTeamsIcon.svg";
import SubTitle from "../../StepsUI/SubTitle";

const AppInterations = () => {
  return (
    <div className="px-14 max-md:px-10 max-sm:px-5 py-20 bg-light-grey w-full">
      <div className="flex flex-col justify-center gap-12 max-md:gap-8 w-full">
        {/* Title Section */}
        <div className="text-center flex flex-col gap-3">
          <Title title="Integrate with Apps You Use Daily" />
          <SubTitle subTitle="Seamlessly connect your CRM with Gmail, Google Meet, and more for enhanced productivity." />
        </div>

        {/* Icons Section */}
        <div className="flex flex-wrap justify-center items-center gap-12 max-md:gap-8 max-sm:gap-6">
          <AppIntegrationIcon image={GoogleCalenderIcon} isComingSoon={true} />
          <AppIntegrationIcon image={GmailIcon} />
          <AppIntegrationIcon image={GoogleMeet} isComingSoon={true} />
          <AppIntegrationIcon image={CalendlyLogo} isComingSoon={true} />
          <AppIntegrationIcon image={MicrosoftTeamsIcon} isComingSoon={true} />
          <AppIntegrationIcon image={LinkedInLogo} isComingSoon={true} />
          <AppIntegrationIcon image={Duo} isComingSoon={true} />
        </div>
      </div>
    </div>
  );
};

export default AppInterations;
