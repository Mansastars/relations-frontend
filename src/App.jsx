import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import Loader from './components/ReusableComponents/Loader';
// Lazy loading implementation
const SignUp = lazy(() => import("./components/AuthPages/SignUp"));
const Login = lazy(() => import("./components/AuthPages/Login"));
const Dashboard = lazy(() => import("../src/components/Pages/Dashboard"));
const Profile = lazy(() => import("./components/Pages/Profile"));
const NewDealPage = lazy(() => import("../src/components/Pages/NewDeal"));
const MoveToLargeScreen = lazy(() => import("./components/Pages/MoveToLargeScreen"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/auth/sign_up" element={<SignUp />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/alldashboards" element={<NewDealPage />}/>
          <Route path="/dashboard/:dealId" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
            
          {/* Route for larger screen redirection */}
          <Route path="/move-to-larger-screen" element={<MoveToLargeScreen />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
