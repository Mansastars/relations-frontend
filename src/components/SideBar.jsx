// This Sidebar file for the dashboard
import MansaLogo from "../assets/MansaLogo.png"
import { SidebarItem } from "./Reusables"
import dashboard from "../assets/dashboard.svg"
import support from "../assets/support.svg"
import profile from "../assets/profile.svg"
import logout from "../assets/logout.svg"

function Sidebar() {
    return (
      <div className=" flex flex-col items-stretch justify-between fixed inset-0 py-6 z-10 w-56 h-screen bg-dark-blue">
        <div>
            <img src={ MansaLogo } alt="Mansa Logo" />
        </div>

        <div className=" flex flex-col gap-x-3 gap-y-3 text-white items-start py-4 font-semibold text-lg">
            <a href="/" className=" flex float-start w-full">
                <SidebarItem icon={dashboard} text="Dasboard" />
            </a>
            <a href="/" className=" flex float-start w-full">
                <SidebarItem icon={profile} text="Profile" />
            </a>
            <a href="/" className=" flex float-start w-full">
                <SidebarItem icon={support} text="Support" />
            </a>
        </div>

        <a href="" className=" flex flex-row justify-center items-center gap-3 text-white p-10">
            <img src={logout} className=" w-7" alt="" />
            <p>Log out</p>
        </a>
      </div>
    )
}

export default Sidebar;
