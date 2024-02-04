"use client";

import { SafeProperty, SafeUser } from "@/app/types";
import Container from "@/app/components/Container";
import ClientOnly from "@/app/components/ClientOnly";
import Gallary from "@/app/components/properties/Gallary";
import PropertInfo from "@/app/components/properties/PropertInfo";
import PropertDetails from "@/app/components/properties/PropertDetails";
import AgentInfo from "@/app/components/properties/AgentInfo";

interface ListingClientProps {
    listing: SafeProperty & {
        user: SafeUser;
    };
    currentUser?: SafeUser | null;
}

const ListingClient: React.FC<ListingClientProps> = ({
    listing,
    currentUser,
}) => {
    return (
        <ClientOnly>
            <Container>
                <Gallary images={listing.propertyImages} />

                <div className="flex flex-col md:flex-row justify-between items-start gap-4 w-full my-4">
                    <div className="w-full gap-4 column-8">
                        <PropertInfo
                            listings={listing}
                            currentUser={currentUser}
                            listingId={listing.id}
                        />
                        <PropertDetails listings={listing} />
                    </div>
                    <div className="w-1/3 column-2">
                        <AgentInfo
                            user={listing.user.name}
                            image={listing.user.image}
                        />
                    </div>
                </div>
            </Container>
        </ClientOnly>
    );
};

export default ListingClient;
