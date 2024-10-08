import React, { useState } from "react";
import email from "../assets/Broadcast/email.png";
import sms from "../assets/Broadcast/sms.png";
import whatsapp from "../assets/Broadcast/whatsapp.png";
import Email from "../components/Broadcast/Email";
import { useTranslation } from "react-i18next";

function BroadCast() {
  const { t } = useTranslation();
  const [sendMail, setSendMail] = useState(false);

  const handleCloseEmailForm = () => setSendMail(false);

  return (
    <div className="p-6 my-10 bg-light-grey min-h-screen">
      <div className="flex justify-center">
        <h3 className="text-dark-blue font-bold text-4xl max-sm:text-2xl bg-light-grey w-full text-center pb-5">
          {t('broadcast.title')}
        </h3>
      </div>
      <div className="flex justify-center items-center gap-12 mt-20 min-h-full">
        <div 
          className="relative transition-transform duration-300 transform hover:scale-110" 
          onClick={() => setSendMail(!sendMail)}
        >
          <img src={email} className="h-60 w-60" alt={t('broadcast.emailBroadcast')} />
        </div>
        <div className="relative transition-transform duration-300 transform hover:scale-110">
          <img src={sms} className="h-60 w-60" alt={t('broadcast.smsBroadcast')} />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl font-bold">
            {t('broadcast.comingSoon')}
          </div>
        </div>
        <div className="relative transition-transform duration-300 transform hover:scale-110">
          <img src={whatsapp} className="h-60 w-60" alt={t('broadcast.whatsappBroadcast')} />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl font-bold">
            {t('broadcast.comingSoon')}
          </div>
        </div>
      </div>
      {sendMail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
          <Email onClose={handleCloseEmailForm} />
        </div>
      )}
    </div>
  );
}

export default BroadCast;
