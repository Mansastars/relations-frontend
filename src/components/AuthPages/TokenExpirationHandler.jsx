import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { useNavigate } from 'react-router-dom';

const TokenExpirationHandler = ({ token }) => {
  const [timeUntilExpiration, setTimeUntilExpiration] = useState(0);
  const Navigate = useNavigate()

  useEffect(() => {
    const decodeToken = (token) => {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

      return JSON.parse(jsonPayload);
    };

    const calculateTimeUntilExpiration = (decodedToken) => {
      const expirationTime = decodedToken.exp * 1000; // Convert to milliseconds
      const currentTime = Date.now();
      return expirationTime - currentTime;
    };

    const handleTokenExpiration = () => {
        // Handle token expiration (e.g., prompt user to log in again)
        Swal.fire({
            icon: 'error',
            title: 'Session Expired',
            text: 'Your session has expired. Please log in again.',
            confirmButtonText: 'Log In',
        }).then(() => {
            localStorage.clear();
            Navigate('/auth/login');
        });
    };

    if (token) {
      const decodedToken = decodeToken(token);
      const timeUntilExpiration = calculateTimeUntilExpiration(decodedToken);
      setTimeUntilExpiration(timeUntilExpiration);

      // Set timer to handle token expiration
      const timer = setTimeout(() => {
        handleTokenExpiration();
      }, timeUntilExpiration);

      // Clear timer when component unmounts or token changes
      return () => clearTimeout(timer);
    }
  }, [token, timeUntilExpiration]);

  return null; // This component doesn't render anything visible to the user
};

export default TokenExpirationHandler;
