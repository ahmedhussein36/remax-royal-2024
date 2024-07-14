"use client";
import React, { FC, useCallback, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

interface ModalProps {
    children: React.ReactNode;
    isOpen?: boolean;
    onClose: () => void;
    gallery?: boolean;
}

const ModalPro: FC<ModalProps> = ({ children, isOpen, onClose, gallery }) => {
    const [showModal, setShowModal] = useState(isOpen);
    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen]);

    const handleClose = useCallback(() => {
        setShowModal(false);
        setTimeout(() => {
            onClose();
        }, 300);
    }, [onClose]);

    if (!isOpen) {
        return null;
    }
    return (
        <>
            <div
                className="flex justify-center items-center inset-0  top-0 left-0 z-[999] w-[100vw] h-[100vh] bg-black/50 
                fixed overflow-x-hidden overflow-y-hidden transition-all"
            >
                <div
                    className={`flex flex-col gap-3 w-[100%] 
                        ${
                            gallery
                                ? "lg:w-full lg:h-full bg-gray-800/90 rounded-none"
                                : "lg:w-[65%] lg:h-[90%]  bg-white  rounded-lg"
                        }
                         h-[100%]  rounded-lg p-4 
                        transition-all duration-300 ease-in-out relative
                        ${showModal ? "translate-y-0" : "translate-y-0 "}
                        ${showModal ? "opacity-100" : "opacity-0"}`}
                >
                    <div>
                        <button onClick={handleClose} title="close">
                            <IoClose
                                size={28}
                                color={gallery ? "white" : "black"}
                            />
                        </button>
                    </div>
                    <div className=" relative overflow-hidden grid grid-cols-1 w-full h-full">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalPro;
