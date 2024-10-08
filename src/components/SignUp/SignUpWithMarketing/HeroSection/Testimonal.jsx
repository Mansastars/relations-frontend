import React from "react";
import TestimonalKosta from "../../../../assets/SignUpImages/TestimonalKosta.jpeg";
import { useTranslation } from 'react-i18next';

const Testimonal = () => {
  const { t } = useTranslation();

  return (
    <div className="px-14 max-md:px-10 max-sm:px-5 py-10 bg-light-grey">
      <div className=" w-[45%] max-md:w-full">
        <div className=" flex flex-col-reverse lg:flex-row lg:items-center max-md:justify-center gap-5">
          <div className="w-full lg:w-[35%] flex">
            <img
              src={TestimonalKosta}
              alt="Testimonal Image"
              className=" rounded-full h-32 w-32 max-md:m-auto"
            />
          </div>
          <div className=" max-md:text-center flex flex-col gap-3 w-full">
            <div className=" text-gray-800">
              {t('testimonial_quote')}
            </div>
            <div className=" flex flex-col gap-1">
              <h3 className=" text-sm font-bold">{t('kosta_scholiadis')}</h3>
              <p className=" text-sm font-medium">{t('founder_ceo')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonal;
