import React, { useEffect, useState, useRef } from "react";
import SignUpNavbar from "./SignNavbar/SignUpNavbar";
import HeroSection from "./HeroSection/HeroSection";
import TrustedCompies from "./TrustedCompanies/TrustedCompies";
import AppInterations from "./AppIntegrations/AppIntegrations";

const SignUpWithMarketingUI = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const topRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (topRef.current) {
      observer.observe(topRef.current);
    }

    return () => {
      if (topRef.current) {
        observer.unobserve(topRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div ref={topRef} />
      <SignUpNavbar isScrolled={isScrolled} />
      <HeroSection />
      <TrustedCompies />
      <AppInterations />
    </div>
  );
};

export default SignUpWithMarketingUI;
