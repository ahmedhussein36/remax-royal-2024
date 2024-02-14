"use client";
import Image from "next/legacy/image";
import { SafeUser } from "@/app/types";
import { SlLocationPin } from "react-icons/sl";
import HeartButton from "../HeartButton";
import Link from "next/link";

interface CompoundCardProps {
    currentUser?: SafeUser | null;
    parent?: string;
    id: string;
    slug?: string;
    image: string;
    title?: string;
    developer?: string;
    location?: string;
    minPrice?: number;
    typesCount?: any[];
    maxInstYears?: number;
    minDownPayment?: number;
}

const CompoundCard: React.FC<CompoundCardProps> = ({
    id,
    slug,
    image,
    title,
    developer,
    location,
    typesCount,
    currentUser,
    minPrice,
    maxInstYears,
    minDownPayment,
    parent,
}) => {
    const formatNumber = (price: any) => {
        if (price >= 1000) {
            return price.toLocaleString();
        } else {
            return price;
        }
    };

    const formattedMinPrice = formatNumber(minPrice as number);
    let formateTypes = typesCount?.slice(0, 4);

    ("use client side rendering to show more types on click");
    const moreTypes = () => {};

    return (
        <Link href={`/${parent}/${slug}`}>
            <div className="col-span-1 group relative mb-4 flex justify-center item-center overflow-hidden cursor-pointer">
                <div
                    className="
                    cardContent relative 
                    flex flex-col justify-between items-center 
                    max-w-[400px]  bg-white 
                    rounded-lg border overflow-hidden
                "
                >
                    <div
                        className="
                        absolute
                        top-3
                        right-3
                        z-[1]
                    "
                    >
                        <HeartButton listingId={id} currentUser={currentUser} />
                    </div>
                    <div className="relative proImage w-[400px] h-[220px] overflow-hidden flex justify-center items-center">
                        <Image
                            className="group-hover:scale-105 duration-300 transition-all "
                            src={image}
                            alt={title}
                            layout="fill"
                            objectFit="cover"
                            loading="lazy"
                        ></Image>
                    </div>
                    <div className="propInfo w-full py-4 px-6 flex flex-col justify-between items-start gap-3">
                        <div className="proTitle w-full flex flex-col justify-between items-start gap-3">
                            <div className=" text-sm p-1 bg-slate-100 rounded-full px-4">
                                {developer}
                            </div>
                            <div className="w-full flex justify-between items-center">
                                <div className="flex justify-center items-center text-slate-600 text-md font-bold">
                                    <h3>{title}</h3>
                                </div>
                            </div>

                            <div className="propLocation flex justify-center gap-2 items-center text-xs text-slate-500">
                                <SlLocationPin size={18} color="#718096" />
                                <p>{location} / مصر</p>
                            </div>
                        </div>
                        <div className="proFeature w-full flex flex-col justify-center items-start gap-3 text-sm text-slate-500">
                            {/* <div className="flex justify-start items-center gap-4 w-full flex-wrap">
                                {typesCount?.length !== 0 &&
                                    formateTypes?.map((type, i) => (
                                        <div key={i}>
                                            <div className="flex justify-start items-center gap-1 w-full">
                                                <span>{type.name}</span>:
                                                <span>{type.count}</span>
                                            </div>
                                        </div>
                                    ))}
                                    {typesCount?.length > 4 && (
                                        <span  className=" text-left text-slate-600 underline">المزيد</span>
                                    )}
                            </div> */}
                            <div className=" flex justify-start items-center gap-3 pb-4">
                                <div className="flex justify-start items-center text-lg font-bold text-slate-700">
                                    {formattedMinPrice} ج.م
                                </div>{" "}
                                <div className="flex justify-start items-center gap-1">
                                    {minDownPayment} ج.م / {maxInstYears} سنوات
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{" "}
            </div>
        </Link>
    );
};

export default CompoundCard;
