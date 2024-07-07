"use client";
import Image from "next/image";
import { SafeProperty, SafeUser } from "@/app/types";
import { SlLocationPin } from "react-icons/sl";
import HeartButton from "../HeartButton";
import Link from "next/link";
import DeveloperImage from "@/app/DeveloperImage";

interface CompoundCardProps {
    currentUser?: SafeUser | null;
    parent?: string;
    id: string;
    slug?: string;
    image: string;
    title: string;
    developer?: {
        title: string;
        image: string;
    };
    properties: any[];

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
    properties,
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

    const placeholder = "/assets/images/placeholder2.png";

    const allTypes = Array.from(
        new Set(properties.map((listing: any) => listing.propertyType))
    ).map((propertyType) => {
        return {
            type: propertyType,
            count: properties.filter(
                (listing: any) => listing.propertyType === propertyType
            ).length,
        };
    });

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
                            className="group-hover:scale-105 duration-300 transition-all object-cover "
                            src={image}
                            alt={title}
                            fill
                            sizes="100%"
                            priority={false}
                            loading="lazy"
                        />
                       <DeveloperImage developer={developer} placeholder={placeholder}/>
                    </div>
                    <div className="propInfo w-full py-4 px-6 flex flex-col justify-between items-start gap-3">
                        <div className="proTitle w-full flex flex-col justify-between items-start gap-1">
                            <div className=" font-medium text-xs bg-slate-100 rounded-md p-2">
                                {developer?.title.replace(/[^a-zA-Z ]/g, "")}
                            </div>
                            <div className="flex justify-center items-center text-slate-600 mt-2">
                                <h3 className="text-lg font-semibold m-0">
                                    {title}
                                </h3>
                            </div>
                            <div className="propLocation flex justify-center gap-2 items-center text-xs text-slate-500">
                                <SlLocationPin size={18} color="#718096" />
                                <div>{location} / مصر</div>
                            </div>
                        </div>
                        <div className="proFeature w-full flex flex-col justify-center items-start gap-3 text-sm text-slate-500">
                            <div className=" flex justify-between items-center gap-4">
                                {allTypes.length
                                    ? allTypes.map((type, i) => (
                                          <div
                                              className=" flex justify-center items-center"
                                              key={i}
                                          >
                                              <div className=" flex justify-start items-center gap-1">
                                                  <span>{type.count}</span>
                                                  <span>{type.type}</span>
                                              </div>
                                          </div>
                                      ))
                                    : ""}
                            </div>
                            <div className=" flex justify-start items-center gap-3 pb-4">
                                <div className="flex justify-start items-center text-lg font-bold text-slate-700">
                                    {formattedMinPrice} ج.م
                                </div>
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
