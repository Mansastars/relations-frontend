import React, { useState, useEffect } from 'react'
import ExportContacts from './ExportContacts'
import api from '../api';
import ContactTable from './ContactTable';

function ContactList() {
  const [allcontacts, setAllContacts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('contacts/all-contacts');
        setAllContacts(response.data.data)
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <div className=' mx-3 my-5 text-dark-blue'>
      <div className=' flex flex-col gap-5'>
        <h1 className=' text-3xl font-bold'>All Contacts</h1>
        <div className=' self-end'>
          <ExportContacts />
        </div>
      </div>
      <div className='py-8'>
        <ContactTable data={allcontacts} />
      </div>
    </div>
  )
}

export default ContactList