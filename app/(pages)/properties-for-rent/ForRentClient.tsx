"use client";
import { SafeProperty, SafeUser } from "@/app/types";
import PropertyCard from "@/app/components/properties/PropertyCard";
import { useEffect, useState } from "react";
import Pagination from "@/app/components/Pagination";

interface ForSaleClientProps {
    perPage: number;
    currentPage: number;
    propertiesLength: number;
    listings: SafeProperty[];
    currentUser?: SafeUser | null;
}

const ForRentClient: React.FC<ForSaleClientProps> = ({
    listings,
    perPage,
    currentPage,
    currentUser,
    propertiesLength,
}) => {
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        setTotalPages(Math.ceil(propertiesLength / perPage));
    }, [perPage, propertiesLength]);

    const parent = "properties-for-sale";
    return (
        <>
            <div
                className="
                            pt-2
                            mt-8
                            grid 
                            grid-cols-1 
                            sm:grid-cols-2 
                            md:grid-cols-3  
                            gap-8
                        "
            >
                {listings.map((listing: any) => (
                    <PropertyCard
                        parent={parent}
                        data={listing}
                        currentUser={currentUser}
                        key={listing.id}
                        slug={listing.slug}
                    />
                ))}
            </div>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                parent={parent}
            />
        </>
    );
};
export default ForRentClient;
