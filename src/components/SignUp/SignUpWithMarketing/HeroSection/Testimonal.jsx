import React from "react";
import TestimonalKosta from "../../../../assets/SignUpImages/TestimonalKosta.jpeg";

const Testimonal = () => {
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
              "Mansastars is exactly what a founder needs. A platform that
              allows you to manage your investor funnel which is always a
              challenge while growing your own business. Very excited to start
              using the CRM & Investor Update Report. It's the features I've
              been waiting for. Really impressive product and business!"
            </div>
            <div className=" flex flex-col gap-1">
              <h3 className=" text-sm font-bold">Kosta Scholiadis</h3>
              <p className=" text-sm font-medium">
                Founder & CEO of Street Wallet
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonal;
