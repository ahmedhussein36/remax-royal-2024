import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import DevClient from "./DevClient";
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
            <DevClient 
            listing={listing} 
            currentUser={currentUser} />
        </ClientOnly>
    );
};

export default PropertyPage;
