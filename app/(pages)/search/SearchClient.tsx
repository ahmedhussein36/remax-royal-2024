import { SafeProperty, SafeUser } from "@/app/types";
import Container from "@/app/components/Container";
import PropertyCard from "@/app/components/properties/PropertyCard";

interface SearchClientProps {
    listings: SafeProperty[];
    currentUser?: SafeUser | null;
}

const SearchClient: React.FC<SearchClientProps> = ({
    listings,
    currentUser,
}) => {
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
                {listings.map((listing: SafeProperty) => (
                    <PropertyCard
                        slug={listing.slug}
                        parent={
                            listing.category === "للبيع"
                                ? "properties-for-sale"
                                : "properties-for-rent"
                        }
                        data={listing as any}
                        currentUser={currentUser}
                        key={listing.id}
                    />
                ))}
            </div>
        </>
    );
};
export default SearchClient;
