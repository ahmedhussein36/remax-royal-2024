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
                        image: true,
                        slug: true,
                    },
                },
                area: {
                    select: {
                        title: true,
                        slug: true,
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
            createdAt: compound?.createdAt?.getTime(),
            updatedAt: compound?.updatedAt?.getTime(),
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
