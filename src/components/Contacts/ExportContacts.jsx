import React from 'react'
import exportFromJSON from 'export-from-json'
import { Button } from '../Reusables'
import Swal from 'sweetalert2';

function ExportContacts() {

    const handleExport = async () => {
        Swal.fire({
            title: 'Export Contacts',
            text: 'Are you sure you want to export your contacts?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes, export it!',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                // API call to get contacts
                const data = [{ foo: 'foo'}, { bar: 'bar' }]

                const fileName = 'Contacts'
                const exportType =  exportFromJSON.types.csv

                exportFromJSON({ data, fileName, exportType })
            }
        });
    }

  return (
    <Button
    text='Export Contacts'
    onClick={handleExport}
    /> 
  )
}

export default ExportContacts