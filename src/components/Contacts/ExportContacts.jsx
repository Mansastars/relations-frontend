import React, { useState, useEffect } from 'react'
import exportFromJSON from 'export-from-json'
import { Button } from '../Reusables'
import Swal from 'sweetalert2';
import api from '../api';

function ExportContacts() {

    const handleExport = async () => {
        Swal.fire({
            title: 'Export Contacts',
            text: 'Are you sure you want to export your contacts?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes, export it!',
            cancelButtonText: 'Cancel'
        }).then(async (result) => {
            if (result.isConfirmed) {
                // API call to get contacts
                try {
                    const response = await api.get('contacts/export-contacts')
                    const data = response.data.data;

                    const userData = JSON.parse(localStorage.getItem('user'))

                    const fileName = `${userData.first_name}_Contacts`
                    const exportType = exportFromJSON.types.csv

                    exportFromJSON({
                        data,
                        fileName,
                        fields: {
                            first_name: 'First Name',
                            last_name: 'Last Name',
                            gender: 'Gender',
                            organization_name: 'Organization',
                        },
                        exportType,
                    });

                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: 'Contacts exported successfully.',
                    });
                } catch (error) {
                    console.log(error);

                    Swal.fire({
                        icon: 'error',
                        title: 'Export Error!',
                        text: 'Failed to export contacts. Please try again.',
                    });
                }
            }
        });
    }



    return (
        <>
            <Button
                text='Export Contacts'
                onClick={handleExport}
            />
        </>

    )
}

export default ExportContacts