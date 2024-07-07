import prisma from "@/app/libs/prismadb";

interface IParams {
    slug: string;
}

export default async function getDeveloperById(params: IParams) {
    try {
        const { slug } = params;

        const developer = await prisma.developer.findUnique({
            where: {
                slug: decodeURI(slug),
            },
            include: {
                compound: {
                    select: { id: true },
                },
                property: {
                    select: { id: true },
                },
            },
        });

        if (!developer) {
            return null;
        }

        const safeDeveloper = {
            ...developer,
            createdAt: developer?.createdAt?.getTime(),
            updatedAt: developer?.updatedAt?.getTime(),
        };

        return safeDeveloper;
    } catch (error: any) {
        throw new Error(error);
    }
}
