import React from 'react';
import TicketForm from './TicketForm';
import './../index.css';

type ModalProps = {
    open: boolean;
    onClose: () => void;
    children?: React.ReactNode;
    id?: string[]; 
}

const Modal = (props: ModalProps) => {
    const handleClose = () => {
        props.onClose();
        console.log("This is from modal")
        window.location.reload();
    };

    return (
        <>
            {props.open && (
                <div 
                    className='modal flex justify-center items-center fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 z-50'
                    onClick={handleClose} 
                >
                    <div
                        className='modal-content max-w-3xl w-full p-6 bg-white rounded-lg shadow-lg'
                        onClick={(e) => e.stopPropagation()} 
                    >
                        <div className="flex justify-between">
                            <p 
                                className="text-black cursor-pointer hover:text-gray-600"
                                onClick={handleClose} 
                            >
                                Close
                            </p>
                        </div>
                        <div className="modal-content2">
                            {props.children || (
                                <TicketForm 
                                    id={props.id} 
                                    onClose={handleClose} 
                                />
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;

