import prisma from "@/app/libs/prismadb";

interface IParams {
    slug: string;
}

export default async function getCompoundById(params: IParams) {
    try {
        const { slug } = params;

        const compound = await prisma.compound.findUnique({
            where: {
                slug: decodeURI(slug),
            },
            include: {
                developer: {
                    select: {
                        title: true,
                    },
                },
                area: {
                    select: {
                        title: true,
                    },
                },
                properties: true,
            },
        });

        if (!compound) {
            return null;
        }

        return {
            ...compound,
            createdAat: compound?.createdAt?.toISOString(),
            developer: {
                ...compound?.developer,
            },
            area: {
                ...compound?.area,
            },
            properties: {
                ...compound?.properties,
            },
        };
    } catch (error: any) {
        throw new Error(error);
    }
}
