"use client";

import { SafeArea, SafeCompound, SafeProperty, SafeUser } from "@/app/types";
import Container from "@/app/components/Container";
import Gallary from "@/app/components/properties/Gallary";
import PropertInfo from "@/app/components/properties/PropertInfo";
import PropertDetails from "@/app/components/properties/PropertDetails";
import AgentInfo from "@/app/components/properties/AgentInfo";
import PaymentPlans from "@/app/components/properties/PaymentPlans";
import Description from "@/app/components/properties/Description";
import Specifics from "@/app/components/specifications/Specifics";

interface PropertyClientProps {
    listing: SafeProperty & {
        user: { name: string; image: string };
        compound: { name?: string; slug: string };
        area: { title: string; slug: string };
        developer: {
            id: string;
            slug: string;
            title: string;
            name: string;
        };
    };

    currentUser?: SafeUser | null;
}

const PropertyClient: React.FC<PropertyClientProps> = ({
    listing,
    currentUser,
}) => {
    const location = `كمبوند ${listing.compound.name} / ${
        listing.area.title || ""
    }`;
    return (
        <>
            <Container>
                <div className=" flex flex-col justify-start items-start gap-3">
                    <Gallary
                        images={listing.images || []}
                        mainImage={listing.mainImage || ""}
                    />
                    <PropertInfo
                        developer={listing.developer}
                        title={listing?.title || ""}
                        location={location}
                        data={listing}
                        currentUser={currentUser}
                        listingId={listing.id}
                    />
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start gap-4 w-full my-4">
                    <div className="w-full gap-4 column-8">
                        <PropertDetails data={listing} />
                        <Specifics
                            lat={listing?.compound?.lat || 0}
                            lng={listing.compound.lng || 0}
                            placeName={listing.compound.name}
                        />
                        <Description content={listing?.content || ""} />
                    </div>

                    <div className="w-full md:w-1/3 columns-1 md:column-2 mt-8">
                        <PaymentPlans data={listing} />
                    </div>
                </div>
            </Container>
        </>
    );
};

export default PropertyClient;
