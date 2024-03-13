import { useState } from 'react';

const PopupDelete = ({ onClose }) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
        onClose(); // Call the onClose function passed from the parent component
    };

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    {/* Overlay */}
                    <div className="fixed inset-0 bg-black opacity-50" onClick={handleClose}></div>

                    {/* Popup Content */}
                    <div className="relative flex flex-col content-between border border-error rounded-md w-72 lg:w-[420px]  p-5 bg-white">
                        <h3 className="font-semibold text-title">Are you sure of deleting this?</h3>
                        <p className="mt-2 text-sm text-title">You cannot undo this action</p>
                        <div className="flex justify-end items-center gap-2 mt-10">
                            <button className="btn-delete">Delete</button>
                            <button className="font-semibold text-title text-sm px-4 py-2" onClick={handleClose}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default PopupDelete;


