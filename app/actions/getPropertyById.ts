import prisma from "@/app/libs/prismadb";

interface IParams {
    id: string;
}

export default async function getPropertyById(params: IParams) {
    try {
        const { id } = params;

        const property = await prisma.property.findUnique({
            where: {
                id: decodeURI(id),
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
            createdAt: property.createdAt.getTime(),
            updatedAt: property.updatedAt.getTime(),
            user: {
                ...property.user,
            },
        };
    } catch (error: any) {
        throw new Error(error);
    }
}
