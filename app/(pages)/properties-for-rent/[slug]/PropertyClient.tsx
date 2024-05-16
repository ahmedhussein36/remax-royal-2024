"use client";

import { SafeArea, SafeCompound, SafeProperty, SafeUser } from "@/app/types";
import Container from "@/app/components/Container";
import ClientOnly from "@/app/components/ClientOnly";
import Gallary from "@/app/components/properties/Gallary";
import PropertInfo from "@/app/components/properties/PropertInfo";
import PropertDetails from "@/app/components/properties/PropertDetails";
import AgentInfo from "@/app/components/properties/AgentInfo";
import PaymentPlans from "@/app/components/properties/PaymentPlans";

interface PropertyClientProps {
    listing: SafeProperty & {
        user: SafeUser;
        compound: SafeCompound;
        area: SafeArea;
    };

    currentUser?: SafeUser | null;
}

const PropertyClient: React.FC<PropertyClientProps> = ({
    listing,
    currentUser,
}) => {
    const location = `${listing.compound} / ${listing.area}`;

    return (
        <>
            <Container>
                <Gallary images={listing.images} />
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 w-full my-4">
                    <div className="w-full gap-4 column-8">
                        <PropertInfo
                            title={listing.title}
                            location={location}
                            data={listing}
                            currentUser={currentUser}
                            listingId={listing.id}
                        />
                        <PropertDetails data={listing} />
                    </div>
                    <div className="w-1/3 column-2 mt-8">
                        <AgentInfo
                            user={listing.user?.name as string}
                            image={listing.user?.image as string}
                            listing={listing}
                        />
                        <PaymentPlans data={listing} />
                    </div>
                </div>
            </Container>
        </>
    );
};

export default PropertyClient;
