import { SafeProperty, SafeUser } from "@/app/types";
import Heading from "@/app/components/Heading";
import Container from "@/app/components/Container";
import ListingCard from "@/app/components/listings/ListingCard";

interface FavoritesClientProps {
    listings: SafeProperty[];
    currentUser?: SafeUser | null;
}

const FavoritesClient: React.FC<FavoritesClientProps> = ({
    listings,
    currentUser,
}) => {
    return (
        <Container>
            <div className="mt-8 h-full flex flex-col justify-center items-start w-full">
                <Heading
                    title="قائمتك المفضلة"
                    subtitle="القائمة المختصرة للوحدات التي قمت بتفضيلها"
                />
                <div
                    className="
                                mt-10
                                flex flex-col justify-between items-start w-full
                                gap-3 h-full
                                "
                >
                    {listings.map((listing: any) => (
                        <ListingCard
                            currentUser={currentUser}
                            key={listing.id}
                            data={listing}
                        />
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default FavoritesClient;
