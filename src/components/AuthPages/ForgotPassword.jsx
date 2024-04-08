import { Button, FormInputRequired, SignUpRequired } from '../Reusables'
import { useState } from "react";
import api from "../api";
import { Link, useNavigate, useParams } from "react-router-dom";
import { EyeIcon, EyeOff } from 'lucide-react';
import checkPasswordStrength from '../ReusableComponents/checkPasswordStrength';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

function ForgotPassword() {
    const { verificationToken } = useParams();
    const [formValue, setFormValue] = useState({new_password:'', confirm_password: ''})
    const [errorMessage, setErrorMessage] = useState("");
    const [visible, setVisible] = useState(false)
    const [confirmVisible, setConfirmVisible] = useState(false)
    const [loading, setLoading] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [canSubmit, setCanSubmit] = useState(false);
    
    const navigate = useNavigate();

    const handleInput = (e) => {
        if (e && e.target) {
            const { name, value } = e.target;
            setFormValue((prevFormValue) => ({ ...prevFormValue, [name]: value }));

            const strength = checkPasswordStrength(formValue.new_password);
            setPasswordStrength(strength);
            setCanSubmit(strength >= 2);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
    
        const userData = {
            new_password: formValue.new_password,
            confirm_password: formValue.confirm_password,
        };
    
        try {
            if (canSubmit) {
              const response = await api.post(`users/reset-password/${verificationToken}`, userData)
              console.log(response);
                if (response.data.status === "success") {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: 'Your password has been successfully reset.',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            navigate('/auth/login'); // Redirect to login page after successful password reset
                        }
                    });
                }
                setFormValue({new_password:'', confirm_password: ''})
            } else {
                setErrorMessage("Password must be at least eight characters long.");
                window.scrollTo(0, 0);
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: error.response.data.message || 'An error occurred while resetting your password. Please try again later.',
            });
        } finally {
            setLoading(false);
        }
    };

    // Password
    const toggleVisibility = () => {
        setVisible(!visible);
    };

    const toggleConfirmVisibility = () => {
      setConfirmVisible(!confirmVisible);
  };

  return (
    <div className=" mx-2 flex justify-center relative top-10">
        <div className='bg-white px-5 py-5 flex flex-col mt-10 mb-5 rounded-2xl h-full w-1/2 max-lg:w-[70%] max-md:w-[90%]'>
            <div className=' flex flex-col justify-center items-center gap-5 h-fit '>
                <h1 className=' text-dark-blue font-bold text-4xl text-center mb-5'>Reset Password</h1>
                <form onSubmit={ handleSubmit } className=' flex flex-col gap-5 justify-center items-center w-full' >
                    {errorMessage && <p className=" text-red-500 font-semibold text-center">{errorMessage}</p>}
                    <div className=' w-full md:w-3/4 flex flex-col gap-8'>
                        <div>
                          <SignUpRequired
                              type={visible ? "text" : "password"}
                              title="New Password*"
                              id="new_password"
                              placeholder='Enter new Password'
                              value={formValue.new_password}
                              onChange={handleInput}
                              icon={visible ? <EyeIcon size={16} onClick={toggleVisibility} /> : <EyeOff size={16} onClick={toggleVisibility} />}
                          />
                          {/* Display password strength */}
                          {passwordStrength > 0 && (
                              <p className={`text-sm ${passwordStrength >= 2 ? 'text-green-500' : 'text-red-500'}`}>
                                  {passwordStrength >= 2 ? 'Strong password' : 'Weak password'}
                              </p>
                          )}
                        </div>
                        <SignUpRequired
                            type={confirmVisible ? "text" : "password"}
                            title="Confirm Password*"
                            id="confirm_password"
                            placeholder='Confirm new Password'
                            value={formValue.confirm_password}
                            onChange={handleInput}
                            icon={confirmVisible ? <EyeIcon size={16} onClick={toggleConfirmVisibility} /> : <EyeOff size={16} onClick={toggleConfirmVisibility} />}
                        />
                    </div>
                    <Button type='submit' text={loading ? "Loading..." : "Reset Password"} disabled={loading} />
                </form>
            </div>
        </div>
    </div>
  )
}

export default ForgotPassword