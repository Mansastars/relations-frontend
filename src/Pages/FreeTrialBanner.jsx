import { InfoIcon, Tag } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

function FreeTrialBanner() {
    const { t } = useTranslation(); // Initialize translation function
    const [daysLeft, setDaysLeft] = useState(0);
    const [email, setEmail] = useState("");
    const [userId, setUserId] = useState("");
    const [planType, setPlanType] = useState("");
    const [showTrialBanner, setShowTrialBanner] = useState(false);
    const navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem('user'));
    const showBanner = localStorage.getItem('showBanner');

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            setUserId(user.id);
            setEmail(user.email);
            user.subscription_name === null ? setPlanType("") : setPlanType(user.subscription_name);
        }
    }, []);

    if (userData) {
        useEffect(() => {
            const trialStartDate = new Date(userData.createdAt);
            const trialEndDate = new Date(trialStartDate);
            trialEndDate.setDate(trialStartDate.getDate() + 7);
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
            localStorage.setItem("sessionId", JSON.stringify(session.id));
            window.location = session.url;
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const currentDate = new Date();
    const endDate = new Date('2024-03-31');
    const showLimitedTimeOffer = currentDate <= endDate;

    return (
        <>
        {showTrialBanner && (
        <div className='bg-[#033CEE] flex flex-col items-center text-white p-2 z-50'>
            <div className='flex flex-row items-center gap-2'>
                <InfoIcon />
                <h1 className='font-bold max-sm:text-sm'>{t('WelcomeFreeTrial')}</h1>
            </div>
            
            {showLimitedTimeOffer &&
            <div className='flex gap-3 items-center text-black'>
                <Tag size={24} />
                <p className='font-bold text-xl max-sm:text-base'>
                    {t('LimitedTimeOffer', { price: '€23.99', endDate: '31.03.2024' })}
                    <span onClick={() => checkout(Number(23.99), userId)} className='underline cursor-pointer'>
                        {t('Subscribe')}
                    </span>
                </p>
            </div>
            }

            <div>
                <p className='text-center max-sm:text-sm'>
                    {t('TrialDaysMessage', {
                        daysLeft: daysLeft,
                        paidFeaturesLink: <Link to='/pricing' className='underline cursor-pointer font-bold'>{t('PaidFeaturesLink')}</Link>
                    })}
                    <Link to='/pricing' className='underline cursor-pointer font-bold'>{t('PaidFeaturesLink')}</Link>
                </p>
            </div>
        </div>
        )}
        </>
    )
}

export default FreeTrialBanner;
