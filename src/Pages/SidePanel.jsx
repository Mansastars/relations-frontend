import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MansaLogo from "../assets/MansaLogos/MansaLogo.png";
import {
  Logout,
  DashboardOutlined,
  Dashboard,
  ContactSupportOutlined,
  ContactSupport,
  PeopleOutline,
  People,
  Update,
  UpdateOutlined,
} from "@mui/icons-material";
import { BsHourglassSplit } from "react-icons/bs";
import { SlHourglass } from "react-icons/sl";
import { HiSpeakerphone } from "react-icons/hi";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { useAuth } from "../hooks/AuthContext";
import api from "../api";
import Swal from "sweetalert2";
import { ArrowLeftCircle, MenuIcon } from "lucide-react";
import { Avatar } from "@mui/material";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useTranslation } from "react-i18next";  // Importing useTranslation

function SidePanel({ setShowContactUs }) {
  const [isOpen, setIsOpen] = useState(() => window.innerWidth > 768);
  const { logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);

  const userData = localStorage.getItem("user");

  const { t } = useTranslation();  // Using the translation hook

  useEffect(() => {
    const storedUser = JSON.parse(userData);
    if (storedUser) {
      setUser(storedUser);
    }
  }, [userData]);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const menuItems = [
    {
      path: "/alldashboards",
      label: t("sidepanel.dashboards"),  // Translation key for "Dashboards"
      icon: <DashboardOutlined />,
      activeIcon: <Dashboard />,
    },
    {
      path: "/contact",
      label: t("sidepanel.contacts"),  // Translation key for "Contacts"
      icon: <PeopleOutline />,
      activeIcon: <People />,
    },
    {
      path: "/broadcast",
      label: t("sidepanel.broadcast"),  // Translation key for "Broadcast"
      icon: <HiOutlineSpeakerphone className="w-6 h-w-6" />,
      activeIcon: <HiSpeakerphone className="w-6 h-w-6" />,
    },
    {
      path: "/investors-update",
      label: t("sidepanel.investorsUpdate"),  // Translation key for "Send Investors Update"
      icon: <UpdateOutlined />,
      activeIcon: <Update />,
    },
    {
      path: "/wait-list",
      label: t("sidepanel.upcoming"),  // Translation key for "Upcoming"
      icon: <BsHourglassSplit className="w-6 h-w-6" />,
      activeIcon: <SlHourglass className="w-6 h-w-6" />,
    },
    {
      path: "#",
      label: t("sidepanel.contactUs"),  // Translation key for "Contact Us"
      icon: <ContactSupportOutlined />,
      activeIcon: <ContactSupport />,
      onClick: () => setShowContactUs(true),
    },
  ];

  const getUserInitials = (firstName, lastName) => {
    return `${firstName[0]}${lastName[0]}`.toUpperCase();
  };

  return (
    <div
      className={` h-screen flex flex-col ${
        isOpen ? " w-56" : " w-20 max-sm:w-16 justify-center"
      } bg-dark-blue text-white
                   transition-all duration-300 ${
                     isOpen ? "translate-x-0" : "-translate-x-0"
                   } overflow-y-auto max-h-full max-sm:h-full`}
    >
      <div className={`${isOpen ? "" : "mt-10"}  text-center`}>
        <Link to="/alldashboards">
          <img src={MansaLogo} alt="Company Logo" />
        </Link>
        <LanguageSwitcher />
        {user && (
          <div
            className={`flex items-center mt-5 px-4 cursor-pointer ${
              isOpen ? "space-x-4" : "flex-col items-center"
            }`}
            onClick={() => {
              navigate("/profile");
            }}
          >
            <Avatar
              src={user.profile_picture || ""}
              alt="User's profile"
              sx={{
                width: 40,
                height: 40,
                backgroundColor: user.profile_picture
                  ? "transparent"
                  : "rgba(8,165,170,70%)",
                fontSize: 20,
              }}
            >
              {!user.profile_picture &&
                getUserInitials(user.first_name, user.last_name)}
            </Avatar>
            {isOpen && (
              <span className="font-bold text-base truncate max-w-full">
                {user.first_name} {user.last_name}
              </span>
            )}
          </div>
        )}

        <button onClick={togglePanel} className=" px-4">
          {isOpen ? (
            <ArrowLeftCircle
              size={30}
              className="text-white hover:text-red-700 absolute top-2 right-2"
            />
          ) : (
            <MenuIcon className="text-white hover:text-mansa-blue mt-4 max-[768px]:hidden" />
          )}
        </button>
      </div>

      <div
        className={`flex w-full flex-col ${
          isOpen ? "justify-start mb-5" : "items-center justify-center pb-5"
        }`}
      >
        <ul className="space-y-4">
          {menuItems.map(
            ({ path, label, icon, activeIcon, onClick, external }) => (
              <li
                key={path}
                className={`${
                  location.pathname === path
                    ? "bg-mansa-blue"
                    : "hover:bg-mansa-blue"
                } transition-all duration-200 cursor-pointer`}
              >
                {external ? (
                  <a
                    href={path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center w-full px-4 py-2 ${
                      isOpen ? "space-x-6" : "gap-0 space-x-0"
                    }`}
                  >
                    {location.pathname === path ? activeIcon : icon}
                    {isOpen && (
                      <span className="font-bold text-base">{label}</span>
                    )}
                  </a>
                ) : (
                  <Link
                    to={path}
                    onClick={onClick}
                    className={`flex items-center w-full px-4 py-2 ${
                      isOpen ? "space-x-6" : "gap-0 space-x-0"
                    }`}
                  >
                    {location.pathname === path ? activeIcon : icon}
                    {isOpen && (
                      <span className="font-bold text-base">{label}</span>
                    )}
                  </Link>
                )}
              </li>
            )
          )}
        </ul>
      </div>
      <div className="mt-auto mb-3 hover:bg-mansa-blue transition-all duration-200 cursor-pointer">
        <button
          onClick={handleLogout}
          className={`flex p-4 w-full py-2 ${
            isOpen ? "space-x-6" : "space-x-0 items-center justify-center"
          }`}
        >
          <Logout className="w-8 h-6 block" />
          {isOpen && <span className="font-bold text-base">{t("logout")}</span>} {/* Translation for "Log Out" */}
        </button>
      </div>
    </div>
  );
}

export default SidePanel;
