import React from "react";
import "./CSS/glassmorphism.css";
import WebsiteShareImage from "../../assets/LoginImage/WebsiteShareImage.jpeg";
import Company_6 from "../../assets/SignUpImages/Company_6.jpeg";
import { useTranslation } from "react-i18next";

const LoginImageContainer = () => {
  const { t } = useTranslation();

  return (
    <div
      className={`bg-[rgba(8,165,170,0.2)] w-full h-full min-h-screen max-lg:min-h-fit flex flex-col justify-center p-8 max-sm:p-3`}
    >
      <div className=" glassmorphism w-full h-fit p-5 max-sm:p-2">
        <img
          src={WebsiteShareImage}
          alt="Dashboard"
          className="rounded-t-lg "
        />
        <div className=" bg-white px-5 py-10 rounded-b-lg">
          <div>
            <h3 className=" text-2xl max-sm:text-lg font-semibold text-center mb-10 mt-5">
              {t("trusted_by_fund_managers")}
            </h3>
          </div>
          <div className=" flex flex-wrap items-center justify-center w-full gap-5">
            <div className=" w-20 h-12 flex items-center justify-center">
              <img
                src="https://centuryoakventures.com/wp-content/uploads/2024/02/COV-Logo.svg"
                alt="Trusted Company 1"
              />
            </div>
            <div className=" w-20 h-12 flex items-center justify-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROLOuV-V7z8KiR5Tfpv0X_soAzzO-hSTsPT6IHjnnE4W2B0nXdXdZUyuRvB28npPtY6QM&usqp=CAU"
                alt="Trusted Company 2"
              />
            </div>
            <div className=" w-20 h-12 flex items-center justify-center">
              <img
                src="https://assets-global.website-files.com/64217dee51bd3f4b49be943f/64218814dc531adc96a0e9ba_MT%20Logo.webp"
                alt="Trusted Company 3"
              />
            </div>
            <div className=" w-20 h-12 flex items-center justify-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ddEq7h0SWhqsRJwQdBgSTOTb6jH_B8QT5XI9vDon0TPX-5MwhL7EDsxzbmAu9RREZQ&usqp=CAU"
                alt="Trusted Company 4"
              />
            </div>
            <div className=" w-20 h-12 flex items-center justify-center">
              <img
                src="https://media.licdn.com/dms/image/v2/C560BAQHpEkHODoMiLw/company-logo_200_200/company-logo_200_200/0/1664218436549/lvlup_vc_logo?e=2147483647&v=beta&t=BJmJE1qaWoCFs0mDlhov5x_FfF-Vm0Y47JZlfxybY5E"
                alt="Trusted Company 5"
              />
            </div>
            <div className=" w-20 h-12 flex items-center justify-center">
              <img src={Company_6} alt="Trusted Company 6" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginImageContainer;
