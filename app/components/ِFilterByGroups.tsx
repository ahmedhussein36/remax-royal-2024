"use client";

import { useRouter } from "next/navigation";
import { SafeProperty } from "../types";

interface TypePrpos {
    listings: SafeProperty[];
    parent: string;
}

const FilterByGroups: React.FC<TypePrpos> = ({ listings, parent }) => {
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
            {allTypes.map((item, i) => (
                <div
                    onClick={() =>
                        router.push(`/${parent}?propertyType=${item.type}`)
                    }
                    key={i}
                    className=" bg-slate-100
                                w-full flex items-center justify-center 
                                text-slate-600
                                rounded-full  cursor-pointer 
                                hover:bg-slate-200 p-2  transition-all duration-500 ease-in-out"
                >
                    {item.type} ({item.count})
                </div>
            ))}
        </div>
    );
};

export default FilterByGroups;
