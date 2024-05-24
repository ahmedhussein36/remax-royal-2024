import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import PropertyClient from "./PropertyClient";
import getPropertyById from "@/app/actions/getPropertyById";

interface IParams {
    slug: string;
}

export async function generateMetadata({
    params,
}: {
    params: {
        slug: string;
    };
}) {
    try {
        const post = await getPropertyById(params);
        if (!post)
            return {
                title: "Not Found",
                description: "The page you are looking for does not exist.",
            };

        return {
            title: post?.seoDetails?.metaTitle,
            description: post.seoDetails?.metaDescription,
            alternates: {
                canonical: `/developers/${post.slug}`,
            },
        };
    } catch (error) {
        console.error(error);
        return {
            title: "Not Found",
            description: "The page you are looking for does not exist.",
        };
    }
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
                currentUser={currentUser as any}
            />
        </>
    );
};

export default PropertyPage;
