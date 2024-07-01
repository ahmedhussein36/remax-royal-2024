import EmptyState from "@/app/components/EmptyState";
import Client from "./Client";
import getCompoundById from "@/app/actions/getCompoundById";
import getCompoundByslug from "@/app/actions/getCompoundById";
import ClientOnly from "@/app/components/ClientOnly";
import getProperties from "@/app/actions/getProperties";
import { AiFillHome } from "react-icons/ai";
import Container from "@/app/components/Container";
import Breadcrumb from "@/app/components/Breadcrumb";
import PropertyCard from "@/app/components/properties/PropertyCard";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { SafeUser } from "@/app/types";

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
        const post = await getCompoundByslug(params);
        if (!post)
            return {
                title: "Not Found",
                description: "The page you are looking for does not exist.",
            };

        return {
            title: post?.seoDetails?.metaTitle,
            description: post.seoDetails?.metaDescription,
            alternates: {
                canonical: `/compounds/${post.slug}`,
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

const DeveloperPage = async ({ params }: { params: IParams }) => {
    const compound = await getCompoundById(params);
    const properties = await getProperties({ compoundId: compound?.id });
    const currentUser = await getCurrentUser();

    if (!compound) {
        return (
            <>
                <EmptyState />
            </>
        );
    }

    const items: any = [
        {
            label: `كمبوندات`,
            href: `/compounds`,
        },
        { label: compound?.area.title, href: `/area/${compound?.area.slug}` },

        { label: compound.name, href: `compounds/${compound.slug}` },
    ];

    const home: any = {
        label: <AiFillHome />,
        href: "/",
    };

    const parent = "properies-for-sale";

    return (
        <>
            <Container>
                <Breadcrumb home={home} items={items} />
            </Container>
            <Client
                compound={compound as any}
                properties={properties as any}
                currentUser={currentUser as any}
            />
        </>
    );
};

export default DeveloperPage;
