import React from 'react'
import FreeTrialBanner from './FreeTrialBanner'
import SidePanel from './SidePanel'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/AuthContext"
import { useEffect } from "react"
import ContactsTab from '../Contacts/ContactsTab';

function Contacts() {
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
        <div className=" flex h-screen w-full">
            <div className="">
                <SidePanel />
            </div>

            <div className=' w-full overflow-y-auto overflow-x-hidden'>
                <ContactsTab />
            </div>
        </div>
    </div>
  )
}

export default Contacts