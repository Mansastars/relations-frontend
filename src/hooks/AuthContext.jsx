// AuthContext.js
import api from "../api";
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import TokenExpirationHandler from "../AuthPages/TokenExpirationHandler";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  const navigate = useNavigate();

  const login = async (userData) => {
    try {
      const response = await api.post("/users/login", userData); // Make API request to login

      const { user, token, showBanner, numberOfDaysLeft } = response.data; // Extract user data and token from response

      // Save user data and token to localStorage
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
      localStorage.setItem("showBanner", response.data.showBanner.toString());
      localStorage.setItem("showBilling", response.data.showBilling.toString());
      localStorage.setItem("numberOfDaysLeft", numberOfDaysLeft);

      // Update isAuthenticated state
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Login error:", error);
      throw error; // Rethrow error for handling in Login component
    }
  };

  const LoginWithGoogle = async (userData) => {
    try {
      const response = await api.post("/users/google_login", userData);

      const { user, token, showBanner, numberOfDaysLeft } = response.data;

      // Save user data and token to localStorage
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
      localStorage.setItem("showBanner", response.data.showBanner.toString());
      localStorage.setItem("showBilling", response.data.showBilling.toString());
      localStorage.setItem("numberOfDaysLeft", numberOfDaysLeft);

      // Update isAuthenticated state
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Login with goggle error:", error);
      throw error; // Rethrow error for handling in Login component
    }
  };

  const logout = async () => {
    try {
      // Clear user data and token from localStorage
      localStorage.clear();
      navigate("/auth/login");
      // Update isAuthenticated state
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Logout error:", error);
      throw error; // Rethrow error for handling in LogoutButton component
    }
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, LoginWithGoogle }}
    >
      <TokenExpirationHandler token={localStorage.getItem("token")} />
      {children}
    </AuthContext.Provider>
  );
};
