'use client';

import { Modal } from 'flowbite-react';
import { useState } from 'react';
import PrivacyPolicy from './PrivacyPolicy';

function PrivacyPolicModal({ open, onClose }) {
    // const [openModal, setOpenModal] = useState(false);

    return (
        <>
        {open && (
            <Modal dismissible show={open} onClose={onClose}>
                <Modal.Header>
                    <h1 className=' text-dark-blue'>MANSA'S PRIVACY POLICY</h1>
                </Modal.Header>
                <Modal.Body>
                    <PrivacyPolicy />
                </Modal.Body>
            </Modal>
        )}
    </>
    )
}

export default PrivacyPolicModal