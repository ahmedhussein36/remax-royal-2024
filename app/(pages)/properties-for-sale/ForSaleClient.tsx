"use client";
import { SafeArea, SafeCompound, SafeProperty, SafeUser } from "@/app/types";
import PropertyCard from "@/app/components/properties/PropertyCard";

interface ForSaleClientProps {
    listings: SafeProperty[] & {
        user: SafeUser;
        compound: SafeCompound;
        area: SafeArea;
    };
    currentUser?: SafeUser | null;
}

const ForSaleClient: React.FC<ForSaleClientProps> = ({
    listings,
    currentUser,
}) => {
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
                    />
                ))}
            </div>

            <div
                className="
                            pt-2
                            mt-8
                            grid 
                            grid-cols-1
                            sm:grid-cols-3
                            md:grid-cols-4 
                            gap-8
                            relative
                        "
            ></div>
        </>
    );
};
export default ForSaleClient;
