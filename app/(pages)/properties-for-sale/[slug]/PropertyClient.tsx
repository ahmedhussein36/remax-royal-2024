"use client";

import { SafeUser, SingleProperty } from "@/app/types";
import Container from "@/app/components/Container";
import Gallary from "@/app/components/properties/Gallary";
import PropertInfo from "@/app/components/properties/PropertInfo";
import PropertDetails from "@/app/components/properties/PropertDetails";
import PaymentPlans from "@/app/components/properties/PaymentPlans";
import Specifics from "@/app/components/specifications/Specifics";
import Description from "@/app/components/properties/Description";
import ImagesGallery from "@/app/components/ImagesGallery";
import { useState } from "react";

interface PropertyClientProps {
    listing: SingleProperty;
    currentUser?: SafeUser | null;
}

const PropertyClient: React.FC<PropertyClientProps> = ({
    listing,
    currentUser,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const location = `كمبوند ${listing.compound.name} / ${
        listing.area.title || ""
    }`;

    const handelOpenGallery = () => {
        setIsOpen(true);
    };

    const handelClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            {isOpen && (
                <ImagesGallery
                    onClose={handelClose}
                    images={[listing.mainImage, ...listing.images]}
                />
            )}

            <Container>
                <div className=" flex flex-col justify-start items-start gap-3">
                    <Gallary
                        onclick={handelOpenGallery}
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
                            openGallary={handelOpenGallery}
                            floorPlan={listing.floorPlan || ""}
                            masterPlan={listing.compound?.masterPlan || ""}
                            lat={listing?.compound?.lat || 0}
                            lng={listing.compound.lng || 0}
                            placeName={listing?.compound?.name || ""}
                        />
                        <Description
                            title="وصف العقار"
                            content={listing?.content || ""}
                        />
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
