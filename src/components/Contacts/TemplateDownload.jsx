import React from 'react'
import exportFromJSON from 'export-from-json'
import { Button, ButtonWithIcon } from '../Reusables'
import Swal from 'sweetalert2';
import { DownloadIcon } from 'lucide-react';

export function TemplateDownload() {
  const handleDownload = async () => {
    try {
      const fileName = `template`
      const exportType =  exportFromJSON.types.csv

      exportFromJSON({ data: templateData, fileName, exportType });

      Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Template downloaded successfully.',
      });
  } catch (error) {
      console.log(error);

      Swal.fire({
          icon: 'error',
          title: 'Export Error!',
          text: 'Failed to download template. Please try again.',
      });
  }
  }
  return (
    <div className=' flex flex-col gap-2 items-center'>
      <span className="text-2xl font-bold mb-4">Download Template CSV</span>
      <ButtonWithIcon onClick={handleDownload} className=' flex items-center gap-5 w-fit'>
        <DownloadIcon />
        <p className=" font-bold">Download Template</p>
      </ButtonWithIcon>
      <span className="text-sm">(Use this template to ensure correct formatting)</span>
    </div>
  )
}



export const templateData = [
  {
    'First Name': 'Olivia',
    'Last Name': 'Parker',
    'Email': 'olivia.parker@brightpath.com',
    'Organization': 'BrightPath Solutions',
    'Phone Number': '1 (555) 123-4567'
  },
  {
    'First Name': 'Ethan',
    'Last Name': 'Reynolds',
    'Email': 'ethan.reynolds@technova.com',
    'Organization': 'TechNova Inc.',
    'Phone Number': '1 (555) 987-6543'
  },
  {
    'First Name': 'Sophia',
    'Last Name': 'Nguyen',
    'Email': 'sophia.nguyen@stellarinnovations.co',
    'Organization': 'Stellar Innovations',
    'Phone Number': '1 (555) 456-7890'
  },
  {
    'First Name': 'Jackson',
    'Last Name': 'Martinez',
    'Email': 'jackson.martinez@globaltechsolutions.com',
    'Organization': 'GlobalTech Solutions',
    'Phone Number': '1 (555) 789-0123'
  },
  {
    'First Name': 'Ava',
    'Last Name': 'Murphy',
    'Email': 'ava.murphy@nexusdynamics.io',
    'Organization': 'Nexus Dynamics',
    'Phone Number': '1 (555) 234-5678'
  },
  {
    'First Name': 'Liam',
    'Last Name': 'Johnson',
    'Email': 'liam.johnson@innovatenowlabs.com',
    'Organization': 'InnovateNow Labs',
    'Phone Number': '1 (555) 876-5432'
  },
  {
    'First Name': 'Emma',
    'Last Name': 'Smith',
    'Email': 'emma.smith@quantumtechnologies.net',
    'Organization': 'Quantum Technologies',
    'Phone Number': '1 (555) 345-6789'
  },
  {
    'First Name': 'Noah',
    'Last Name': 'Brown',
    'Email': 'noah.brown@alphatechsolutions.org',
    'Organization': 'AlphaTech Solutions',
    'Phone Number': '1 (555) 901-2345'
  },
  {
    'First Name': 'Isabella',
    'Last Name': 'Jones',
    'Email': 'isabella.jones@visionaryventures.biz',
    'Organization': 'Visionary Ventures',
    'Phone Number': '1 (555) 432-1098'
  },
  {
    'First Name': 'Mason',
    'Last Name': 'Davis',
    'Email': 'mason.davis@apexinnovations.com',
    'Organization': 'Apex Innovations',
    'Phone Number': '1 (555) 678-9012'
  }
];