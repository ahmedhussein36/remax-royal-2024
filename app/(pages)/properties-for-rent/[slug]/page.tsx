import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import PropertyClient from "./PropertyClient";
import getPropertyById from "@/app/actions/getPropertyById";
import { SafeListing, SafeProperty } from "@/app/types";

interface IParams {
    slug: string;
}

const PropertyPage = async ({ params }: { params: IParams }) => {
    const listing = await getPropertyById(params);

    if (!listing) {
        return (
            <ClientOnly>
                <EmptyState />
            </ClientOnly>
        );
    }

    return (
        <>
            <PropertyClient listing={listing as any} />
        </>
    );
};

export default PropertyPage;
