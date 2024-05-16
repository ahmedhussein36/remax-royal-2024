import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import PropertyClient from "./PropertyClient";
import getPropertyById from "@/app/actions/getPropertyById";

interface IParams {
    slug: string;
}

const PropertyPage = async ({ params }: { params: IParams }) => {
    const listing = await getPropertyById(params);
    const currentUser = await getCurrentUser();

    if (!listing) {
        return (
            <>
                <EmptyState />
            </>
        );
    }

    return (
        <>
            <PropertyClient
                listing={listing as any}
                currentUser={currentUser}
            />
        </>
    );
};

export default PropertyPage;
