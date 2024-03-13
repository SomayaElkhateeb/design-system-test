import { useState } from 'react';

const PopupProceed = ({ onClose }) => {
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
                    <div className="relative flex flex-col content-between border border-constrained rounded-md w-72 lg:w-[420px]  p-5 bg-white">
                        <h3 className="font-semibold text-title">Do you want to proceed?</h3>
                        <p className="mt-2 text-sm text-title">You can not undo this action</p>
                        <div className="flex justify-end items-center gap-2 mt-10">
                            <button className="font-semibold text-title text-sm px-4 py-2" onClick={handleClose}>Cancel</button>
                            <button className="btn-pri" >Proceed</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );

   
}

export default PopupProceed;