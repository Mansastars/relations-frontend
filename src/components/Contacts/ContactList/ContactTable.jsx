import React from "react";
import SingleContactRow from "./SingleContactRow";
import { useTranslation } from "react-i18next";

function ContactTable({ data, onDeleteContact, onUpdateContact }) {
  const { t } = useTranslation();

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-white uppercase bg-mansa-blue">
          <tr>
            <th scope="col" className="px-6 py-3">
              {t('contactTable.firstName')}
            </th>
            <th scope="col" className="px-6 py-3">
              {t('contactTable.lastName')}
            </th>
            <th scope="col" className="px-6 py-3">
              {t('contactTable.email')}
            </th>
            <th scope="col" className="px-6 py-3">
              {t('contactTable.phoneNumber')}
            </th>
            <th scope="col" className="px-6 py-3">
              {t('contactTable.organization')}
            </th>
            <th scope="col" className="px-6 py-3">
              {t('contactTable.action')}
            </th>
          </tr>
        </thead>
        <tbody>
          {data
            ? data.map((contact) => (
                <SingleContactRow
                  key={contact.id}
                  firstName={contact.first_name}
                  lastName={contact.last_name}
                  email={contact.email}
                  org={contact.organization_name}
                  phoneNumber={contact.phone_number}
                  id={contact.id}
                  onDelete={onDeleteContact}
                  onUpdate={onUpdateContact}
                />
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
}

export default ContactTable;
