import getCurrentUser from "@/app/actions/getCurrentUser";
import EmptyState from "@/app/components/EmptyState";
import PropertyClient from "./PropertyClient";
import { GetServerSideProps } from "next";
import getPropertyById, { IParam } from "@/app/actions/getPropertyById";
import { AiFillHome } from "react-icons/ai";
import Container from "@/app/components/Container";
import Breadcrumb from "@/app/components/Breadcrumb";

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
    const listing: any = await getPropertyById(params);
    const currentUser = await getCurrentUser();

    if (!listing) {
        return (
            <>
                <EmptyState />
            </>
        );
    }

    const parent =
        listing.category === "للبيع"
            ? "properties-for-sale"
            : "properties-for-rent";

    const items = [
        { label: `وحدات للبيع في ${listing?.city}`, href: `/search?category=للبيع&city=${listing.city}` },
        { label: listing.title, href: `/${parent}/${listing.slug}` },
    ];

    const home = {
        label: <AiFillHome />,
        href: "/",
    };

    return (
        <>
            <Container>
                <Breadcrumb home={home as any} items={items} />
            </Container>
            <PropertyClient
                listing={listing as any}
                currentUser={currentUser as any}
            />
        </>
    );
};

export default PropertyPage;
