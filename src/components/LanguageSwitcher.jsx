import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const flags = {
  en: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
  fr: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg',
  de: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg',
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(i18n.language);
  const dropdownRef = useRef(null);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setSelectedLang(lang);
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
