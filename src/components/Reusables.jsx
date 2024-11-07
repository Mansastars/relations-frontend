// This file contains all the resuables components
import { Children, useState } from "react";
import "../index.css";
import search from "../assets/search.svg";
import "react-phone-number-input/style.css";

// Sidebar items content
export function SidebarItem({ icon, text, activeItem, setActiveItem, id }) {
  const handleClick = () => {
    setActiveItem(id);
  };
  return (
    <div
      onClick={handleClick}
      className={`text-white flex flex-row gap-6 max-[768px]:gap-0 py-2 px-3 w-full items-center justify-start max-[768px]:justify-center ${
        activeItem === id ? "active" : ""
      }`}
    >
      <img className=" w-7" src={icon} alt="" />
      <p>{text}</p>
    </div>
  );
}

// Search bar
export function SearchBar({ value, onChange, placeHolder }) {
  return (
    <label className="relative inline-flex items-center w-full rounded-full">
      <span className="sr-only">Search</span>
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <img
          src={search}
          alt="search-icon"
          className="h-5 w-5 fill-slate-300"
          viewBox="0 0 20 20"
        />
      </span>
      <input
        className="placeholder:text-dark-blue block bg-light-grey w-full border border-dark-blue rounded-full pl-9 pr-3 focus:outline-none focus:border-dark-blue font-bold max-md:text-sm px-12 py-4"
        placeholder={placeHolder}
        type="text"
        name="search"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

// Buttons
export function Button({ text, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`
        bg-mansa-blue text-white px-12 py-4 rounded-xl shadow-md transition-all duration-300 ease-in-out transform hover:bg-dark-blue hover:scale-105 active:scale-95 active:bg-dark-blue focus:outline-none focus:ring-4 focus:ring-mansa-blue/50
        max-md:py-3 max-md:px-6
        ${className}
      `}
    >
      <p className="font-bold text-base max-md:text-sm">{text}</p>
    </button>
  );
}

export function ButtonWithIcon({ onClick, className, children }) {
  return (
    <button
      onClick={onClick}
      className={`
        bg-mansa-blue active:bg-dark-blue text-white px-12 py-4 rounded-xl transition-all duration-200 shadow hover:bg-dark-blue
        max-md:py-3 max-md:px-2
        ${className}
        `}
    >
      {children}
    </button>
  );
}
export function WaitlistButton({ onClick, className, title }) {
  return (
    <button
      onClick={onClick}
      className={`
        bg-dark-blue text-white py-3 px-6 text-lg font-semibold rounded-xl shadow-lg transition-transform transform hover:scale-105 active:scale-95 
        hover:bg-mansa-blue active:bg-mansa-blue focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50
        ${className}
      `}
    >
      {title}
    </button>
  );
}

// Form template for not required inputs (NOT FULL)
export function FormInput({
  type,
  title,
  placeholder,
  id,
  value,
  onChange,
  min,
  maxLength,
  pattern,
}) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div
      className={` relative col-span-full w-60 max-lg:w-full ${
        isFocused ? "focus" : ""
      }`}
    >
      <label
        htmlFor={id}
        className={`absolute -top-3 left-3 bg-white px-1 text-sm font-semibold leading-6 ${
          isFocused ? "text-mansa-blue" : "text-dark-blue"
        }`}
      >
        {title}
      </label>
      <div className={`mt-1 ${isFocused ? "focus" : ""}`}>
        <input
          type={type}
          name={id}
          id={id}
          autoComplete={id}
          placeholder={placeholder}
          min={min}
          maxLength={maxLength}
          className={`block w-full rounded-md border py-2.5 pl-2 text-dark-blue shadow-sm placeholder:text-gray-400 focus:outline-none focus:border focus:border-mansa-blue sm:text-sm sm:leading-6 ${
            isFocused ? "border-mansa-blue" : "border-dark-blue"
          } hover:border-mansa-blue`}
          value={value}
          pattern={pattern}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
    </div>
  );
}

export function FullInput({
  type,
  title,
  placeholder,
  id,
  value,
  onChange,
  icon,
  min,
  maxLength,
  pattern,
  disabled,
}) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div
      className={` relative col-span-full w-full ${isFocused ? "focus" : ""}`}
    >
      <label
        htmlFor={id}
        className={`absolute -top-3 left-3 bg-white bg-none px-1 text-sm font-semibold leading-6 ${
          isFocused ? "text-mansa-blue" : "text-dark-blue"
        }`}
      >
        {title}
      </label>
      <div className={`mt-1 ${isFocused ? "focus" : ""}`}>
        <input
          type={type}
          name={id}
          id={id}
          autoComplete={id}
          placeholder={placeholder}
          className={`block w-full rounded-md border py-2.5 pl-2 text-dark-blue shadow-sm placeholder:text-gray-400 focus:outline-none focus:border focus:border-mansa-blue sm:text-sm sm:leading-6 ${
            isFocused ? "border-mansa-blue" : "border-dark-blue"
          } hover:border-mansa-blue`}
          value={value}
          min={min}
          maxLength={maxLength}
          pattern={pattern}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
          {icon}
        </div>
      </div>
    </div>
  );
}

// Form template for required inputs (FULL)
export function SignUpRequired({
  type,
  title,
  placeholder,
  id,
  autoComplete,
  value,
  onChange,
  icon,
  min,
}) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div
      className={`relative col-span-full w-full ${isFocused ? "focus" : ""}`}
    >
      <label
        htmlFor={id}
        className={`absolute -top-3 left-3 bg-white px-1 text-sm font-semibold leading-6 ${
          isFocused ? "text-mansa-blue" : "text-dark-blue"
        }`}
      >
        {title}
      </label>
      <div className={`mt-1 w-full ${isFocused ? "focus" : ""}`}>
        <input
          type={type}
          name={id}
          id={id}
          autoComplete={autoComplete}
          placeholder={placeholder}
          min={min}
          required
          className={`block w-full rounded-md border py-2.5 pl-2 text-dark-blue shadow-sm placeholder:text-gray-400 focus:outline-none focus:border focus:border-mansa-blue sm:text-sm sm:leading-6 ${
            isFocused ? "border-mansa-blue" : "border-dark-blue"
          } hover:border-mansa-blue`}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
          {icon}
        </div>
      </div>
    </div>
  );
}

// Form template for required inputs (NOT FULL)
export function FormInputRequired({
  type,
  title,
  placeholder,
  id,
  autoComplete,
  value,
  onChange,
  min,
}) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div
      className={`relative col-span-full w-60 max-lg:w-full ${
        isFocused ? "focus" : ""
      }`}
    >
      <label
        htmlFor={id}
        className={` absolute -top-3 left-3 bg-white px-1 text-sm font-semibold leading-6 ${
          isFocused ? "text-mansa-blue" : "text-dark-blue"
        }`}
      >
        {title}
      </label>
      <div className={`mt-1 ${isFocused ? "focus" : ""}`}>
        <input
          type={type}
          name={id}
          id={id}
          autoComplete={autoComplete}
          placeholder={placeholder}
          required
          className={`block w-full rounded-md border py-2.5 pl-2 text-dark-blue shadow-sm placeholder:text-gray-400 focus:outline-none focus:border focus:border-mansa-blue sm:text-sm sm:leading-6 ${
            isFocused ? "border-mansa-blue" : "border-dark-blue"
          } hover:border-mansa-blue`}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          min={min}
        />
      </div>
    </div>
  );
}

// Notes part of the add a contact form
export function FormNotes({ value, onChange, title, id }) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={`relative col-span-full ${isFocused ? "focus" : ""}`}>
      <label
        htmlFor={id}
        className={`absolute -top-3 left-3 bg-white px-1 text-sm leading-6 font-semibold ${
          isFocused ? "text-mansa-blue" : "text-dark-blue"
        }`}
      >
        {title}
      </label>
      <div className={`mt-1 ${isFocused ? "focus" : ""}`}>
        <textarea
          id={id}
          name={id}
          rows={3}
          className={`block w-full rounded-md border py-2.5 pl-2 text-dark-blue shadow-sm placeholder:text-gray-400 focus:outline-none focus:border focus:border-mansa-blue sm:text-sm sm:leading-6 ${
            isFocused ? "border-mansa-blue" : "border-dark-blue"
          } hover:border-mansa-blue`}
          placeholder="Example text."
          // maxLength={35}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
    </div>
  );
}

// Drop Down Menu for the Create a contact form
export function DropDown({ label, id, value, onChange }) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div
      className={`relative sm:col-span-3 w-60 max-lg:w-full ${
        isFocused ? "focus" : ""
      }`}
    >
      <label
        htmlFor={id}
        className={`absolute -top-3 left-3 bg-white px-1 text-sm font-semibold leading-6 ${
          isFocused ? "text-mansa-blue" : "text-dark-blue"
        }`}
      >
        {label}
      </label>
      <div className={`mt-1 w-full ${isFocused ? "focus" : ""}`}>
        <select
          id={id}
          name={id}
          autoComplete={id}
          required
          className={`block w-full rounded-md border py-2.5 pl-2 text-dark-blue shadow-sm placeholder:text-gray-400 focus:outline-none focus:border focus:border-mansa-blue sm:text-sm sm:leading-6 ${
            isFocused ? "border-mansa-blue" : "border-dark-blue"
          } hover:border-mansa-blue`}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          <option value="">Choose option</option>
          <option value="Research">Research</option>
          <option value="Prospect">Prospect</option>
          <option value="Contacted">Contacted</option>
          <option value="Pitch">Pitch</option>
          <option value="On-going Review / Due Diligence">
            On-going Review/Due Diligence
          </option>
          <option value="Partner/ Decision Maker Meeting">
            Partner/Decision Maker Meeting
          </option>
          <option value="Term Sheet/ Initial Offer">
            Term Sheet/Initial Offer
          </option>
          <option value="Negotiation">Negotiation</option>
          <option value="Deal/ Agreement signed">Deal/Agreement Signed</option>
          <option value="Follow up/ Add to Newsletter">
            Follow up/Add Newsletter
          </option>
          <option value="Rejection/ Not a fit">Rejection/Not a Fit</option>
        </select>
      </div>
    </div>
  );
}

export const CustomDropDown = ({ options, label, id, value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div
      className={`relative sm:col-span-3 w-60 max-lg:w-full ${
        isFocused ? "focus" : ""
      }`}
    >
      <label
        htmlFor={id}
        className={`absolute -top-3 left-3 bg-white px-1 text-sm font-semibold leading-6 ${
          isFocused ? "text-mansa-blue" : "text-dark-blue"
        }`}
      >
        {label}
      </label>
      <div className={`mt-1 w-full ${isFocused ? "focus" : ""}`}>
        <select
          id={id}
          name={id}
          autoComplete={id}
          required
          className={`block w-full rounded-md border py-2.5 pl-2 text-dark-blue shadow-sm placeholder:text-gray-400 focus:outline-none focus:border focus:border-mansa-blue sm:text-sm sm:leading-6 ${
            isFocused ? "border-mansa-blue" : "border-dark-blue"
          } hover:border-mansa-blue`}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {options.map((option) => (
            <option value={option}>{option}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

// Form for data time
export const DateForm = ({ title, value, onChange, id }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div
      className={`relative sm:col-span-3 max-lg:w-full ${
        isFocused ? "focus" : ""
      }`}
    >
      <label
        htmlFor={id}
        className={`absolute -top-3 left-3 bg-white px-1 text-sm font-semibold leading-6 ${
          isFocused ? "text-mansa-blue" : "text-dark-blue"
        }`}
      >
        {title}
      </label>
      <div className={`mt-1 ${isFocused ? "focus" : ""}`}>
        <input
          type="datetime-local"
          id={id}
          name={id}
          className={`block w-full rounded-md border py-2.5 pl-2 text-dark-blue shadow-sm placeholder:text-gray-400 focus:outline-none focus:border focus:border-mansa-blue sm:text-sm sm:leading-6 ${
            isFocused ? "border-mansa-blue" : "border-dark-blue"
          } hover:border-mansa-blue`}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
    </div>
  );
};

export const SocialAccount = () => {
  return (
    <div className="flex flex-col pt-3 pb-8 w-full" style={BorderStyle}>
      <h2 className=" text-dark-blue font-bold text-xl pb-6">
        Social Accounts
      </h2>
      <button className=" flex items-center gap-5 border-2 border-[blue] w-fit bg-white text-[blue] px-6 py-3 rounded-xl transition-all duration-200 shadow">
        <Linkedin color="blue" />
        <p className="font-bold">Continue with LinkedIn</p>
      </button>
    </div>
  );
};
