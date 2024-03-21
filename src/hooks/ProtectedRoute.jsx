// ProtectedRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { useState, useEffect } from 'react';

const ProtectedRoute = () => {
    const { isAuthenticated } = useAuth(); // Use your authentication context
    const userData = JSON.parse(localStorage.getItem('user'));
    const showBilling = localStorage.getItem('showBilling');

    return (
        showBilling === 'true' ? (
            <Navigate to="/pricing" />
        ) : (
            <Outlet />
        )
    )
};

export default ProtectedRoute;
