import React from "react";
import Title from "../../StepsUI/Title";
import SubTitle from "../../StepsUI/SubTitle";
import "../../CSS/investorsUpdateSection.css";
import InvestorsUpdateImage from "../../../../assets/SignUpImages/InvestorsUpdate.png";
import { useTranslation } from 'react-i18next';

const InvestorsUpdate = () => {
  const { t } = useTranslation();

  return (
    <div className="px-14 max-md:px-10 max-sm:px-5 py-20 bg-white w-full">
      <div className=" flex flex-col justify-center gap-12 max-md:gap-8 w-full">
        <div className=" flex flex-col gap-3">
          <Title title={t('investor_update_title')} />
          <SubTitle subTitle={t('investor_update_subtitle')} />
        </div>
        <div className=" flex flex-col gap-10">
          <div className="clients-card w-full gap-5 justify-center items-center">
            <div className=" text-wrap text-lg font-semibold">
              {t('investment_managers_need_updates')}
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
              {t('investors_update_template')}
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
