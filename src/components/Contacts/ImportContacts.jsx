import { UploadCloudIcon } from 'lucide-react';
import React, { useState, useMemo, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import Swal from 'sweetalert2';
import { acceptStyle, baseStyle, focusedStyle, rejectStyle } from './ImportContactStyle';
import Papa from 'papaparse';
import ExtractedData from './ExtractedData';

const requiredFields = ['first name', 'last name', 'email', 'phone number', 'organization'];

export let extractedData = [];

function ImportContacts() {
  const [jsonData, setJsonData] = useState(null);

  // File Validation
  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject
  } = useDropzone({
    accept: { 'text/csv': ['.csv'] },
    maxFiles: 1,
  });

  console.log('Accepted file', acceptedFiles[0]);

  // Event handling and styling
  const style = useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject
  ]);

   // Handles invaliad file format
   function handleFileRejection() {
    if (fileRejections.length > 0) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid File Format!',
        text: `'${fileRejections[0].file.path}' is not in .csv format.`,
      });
    } 
  }
  
  // Handles the accepted .csv file
  const handleFileParsing = async () => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = async () => {
        const csvData = reader.result;
        try {
          const parsedData = Papa.parse(csvData, {
            header: false,
            skipEmptyLines: true,
            dynamicTyping: true, // Convert numeric values to numbers
          });

          console.log('Parsed data: ', parsedData);

          // Check if the first index of parsed data is null, indicating no header row
          if (parsedData.data[0] === null) {
            Swal.fire({
              icon: 'error',
              title: 'Error!',
              text: 'CSV file does not contain a header row.',
            });
            return;
          }

          // Extract header names from the first row
          const headerRow = parsedData.data[0]; // Use the first row as header row
          const fieldNames = headerRow.map(value => (value ? value.trim() : ''));

          // Check if any required field is present in the header row
          const hasRequiredField = fieldNames.some(fieldName => requiredFields.includes(fieldName));

          if (hasRequiredField) {
            // Extract data based on required fields
            extractedData = parsedData.data.slice(1).map(row => {
              const extractedEntry = {};
              fieldNames.forEach((fieldName, index) => {
                const normalizedKey = fieldName.toLowerCase();
                if (requiredFields.includes(fieldName)) {
                  extractedEntry[normalizedKey] = row[index];
                }
              });
              return extractedEntry;
            });
            console.log('Extracted Data:', extractedData);
            Swal.fire({
              icon: 'success',
              title: 'Success!',
              text: `The file was uploaded successfully. Please verify the contents below before final submission.`,
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Error!',
              text: 'CSV file does not contain any of the required fields.',
            });
          }
        } catch (error) {
          console.error('Error parsing CSV:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'An error occurred while parsing the CSV file.',
          });
        }
      };
    }
  };

  // Renders component on mount
  useEffect(() => {
    handleFileParsing();
    handleFileRejection();
  }, [acceptedFiles, fileRejections]);

  useEffect(() => {
    // handleDataExtraction()
    console.log('Parsed JSON Data:', jsonData);
  }, [jsonData]);

  return (
    <div className='px-3 flex flex-col my-5 w-full justify-center items-center overflow-x-auto'>
      <section className="container w-[80%] max-md:w-full mb-20 max-md:mb-10">
        <div
          {...getRootProps({style})}
        >
          <input {...getInputProps()} />
          <UploadCloudIcon size={40} />
          <p className='text-lg text-center'>Drag and drop file to upload, or <span className='text-mansa-blue underline cursor-pointer'>browse</span></p>
          <em>(Only *.csv file will be accepted)</em>
        </div>
      </section>

      <ExtractedData extractedData={extractedData} acceptedFiles={acceptedFiles} />
    </div>
  );
}

export default ImportContacts;
