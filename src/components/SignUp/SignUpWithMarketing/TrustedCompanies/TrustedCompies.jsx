import React from "react";
import Company_6 from "../../../../assets/SignUpImages/Company_6.jpeg";
import Title from "../../StepsUI/Title";
import { useTranslation } from 'react-i18next';

const TrustedCompies = () => {
  const { t } = useTranslation();

  return (
    <div className="px-14 max-md:px-10 max-sm:px-5 pb-10 pt-28 lg:pt-40 max-md:pt-20 lg:pb-24 bg-white w-full">
      <div className=" flex flex-col justify-center gap-12 max-md:gap-8 w-full">
        <div className="flex flex-col gap-3">
          <Title
            title={t('trusted_by')}
            className="text-4xl"
          />
        </div>
        <div className=" flex flex-wrap items-center justify-center w-full gap-10">
          <div className=" w-36 h-20 flex items-center justify-center">
            <img
              src="https://centuryoakventures.com/wp-content/uploads/2024/02/COV-Logo.svg"
              alt="Trusted Company 1"
              // className=" w-36 h-20"
            />
          </div>
          <div className=" w-36 h-20 flex items-center justify-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROLOuV-V7z8KiR5Tfpv0X_soAzzO-hSTsPT6IHjnnE4W2B0nXdXdZUyuRvB28npPtY6QM&usqp=CAU"
              alt="Trusted Company 2"
            />
          </div>
          <div className=" w-36 h-20 flex items-center justify-center">
            <img
              src="https://assets-global.website-files.com/64217dee51bd3f4b49be943f/64218814dc531adc96a0e9ba_MT%20Logo.webp"
              alt="Trusted Company 3"
              // className=" w-36 h-20"
            />
          </div>
          <div className=" w-36 h-20 flex items-center justify-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ddEq7h0SWhqsRJwQdBgSTOTb6jH_B8QT5XI9vDon0TPX-5MwhL7EDsxzbmAu9RREZQ&usqp=CAU"
              alt="Trusted Company 4"
              // className=" w-36 h-20"
            />
          </div>
          <div className=" w-36 h-20 flex items-center justify-center">
            <img
              src="https://media.licdn.com/dms/image/v2/C560BAQHpEkHODoMiLw/company-logo_200_200/company-logo_200_200/0/1664218436549/lvlup_vc_logo?e=2147483647&v=beta&t=BJmJE1qaWoCFs0mDlhov5x_FfF-Vm0Y47JZlfxybY5E"
              alt="Trusted Company 5"
              // className=" w-36 h-20"
            />
          </div>
          <div className=" w-36 h-20 flex items-center justify-center">
            <img src={Company_6} alt="Trusted Company 6" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedCompies;
