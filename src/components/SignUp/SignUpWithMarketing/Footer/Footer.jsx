import React from "react";
import MansaLogo from "../../../../assets/MansaLogos/MansaLogo.png";
import LinkedInLogo from "../../../../assets/SignUpImages/LinkedInLogo.svg";
import FacebookLogo from "../../../../assets/SignUpImages/FacebookLogo.svg";
import TwitterLogo from "../../../../assets/SignUpImages/TwitterLogo.svg";
const Footer = () => {
  return (
    <div className="px-14 max-md:px-10 max-sm:px-5 pb-10 pt-20 max-md:pt-20 bg-light-grey w-full">
      <div className=" flex max-md:flex-col gap-10 justify-between items-start w-full">
        <div className="">
          <a href="https://relations.mansastars.com/" className="">
            <img
              src={MansaLogo}
              alt="Mansa's Logo"
              className=" h-10 w-14 mb-1"
            />
          </a>
          <p>The digital hub for founders and VCs</p>
          <div className=" flex gap-5 mt-3">
            <a
              href="https://www.linkedin.com/company/mansastars/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedInLogo} alt="LinkedIn Logo" className=" h-6" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100090464566088"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={FacebookLogo} alt="Facebook Logo" className=" h-6" />
            </a>
            <a
              href="https://twitter.com/mansastars"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={TwitterLogo} alt="Twitter Logo" className=" h-6" />
            </a>
          </div>
        </div>
        <div>
          <p className=" mb-2 text-mansa-blue font-semibold">Contact Us</p>
          <a href="mailto:info@mansastars.com" className=" mb-1">
            info@mansastars.com
          </a>
          <p>Alte Jakobstrasse 77b, 10179 Berlin Germany</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
