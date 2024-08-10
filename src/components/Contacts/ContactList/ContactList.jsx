import React, { useState, useEffect } from "react";
import ExportContacts from "../ExportContacts";
import api from "../../../api";
import ContactTable from "./ContactTable";
import { toast } from "react-toastify";
import { getFilteredContacts } from "../../Search/getFilteredContacts.js";
import { SearchBar } from "../../Reusables";

function ContactList() {
  const [allcontacts, setAllContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchFilteredContacts = async () => {
      const contacts = await getFilteredContacts(searchTerm);
      setFilteredContacts(contacts);
    };

    fetchFilteredContacts();
  }, [searchTerm]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await api.get("contacts/all-contacts");
  //       setAllContacts(response.data.data);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const handleDeleteContact = async (id) => {
    try {
      const res = await api.delete(`contacts/delete-single-contact/${id}`);
      if (res.status === 200) {
        toast.success(res.data.message);
        setAllContacts((prevContacts) =>
          prevContacts.filter((contact) => contact.id !== id)
        );
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Failed to delete contact");
    }
  };

  const handleUpdateContact = (updatedContact) => {
    setAllContacts((prevContacts) =>
      prevContacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
  };

  return (
    <div className="mx-3 my-5 text-dark-blue">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl font-bold">All Contacts</h1>
        <div className="flex justify-between items-center">
          <div className="w-full mr-4">
          <SearchBar 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeHolder={"Search Contacts..."}
          />
          </div>
          <ExportContacts />
        </div>
      </div>
      <div className="py-8">
        <ContactTable
          data={filteredContacts}
          onDeleteContact={handleDeleteContact}
          onUpdateContact={handleUpdateContact}
        />
      </div>
    </div>
  );
}

export default ContactList;
