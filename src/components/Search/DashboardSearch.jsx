import React, { useState, useEffect } from "react";
import { getFilteredContacts } from "./getFilteredContacts.js";

function DashboardSearch
() {
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
      <ul>
        {filteredContacts.map((contact) => (
          <li key={contact.id}>
            {contact.first_name} {contact.last_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DashboardSearch
;
