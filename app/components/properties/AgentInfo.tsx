import { SafeProperty, SafeUser } from "@/app/types";
import Link from "next/link";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import Avatar from "./Avatar";
import PropretyContacts from "./PropretyContacts";

interface AgentInfoProps {
    listing: SafeProperty;
    user?: string;
    image?: string;
}

const AgentInfo: React.FC<AgentInfoProps> = ({ user, image, listing }) => {
    return (
        <div className="max-w-[350px] border-2 rounded-md flex flex-col gap-4 justify-between items-start p-4">
            <div className="flex justify-center items-center gap-4">
                <div className="prfilePic">
                    <Avatar avatarSrc={image} isListing />
                </div>
                <div className="AgentName flex flex-col justify-center items-start gap-2">
                    <p className=" text-sm text-slate-600 font-semibold">
                        {user}
                    </p>
                    <Link
                        href="#"
                        className="text-sm flex items-center gap-1 hover:underline hover:text-rose-500"
                    >
                        عرض جميع العقارات
                        <IoIosArrowBack color="rgb(244 63 94)" />
                    </Link>
                </div>
            </div>

            <span className="w-full border-b-2 h-[2px]"></span>

            <div className="w-full">
                <PropretyContacts
                    phone={listing.phone}
                    whatsApp={listing.whatsapp}
                />
            </div>
        </div>
    );
};

export default AgentInfo;
