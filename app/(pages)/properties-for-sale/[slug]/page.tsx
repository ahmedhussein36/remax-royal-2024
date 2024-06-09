import getCurrentUser from "@/app/actions/getCurrentUser";
import EmptyState from "@/app/components/EmptyState";
import PropertyClient from "./PropertyClient";
import { GetServerSideProps } from "next";
import getPropertyById, { IParam } from "@/app/actions/getPropertyById";
import Breadcrumb from "@/app/components/Breadcrumb";
import Container from "@/app/components/Container";
import { AiFillHome } from "react-icons/ai";

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
                canonical: `/properties-for-sale/${post.slug}`,
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
        {
            label: `عقارات للبيع في ${listing?.city}`,
            href: `/search?category=للبيع&city=${listing.city}`,
        },
        { label: listing?.area.title, href: `/area/${listing?.area.slug}` },
        {
            label: listing?.compound.title,
            href: `compounds/${listing?.compound.slug}`,
        },
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
