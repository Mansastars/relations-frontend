import { InfoIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react';

function FreeTrialBanner() {
    const [daysLeft, setDaysLeft] = useState(0);

    console.log(localStorage.getItem('user'));

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user'));

        if (userData && !userData.is_subscribed && userData.createdAt) {
            const trialStartDate = new Date(userData.createdAt);
            const trialEndDate = new Date(trialStartDate);

            trialEndDate.setDate(trialStartDate.getDate() + 7); // Trial period is 7 days

            const currentDate = new Date();

            const remainingTime = trialEndDate - currentDate;
            const remainingDays = Math.ceil(remainingTime / (1000 * 60 * 60 * 24));
            setDaysLeft(remainingDays);
        }
    }, []);

    if (daysLeft <= 0) {
        return null; // Don't display the banner if trial period is over
    }

  return (
    <div className=' bg-mansa-blue flex flex-col items-center text-white py-2 z-50'>
        {/* bg-[#033CEE] */}
        <div className=' flex flex-row items-center gap-2'>
            <InfoIcon  />
            <h1 className=' font-bold'>Welcome to your free trial!</h1>
        </div>
        <div>
            <p className=' text-center'>
                You have {daysLeft} {daysLeft === 1 ? 'day' : 'days'} to try Mansa's CRM <span className=' underline cursor-pointer'>paid features</span>.
                Upgrade anytime for as low as €29.99/month.
            </p>
        </div>
    </div>
  )
}

export default FreeTrialBanner