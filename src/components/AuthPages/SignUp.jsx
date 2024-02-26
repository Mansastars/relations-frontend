import { Button, FormInputRequired, SignUpRequired } from '../Reusables'
import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

function SignUp() {

    // Connection wth backend and error and success handling
    const [formValue, setFormValue] = useState({firstName:'', lastName:'', email:'', password:'', confirmPassword:''})
    const [errorMessage, setErrorMessage] = useState("");
    
    const navigate = useNavigate();

    const handleInput = (e) => {
        if (e && e.target) {
            const { name, value } = e.target;
            setFormValue((prevFormValue) => ({ ...prevFormValue, [name]: value }));
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const userData = {
            first_name: formValue.firstName,
            last_name: formValue.lastName,
            email: formValue.email,
            password: formValue.password,
            confirm_password: formValue.confirmPassword
        };
    
        try {
            const response = await api.post('/users/register', userData);
            console.log(response);
            navigate("/auth/login");
        } catch (error) {
            console.log(error);
            if (error.response.data.message) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage("Something went wrong. Please try again."); // set error message
            }
            window.scrollTo(0, 0); //scroll to the top of the page
        }
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
                            <SignUpRequired type="password" title="Password*" id="password" value={formValue.password} onChange={handleInput} />
                            <SignUpRequired type="password" title="Confirm Password*" id="confirmPassword" value={formValue.confirmPassword} onChange={handleInput} />
                        </div>
                    </div>
                    <Button type='submit' text="Sign Up" />
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignUp