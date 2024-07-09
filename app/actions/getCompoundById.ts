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
            select: {
                id: true,
                slug: true,
                name: true,
                lat: true,
                lng: true,
                images: true,
                content: true,
                mainImage: true,
                isAddHome: true,
                seoDetails: true,
                title: true,
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
