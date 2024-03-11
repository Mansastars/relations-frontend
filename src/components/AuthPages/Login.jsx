import { Button, FormInputRequired, SignUpRequired } from '../Reusables'
import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

function Login() {
    // Connection wth backend and error and success handling
    const [formValue, setFormValue] = useState({email:'', password:''})
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
            email: formValue.email,
            password: formValue.password,
        };
    
        try {
            const response = await api.post('/users/login', userData);
            localStorage.setItem("user", JSON.stringify(response.data.user))
            localStorage.setItem("token", response.data.token)
            navigate("/alldeals");
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
    <div className=" mx-2 flex justify-center relative top-10">
        <div className='bg-white px-5 py-5 flex flex-col mt-10 mb-5 rounded-2xl h-full w-1/2 max-md:w-4/5'>
            <div className=' flex flex-col justify-center items-center gap-5 h-fit '>
                <div className=' flex flex-col justify-center items-center'>
                    <h1 className=' text-dark-blue font-extrabold text-5xl mb-5'>Log In</h1>
                    <p className=' text-base text-dark-blue'>You don't have an account <a href="/auth/sign_up" className=' text-mansa-blue'><u>Sign Up</u></a></p>
                </div>
                <form action="" onSubmit={ handleSubmit } className=' flex flex-col gap-5 justify-center items-center w-full' >
                    {errorMessage && <p className=" text-[#ff0000] font-semibold">{errorMessage}</p>}
                    <div className=' w-full md:w-3/4 flex flex-col gap-8'>
                        <SignUpRequired type="email" title="Email*" placeholder="SundiJoe@gmail.com" id="email" autoComplete="email" value={formValue.email} onChange={handleInput} />
                        <div>
                            <SignUpRequired type="password" title="Password*" id="password" value={formValue.password} onChange={handleInput} />
                            <a href="" className=' text-sm text-mansa-blue'><u>Forget password</u></a>
                        </div>
                    </div>
                    <Button type='submit' text="Log In" />
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login