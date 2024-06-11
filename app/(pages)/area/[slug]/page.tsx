import EmptyState from "@/app/components/EmptyState";
import AreaClient from "./AreaClient";
import getCompoundById from "@/app/actions/getCompoundById";
import getCompoundByslug from "@/app/actions/getCompoundById";
import ClientOnly from "@/app/components/ClientOnly";
import getProperties from "@/app/actions/getProperties";
import getAreaById from "@/app/actions/getAreaById";
import getCompounds from "@/app/actions/getCompounds";
import { AiFillHome } from "react-icons/ai";
import Container from "@/app/components/Container";
import Breadcrumb from "@/app/components/Breadcrumb";

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
        const post = await getAreaById(params);
        if (!post)
            return {
                title: "Not Found",
                description: "The page you are looking for does not exist.",
            };

        return {
            title: post?.title,
            description: post.description,
            alternates: {
                canonical: `/${post.slug}`,
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
    const area = await getAreaById(params);
    const compounds = await getCompounds({ areaId: area?.id });
    const properties = await getProperties({ areaId: area?.id });

    if (!area) {
        return (
            <>
                <EmptyState />
            </>
        );
    }

    const parent = "area";

    const items = [{ label: area.title, href: `/${parent}/${area.slug}` }];

    const home = {
        label: <AiFillHome />,
        href: "/",
    };

    return (
        <>
            <Container>
                <Breadcrumb home={home as any} items={items} />
            </Container>
            <AreaClient
                area={area as any}
                compounds={compounds as any}
                properties={properties as any}
            />
        </>
    );
};

export default DeveloperPage;
