// ProtectedRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = () => {
    const { isAuthenticated } = useAuth(); // Use your authentication context
    const userData = JSON.parse(localStorage.getItem('user'));

    // Function to check if the user's trial period has expired
    // let is_subscribed = true
    const isTrialPeriodExpired = () => {

        if (userData && !userData.is_subscribed && userData.createdAt) {
        // if (userData && !is_subscribed && userData.createdAt) {
            const trialStartDate = new Date(userData.createdAt);
            const trialEndDate = new Date(trialStartDate);
            trialEndDate.setDate(trialStartDate.getDate() + 7); // Trial period is 7 days
            const currentDate = new Date();
            return currentDate > trialEndDate;
        }
        return true; // If user is not authenticated or no trial data available, treat as expired
    };

    // If authenticated and trial not expired, render child elements
    // If not authenticated, navigate to login page
    // If authenticated but trial expired, navigate to pricing page
    return isAuthenticated ? (
        !isTrialPeriodExpired() || userData.is_subscribed ? (
        // !isTrialPeriodExpired() || is_subscribed ? (
            <Outlet />
        ) : (
            <Navigate to="/pricing" />
        )
    ) : (
        <Navigate to="/auth/login" />
    );
};

export default ProtectedRoute;
