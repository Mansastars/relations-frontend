import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MansaLogo from "../../assets/MansaLogo.png";
import dashboard from "../../assets/dashboard.svg";
import support from "../../assets/support.svg";
import profile from "../../assets/profile.svg";
import logout from "../../assets/logout.svg";
import link from "../../assets/link.svg";
import Star from "../../assets/Star.svg";
import Billing from "../../assets/Billing.svg";
import { SidebarItem } from "../Reusables";
import { ArrowLeftCircle, LogOutIcon, MenuIcon, X } from "lucide-react";
import { useAuth } from "../../hooks/AuthContext";

function SidePanel() {
    const [isOpen, setIsOpen] = useState(() => {
        return window.innerWidth > 768 ? true : false;
    }); // Initially set to true, assuming the side panel is open
    const { logout } = useAuth();
    const location = useLocation();

    const togglePanel = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = async () => {
        try {
            // Calling the logout function from the authentication context
            await logout();
            // window.location.href = 'https://relations.mansastars.com/';
          } catch (error) {
            console.error('Logout error:', error);
          }
    };

    return (
        <div 
        className={
            ` h-screen flex flex-col ${isOpen ? ' w-56' : ' w-20 max-sm:w-16 justify-center'} bg-dark-blue text-white
            transition-all duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-0'} overflow-y-auto max-h-full max-sm:h-full`
            }
        >
            {/* Company Logo */}
            <div className={` ${isOpen ? '' : 'mt-4'} pt-4 text-center`}>
                <Link to="">
                    <img src={MansaLogo} alt="Company Logo" className={`${isOpen ? '' : ' mt-3 px-2'}`} />
                </Link>
                <button onClick={togglePanel} className="focus:outline-none px-4">
                    {isOpen ? (
                        <X size={32} className=' text-white hover:text-red-700 absolute top-2 right-2' />
                    ) : (
                        <ArrowLeftCircle size={30} className=' text-white hover:text-mansa-blue mt-8 max-[768px]:hidden' />
                    )}
                </button>
            </div>
            {/* Navigation Items */}
            <div className={`flex w-full flex-col  ${isOpen ? ' justify-start mt-5 mb-5' : ' items-center justify-center mt-2 pb-5'} `}>
                <ul className=' space-y-4'>
                    <li className={`${location.pathname === '/alldashboards' ? 'bg-mansa-blue' : 'hover:bg-mansa-blue'} transition-all duration-200 cursor-pointer`}>
                        <Link to="/alldashboards" className={`flex items-center w-full px-4 py-2 ${isOpen ? ' space-x-6' : 'gap-0 space-x-0'} `}>
                            <img src={dashboard} alt="" className={`w-8 h-6 block`} />
                            {isOpen && <span className=' font-bold text-base'>Dashboards</span>}
                        </Link>
                    </li>

                    <li className={`${location.pathname === '/profile' ? 'bg-mansa-blue' : 'hover:bg-mansa-blue'} transition-all duration-200 cursor-pointer`}>
                        <Link to="/profile" className={`flex items-center w-full px-4 py-2 ${isOpen ? ' space-x-6' : 'gap-0 space-x-0'} `}>
                            <img src={profile} alt="" className={`w-8 h-6 block`} />
                            {isOpen && <span className=' font-bold text-base'>Profile</span>}
                        </Link>
                    </li>

                    <li className={` ${location.pathname === '/billing' ? 'bg-mansa-blue' : 'hover:bg-mansa-blue'} transition-all duration-200 cursor-pointer`}>
                        <Link to="/billing" className={`flex items-center w-full px-4 py-2 ${isOpen ? ' space-x-6' : 'gap-0 space-x-0'} `}>
                            <img src={Billing} alt="" className={`w-8 h-6 block`} />
                            {isOpen && <span className=' font-bold text-base'>Billing</span>}
                        </Link>
                    </li>

                    <li className={` hover:bg-mansa-blue transition-all duration-200 cursor-pointer`}>
                        <a href='mailto:service@mansastars.com' target="_top" className={`flex items-center w-full px-4 py-2 ${isOpen ? ' space-x-6' : 'gap-0 space-x-0'} `}>
                            <img src={support} alt="" className={`w-8 h-6 block`} />
                            {isOpen && <span className=' font-bold text-base'>Support</span>}
                        </a>
                    </li>

                    <li className={` hover:bg-mansa-blue transition-all duration-200 cursor-pointer`}>
                        <a href='https://www.mansastars.com/monthly-investor-update' className={`flex items-center w-full px-4 py-2 ${isOpen ? ' space-x-6' : 'gap-0 space-x-0'} `}>
                            <img src={link} alt="" className={`w-8 h-6 block`} />
                            {isOpen && <span className=' font-bold text-base'>Send Investors Update</span>}
                        </a>
                    </li>

                    <li className={` hover:bg-mansa-blue transition-all duration-200 cursor-pointer`}>
                        <a href='https://community.mansastars.com/home' className={`flex items-center w-full px-4 py-2 ${isOpen ? ' space-x-6' : 'gap-0 space-x-0'} `}>
                            <img src={Star} alt="" className={`w-8 h-6 block`} />
                            {isOpen && <span className=' font-bold text-base'>VC/Founder Network</span>}
                        </a>
                    </li>
                    {/* Add more navigation items */}
                </ul>
            </div>

            <div className={`mt-auto mb-3 hover:bg-mansa-blue transition-all duration-200 cursor-pointer`}>
                <button onClick={handleLogout} className={`flex p-4 w-full py-2 ${isOpen ? ' space-x-6' : 'space-x-0 items-center justify-center'} `}>
                    <LogOutIcon className={`w-8 h-6 block`} />
                    {isOpen && <span className=' font-bold text-base'>Log Out</span>}
                </button>
            </div>
        </div>
    )
}

export default SidePanel;
