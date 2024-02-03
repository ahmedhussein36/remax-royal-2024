import { SafeProperty, SafeUser } from "@/app/types";
import Container from "@/app/components/Container";
import PropertyCard from "@/app/components/properties/PropertyCard";
import ClientOnly from "@/app/components/ClientOnly";

interface ForSaleClientProps {
    listings: SafeProperty[];
    currentUser?: SafeUser | null;
}

const ForSaleClient: React.FC<ForSaleClientProps> = ({
    listings,
    currentUser,
}) => {
    return (
        <ClientOnly>
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
                            parent="properties-for-rent"
                            data={listing}
                            currentUser={currentUser}
                            key={listing.id}
                        />
                    ))}
                </div>
            </>
        </ClientOnly>
    );
};
export default ForSaleClient;
