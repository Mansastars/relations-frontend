import { CopyIcon, X } from 'lucide-react';
import React, { useRef, useState } from 'react'
import { json } from 'react-router-dom';
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    EmailIcon,
    FacebookIcon,
    LinkedinIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsappIcon,
  } from 'react-share';  

function ShareModal({ onClose, dealDetail }) {
    const [copied, setCopied] = useState(false);
    const modalRef = useRef();
    const userDetails = JSON.parse(localStorage.getItem('user'));

    const closeModal = (e) => {
        if(modalRef.current === e.target) {
            onClose();
        }
    }

    const currentPath = `https://crm.mansastars.com${window.location.pathname}`;

    const customMessage = `
    Hi, ${userDetails.first_name} ${userDetails.last_name} has invited you to collaborate on the Mansa CRM Project titled "${dealDetail.deal_name}". Mansa’s CRM helps you manage your leads, target prospects, dealflow and manage follow-ups efficiently and affordably. Click the link below to accept the invitation and get started!
    `;

    const customTitle = `Check out this dashboard`;

    // Function to copy URL to clipboard
    const copyToClipboard = () => {
        navigator.clipboard.writeText(currentPath);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000); // Reset feedback after 2 seconds
    };

  return (
    <div ref={modalRef} onClick={closeModal} className=" fixed z-50 inset-0 bg-dark-blue bg-opacity-30 backdrop-blur-sm flex justify-center overflow-y-auto h-screen">
        <div className=' mt-10 flex flex-col gap-5'>
            <button onClick={onClose} className=' place-self-end text-red-600'><X size={30}/></button>
            <div className=' bg-white rounded-xl px-10 py-10 flex flex-col gap-5 items-center mx-4'>
                <h1 className=' text-dark-blue text-3xl font-extrabold mb-5'>Share Dashboard</h1>
                <div className=' flex max-md:flex-wrap items-center justify-center gap-5 text-dark-blue font-semibold'>
                    <div className=' flex flex-col gap-5 items-center justify-center'>
                        <EmailShareButton url={currentPath} subject={customTitle} body={customMessage}>
                            <EmailIcon size={40} round />
                        </EmailShareButton>
                        <p>Email</p>
                    </div>

                    <div className=' flex flex-col gap-5 items-center justify-center'>
                        <LinkedinShareButton url={currentPath} title={customTitle} summary={customMessage}>
                            <LinkedinIcon size={40} round />
                        </LinkedinShareButton>
                        <p>LinkedIn</p>
                    </div>

                    <div className=' flex flex-col gap-5 items-center justify-center'>
                        <WhatsappShareButton url={currentPath} title={customMessage} separator=' '>
                            <WhatsappIcon size={40} round />
                        </WhatsappShareButton>
                        <p>WhatsApp</p>
                    </div>

                    <div className=' flex flex-col gap-5 items-center justify-center'>
                        <TwitterShareButton url={currentPath} title={customMessage}>
                            <TwitterIcon size={40} round />
                        </TwitterShareButton>
                        <p>X</p>
                    </div>

                    <div className=' flex flex-col gap-5 items-center justify-center'>
                        <FacebookShareButton url={currentPath} title={customMessage}>
                            <FacebookIcon size={40} round />
                        </FacebookShareButton>
                        <p>Facebook</p>
                    </div>

                    <div className=' flex flex-col gap-5 items-center justify-center'>
                        <TelegramShareButton url={currentPath} title={customMessage}>
                            <TelegramIcon size={40} round />
                        </TelegramShareButton>
                        <p>Telegram</p>
                    </div>

                </div>

                <div className="flex flex-col gap-5 mt-3 text-dark-blue w-full">
                    <p className=' text-xl font-bold'>Page Link</p>
                    <div onClick={copyToClipboard} className=' flex items-center justify-between gap-10 py-3 px-5 bg-gray-200 rounded-lg w-full cursor-pointer'>
                        <p className=' text-dark-blue font-semibold'>{currentPath}</p>
                        <CopyIcon size={32} className=' text-mansa-blue hover:text-dark-blue' />
                    </div>
                    {copied && <p className=" text-mansa-blue text-base">Link copied to clipboard!</p>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShareModal