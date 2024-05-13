import { InfoIcon, Tag } from 'lucide-react'
import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import api from '../api'
import { useNavigate } from "react-router-dom";

function FreeTrialBanner() {
    const [daysLeft, setDaysLeft] = useState(0);
    const [email, setEmail] = useState("");
    const [userId, setUserId] = useState("");
    const [planType, setPlanType] = useState("");
    const [showTrialBanner, setShowTrialBanner] = useState(false); // Track banner visibility
    const navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem('user'));
    const showBanner = localStorage.getItem('showBanner');

    // Code to subcribe in stripe
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            setUserId(user.id);
            setEmail(user.email);
            user.subscription_name === null ? setPlanType("") : setPlanType(user.subscription_name)
        }
    }, []);

    if (userData) {
        useEffect(() => {
            const trialStartDate = new Date(userData.createdAt);
            const trialEndDate = new Date(trialStartDate);
            trialEndDate.setDate(trialStartDate.getDate() + 7); // Trial period is 7 days
            const currentDate = new Date();
            const remainingTime = trialEndDate - currentDate;
            const remainingDays = Math.ceil(remainingTime / (1000 * 60 * 60 * 24));
            setDaysLeft(remainingDays);
        }, [showBanner]);   
    }

    if (userData) {
        useEffect(() => {
            setShowTrialBanner(showBanner === 'true' && daysLeft > 0);
        }, [showBanner, daysLeft]);
    }

    const checkout = async (plan, userId) => {
        const data = {
            plan: plan,
            userId: userId
        }
        try {
            const response = await api.post("/users/payment", data, {
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const session = response.data.session;
            localStorage.setItem("sessionId", JSON.stringify(session.id))
            window.location = session.url;
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // Limited time offer

    // Get the current date
    const currentDate = new Date();
    // Set the end date for the limited time offer
    const endDate = new Date('2024-03-31'); // yyyy-mm-dd
    // Check if the current date is before the end date
    const showLimitedTimeOffer = currentDate <= endDate;

  return (
    <>
    {showTrialBanner && (
    <div className=' bg-[#033CEE] flex flex-col items-center text-white p-2 z-50'>
        {/* bg-[#033CEE] */}
        <div className=' flex flex-row items-center gap-2'>
            <InfoIcon  />
            <h1 className=' font-bold max-sm:text-sm'>Welcome to your free trial!</h1>
        </div>
        
        {showLimitedTimeOffer &&
        <div className=' flex gap-3 items-center text-black'>
            <Tag size={24} />
            <p className=' font-bold text-xl max-sm:text-base'>Limited Time Offer! <span onClick={() => checkout(Number(23.99), userId)} className=' underline cursor-pointer'>Subscribe</span> for only €23.99 until 31.03.2024.</p>
        </div>
        }

        <div>
            <p className=' text-center max-sm:text-sm'>
                You have {daysLeft} {daysLeft === 1 ? 'day' : 'days'} to try Mansa's CRM <Link to='/pricing' className=' underline cursor-pointer font-bold'>paid features</Link>.
                Upgrade anytime for as low as €29.99/month.
            </p>
        </div>
    </div>
    )}
    </>
  )
}

export default FreeTrialBanner