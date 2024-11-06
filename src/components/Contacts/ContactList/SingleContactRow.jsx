import React, { useState } from "react";
import { XCircleIcon } from "lucide-react";
import { Edit2Icon } from "lucide-react";
import api from "../../../api";
import { toast } from "react-toastify";
import EditSingleContact from "./EditSingleContact";

function SingleContactRow({ title, firstName, lastName, email, phoneNumber, org, id, onDelete, onUpdate, gender, linkedinUrl }) {
  const [showEditContact, setShowEditContact] = useState(false);

  const handleDelete = async () => {
    onDelete(id);
  };

  const handleUpdate = (updatedContact) => {
    setShowEditContact(false);
    onUpdate(updatedContact);
  };

  return (
    <tr className="bg-white border-b hover:bg-gray-50">
      <td className="px-6 py-4 flex">
        <button
          onClick={() => setShowEditContact(true)}
          className="text-white cursor-pointer mr-4"
        >
          <Edit2Icon className="h-4 w-4 text-blue-600" />
        </button>
        <button
          onClick={handleDelete}
          className="text-white cursor-pointer"
        >
          <XCircleIcon className="h-4 w-4 text-red-600" />
        </button>
      </td>
      <td className="px-6 py-4">{title}</td>
      <td className="px-6 py-4">{firstName}</td>
      <td className="px-6 py-4">{lastName}</td>
      <td className="px-6 py-4">{email}</td>
      <td className="px-6 py-4 whitespace-nowrap">{phoneNumber}</td>
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        {org}
      </th>
      <td className="px-6 py-4">{gender}</td>
      <td className="px-6 py-4">{linkedinUrl}</td>
      {showEditContact && (
        <EditSingleContact
          onClose={() => setShowEditContact(false)}
          title={title}
          firstName={firstName}
          lastName={lastName}
          email={email}
          phoneNumber={phoneNumber}
          org={org}
          id={id}
          onUpdate={handleUpdate}
          gender={gender}
          linkedin_url={linkedinUrl}
        />
      )}
    </tr>
  );
}

export default SingleContactRow;
