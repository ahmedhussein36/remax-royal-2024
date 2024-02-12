import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";

interface CardProps {
    slug: string;
    parent: string;
    logo: string;
    title: string;
    compoundsCount?: number;
    propertiesCount?: number;
    minPrice?: number;
}

const Card: React.FC<CardProps> = ({
    slug,
    parent,
    logo,
    title,
    compoundsCount,
    propertiesCount,
    minPrice,
}) => {
    const formatNumber = (number: number | undefined): string => {
        if (!number) return String(0);
        if (number >= 1000) {
            return number.toLocaleString();
        } else {
            return number.toString();
        }
    };

    const minPriceInt = Math.floor(minPrice || 0);

    const formattedMinPrice = formatNumber(minPriceInt) || null;
    const placeholder = "/assets/images/rem-placeholder.jpg";

    return (
        <Link
            href={`/${parent}/${slug}`}
            className="
            flex flex-col 
            justify-center
            items-center 
            gap-3 w-full 
            py-16 px-8 
            bg-white 
            relative top-0 right-0 bottom-0
            hover:top-[-5px] transition-all ease-in-out duration-200
            hover:shadow-md hover:shadow-indigo-200/30
            border 
            rounded-xl
        "
        >
            <div className=" relative w-[100px] h-[100px] rounded-full border-red-400 border-[3px] overflow-hidden">
                <Image
                    src={logo ? logo : placeholder}
                    alt={title}
                    loading="lazy"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div>
                <div className="flex flex-col justify-center items-center gap-3 w-full p-2">
                    <h2 className=" font-bold text-center text-slate-600">{title}</h2>
                </div>

                <div className=" flex justify-center items-center py-3 gap-2 w-full">
                    <span>أسعار تبدأ من</span>
                    <span className=" font-bold text-lg">
                        {formattedMinPrice}
                    </span>
                    جنيه
                </div>

                <div className=" flex gap-4 justify-center items-center w-full text-gray-600">
                    <div>
                        <p>كمبوندات: {compoundsCount}</p>
                    </div>
                    <span>|</span>
                    <div>
                        <p> وحدات: {propertiesCount}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card;
