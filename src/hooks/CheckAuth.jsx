import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

export function useAuthentication() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const checkAuthentication = () => {
      // Example: check if user is logged in (replace this with your actual authentication logic)
      const isLoggedIn = localStorage.getItem("token");
      setIsAuthenticated(!!isLoggedIn);
      setCheckingAuth(false);
    };

    checkAuthentication();
  }, []);

  return { isAuthenticated, checkingAuth };
}
