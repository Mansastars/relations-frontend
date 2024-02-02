// This Sidebar file for the dashboard
import MansaLogo from "../assets/MansaLogo.png"
import dashboard from "../assets/dashboard.svg"
import support from "../assets/support.svg"
import profile from "../assets/profile.svg"
import logout from "../assets/logout.svg"
import link from "../assets/link.svg"
import { useState } from "react"
import { SidebarItem } from "./Reusables"
import { Link } from "react-router-dom"


function Sidebar() {
    const [activeItem, setActiveItem] = useState(1);

    const handleLogout = () => {
        // Perform any additional logout logic (clearing tokens, etc.)
        
        // Redirect to the login page or another appropriate route
        window.location.href = 'https://relations.mansastars.com/';
      };

    return (
      <div className=" flex flex-col pt-6 w-56 bg-dark-blue h-screen">
        <div>
            <img src={ MansaLogo } alt="Mansa Logo" />
        </div>

        <div className=" flex flex-col gap-x-2 gap-y-2 text-white items-start py-4 font-semibold text-base">
            <a href="/dashboard" className=" flex float-start w-full">
                <SidebarItem icon={dashboard} text="Dasboard" id='1' activeItem={activeItem} setActiveItem={setActiveItem} />
            </a>
            <Link to="/profile" className=" flex float-start w-full">
                <SidebarItem icon={profile} text="Profile" id='2' activeItem={activeItem} setActiveItem={setActiveItem} />
            </Link>
            <a href="mailto:" className=" flex float-start w-full">
                <SidebarItem  icon={support} text="Support" id='3' activeItem={activeItem} setActiveItem={setActiveItem} />
            </a>
            <a href="https://www.mansastars.com/monthly-investor-update" className=" flex float-start w-full">
                <SidebarItem icon={link} text="Send Investors Update" id='4' activeItem={activeItem} setActiveItem={setActiveItem} />
            </a>
        </div>

        <button onClick={handleLogout} className=" flex flex-row justify-start gap-3 text-white py-10 px-2">
            <img src={logout} className=" w-7" alt="" />
            <p>Log out</p>
        </button>
      </div>
    )
}

export default Sidebar;
