import React from 'react'

function SingleContactRow({firstName, lastName, email, phoneNumber, org}) {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {firstName}
            </th>
            <td className="px-6 py-4">
                {lastName}
            </td>
            <td className="px-6 py-4">
                {email}
            </td>
            <td className="px-6 py-4">
                {phoneNumber}
            </td>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {org}
            </th>
            {/* <td className="px-6 py-4 text-right">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td> */}
        </tr>
    )
}

export default SingleContactRow