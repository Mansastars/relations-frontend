import React from "react";
import MansaLogo from "../../../../assets/MansaLogos/MansaLogo.png";
import LinkedInLogo from "../../../../assets/SignUpImages/LinkedInLogo.svg";
import FacebookLogo from "../../../../assets/SignUpImages/FacebookLogo.svg";
import { FaXTwitter } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="px-14 max-md:px-10 max-sm:px-5 pb-10 pt-20 bg-dark-blue w-full">
      <div className="flex flex-wrap justify-between gap-10 items-start max-md:flex-col w-full">
        {/* Logo and Social Links */}
        <div className="flex flex-col items-start">
          <a
            href="https://relations.mansastars.com/"
            className="hover:opacity-80 transition-opacity duration-300"
          >
            <img src={MansaLogo} alt="Mansa's Logo" className="h-10 w-14 mb-2" />
          </a>
          <p className="text-white mb-4">{t('footer_motto')}</p>
          <div className="flex gap-5">
            <a
              href="https://www.linkedin.com/company/mansastars/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition-transform duration-300"
            >
              <img src={LinkedInLogo} alt="LinkedIn Logo" className="h-6" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100090464566088"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition-transform duration-300"
            >
              <img
                src={FacebookLogo}
                alt="Facebook Logo"
                className="h-6 bg-white rounded"
              />
            </a>
            <a
              href="https://twitter.com/mansastars"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition-transform duration-300"
            >
              <FaXTwitter className="text-white h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-start">
          <p className="mb-2 text-mansa-blue font-semibold text-lg">{t('footer_contact_us')}</p>
          <a
            href="mailto:info@mansastars.com"
            className="mb-1 text-white hover:underline"
          >
            {t('footer_email')}
          </a>
          <p className="text-white">
            {t('footer_address')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
