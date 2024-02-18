"use client";

import Image from "next/image";

interface PropretyContactsProps {
    phone: string;
    whatsApp: string;
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
                className="flex justify-center items-center gap-2 bg-green-100 py-2 px-3 rounded-md w-1/2 hover:bg-green-200 duration-300"
            >
                <div>
                    <Image
                        src="/assets/icons/whatsappIcon.png"
                        alt="whatsapp icon"
                        width={24}
                        height={24}
                    />
                </div>
                <div>
                    <span>واتساب</span>
                </div>
            </button>
            <button
                onClick={() => {
                    open(`tel:${phone}`);
                }}
                className="flex justify-center items-center gap-2 bg-slate-100 py-2 px-3 rounded-md w-1/2 hover:bg-slate-200 duration-300"
            >
                <div>
                    <Image
                        src="/assets/icons/phone-call.svg"
                        alt="whatsapp icon"
                        width={24}
                        height={24}
                    />
                </div>
                <div>
                    <span>اتصل</span>
                </div>
            </button>
        </div>
    );
};

export default PropretyContacts;
