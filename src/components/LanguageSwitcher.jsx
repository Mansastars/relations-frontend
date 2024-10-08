import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import franceFlag from '../assets/flag_france.svg';
import germanFlag from '../assets/flag_german.svg';
import usaFlag from '../assets/flag_usa.svg';

const flags = {
  en: usaFlag,
  fr: franceFlag,
  de: germanFlag,
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Set the default language to English and check for saved language in localStorage
  const getInitialLanguage = () => {
    const savedLang = localStorage.getItem('selectedLang');
    return savedLang ? savedLang : 'en';
  };

  const [selectedLang, setSelectedLang] = useState(getInitialLanguage);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setSelectedLang(lang);
    localStorage.setItem('selectedLang', lang); // Save the selected language to localStorage
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Set the language based on the selectedLang state when the component mounts
    i18n.changeLanguage(selectedLang);
  }, [selectedLang, i18n]);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="block w-full bg-white border border-gray-300 rounded-md shadow-sm py-1 pl-2 pr-8 text-sm text-left focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      >
        <img src={flags[selectedLang]} alt={selectedLang} className="inline-block w-5 h-5 mr-2" />
        <span className='text-black'>{selectedLang.toUpperCase()}</span>
      </button>
      {isOpen && (
        <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
          <div className="py-1">
            <div onClick={() => changeLanguage('en')} className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
              <img src={flags.en} alt="English" className="w-5 h-5 mr-2" /> <span className='text-black'>En</span>
            </div>
            <div onClick={() => changeLanguage('fr')} className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
              <img src={flags.fr} alt="French" className="w-5 h-5 mr-2" /> <span className='text-black'>Fr</span>
            </div>
            <div onClick={() => changeLanguage('de')} className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
              <img src={flags.de} alt="German" className="w-5 h-5 mr-2" /> <span className='text-black'>De</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
