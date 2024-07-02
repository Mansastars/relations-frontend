import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MansaLogo from "../assets/MansaLogos/MansaLogo.png";
import {
  Logout,
  Menu,
  DashboardOutlined,
  Dashboard,
  ContactSupportOutlined,
  ContactSupport,
  PeopleOutline,
  People,
  AttachMoneyOutlined,
  AttachMoney,
  Update,
  UpdateOutlined,
  Settings,
  SettingsOutlined,
  StarBorderOutlined,
  Star,
} from "@mui/icons-material";
import { useAuth } from "../hooks/AuthContext";
import api from "../api";
import Swal from "sweetalert2";
import { ArrowLeftCircle, X } from "lucide-react";

function SidePanel({ setShowContactUs }) {
  const [isOpen, setIsOpen] = useState(() => window.innerWidth > 768);
  const { logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

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

  const handleBilling = async () => {
    const userData = JSON.parse(localStorage.getItem("user"));
    setIsLoading(true);
    if (!userData.subscription_name) {
      navigate("/pricing");
      setIsLoading(false);
      return;
    }
    try {
      const res = await api.post(`users/customer-portal`, {
        email: userData.email,
      });
      if (res.data && res.data.url) {
        window.location.href = res.data.url;
      } else {
        Swal.fire(
          "Error",
          "An error occurred while processing your request",
          "error"
        );
      }
    } catch (error) {
      Swal.fire(
        "Error",
        "An error occurred while processing your request",
        "error"
      );
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const menuItems = [
    {
      path: "/alldashboards",
      label: "Dashboards",
      icon: <DashboardOutlined />,
      activeIcon: <Dashboard />,
    },
    {
      path: "/investors-update",
      label: "Send Investors Update",
      icon: <UpdateOutlined />,
      activeIcon: <Update />,
    },
    {
      path: "/contact",
      label: "Contacts",
      icon: <PeopleOutline />,
      activeIcon: <People />,
    },
    {
      path: "/pricing",
      label: "Billing",
      icon: <AttachMoneyOutlined />,
      activeIcon: <AttachMoney />,
      onClick: handleBilling,
    },
    {
      path: "https://community.mansastars.com/home",
      label: "VC/Founder Network",
      icon: <StarBorderOutlined />,
      activeIcon: <Star />,
      external: true,
    },
    {
      path: "/profile",
      label: "Profile",
      icon: <SettingsOutlined />,
      activeIcon: <Settings />,
    },
    {
      path: "#",
      label: "Contact Us",
      icon: <ContactSupportOutlined />,
      activeIcon: <ContactSupport />,
      onClick: () => setShowContactUs(true),
    },
  ];

  return (
    <div
      className={` h-screen flex flex-col ${
        isOpen ? " w-56" : " w-20 max-sm:w-16 justify-center"
      } bg-dark-blue text-white
                   transition-all duration-300 ${
                     isOpen ? "translate-x-0" : "-translate-x-0"
                   } overflow-y-auto max-h-full max-sm:h-full`}
    >
      <div className={`${isOpen ? "" : "mt-4"} pt-4 text-center`}>
        <Link to="/alldashboards">
          <img
            src={MansaLogo}
            alt="Company Logo"
            className={`${isOpen ? "" : "mt-3 px-2"}`}
          />
        </Link>

        <button onClick={togglePanel} className="focus:outline-none px-4">
          {isOpen ? (
            <ArrowLeftCircle
              size={30}
              className="text-white hover:text-red-700 absolute top-2 right-2"
            />
          ) : (
            <Menu className="text-white hover:text-mansa-blue mt-8 max-[800px]:hidden" />
          )}
        </button>
      </div>
      <div
        className={`flex w-full flex-col ${
          isOpen
            ? "justify-start mt-5 mb-5"
            : "items-center justify-center mt-2 pb-5"
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
          {isOpen && <span className="font-bold text-base">Log Out</span>}
        </button>
      </div>
    </div>
  );
}

export default SidePanel;
