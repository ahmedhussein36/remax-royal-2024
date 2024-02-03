"use client";

import { SafeProperty, SafeUser } from "@/app/types";
import Container from "@/app/components/Container";


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
            <div>
                {listing.propertyGroup} {listing.category}
            </div>
        </Container>
    );
};

export default ListingClient;
