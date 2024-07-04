import EmptyState from "@/app/components/EmptyState";
import Client from "./Client";
import getCompoundById from "@/app/actions/getCompoundById";
import getProperties from "@/app/actions/getProperties";
import { AiFillHome } from "react-icons/ai";
import Container from "@/app/components/Container";
import Breadcrumb from "@/app/components/Breadcrumb";
import getCurrentUser from "@/app/actions/getCurrentUser";
import React from "react";

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
        const post = await getCompoundById(params);
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

const CompoundPage = async ({ params }: { params: IParams }) => {
    const compound = await getCompoundById(params);
    const properties = await getProperties({ compoundId: compound?.id });
    const currentUser = await getCurrentUser();

    if (!compound) {
        return (
            <React.Fragment>
                <EmptyState />
            </React.Fragment>
        );
    }

    const items = [
        {
            label: `كمبوندات`,
            href: `/compounds`,
        },
        {
            label: compound?.area.title,
            href: `/area/${compound?.area.slug}`,
        },
        {
            label: compound.name,
            href: `compounds/${compound.slug}`,
        },
    ];

    const home = {
        label: <AiFillHome />,
        href: "/",
    };

    return (
        <React.Fragment>
            <Container>
                <Breadcrumb home={home} items={items} />
            </Container>
            <Client
                compound={compound}
                properties={properties}
                currentUser={currentUser}
            />
        </React.Fragment>
    );
};

export default CompoundPage;