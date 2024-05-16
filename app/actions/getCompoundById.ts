import prisma from "@/app/libs/prismadb";

interface IParams {
    slug: string;
}

export default async function getCompoundByslug(params: IParams) {
    try {
        const { slug } = params;

        const compound = await prisma.compound.findUnique({
            where: {
                slug: decodeURI(slug),
            },
            include: {
                developer: true,
                area: true,
            },
        });

        if (!compound) {
            return null;
        }

        const safeCompound = {
            ...compound,
            createdAat: compound?.createdAt?.toString(),
        };

        return safeCompound;
    } catch (error: any) {
        throw new Error(error);
    }
}
