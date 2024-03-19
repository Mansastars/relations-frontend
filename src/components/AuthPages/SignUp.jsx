import { Button, FormInputRequired, SignUpRequired } from '../Reusables'
import { useState } from "react";
import api from "../api";
import { Link, useNavigate } from "react-router-dom";
import { EyeIcon, EyeOff } from 'lucide-react';
import PrivacyPolicModal from './PrivacyPolicModal';
import TermOfUsageModal from './TermOfUsageModal';

function SignUp() {

    // Connection wth backend and error and success handling
    const [formValue, setFormValue] = useState({firstName:'', lastName:'', email:'', password:'', confirmPassword:''})
    const [errorMessage, setErrorMessage] = useState("");
    const [visible, setVisible] = useState(false)
    const [ConfirmVisible, setConfirmVisible] = useState(false)
    const [openModal, setOpenModal] = useState(false);
    const [openTermOfUsageModal, setOpenTermOfUsageModal] = useState(false)
    const [loading, setLoading] = useState(false);
    
    const navigate = useNavigate();

    const handleInput = (e) => {
        if (e && e.target) {
            const { name, value } = e.target;
            setFormValue((prevFormValue) => ({ ...prevFormValue, [name]: value }));
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
    
        const userData = {
            first_name: formValue.firstName,
            last_name: formValue.lastName,
            email: formValue.email,
            password: formValue.password,
            confirm_password: formValue.confirmPassword
        };
    
        try {
            await api.post('/users/register', userData);
            navigate("/auth/login");
        } catch (error) {
            console.log(error);
            if (error.response && error.response.data && error.response.data.message) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage("Something went wrong. Please try again."); // set generic error message
            }
            window.scrollTo(0, 0); //scroll to the top of the page
        } finally {
            setLoading(false); // Stop loading
        }
    };

    // Password
    const toggleVisibility = () => {
        setVisible(!visible);
    };
    // Confirm Password
    const toggleConfirmVisibility = () => {
        setConfirmVisible(!ConfirmVisible);
    };

  return (
    <div className="mx-2 flex justify-center">
        <div className='bg-white p-5 md:p-16 flex flex-col mt-10 mb-5 rounded-2xl h-full w-1/2 max-md:w-4/5'>
            <div className=' flex flex-col gap-5 h-fit '>
                <div className=' flex flex-col justify-center items-center'>
                    <h1 className=' text-dark-blue font-extrabold text-5xl mb-5'>Sign Up</h1>
                    <p className=' text-base text-dark-blue'>You have an account <a href="/auth/login" className=' text-mansa-blue'><u>Log In</u></a></p>
                </div>
                <form action="" onSubmit={ handleSubmit } className=' flex flex-col gap-5 justify-center items-center ' >
                    <div className=' w-full flex flex-col gap-5'>
                        {errorMessage && <p className=" text-[#ff0000] font-semibold">{errorMessage}</p>}
                        <div className=' flex gap-5 max-sm:flex-col'>
                            <div className=' w-full'>
                                <SignUpRequired type="text" title="First Name*" placeholder="Sundi" id="firstName" autoComplete="first-name" value={formValue.firstName} onChange={handleInput} />
                            </div>
                            <div className=' w-full'>
                                <SignUpRequired type="text" title="Last Name*" placeholder="Joe" id="lastName" autoComplete="last-name" value={formValue.lastName} onChange={handleInput} />
                            </div>
                        </div>
                        <div className=' w-full flex flex-col gap-5'>
                            <SignUpRequired type="email" title="Email*" placeholder="SundiJoe@gmail.com" id="email" autoComplete="email" value={formValue.email} onChange={handleInput} />
                          
                            <SignUpRequired
                                type={visible ? "text" : "password"}
                                title="Password*"
                                id="password"
                                value={formValue.password}
                                placeholder='•••••••••'
                                onChange={handleInput}
                                icon={visible ? <EyeIcon size={20} onClick={toggleVisibility} /> : <EyeOff size={20} onClick={toggleVisibility} />}
                            />
                          
                            <SignUpRequired
                                type={ConfirmVisible ? "text" : "password"}
                                title="Confirm Password*"
                                id="confirmPassword"
                                placeholder='•••••••••'
                                value={formValue.confirmPassword}
                                onChange={handleInput}
                                icon={ConfirmVisible ? <EyeIcon size={20} onClick={toggleConfirmVisibility} /> : <EyeOff size={20} onClick={toggleConfirmVisibility} />}
                            />

                            <div className=' flex flex-row gap-2 items-center'>
                                <input
                                    type="checkbox"
                                    name="T&C"
                                    required
                                    className=' text-mansa-blue'
                                />
                                <p className=' text-xs'>Yes, I agree to the <span 
                                        onClick={() => setOpenModal(true)} 
                                        className=' text-mansa-blue underline cursor-pointer'
                                    > 
                                        Privacy Policy
                                    </span> and <span
                                        onClick={() => setOpenTermOfUsageModal(true)} 
                                        className=' text-mansa-blue underline cursor-pointer'
                                    >
                                        Terms of Usage</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                    <Button type='submit' text={loading ? "Signing Up..." : "Sign Up"} disabled={loading} />
                </form>
            </div>
        </div>
        <PrivacyPolicModal 
            open={openModal}
            onClose={() => setOpenModal(false)}
        />
        <TermOfUsageModal 
            open={openTermOfUsageModal}
            onClose={() => setOpenTermOfUsageModal(false)}
        />
    </div>
  )
}

export default SignUp