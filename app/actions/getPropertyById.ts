import prisma from "@/app/libs/prismadb";

interface IParams {
    slug: string;
}

export default async function getPropertyById(params: IParams) {
    try {
        const { slug } = params;

        const property = await prisma.property.findUnique({
            where: {
                slug: decodeURI(slug),
            },
            include: {
                compound: {
                    select: {
                        title: true,
                    },
                },
                area: {
                    select: {
                        title: true,
                    },
                },
                user: {
                    select: {
                        name: true,
                    },
                },
            },
        });

        if (!property) {
            return null;
        }

        return {
            ...property,
            createdAt: property.createdAt.toString(),
            user: {
                ...property.user,
            },
        };
    } catch (error: any) {
        throw new Error(error);
    }
}
