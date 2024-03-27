// This file contains content of the Proile page

import { FormInputRequired, FullInput } from "../Reusables";
import { Button } from "../Reusables";
import FreeTrialBanner from "./FreeTrialBanner";
import { EyeIcon, EyeOff, Linkedin } from 'lucide-react';
import { Navigate, useNavigate } from "react-router-dom";
import Loader from "../ReusableComponents/Loader";
import { useAuth } from "../../hooks/AuthContext";
import { useEffect, useState } from "react";
import SidePanel from "./SidePanel";
import Swal from "sweetalert2";
import api from "../api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Profile() {
    const navigate = useNavigate(); // Use useNavigate hook to navigate programmatically
    const { isAuthenticated } = useAuth(); // Access isAuthenticated from useAuth hook
    const [currentVisible, setCurrentVisible] = useState(false);
    const [newVisible, setNewVisible] = useState(false);
    const [confirmVisible, setConfirmVisible] = useState(false);
    const [userDetails, setUserDetails] = useState(null)
    const [generalInfoIsSubmitting, setGeneralInfoIsSubmitting] = useState(false);
    const [emailIsSubmitting, setEmailIsSubmitting] = useState(false);
    const [passwordIsSubmitting, setPasswordIsSubmitting] = useState(false);
    const [formValue, setFormValue] = useState({first_name: '', last_name: '', phone_number: '', bio: '', email: '', old_password: '', new_password: '', confirm_password: ''});

    const BorderStyle = {
        borderBottom: '1px solid  #d3d3d3',
    };

    // Check if user is authenticated
    useEffect(() => {
        if (!isAuthenticated) {
          navigate('/auth/login');
        }
    }, [isAuthenticated, navigate]); // Dependency array ensures this effect runs when isAuthenticated changes

    // Get user's details
    useEffect(() => {
        const handleUserDetails = async () => {
            try {
                const response = await api.get(`users/single-user`);
                const userDetails = response.data.user; // Assuming response.data contains the deal details
                setUserDetails(userDetails)
                setFormValue({
                    first_name: userDetails.first_name || '',
                    last_name: userDetails.last_name || '',
                    phone_number: userDetails.phone_number || '',
                    bio: userDetails.bio || '',
                    email: userDetails.email || '',
                    old_password: '', new_password: '', confirm_password: ''
                });
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };
        handleUserDetails();
    }, []);

    // Handle user's general info input
    const handleGeneralInfoInput = (e) => {
        if (e && e.target) {
            const { name, value } = e.target;
            setFormValue((prevFormValue) => ({ ...prevFormValue, [name]: value }));
        }
    }

    // Submit user's general info update
    const handleGeneralInfoSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            first_name: formValue.first_name,
            last_name: formValue.last_name,
            phone_number: formValue.phone_number,
            bio: formValue.bio,
        };

        try {
            const res = await api.patch(`users/update-profile`, userData);
            toast.success(`${res.data.message}`)
        } catch (error) {
            console.log(error);
            toast.error(`${error.response.data.message}`);
            setGeneralInfoIsSubmitting(false);
        }
    };

    // Handle user's email input
    const handleEmailInput = (e) => {
        if (e && e.target) {
            const { name, value } = e.target;
            setFormValue((prevFormValue) => ({ ...prevFormValue, [name]: value }));
        }
    }

    // Submit user's email update
    const handleEmailSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            email: formValue.email,
        };

        try {
            const res = await api.patch(`users/update-email`, userData);
            // setFormValue({email: ''})
            toast.success(`${res.data.message}`)
            // window.location.reload()
        } catch (error) {
            console.log(error);
            toast.error(`${error.response.data.message}`);
            setEmailIsSubmitting(false);
        }
    };

    // Handle user's password input
    const handlePasswordInput = (e) => {
        if (e && e.target) {
            const { name, value } = e.target;
            setFormValue((prevFormValue) => ({ ...prevFormValue, [name]: value }));
        }
    }

    // Submit user's password update
    const handlePasswordSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            old_password: formValue.old_password,
            new_password: formValue.new_password,
            confirm_password: formValue.confirm_password,
        };

        try {
            const res = await api.patch(`users/change-password`, userData);
            setFormValue({old_password: '', new_password: '', confirm_password: ''})
            toast.success(`${res.data.message}`)
        } catch (error) {
            console.log(error);
            toast.error(`${error.response.data.message}`);
            setPasswordIsSubmitting(false);
        }
    };

    // Delete Account
    const handleDelete = async () => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover your account!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it',
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {screen
                    await api.delete(`users/delete-account`);
                    Swal.fire('Deleted!', 'Your account has been deleted.', 'success');
                    navigate('/auth/sign_up');
                } catch (error) {
                    console.error('Error:', error);
                    Swal.fire('Error', 'Failed to delete user', 'error');
                }
            }
        });
    };

    // Password visibility
    const toggleCurrentVisibility = () => {
        setCurrentVisible(!currentVisible)
    };

    const toggleConfirmVisibility = () => {
        setConfirmVisible(!confirmVisible)
    };

    const toggleNewVisibility = () => {
        setNewVisible(!newVisible)
    };

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
                    <div className=" bg-white py-10 px-6 max-sm:px-3 flex flex-col justify-center mt-10 mb-10 rounded-2xl items-start gap-10 w-[75%] max-sm:w-full">
                        <form onSubmit={handleGeneralInfoSubmit} className=" w-full">
                            <div className=" flex flex-row max-sm:flex-col justify-between pb-8">
                                <div>
                                    <h1 className=" text-dark-blue font-bold text-3xl">General Info</h1>
                                    <p className=" text-dark-blue text-base">Use the form below to update your profile.</p>
                                </div>
                                <div className=''>
                                    <Button text="Update Profile" type='submit' disabled={generalInfoIsSubmitting} />
                                </div>
                            </div>
                            <div className="flex flex-col gap-5 pb-8">
                                <div className="flex max-[768px]:flex-col gap-5 w-full">
                                    <FullInput type="text" title="First Name" placeholder="Sundi" id="first_name" value={formValue.first_name} onChange={handleGeneralInfoInput} />
                                    <FullInput type="text" title="Last Name" placeholder="Keita" id="last_name" value={formValue.last_name} onChange={handleGeneralInfoInput} />
                                </div>
                                <div className=" flex flex-col gap-1 w-1/2 max-[768px]:w-full">
                                    <FullInput type="tel" title="Phone" placeholder="+23412234556" id="phone_number" value={formValue.phone_number} onChange={handleGeneralInfoInput} />
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
                                            id="bio"
                                            name="bio"
                                            rows={2}
                                            className="block w-full rounded-md border border-dark-blue py-2.5 pl-2 text-dark-blue focus:outline-none shadow-sm placeholder:text-gray-400 focus:border-2 focus:border-mansa-blue sm:text-sm sm:leading-6 hover:border-mansa-blue"
                                            placeholder="Software Engineer"
                                            value={formValue.bio} onChange={handleGeneralInfoInput}
                                        />
                                    </div>
                                </div>
                                <p className="text-dark-blue text-base">Brief description of your profile.</p>
                            </div>
                            {/* <ToastContainer /> */}
                        </form>

                        <form onSubmit={handleEmailSubmit} className=" w-full pb-8" style={BorderStyle}>
                            <div className=" flex flex-row justify-between pb-8 max-sm:flex-col" >
                                <div className="">
                                    <h1 className=" text-dark-blue font-bold text-3xl">Email</h1>
                                    <p className="text-dark-blue text-base">Use this form to update your email.</p>
                                </div>
                                <div className=''>
                                    <Button text="Update Email" type='submit' disabled={emailIsSubmitting} />
                                </div>
                            </div>
                            <div>
                                <FullInput type="email" title="Email" placeholder="sundi@sankore.com" id="email" value={formValue.email} onChange={handleEmailInput} />
                                <p className="text-dark-blue text-base">You will need this email to log in.</p>
                            </div>
                            {/* <ToastContainer /> */}
                        </form>

                        <form onSubmit={handlePasswordSubmit} className=" w-full pb-8" style={BorderStyle}>
                            <div className=" flex flex-row justify-between pb-8 max-sm:flex-col" >
                                <div className="">
                                    <h1 className=" text-dark-blue font-bold text-3xl">Password</h1>
                                    <p className="text-dark-blue text-base">Use this form to update your password.</p>
                                </div>
                                <div className=''>
                                    <Button text="Update Password" type='submit' disabled={passwordIsSubmitting} />
                                </div>
                            </div>
                            <div className=" flex flex-col gap-2">
                                <div className=" flex flex-col gap-6">
                                    <FullInput
                                        type={currentVisible ? "text" : "password"}
                                        title="Current Password"
                                        placeholder="•••••••••"
                                        id="old_password"
                                        icon={currentVisible ? <EyeIcon size={14} onClick={toggleCurrentVisibility} /> : <EyeOff size={14} onClick={toggleCurrentVisibility} />}
                                        value={formValue.old_password} onChange={handlePasswordInput}
                                    />
                                    <FullInput
                                        type={newVisible ? "text" : "password"}
                                        title="New Password"
                                        placeholder="•••••••••"
                                        id="new_password"
                                        icon={newVisible ? <EyeIcon size={14} onClick={toggleNewVisibility} /> : <EyeOff size={14} onClick={toggleNewVisibility} />}
                                        value={formValue.new_password} onChange={handlePasswordInput}
                                    />
                                    <FullInput
                                    type={confirmVisible ? "text" : "password"}
                                    title="Confirm Password"
                                    placeholder="•••••••••"
                                    id="confirm_password"
                                    icon={confirmVisible ? <EyeIcon size={14} onClick={toggleConfirmVisibility} /> : <EyeOff size={14} onClick={toggleConfirmVisibility} />}
                                    value={formValue.confirm_password} onChange={handlePasswordInput}
                                    />
                                </div>
                                <p className="text-dark-blue text-base">Must be at least 8 characters long.</p>
                            </div>
                            {/* <ToastContainer /> */}
                        </form>

                        <div className=" w-full pb-8" style={BorderStyle}>
                            <div className=" flex flex-col gap-5 pb-8 max-sm:flex-col" >
                                <div className=" flex flex-col gap-5">
                                    <h1 className="font-bold text-3xl text-[red]">Delete Account</h1>
                                    <p className="text-dark-blue text-base font-semibold">
                                        By clicking the button below, you will permanently delete your account. Are you sure you want to proceed?
                                    </p>
                                </div>
                                <div className=''>
                                    <button
                                    className=" bg-[red]  active:bg-dark-blue text-white px-12 py-4 rounded-xl transition-all duration-200 shadow hover:bg-dark-blue"
                                    onClick={() => handleDelete()}
                                    >
                                        <p className=" font-bold">Delete Account</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <ToastContainer />
                    </div>
                </div>
        </div>
        </div>
    )
}

