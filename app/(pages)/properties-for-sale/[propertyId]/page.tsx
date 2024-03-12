import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import PropertyClient from "./PropertyClient";
import getPropertyById from "@/app/actions/getPropertyById";

interface IParams {
    propertyId?: string;
}

const PropertyPage = async ({ params }: { params: IParams }) => {
    const listing = await getPropertyById(params);
    const currentUser = await getCurrentUser();

    if (!listing) {
        return (
            <ClientOnly>
                <EmptyState />
            </ClientOnly>
        );
    }

    return (
        <ClientOnly>
            <PropertyClient 
            listing={listing as any} 
            currentUser={currentUser} />
        </ClientOnly>
    );
};

export default PropertyPage;
