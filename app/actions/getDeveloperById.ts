import prisma from "@/app/libs/prismadb";

interface IParams {
    slug: string;
}

export default async function getDeveloperByslug(params: IParams) {
    try {
        const { slug } = params;

        const developer = await prisma.developer.findUnique({
            where: {
                slug:decodeURI(slug),
            },
            include: {
                property: true,
                compound: true,
            },
        });

        if (!developer) {
            return null;
        }

        const safeDeveloper = {
            ...developer,
            created_at: developer?.createdAt?.toString(),
        };

        return safeDeveloper;
    } catch (error: any) {
        throw new Error(error);
    }
}
