import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import DevClient from "./DevClient";
import getDeveloperById from "@/app/actions/getDeveloperById";
import getCompounds from "@/app/actions/getCompounds";
import getDeveloperByslug from "@/app/actions/getDeveloperById";
import { AiFillHome } from "react-icons/ai";
import Container from "@/app/components/Container";
import Breadcrumb from "@/app/components/Breadcrumb";
import getProperties from "@/app/actions/getProperties";

interface DevParams {
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
        const post = await getDeveloperByslug(params);
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

const DeveloperPage = async ({ params }: { params: DevParams }) => {
    const developer = await getDeveloperById(params);
    const compounds = await getCompounds({
        developerId: developer?.id,
    });
    const properties = await getProperties({
        developerId: developer?.id,
    });

    if (!developer) {
        return (
            <>
                <EmptyState />
            </>
        );
    }

    const items: any = [
        {
            label: `المطورين`,
            href: `/developer`,
        },
        { label: developer.title, href: `developers/${developer.slug}` },
    ];

    const home: any = {
        label: <AiFillHome />,
        href: "/",
    };

    return (
        <>
            <Container>
                <Breadcrumb home={home} items={items} />
            </Container>
            <DevClient
                properties={properties as any}
                developer={developer as any}
                compounds={compounds as any}
            />
        </>
    );
};

export default DeveloperPage;
