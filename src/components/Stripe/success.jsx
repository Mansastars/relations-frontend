import React, { useEffect, useState } from 'react'
import { FaThumbsUp } from "react-icons/fa";
import { Button } from "../Reusables";
import { useNavigate } from "react-router-dom";
import api from "../api";

const Success = () => {
    const navigate = useNavigate();
    const [userId, setUserId] = useState("");
    const [sessionId, setSessionId] = useState("");

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        const sessionId = JSON.parse(localStorage.getItem("sessionId"))
        if (user) {
            setUserId(user.id);
            setSessionId(sessionId)
        }
    }, []);

    const handlePaymentSuccess = async () => {
            try{
                    const sessionID = new URLSearchParams(location.search).get('session_id');
                    const response = await api.get(`/users/successful-payment?session_id=${sessionID}`);
                    
                    navigate("/alldeals")
               
            }catch(error){
                console.error(error.message)
            }       
    };

    return (
        <div className='m-0 p-0'>
            <div className='w-full min-h-[80vh] flex flex-col justify-center items-center'>
                <div className='my-10 text-green-600 text-2xl mx-auto flex flex-col justify-center items-center'>
                    <FaThumbsUp alt="success" className='h-40 w-40' style={{ color: 'green' }} />

                    <h3 className="text-4xl pt-20 py-20 font-bold text-center text-slate-700">
                        Payment Successful
                    </h3>

                    <Button text={"Proceed"} onClick={handlePaymentSuccess()} />

                </div>
            </div>
        </div>
    )
}

export default Success