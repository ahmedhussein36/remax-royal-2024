"use client";

import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa6";
import { MdCall } from "react-icons/md";

interface PropretyContactsProps {
    phone?: string;
    whatsApp?: string;
}

const PropretyContacts: React.FC<PropretyContactsProps> = ({
    phone,
    whatsApp,
}) => {
    return (
        <div className="w-full flex justify-start items-center gap-2 max-w-sm">
            <button
                onClick={() => {
                    open(`https://wa.me/${whatsApp}`);
                }}
                className="flex justify-center items-center gap-2 text-white bg-[#4cd964] py-2 px-3 rounded-md w-1/2 hover:bg-green-200 duration-300"
            >
                <FaWhatsapp size={28} />
                <span>واتساب</span>
            </button>
            <button
                onClick={() => {
                    open(`tel:${phone}`);
                }}
                className="flex justify-center items-center gap-2 text-purple-800 border border-purple-800 bg-purple-50 py-2 px-3 rounded-md w-1/2 hover:bg-purple-100 duration-300"
            >
                <MdCall size={28} />
                <span>اتصل</span>
            </button>
        </div>
    );
};

export default PropretyContacts;
