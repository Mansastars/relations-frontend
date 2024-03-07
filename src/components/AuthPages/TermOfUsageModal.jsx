import { Modal } from 'flowbite-react';
import TermOfUsage from './TermOfUsage';

function TermOfUsageModal({ open, onClose }) {
  return (
    <>
        {open && (
            <Modal dismissible show={open} onClose={onClose}>
                <Modal.Header>
                    <h1 className=' text-dark-blue'>MANSA'S TERMS OF USAGE</h1>
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