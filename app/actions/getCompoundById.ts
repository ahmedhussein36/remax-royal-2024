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
                        slug: true,
                        image: true,
                    },
                },
                area: {
                    select: {
                        title: true,
                        slug: true,
                    },
                },
            },
        });

        if (!compound) {
            return null;
        }

        return {
            ...compound,
        };
    } catch (error: any) {
        throw new Error(error);
    }
}
