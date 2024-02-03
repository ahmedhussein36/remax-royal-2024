"use client";

import { SafeProperty, SafeUser } from "@/app/types";
import Container from "@/app/components/Container";
import Gallery from "@/app/components/properties/Gallary"


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
        <Container>
            <Gallery images={listing.propertyImages} />
        </Container>
    );
};

export default ListingClient;
