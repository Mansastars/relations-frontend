import React from "react";
import SingleContactRow from "./SingleContactRow";
import { useTranslation } from "react-i18next";

function ContactTable({ data, onDeleteContact, onUpdateContact }) {
  const { t } = useTranslation();

  return (
    <div className="relative overflow-auto max-h-[70vh] shadow-lg rounded-lg border border-gray-200 bg-white">
      <table className="min-w-full text-sm text-left text-gray-700">
        <thead className="sticky top-0 z-10 bg-mansa-blue text-white shadow-sm">
          <tr>
            <th scope="col" className="px-4 py-3 text-center">
              {t('contactTable.action')}
            </th>
            <th className="px-4 py-3 text-center min-w-fit">
              {/* {t('contactTable.firstName')} */}
              Title
            </th>
            <th scope="col" className="px-4 py-3 text-center whitespace-nowrap">
              {t('contactTable.firstName')}
            </th>
            <th scope="col" className="px-4 py-3 text-center">
              {t('contactTable.lastName')}
            </th>
            <th scope="col" className="px-4 py-3 text-center">
              {t('contactTable.email')}
            </th>
            <th scope="col" className="px-4 py-3 text-center">
              {t('contactTable.phoneNumber')}
            </th>
            <th scope="col" className="px-4 py-3 text-center">
              {t('contactTable.organization')}
            </th>
            <th scope="col" className="px-4 py-3 text-center">
              {/* {t('contactTable.organization')} */}
              Gender
            </th>
            <th scope="col" className="px-4 py-3 text-center whitespace-nowrap">
              {/* {t('contactTable.organization')} */}
              LinkedIn url
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data && data.length > 0 ? (
            data.map((contact) => (
              <SingleContactRow
                key={contact.id}
                title={contact.title}
                firstName={contact.first_name}
                lastName={contact.last_name}
                email={contact.email}
                org={contact.organization_name}
                phoneNumber={contact.phone_number}
                id={contact.id}
                onDelete={onDeleteContact}
                onUpdate={onUpdateContact}
                gender={contact.gender}
                linkedinUrl={contact.linkedin_url}
              />
            ))
          ) : (
            <tr>
              <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
                {t('contactTable.noContacts')}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ContactTable;
