import React from 'react'
import FreeTrialBanner from './FreeTrialBanner'
import SidePanel from './SidePanel'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/AuthContext"
import { useEffect } from "react"

function Billing() {
    const navigate = useNavigate()
    const { isAuthenticated } = useAuth(); // Access isAuthenticated from useAuth hook

    useEffect(() => {
        // Redirect to login page if not authenticated
        if (!isAuthenticated) {
            navigate('/auth/login');
        }
    }, [isAuthenticated, navigate]); // Dependency array ensures this effect runs when isAuthenticated changes

  return (
    <div className='h-screen w-full text-dark-blue'>
        <div className=" sticky top-0 w-full z-50">
            <FreeTrialBanner />
        </div>
        <div className=" flex gap-3 h-screen w-full">
            <div className="">
                <SidePanel />
            </div>

            <div className=' flex flex-col items-center justify-center w-full'>
                <p className=' text-5xl font-bold'>Coming Soon!</p>
            </div>
        </div>
    </div>
  )
}

export default Billing