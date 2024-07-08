import React from "react";
import Title from "../../StepsUI/Title";
import SubTitle from "../../StepsUI/SubTitle";
import "../../CSS/investorsUpdateSection.css";
import InvestorsUpdateImage from "../../../../assets/SignUpImages/InvestorsUpdate.png";

const InvestorsUpdate = () => {
  return (
    <div className="px-14 max-md:px-10 max-sm:px-5 py-20 bg-white w-full">
      <div className=" flex flex-col justify-center gap-12 max-md:gap-8 w-full">
        <div className=" flex flex-col gap-3">
          <Title title="Discover our AI-powered investor relations automation" />
          <SubTitle subTitle="Revolutionizing How You Connect with Investors for Real-Time Insights and Efficiency" />
        </div>
        <div className=" flex flex-col gap-10">
          <div className="clients-card w-full gap-5 justify-center items-center">
            <div className=" text-wrap text-lg font-semibold">
              Investment Managers require Updates from Founders
            </div>
            <div className=" self-center w-full">
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7201584231699873792"
                height="300"
                width="100%"
                title="Embedded post"
              ></iframe>
            </div>
          </div>

          <div className="clients-card w-full gap-5 justify-center items-center">
            <div className=" text-wrap text-lg font-semibold">
              Investors Update Template
            </div>
            <div className=" self-center w-full h-80 overflow-auto">
              <img
                src={InvestorsUpdateImage}
                alt="Investors Update Template"
                className=" max-h-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorsUpdate;
