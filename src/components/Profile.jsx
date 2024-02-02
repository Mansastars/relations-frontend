// This file contains content of the Proile page

import { FormInputRequired } from "./Reusables";
import { Button } from "./Reusables";
import { FormInput } from "./Reusables";
import Sidebar from "./SideBar";
import { Linkedin } from 'lucide-react';

export default function Profile() {
    const BorderStyle = {
        borderBottom: '1px solid  #d3d3d3',
      };

    return (
        <div className=" flex gap-5 h-screen">
            <div className=" fixed w-56">
                <Sidebar />
            </div>
            <div className=" flex flex-col w-full pl-56 mx-2 items-center">
                <div className=" bg-white py-10 px-6 flex flex-col justify-center mt-10 mb-10 rounded-2xl items-start gap-10 w-10/12">
                    <form action="" className=" w-full">
                        <div className=" flex flex-row justify-between pb-8">
                            <div>
                                <h1 className=" text-dark-blue font-bold text-3xl">General Info</h1>
                                <p className=" text-dark-blue text-base">Use the form below to update your profile.</p>
                            </div>
                            <div className=''>
                                <Button text="Save Profile" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 pb-8" style={BorderStyle}>
                            <div className="flex gap-5 w-full">
                                <FormInput type="text" title="First Name" placeholder="Sundi" htmlFor="first-name" name="first-name" id="first-name" />
                                <FormInput type="text" title="Last Name" placeholder="Keita" htmlFor="Last-name" name="last-name" id="last-name" />
                            </div>
                            <div className=" flex flex-col gap-1">
                                <FormInput type="number" title="Phone" placeholder="+23412234556" htmlFor="phone" name="phone" id="phone" />
                                <p className=" text-dark-blue text-base">We collect this incase of emergencies.</p>
                            </div>
                        </div>
                        <div className="flex flex-col pt-8 justify-between pb-8" style={BorderStyle}>
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
                    <div className="flex flex-col pt-8 pb-8 w-full" style={BorderStyle}>
                        <h2 className=" text-dark-blue font-bold text-xl pb-6">Social Accounts</h2>
                        <button className=" flex flex-row items-center px-5 py-2 rounded-md border border-b-dark-blue gap-3 w-60 hover:border-mansa-blue" >
                            <Linkedin color="blue" />
                            <p className="text-dark-blue text-base ">Continue with LinkedIn</p>
                        </button>
                    </div>
                    <form action="" className=" w-full pb-8" style={BorderStyle}>
                        <div className=" flex flex-row justify-between pb-8" >
                            <div>
                                <h1 className=" text-dark-blue font-bold text-3xl">Email</h1>
                                <p className="text-dark-blue text-base">Use this form to update your email.</p>
                            </div>
                            <div className=''>
                                <Button text="Update Email" />
                            </div>
                        </div>
                        <div>
                            <FormInputRequired type="email" title="Email" placeholder="sundi@sankore.com" htmlFor="email" name="email" id="email" />
                            <p className="text-dark-blue text-base">You will need this email to log in.</p>
                        </div>
                    </form>
                    <form action="" className=" w-full pb-8" style={BorderStyle}>
                        <div className=" flex flex-row justify-between pb-8" >
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
                                <FormInputRequired type="password" title="Current Password" placeholder="" htmlFor="password" name="password" id="current-password" />
                                <FormInputRequired type="password" title="New Password" placeholder="" htmlFor="password" name="password" id="new-password" />
                            </div>
                            <p className="text-dark-blue text-base">Must be at least 8 characters long.</p>
                        </div>
                    </form>
                </div>
            </div>
      </div>
    )
}

