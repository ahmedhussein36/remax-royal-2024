import getCurrentUser from "@/app/actions/getCurrentUser";
import EmptyState from "@/app/components/EmptyState";
import PropertyClient from "./PropertyClient";
import { GetServerSideProps } from "next";
import getPropertyById, { IParam } from "@/app/actions/getPropertyById";

interface PageProps {
    params: IParam;
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
                canonical: `/properties-for-rent/${post.slug}`,
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

const PropertyPage = async ({ params }: PageProps) => {
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
