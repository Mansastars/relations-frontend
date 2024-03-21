// This file contains content of the Proile page

import { FormInputRequired, FullInput } from "../Reusables";
import { Button } from "../Reusables";
import FreeTrialBanner from "./FreeTrialBanner";
import Sidebar from "./SideBar";
import { Linkedin } from 'lucide-react';
import { Navigate, useNavigate } from "react-router-dom";
import { useAuthentication } from "../../hooks/CheckAuth";
import Loader from "../ReusableComponents/Loader";
import { useAuth } from "../../hooks/AuthContext";
import { useEffect } from "react";
import SidePanel from "./SidePanel";

export default function Profile() {
    const navigate = useNavigate(); // Use useNavigate hook to navigate programmatically
      
    const { isAuthenticated } = useAuth(); // Access isAuthenticated from useAuth hook

    const BorderStyle = {
        borderBottom: '1px solid  #d3d3d3',
    };

    // Check if user is authenticated
    useEffect(() => {
        // Redirect to login page if not authenticated
        if (!isAuthenticated) {
          navigate('/auth/login');
        }
      }, [isAuthenticated, navigate]); // Dependency array ensures this effect runs when isAuthenticated changes

    return (
        <div className="">
            <div className=" sticky top-0 z-50">
                <FreeTrialBanner />
            </div>
            <div className=" flex gap-3 h-screen">
                <div className=" h-screen">
                    <SidePanel />
                </div>
                <div className=" flex flex-col w-full items-center overflow-y-auto">
                    <div className=" bg-white py-10 px-6 max-sm:px-3 flex flex-col justify-center mt-10 mb-10 rounded-2xl items-start gap-10 w-10/12 max-sm:w-full">
                        <form action="" className=" w-full">
                            <div className=" flex flex-row max-sm:flex-col justify-between pb-8">
                                <div>
                                    <h1 className=" text-dark-blue font-bold text-3xl">General Info</h1>
                                    <p className=" text-dark-blue text-base">Use the form below to update your profile.</p>
                                </div>
                                <div className=''>
                                    <Button text="Save Profile" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-5 pb-8">
                                <div className="flex max-[768px]:flex-col gap-5 w-full">
                                    <FullInput type="text" title="First Name" placeholder="Sundi" id="first-name" />
                                    <FullInput type="text" title="Last Name" placeholder="Keita" id="last-name" />
                                </div>
                                <div className=" flex flex-col gap-1 w-1/2 max-[768px]:w-full">
                                    <FullInput type="tel" title="Phone" placeholder="+23412234556" htmlFor="phone" name="phone" id="phone" />
                                    <p className=" text-dark-blue text-base">We collect this incase of emergencies.</p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-between pb-8" style={BorderStyle}>
                                <h2 className=" text-dark-blue font-bold text-xl pb-6">Profile Section</h2>
                                <div className=" relative col-span-full">
                                    <label htmlFor="bio" className=" absolute -top-3 left-3 bg-white px-1 text-sm leading-6 text-dark-blue font-semibold">
                                        Bio
                                    </label>
                                    <div className="mt-1">
                                        <textarea
                                            id="notes"
                                            name="notes"
                                            rows={2}
                                            className="block w-full rounded-md border border-dark-blue py-2.5 pl-2 text-dark-blue focus:outline-none shadow-sm placeholder:text-gray-400 focus:border-2 focus:border-mansa-blue sm:text-sm sm:leading-6 hover:border-mansa-blue"
                                            defaultValue={''}
                                            placeholder="Software Engineer"
                                        />
                                    </div>
                                </div>
                                <p className="text-dark-blue text-base">Brief description of your profile. URLs are hyperlinked.</p>
                            </div>
                        </form>
                        <div className="flex flex-col pt-3 pb-8 w-full" style={BorderStyle}>
                            <h2 className=" text-dark-blue font-bold text-xl pb-6">Social Accounts</h2>
                            <button className=" flex flex-row items-center px-5 py-2 rounded-md border border-b-dark-blue gap-3 w-60 max-sm:w-full hover:border-mansa-blue" >
                                <Linkedin color="blue" />
                                <p className="text-dark-blue text-base ">Continue with LinkedIn</p>
                            </button>
                        </div>
                        <form action="" className=" w-full pb-8" style={BorderStyle}>
                            <div className=" flex flex-row justify-between pb-8 max-sm:flex-col" >
                                <div className="">
                                    <h1 className=" text-dark-blue font-bold text-3xl">Email</h1>
                                    <p className="text-dark-blue text-base">Use this form to update your email.</p>
                                </div>
                                <div className=''>
                                    <Button text="Update Email" />
                                </div>
                            </div>
                            <div>
                                <FullInput type="email" title="Email" placeholder="sundi@sankore.com" id="email" />
                                <p className="text-dark-blue text-base">You will need this email to log in.</p>
                            </div>
                        </form>
                        <form action="" className=" w-full pb-8" style={BorderStyle}>
                            <div className=" flex flex-row justify-between pb-8 max-sm:flex-col" >
                                <div className="">
                                    <h1 className=" text-dark-blue font-bold text-3xl">Password</h1>
                                    <p className="text-dark-blue text-base">Use this form to update your password.</p>
                                </div>
                                <div className=''>
                                    <Button text="Update Password" />
                                </div>
                            </div>
                            <div className=" flex flex-col gap-2">
                                <div className=" flex flex-col gap-6">
                                    <FullInput type="password" title="Current Password" placeholder="" id="current-password" />
                                    <FullInput type="password" title="New Password" placeholder="" id="new-password" />
                                </div>
                                <p className="text-dark-blue text-base">Must be at least 8 characters long.</p>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
        </div>
    )
}

