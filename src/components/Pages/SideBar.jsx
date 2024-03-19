import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MansaLogo from "../../assets/MansaLogo.png";
import dashboard from "../../assets/dashboard.svg";
import support from "../../assets/support.svg";
import profile from "../../assets/profile.svg";
import logout from "../../assets/logout.svg";
import link from "../../assets/link.svg";
import Star from "../../assets/Star.svg";
import Billing from "../../assets/Billing.svg";
import { SidebarItem } from "../Reusables";
import { LogOutIcon } from "lucide-react";
import { useAuth } from "../../hooks/AuthContext";

function Sidebar() {
    const { logout } = useAuth();
    const [activeItem, setActiveItem] = useState(1);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleLogout = async () => {
        try {
            // Calling the logout function from the authentication context
            await logout();
            // After successful logout, redirect the user to the login page or any other page
            // window.location.href = 'https://relations.mansastars.com/';
          } catch (error) {
            console.error('Logout error:', error);
          }
    };

    const handleItemClick = (itemId) => {
        setActiveItem(itemId);
    };

    return (
        <div className="flex flex-col pt-6 w-56 max-[768px]:w-20 bg-dark-blue h-screen max-h-full justify-between">
            <div className="flex flex-col gap-10 h-screen max-h-full bg-dark-blue">
                <div className="self-center max-w-[200px] max-[768px]:self-start">
                    <img src={MansaLogo} alt="Mansa Logo" />
                </div>

                <div className="flex flex-col gap-x-2 max-[768px]:gap-x-0 gap-y-2 text-white items-start py-4 font-semibold text-base">
                    <Link to="/alldashboards" onClick={() => handleItemClick(1)} className="flex flex-row w-full">
                        <SidebarItem icon={dashboard} text={isSmallScreen ? "" : "Dashboards"} id='1' activeItem={activeItem} setActiveItem={setActiveItem} />
                    </Link>
                    <Link to="/profile" onClick={() => handleItemClick(2)} className="flex flex-row w-full">
                        <SidebarItem icon={profile} text={isSmallScreen ? "" : "Profile"} id='2' activeItem={activeItem} setActiveItem={setActiveItem} />
                    </Link>
                    <Link to="" onClick={() => handleItemClick(3)} className="flex flex-row w-full">
                        <SidebarItem icon={Billing} text={isSmallScreen ? "" : "Billing"} id='3' activeItem={activeItem} setActiveItem={setActiveItem} />
                    </Link>
                    <a href="mailto:service@mansastars.com" target="_top" onClick={() => handleItemClick(4)} className="flex flex-row w-full">
                        <SidebarItem icon={support} text={isSmallScreen ? "" : "Support"} id='4' activeItem={activeItem} setActiveItem={setActiveItem} />
                    </a>
                    <a href="https://www.mansastars.com/monthly-investor-update" onClick={() => handleItemClick(5)} className="flex flex-row w-full">
                        <SidebarItem icon={link} text={isSmallScreen ? "" : "Send Investors Update"} id='5' activeItem={activeItem} setActiveItem={setActiveItem} />
                    </a>
                    <a href="https://community.mansastars.com/home" onClick={() => handleItemClick(6)} className="flex flex-row w-full">
                        <SidebarItem icon={Star} text={isSmallScreen ? "" : "VC/Founder Network"} id='6' activeItem={activeItem} setActiveItem={setActiveItem} />
                    </a>
                </div>
            </div>

            <button onClick={handleLogout} className="flex flex-row justify-start max-[768px]:justify-center gap-6 max-md:gap-0 text-white py-10 px-2 bg-dark-blue">
                <div className="pl-2">
                    <LogOutIcon />
                </div>
                {!isSmallScreen && <p>Log out</p>}
            </button>
        </div>
    );
}

export default Sidebar;
