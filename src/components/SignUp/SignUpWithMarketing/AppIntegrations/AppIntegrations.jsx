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
    <div className="px-14 max-md:px-10 max-sm:px-5 py-10 bg-light-grey w-full">
      <div className=" flex flex-col justify-center gap-12 max-md:gap-8 w-full">
        <div className=" flex flex-col gap-3">
          <Title title="Integrate with apps you use daily" />
          <SubTitle subTitle="Seamlessly Connect Your CRM with Gmail, Google Meet, and More for Enhanced Productivity" />
        </div>
        <div className=" flex flex-wrap justify-center items-center gap-10">
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
