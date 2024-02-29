import Dashboard from "../src/components/Pages/Dashboard"
import { BrowserRouter as Router, Route, Routes, Navigate, renderMatches } from 'react-router-dom';
import Profile from "./components/Pages/Profile";
// import Dashboard from "../src/components/Dashboard";
import NewDealPage from "../src/components/Pages/NewDeal";
import SignUp from "./components/AuthPages/SignUp";
import Login from "./components/AuthPages/Login";
import { useState, useEffect } from "react";
import {Oval} from 'react-loader-spinner';

function App() {
  const isSmallScreen = window.innerWidth <= 768;
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  // Example of checking authentication status on component mount
  useEffect(() => {
    // Your logic to check if the user is authenticated
    const checkAuthentication = () => {
      // Example: check if user is logged in (you need to replace this with your actual authentication logic)
      const isLoggedIn = localStorage.getItem('token');
      setIsAuthenticated(!!isLoggedIn);
      setCheckingAuth(false); // Once authentication check is done, set checkingAuth to false
    };

    checkAuthentication();
  }, []);

  // If checking authentication, display loading or placeholder UI
  if (checkingAuth) {
    // return <div>Loading...</div>;
    return (
      <div className="flex justify-center items-center h-screen">
        <Oval
          visible={true}
          height={50}
          width={50}
          color="#32384b"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/auth/sign_up" element={<SignUp />} />
        <Route path="/auth/sign_up" element={<SignUp />} />
        <Route path="/auth/login" element={<Login />} />
        {/* Restricted route */}
        <Route
          path="/alldeals"
          element={isAuthenticated ? <NewDealPage /> : <Navigate to="/auth/login" />}
        />
        {/* Routes protected by authentication */}
        {isAuthenticated ? (
          <>
            <Route path="/dashboard/:dealId" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </>
        ) : (
          <>
            <Route path="/dashboard/:dealId" element={<Navigate to="/auth/login" />} />
            <Route path="/profile" element={<Navigate to="/auth/login" />} />
          </>
        )}
        {/* Route for small screens */}
        {isSmallScreen && (
          <Route
            path="/dashboard/:dealId"
            element={<Navigate to="/move-to-larger-screen" />}
          />
        )}
        <Route path="/move-to-larger-screen" element={<h2 className="text-center text-xl font-bold mt-20 bg-[#f2f3ff] text-dark-blue">Please move to a larger screen to access the dashboard.</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
