import EmptyState from "@/app/components/EmptyState";
import Client from "./Client";
import getCompoundById from "@/app/actions/getCompoundById";
import getCompoundByslug from "@/app/actions/getCompoundById";

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
    if (!compound) {
        return (
            <>
                <EmptyState />
            </>
        );
    }

    return (
        <>
            <Client compound={compound as any} />
        </>
    );
};

export default DeveloperPage;
