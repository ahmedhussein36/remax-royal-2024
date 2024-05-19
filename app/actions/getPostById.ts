import prisma from "@/app/libs/prismadb";

interface IParams {
    slug: string;
}

export default async function getPostById(params: IParams) {
    try {
        const { slug } = params;

        const post = await prisma.post.findUnique({
            where: {
                slug: decodeURI(slug),
            },
        });

        if (!post) {
            return null;
        }

        const safePost = {
            ...post,
            createdAat: post?.createdAt?.toString(),
        };

        return safePost;
    } catch (error: any) {
        throw new Error(error);
    }
}
