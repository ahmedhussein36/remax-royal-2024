import React, { FC } from "react";
import { SafeProperty, SafeUser } from "../types";
import Heading from "./Heading";
import PropertyCard from "./properties/PropertyCard";

interface TopListingsProps {
    currentUser: SafeUser;
    listings: SafeProperty[] & {
        area: {
            id: string;
            title: string;
            slug: string;
        };
        compound: {
            id: string;
            title: string;
            slug: string;
        };
    };
}
const TopListings: FC<TopListingsProps> = ({ listings, currentUser }) => {
    const parent = (category: string) => {
        if (category === "للبيع") return "properties-for-sale";
        if (category !== "للبيع") return "properties-for-rent";
    };
    return (
        <div className=" my-8">
            <Heading
                title="وحدات مقترحة لك"
                subtitle="اكتشف الوحدات المميزة في مصر "
            />
            <div className="flex flex-col w-full justify-center items-center">
                <div
                    className="
                            pt-2
                            mt-8
                            grid 
                            grid-cols-1 
                            sm:grid-cols-2 
                            lg:grid-cols-3  
                            gap-8
                        "
                >
                    {listings.map((listing: any) => (
                        <PropertyCard
                            parent={parent(listing.category)}
                            data={listing}
                            currentUser={currentUser}
                            key={listing.id}
                            slug={listing.slug}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopListings;
