import { LuBedDouble } from "react-icons/lu";
import { LuBath } from "react-icons/lu";
import { LiaRulerCombinedSolid } from "react-icons/lia";
import { SlLocationPin } from "react-icons/sl";
import { FiShare2 } from "react-icons/fi";
import HeartButton from "./SingleHeartButton ";
import { SafeProperty, SafeUser } from "@/app/types";
import PropretyContacts from "./PropretyContacts";
import EntityType from "../EntityType";
import Image from "next/image";

interface PropertInfoProps {
    data: SafeProperty;
    developer: {
        title: string;
        image: string;
    };
    currentUser?: SafeUser | null;
    listingId: string;
    title: string;
    location: string;
}

const PropertInfo: React.FC<PropertInfoProps> = ({
    data,
    developer,
    listingId,
    currentUser,
    title,
    location,
}) => {
    const formatNumber = (price: any) => {
        if (price >= 1000) {
            return price.toLocaleString();
        } else {
            return price;
        }
    };

    const formattedMinPrice: number = formatNumber(data.price as number);
    const placeholder = "/assets/images/placeholder2.png";

    return (
        <div className=" flex justify-between gap-3 items-start pb-3 border-b-2 w-full sticky top-0 bg-white">
            <div className="relative aspect-square w-[65px] rounded-full overflow-hidden border-4 border-slate-200">
                <Image
                    src={developer?.image || placeholder}
                    fill
                    loading="lazy"
                    priority={false}
                    alt={developer?.title || "المطور"}
                    className=" object-cover"
                />
            </div>
            <div className="flex flex-col gap-1 justify-between  items-start w-full">
                <div className="w-full title flex flex-col gap-1 items-start">
                    <div className=" flex justify-start items-center gap-8">
                        <h1 className="my-1 w-[100%] text-xl font-bold text-slate-700">
                            {data.title}
                        </h1>
                        <EntityType type={"وحدة"} />
                    </div>

                    <div className="flex items-center gap-2 py-1">
                        <SlLocationPin />

                        <div>{location}</div>
                    </div>
                </div>

                <div className="proFeature bg-slate-0  py-1 w-full flex justify-start items-center gap-8 rounded-md text-slate-600">
                    <div className="flex justify-start items-center gap-1">
                        <LuBedDouble size={20} color="#64748b" />
                        <span className=" text-base">
                            {data.roomCount} غرفة
                        </span>
                    </div>
                    <div className="flex justify-start items-center gap-1">
                        <LuBath size={20} color="#64748b" />
                        <span className=" text-base">
                            {data.bathroomCount} حمام
                        </span>
                    </div>

                    <div className="flex justify-start items-center gap-1">
                        <LiaRulerCombinedSolid size={20} color="#64748b" />
                        <span className=" text-base">{data.size} متر مربع</span>
                    </div>
                </div>

                <div className="proPrice h-full flex justify-between gap-6 items-end w-full">
                    <div className=" flex justify-start items-center gap-8">
                        <div className="flex gap-2 items-end">
                            <span className="text-2xl text-slate-600 font-bold">
                                {formattedMinPrice}
                            </span>
                            <span>{"ج.م"}</span>
                        </div>
                        {data.installmentValue !== 0 && (
                            <div className=" text-lg font-bold text-slate-500">
                                <span>
                                    {formatNumber(data.installmentValue)}
                                </span>{" "}
                                <span>/ شهريا</span>
                            </div>
                        )}
                    </div>
                    <PropretyContacts
                        phone={"+201500366642"}
                        whatsApp={"+201500366642"}
                    />
                </div>
            </div>
            {/* <div className=" flex justify-end items-center w-1/4">
                <div className="flex justify-between items-center gap-6">
                    <HeartButton
                        listingId={listingId}
                        currentUser={currentUser}
                    />
                    <FiShare2 size={28} color={""} />
                </div>
            </div> */}
        </div>
    );
};

export default PropertInfo;
