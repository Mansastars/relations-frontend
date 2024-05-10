import React from 'react';
import SingleContactRow from './SingleContactRow';

function ContactTable({ data }) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white uppercase bg-teal-400 dark:bg-teal-400 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              First name
            </th>
            <th scope="col" className="px-6 py-3">
              Last name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Phone Number
            </th>
            <th scope="col" className="px-6 py-3">
              Organization
            </th>
            {/* <th scope="col" className="px-6 py-3">
              Action
            </th> */}
          </tr>
        </thead>
        <tbody>
          {data.map((contact) => (
            <SingleContactRow
              key={contact.id} // Don't forget to include a unique key prop
              firstName={contact.first_name}
              lastName={contact.last_name}
              email={contact.email}
              org={contact.organization}
              phoneNumber={contact.phone_number}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactTable;
