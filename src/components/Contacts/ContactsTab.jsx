import React from "react";
import ContactList from "./ContactList";
import { Tabs } from "flowbite-react";
import { HiClipboardList } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import ImportContacts from "./ImportContacts";

export function ContactsTab() {
  return (
    <div className="">
      <Tabs
        aria-label="Full width tabs"
        style="fullWidth"
        className=" bg-light-grey"
      >
        <Tabs.Item active title="Contacts" icon={HiClipboardList}>
          <ContactList />
        </Tabs.Item>
        <Tabs.Item title="Import Contacts" icon={MdDashboard}>
          <ImportContacts />
        </Tabs.Item>
      </Tabs>
    </div>
  );
}

export default ContactsTab;
