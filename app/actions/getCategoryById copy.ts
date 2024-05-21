import prisma from "@/app/libs/prismadb";

interface IParams {
    slug: string;
}

export default async function getcategoryById(params: IParams) {
    try {
        const { slug } = params;

        const category = await prisma.category.findUnique({
            where: {
                slug: decodeURI(slug),
            },
            include: {
                posts: true,
            },
        });

        if (!category) {
            return null;
        }

        const safecategory = {
            ...category,
            createdAt: category?.createdAt?.getTime(),
            updatedAt: category?.updatedAt?.getTime(),
        };

        return safecategory;
    } catch (error: any) {
        throw new Error(error);
    }
}
