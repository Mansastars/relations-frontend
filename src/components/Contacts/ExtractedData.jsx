import React, { useState } from 'react'
import Swal from 'sweetalert2';
import { Button, Modal, Table, Tooltip } from "flowbite-react";
import { FullInput } from '../Reusables';
import { Button as CustomButton } from '../Reusables';
import api from '../api';

function ExtractedData({ extractedData, acceptedFiles }) {
    console.log('Extracted data from the extracted data component', extractedData);
    console.log('Accepted file::: ', acceptedFiles);
    const [isEditing, setIsEditing] = useState(false);
    const [editedData, setEditedData] = useState({});
    const [editedRowIndex, setEditedRowIndex] = useState(null);

    const handleEdit = (index) => {
        setIsEditing(true);
        setEditedData({ ...extractedData[index] });
        setEditedRowIndex(index);
    };

    const handleSave = () => {
        // Update the corresponding row in extractedData with editedData
        extractedData[editedRowIndex] = editedData;
        setIsEditing(false);
    };

    const handleSubmit = async () => {
      // Show confirmation dialog before submission
      Swal.fire({
          title: 'Are you sure?',
          text: 'Please verify that you have properly reviewed the contents before submitting.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, submit it!'
      }).then(async (result) => {
          if (result.isConfirmed) {
              // Send post request to backend for submission
              const modifiedData = extractedData.map((row) => ({
                first_name: row['first name'],
                last_name: row['last name'],
                email: row['email'],
                organization_name: row['organization'],
                phone_number: row['phone number']
              }))

              try {
                const response = await api.post(`contacts/import-contacts`, { data: modifiedData })
                console.log(response);
                acceptedFiles.pop()
                Swal.fire({
                  icon: 'success',
                  title: 'Success!',
                  text: 'Data submitted successfully.'
                });
              } catch (error) {
                console.log('error', error);
                Swal.fire({
                  icon: 'error',
                  title: 'Error!',
                  text: 'Failed to submit data. Please try again.'
                });
              }
          }
      });
    };

  return (
    <div className=" m-auto">
      <div className='overflow-x-auto flex flex-col justify-center items-center'>
        <h2 className="text-2xl font-bold mb-4 text-left self-start">CSV File Fields</h2>
        <Table striped>
            <Table.Head title='Verify the content of the .csv file then scroll to the buttom to confirm submission.'>
              <Table.HeadCell>first name</Table.HeadCell>
              <Table.HeadCell>last name</Table.HeadCell>
              <Table.HeadCell>email</Table.HeadCell>
              <Table.HeadCell>organization</Table.HeadCell>
              <Table.HeadCell>phone number</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Edit</span>
              </Table.HeadCell>
            </Table.Head>
          <Table.Body className="divide-y">
            {extractedData.map((rowData, index) => (
              <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {rowData['first name']}
                </Table.Cell>
                <Table.Cell>{rowData['last name']}</Table.Cell>
                <Table.Cell>{rowData['email']}</Table.Cell>
                <Table.Cell>{rowData['organization']}</Table.Cell>
                <Table.Cell>{rowData['phone number']}</Table.Cell>
                <Table.Cell>
                  <Button
                    onClick={() => handleEdit(index)}
                    className="font-medium text-mansa-blue hover:underline p-0 m-0 border-0"
                  >
                    Edit
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>

        {/* Submit button */}
        {extractedData.length !== 0  && 
        <div className=' my-12'>
          <CustomButton text='Confirm Submission' onClick={handleSubmit} className='' />
        </div>}
      </div>


      {/* Modal for Editing */}
      <Modal dismissible show={isEditing} onClose={() => setIsEditing(false)}>
        <Modal.Header>Edit Row Values</Modal.Header>
        <Modal.Body className=' flex flex-col gap-5'>
          {/* Form for editing */}
            <FullInput
                title='First Name'
                type="text"
                value={editedData['first name'] || ''}
                onChange={(e) => setEditedData({ ...editedData, 'first name': e.target.value })}
            />

            <FullInput
                title='Last Name'
                type="text"
                value={editedData['last name'] || ''}
                onChange={(e) => setEditedData({ ...editedData, 'last name': e.target.value })}
            />

            <FullInput
                title='Email'
                type="text"
                value={editedData['email'] || ''}
                onChange={(e) => setEditedData({ ...editedData, 'email': e.target.value })}
            />

            <FullInput
                title='Organization'
                type="text"
                value={editedData['organization'] || ''}
                onChange={(e) => setEditedData({ ...editedData, 'organization': e.target.value })}
            />

            <FullInput
                title='Phone Number'
                type="number"
                value={editedData['phone number'] || ''}
                onChange={(e) => setEditedData({ ...editedData, 'phone number': e.target.value })}
            />
          {/* Other input fields */}
        </Modal.Body>
        <Modal.Footer className=' flex justify-between mx-10'>
          <Button className=' bg-mansa-blue text-white w-40 font-bold' onClick={handleSave}>Save</Button>
          <Button className=' bg-red-500 text-white w-40 font-bold' onClick={() => setIsEditing(false)}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ExtractedData