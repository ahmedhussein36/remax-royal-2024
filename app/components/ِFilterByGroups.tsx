"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface TypePrpos {
    listings: any[];
    parent: string;
}

const FilterByGroups: React.FC<TypePrpos> = ({ listings, parent }) => {
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);
    const router = useRouter();

    const allTypes = Array.from(
        new Set(listings.map((listing) => listing.propertyType))
    ).map((propertyType) => {
        return {
            type: propertyType,
            count: listings.filter(
                (listing) => listing.propertyType === propertyType
            ).length,
        };
    });

    return (
        <div
            className="w-full mt-4 py-3
                        px-3
                        rounded-lg 
                        grid grid-cols-4
                        xl:grid-cols-9
                        lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-3 gap-3 gap-y-2
                        justify-items-start"
        >
            <button
                onClick={() => {
                    setCurrentIndex(null);
                    router.push(`/${parent}`);
                }}
                className={`bg-slate-100
                    w-full flex items-center justify-center 
                    ${
                        currentIndex === null
                            ? "border border-indigo-700 bg-indigo-100 text-indigo-700"
                            : "border-0 border-transparent bg-slate-100   text-slate-600"
                    }
                    rounded-full  cursor-pointer 
                    hover:bg-slate-200 p-2  transition-all duration-500 ease-in-out`}
            >
                عرض الكل ({listings.length})
            </button>
            {allTypes.map((item, index) => (
                <div
                    onClick={() => {
                        setCurrentIndex(index);
                        router.push(`/${parent}?propertyType=${item.type}`);
                    }}
                    key={index}
                    className={`bg-slate-100
                                w-full flex items-center justify-center 
                                ${
                                    index === currentIndex
                                        ? "border border-indigo-700 bg-indigo-100 text-indigo-700"
                                        : "border-0 border-transparent bg-slate-100   text-slate-600"
                                }
                                rounded-full  cursor-pointer 
                                hover:bg-slate-200 p-2  transition-all duration-500 ease-in-out`}
                >
                    {item.type} ({item.count})
                </div>
            ))}
        </div>
    );
};

export default FilterByGroups;
