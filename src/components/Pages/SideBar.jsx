import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MansaLogo from "../../assets/MansaLogo.png";
import dashboard from "../../assets/dashboard.svg";
import support from "../../assets/support.svg";
import profile from "../../assets/profile.svg";
import logout from "../../assets/logout.svg";
import link from "../../assets/link.svg";
import { SidebarItem } from "../Reusables";

function Sidebar() {
    const [activeItem, setActiveItem] = useState(1);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };

        handleResize(); // Call the function once to set initial state

        window.addEventListener('resize', handleResize); // Add event listener for resize

        return () => {
            window.removeEventListener('resize', handleResize); // Cleanup by removing event listener
        };
    }, []);

    const handleLogout = async () => {
        localStorage.clear();
        window.location.href = 'https://relations.mansastars.com/';
    };

    return (
        <div className="flex flex-col pt-6 w-56 max-[768px]:w-20 bg-dark-blue h-full min-h-screen justify-between">
            <div className=" flex flex-col gap-10">
                <div>
                    <img src={MansaLogo} alt="Mansa Logo" /> {/* Always display the same logo */}
                </div>

                <div className="flex flex-col gap-x-2 max-[768px]:gap-x-0 gap-y-2 text-white items-start py-4 font-semibold text-base">
                    <Link to="/alldeals" className="flex flex-row w-full">
                        <SidebarItem icon={dashboard} text={isSmallScreen ? "" : "Deals"} id='1' activeItem={activeItem} setActiveItem={setActiveItem} />
                    </Link>
                    <Link to="/profile" className="flex flex-row w-full">
                        <SidebarItem icon={profile} text={isSmallScreen ? "" : "Profile"} id='2' activeItem={activeItem} setActiveItem={setActiveItem} />
                    </Link>
                    <a href="mailto:customercare@mansastars.com" target="_top" className="flex flex-row w-full">
                        <SidebarItem icon={support} text={isSmallScreen ? "" : "Support"} id='3' activeItem={activeItem} setActiveItem={setActiveItem} />
                    </a>
                    <a href="https://www.mansastars.com/monthly-investor-update" className="flex flex-row w-full">
                        <SidebarItem icon={link} text={isSmallScreen ? "" : "Send Investors Update"} id='4' activeItem={activeItem} setActiveItem={setActiveItem} />
                    </a>
                </div>
            </div>

            <button onClick={handleLogout} className="flex flex-row justify-start max-[768px]:justify-center gap-6 max-md:gap-0 text-white py-10 px-2">
                <img src={logout} className="w-7" alt="" />
                {!isSmallScreen && <p>Log out</p>} {/* Render logout text only on larger screens */}
            </button>
        </div>
    );
}

export default Sidebar;
