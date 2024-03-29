// This file contains all the resuables components
import { useState } from "react"
import "../App.css"
import search from "../assets/search.svg"

// Sidebar items content
export function SidebarItem({icon, text, activeItem, setActiveItem, id}) {

    const handleClick = () => {
        setActiveItem(id);
    }
    return (
        <div onClick={handleClick} className={`text-white flex flex-row gap-6 max-[768px]:gap-0 py-2 px-3 w-full items-center justify-start max-[768px]:justify-center ${activeItem === id ? 'active' : ''}`}>
            <img className=" w-7" src={icon} alt="" />
            <p>{text}</p>
        </div>
    )
}

// Search bar
export function SearchBar() {
    return (
        <label className="relative inline-flex items-center">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <img src={search} alt="search-icon" className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20" />
        </span>
        <input className="placeholder:italic placeholder:text-slate-400 block bg-light-grey w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
      </label>
    )
}

// Buttons
export function Button({text}) {
    return (
        <button className=" bg-mansa-blue  active:bg-dark-blue text-white px-12 py-4 rounded-xl transition-all duration-200 shadow hover:bg-dark-blue">
            <p className=" font-bold">{text}</p>
        </button>
    )
}

// Form template for not required inputs
export function FormInput({ type, title, placeholder, id, value, onChange }) {
    return (
        <div className=" relative col-span-full w-60 max-lg:w-full">
            <label htmlFor={id} className=" absolute -top-3 left-3 bg-white px-1 text-sm font-semibold leading-6 text-dark-blue">
                { title }
            </label>
            <div className="mt-1">
                <input
                    type={type}
                    name={id}
                    id={id}
                    autoComplete={id}
                    placeholder={placeholder}
                    className="block w-full rounded-md border border-dark-blue py-2.5 pl-2 text-dark-blue shadow-sm placeholder:text-grey-400 focus:outline-none focus:border-2 focus:border-mansa-blue sm:text-sm sm:leading-6 hover:border-mansa-blue"
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    )
}

// Form template for not required login FULL
export function FullInput({ type, title, placeholder, id, value, onChange, icon }) {
    return (
        <div className=" relative col-span-full w-full">
            <label htmlFor={id} className=" absolute -top-3 left-3 bg-white px-1 text-sm font-semibold leading-6 text-dark-blue">
                { title }
            </label>
            <div className="mt-1">
                <input
                    type={type}
                    name={id}
                    id={id}
                    autoComplete={id}
                    placeholder={placeholder}
                    className="block w-full rounded-md border border-dark-blue py-2.5 pl-2 text-dark-blue shadow-sm placeholder:text-grey-400 focus:outline-none focus:border-2 focus:border-mansa-blue sm:text-sm sm:leading-6 hover:border-mansa-blue"
                    value={value}
                    onChange={onChange}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                    {icon}
                </div>
            </div>
        </div>
    )
}

// Form template for required inputs
export function SignUpRequired({ type, title, placeholder, id, autoComplete, value, onChange, icon }) {
    return (
        <div className=" relative col-span-full w-full">
            <label htmlFor={id} className=" absolute -top-3 left-3 bg-white px-1 text-sm font-semibold leading-6 text-dark-blue">
                { title }
            </label>
            <div className="mt-1 w-full">
                <input
                    type={type}
                    name={id}
                    id={id}
                    autoComplete={autoComplete}
                    placeholder={placeholder}
                    required
                    className="block w-full rounded-md border border-dark-blue py-2.5 pl-2 text-dark-blue shadow-sm placeholder:text-grey-400 focus:outline-none focus:border-2 focus:border-mansa-blue sm:text-sm sm:leading-6 hover:border-mansa-blue"
                    value={value}
                    onChange={onChange}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                    {icon}
                </div>
            </div>
        </div>
    )
}

// Form template for required inputs FULL
export function FormInputRequired({ type, title, placeholder, id, autoComplete, value, onChange }) {
    return (
        <div className=" relative col-span-full w-60 max-lg:w-full">
            <label htmlFor={id} className=" absolute -top-3 left-3 bg-white px-1 text-sm font-semibold leading-6 text-dark-blue">
                { title }
            </label>
            <div className="mt-1">
                <input
                    type={type}
                    name={id}
                    id={id}
                    autoComplete={autoComplete}
                    placeholder={placeholder}
                    required
                    className="block w-full rounded-md border border-dark-blue py-2.5 pl-2 text-dark-blue shadow-sm placeholder:text-grey-400 focus:outline-none focus:border-2 focus:border-mansa-blue sm:text-sm sm:leading-6 hover:border-mansa-blue"
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    )
}

// Notes part of the add a contact form
export function FormNotes({value, onChange,}) {
    return (
        <div className=" relative col-span-full">
            <label htmlFor="notes" className=" absolute -top-3 left-3 bg-white px-1 text-sm leading-6 text-dark-blue font-semibold">
            Notes
            </label>
            <div className="mt-1">
            <textarea
                id="notes"
                name="notes"
                rows={1}
                className="block w-full rounded-md border border-dark-blue py-2.5 pl-2 text-dark-blue focus:outline-none shadow-sm placeholder:text-gray-400 focus:border-2 focus:border-mansa-blue sm:text-sm sm:leading-6 hover:border-mansa-blue"
                placeholder="Example text."
                maxLength={35}
                value={value}
                onChange={onChange}
            />
            </div>
        </div>
    )
}

// Drop Down Menu for the Create a contact form
export function DropDown({label, id, value, onChange}) {
    return (
        <div className=" relative sm:col-span-3 w-60 max-lg:w-full">
            <label htmlFor={id} className="absolute -top-3 left-3 bg-white px-1 text-sm font-semibold leading-6 text-dark-blue">
                {label}
            </label>
            <div className="mt-1 w-full">
                <select
                id={id}
                name={id}
                autoComplete={id}
                required
                className="block w-full rounded-md border border-dark-blue py-3.5 text-dark-blue focus:outline-none focus:border-2 focus:border-mansa-blue shadow-sm sm:max-w-xs sm:text-sm sm:leading-6 hover:border-mansa-blue"
                value={value}
                onChange={onChange}
                >
                <option value="">Choose option</option>
                <option value="Research">Research</option>
                <option value="Prospect">Prospect</option>
                <option value="Contacted">Contacted</option>
                <option value="Pitch">Pitch</option>
                <option value="On-going Review / Due Diligence">On-going Review/Due Diligence</option>
                <option value="Partner/ Decision Maker Meeting">Partner/Decision Maker Meeting</option>
                <option value="Term Sheet/ Initial Offer">Term Sheet/Initial Offer</option>
                <option value="Negotiation">Negotiation</option>
                <option value="Deal/ Agreement signed">Deal/Agreement Signed</option>
                <option value="Follow up/ Add to Newsletter">Follow up/Add Newsletter</option>
                <option value="Rejection/ Not a fit">Rejection/Not a Fit</option>
                </select>
            </div>
        </div>
    )
}

// Form for data time
export const DateForm = ({title, value, onChange}) => {
    return (
        <div className="relative sm:col-span-3 w-60 max-lg:w-full">
        <label htmlFor="datetime" className="absolute -top-3 left-3 bg-white px-1 text-sm font-semibold leading-6 text-dark-blue">{title}</label>
        <div className="mt-1">
            <input
            type="datetime-local"
            id="datetime"
            name="datetime"
            className="block w-full rounded-md border border-dark-blue py-2.5 pl-2 text-dark-blue focus:outline-none shadow-sm placeholder:text-gray-400 focus:border-2 focus:border-mansa-blue sm:text-sm sm:leading-6 hover:border-mansa-blue"
            value={value}
            onChange={onChange}
            />
        </div>
    </div>
    )
}

export const TimeForm = ({value, onChange}) => {
    return (
        <div className="relative sm:col-span-3 w-40">
            <label htmlFor="time" className="absolute -top-3 left-3 bg-white px-1 text-sm font-semibold leading-6 text-dark-blue">Meeting Time</label>
            <input
            type="time"
            id="time"
            name="time"
            className="block w-full rounded-md border border-dark-blue py-2.5 pl-2 text-dark-blue focus:outline-none shadow-sm placeholder:text-gray-400 focus:border-2 focus:border-mansa-blue sm:text-sm sm:leading-6 hover:border-mansa-blue"
            value={value}
            onChange={onChange}
            />
        </div>
    )
}

export const SocialAccount = () => {
    return(
        <div className="flex flex-col pt-3 pb-8 w-full" style={BorderStyle}>
            <h2 className=" text-dark-blue font-bold text-xl pb-6">Social Accounts</h2>
            <button className=" flex items-center gap-5 border-2 border-[blue] w-fit bg-white text-[blue] px-6 py-3 rounded-xl transition-all duration-200 shadow" >
                <Linkedin color="blue" />
                <p className="font-bold">Continue with LinkedIn</p>
            </button>
        </div>
    )
}
