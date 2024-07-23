import React, { useState } from "react";
import { Tabs } from "flowbite-react";
import { HiUser, HiMail, HiLockClosed } from "react-icons/hi";
import ProfileSection from "./ProfileSection/ProfileSection";
import EmailSection from "./EmailSection/EmailSection";
import PasswordSection from "./PasswordSection/PasswordSection";
import DeleteAccount from "./DeleteAccountSection/DeleteAccount";

const ProfilePageUI = () => {
  const [selectedSection, setSelectedSection] = useState("Profile");

  const renderSection = () => {
    switch (selectedSection) {
      case "Profile":
        return <ProfileSection />;
      case "Email":
        return <EmailSection />;
      case "Password":
        return <PasswordSection />;
      case "Account":
        return <DeleteAccount />;
      default:
        return <ProfileSection />;
    }
  };

  return (
    <div className="">
      <div className="hidden sm:block">
        <Tabs
          aria-label="Full width tabs"
          style="fullWidth"
          className="bg-light-grey"
        >
          <Tabs.Item
            active={selectedSection === "Profile"}
            title="Profile"
            icon={HiUser}
            onClick={() => setSelectedSection("Profile")}
          >
            <ProfileSection />
          </Tabs.Item>
          <Tabs.Item
            active={selectedSection === "Email"}
            title="Email"
            icon={HiMail}
            onClick={() => setSelectedSection("Email")}
          >
            <EmailSection />
          </Tabs.Item>
          <Tabs.Item
            active={selectedSection === "Password"}
            title="Password"
            icon={HiLockClosed}
            onClick={() => setSelectedSection("Password")}
          >
            <PasswordSection />
          </Tabs.Item>
          <Tabs.Item
            active={selectedSection === "Account"}
            title="Account"
            onClick={() => setSelectedSection("Account")}
          >
            <DeleteAccount />
          </Tabs.Item>
        </Tabs>
      </div>

      <div className="block sm:hidden">
        <select
          value={selectedSection}
          onChange={(e) => setSelectedSection(e.target.value)}
          className="w-full text-lg px-3 py-4 border border-gray-300 active:outline-white"
        >
          <option value="Profile">Profile Settings</option>
          <option value="Email">Email Settings</option>
          <option value="Password">Password Settings</option>
          <option value="Account">Account Settings</option>
        </select>
        <div className="mt-4">{renderSection()}</div>
      </div>
    </div>
  );
};

export default ProfilePageUI;
