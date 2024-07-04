import React from "react";
import Company_2 from "../../../../assets/SignUpImages/Company_2.png";
import Company_4 from "../../../../assets/SignUpImages/Company_4.png";
import Company_5 from "../../../../assets/SignUpImages/Company_5.png";
import Company_6 from "../../../../assets/SignUpImages/Company_6.jpeg";
import Title from "../../StepsUI/Title";
import SubTitle from "../../StepsUI/SubTitle";

const TrustedCompies = () => {
  return (
    <div className="px-14 max-md:px-10 max-sm:px-5 pb-10 pt-28 max-md:pt-20 bg-white w-full">
      <div className=" flex flex-col justify-center gap-12 max-md:gap-8 w-full">
        <div className="flex flex-col gap-3">
          <Title title="Over 100 organizations close deals with Mansa Stars" />
          <SubTitle subTitle="Trusted by Leading Companies Worldwide to Drive Success and Growth" />
        </div>
        <div className=" flex flex-wrap items-center justify-center w-full gap-10">
          <div className=" w-36 h-20 flex items-center justify-center">
            <img
              src="https://centuryoakventures.com/wp-content/uploads/2024/02/COV-Logo.svg"
              alt="Trusted Company 1"
              className=" w-36 h-20"
            />
          </div>
          <div className=" w-36 h-20 flex items-center justify-center">
            <img src={Company_2} alt="Trusted Company 2" />
          </div>
          <div className=" w-36 h-20 flex items-center justify-center">
            <img
              src="https://assets-global.website-files.com/64217dee51bd3f4b49be943f/64218814dc531adc96a0e9ba_MT%20Logo.webp"
              alt="Trusted Company 3"
              className=" w-36 h-20"
            />
          </div>
          <div className=" w-36 h-20 flex items-center justify-center">
            <img
              src={Company_4}
              alt="Trusted Company 4"
              className=" w-36 h-20"
            />
          </div>
          <div className=" w-36 h-20 flex items-center justify-center">
            <img
              src={Company_5}
              alt="Trusted Company 5"
              className=" w-36 h-20"
            />
          </div>
          <div className=" w-36 h-20 flex items-center justify-center">
            <img
              src={Company_6}
              alt="Trusted Company 6"
              className=" w-36 h-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedCompies;
