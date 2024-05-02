import React from 'react'
import ExportContacts from './ExportContacts'

function ContactList() {
  return (
      <div className=' mx-3 my-5 text-dark-blue'>
        <div className=' flex flex-col gap-5'>
          <h1 className=' text-3xl font-bold'>All Contacts</h1>
          <div className=' self-end'>
            <ExportContacts />
          </div>
        </div>
      </div>
    )
}

export default ContactList