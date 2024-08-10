import React, { useState, useEffect } from "react";
import { getFilteredContacts } from "./getFilteredContacts.js";

function ContactsSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredContacts, setFilteredContacts] = useState([]);

  useEffect(() => {
    const fetchFilteredContacts = async () => {
      const contacts = await getFilteredContacts(searchTerm);
      setFilteredContacts(contacts);
    };

    fetchFilteredContacts();
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search contacts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded"
      />
    </div>
  );
}

export default ContactsSearch;
