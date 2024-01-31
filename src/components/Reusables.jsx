// This file contains all the resuables components
import { useState } from "react"
import "../App.css"
import search from "../assets/search.svg"

// Sidebar items content
export function SidebarItem({icon, text}) {
    const [isActive, setIsActive] = useState (false);

    const handleClick = () => {
        if (isActive) {
            setIsActive(false);
        } else {
            setIsActive(true);
        }
    }
    return (
        <div onClick={handleClick} className={`text-white flex flex-row gap-6 py-2 px-3 w-full items-center justify-start ${isActive ? 'active' : ''}`}>
            <img className=" w-7" src={icon} alt="" />
            <p>{text}</p>
        </div>
    )
}

// Search bar
export function SearchBar() {
    return (
        <label class="relative inline-flex items-center">
        <span class="sr-only">Search</span>
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <img src={search} alt="search-icon" class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20" />
        </span>
        <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
      </label>
    )
}

// Buttons
export function Button({text}) {
    return (
        <button class=" bg-mansa-blue  active:bg-dark-blue text-white px-12 py-4 rounded-xl">
            {text}
        </button>
    )
}

// Form template
export function FormInput({ type, title, placeholder, htmlFor, name, id }) {
    return (
        <div className=" relative sm:col-span-3">
            <label htmlFor={htmlFor} className=" absolute -top-3 left-3 bg-white px-1 text-sm font-semibold leading-6 text-dark-blue">
                { title }
            </label>
            <div className="mt-1">
                <input
                    type={type}
                    name={name}
                    id={id}
                    autoComplete="given-name"
                    placeholder={placeholder}
                    required
                    className="block w-full rounded-md border border-dark-blue py-2.5 pl-2 text-dark-blue shadow-sm placeholder:text-grey-400 focus:outline-none focus:border-2 focus:border-mansa-blue sm:text-sm sm:leading-6"
                />
            </div>
        </div>
    )
}

