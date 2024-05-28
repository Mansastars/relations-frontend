import { Modal } from 'flowbite-react';
import TermOfUsage from './TermOfUsage';

function TermOfUsageModal({ open, onClose }) {
  return (
    <>
        {open && (
            <Modal dismissible show={open} onClose={onClose}>
                <Modal.Header>
                    <p className=' text-dark-blue'>MANSA'S TERMS OF USAGE</p>
                </Modal.Header>
                <Modal.Body>
                    <TermOfUsage />
                </Modal.Body>
            </Modal>
        )}
    </>
  )
}

export default TermOfUsageModal