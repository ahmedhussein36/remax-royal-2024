import prisma from "@/app/libs/prismadb";

interface IParams {
    compounId?: string;
    slug?: string
}

export default async function getCompoundId(params: IParams) {
    try {
        const { compounId } = params;

        const compound = await prisma.compound.findUnique({
            where: {
                id: compounId,
            },
            include: {
                developer: true,
                area: true,
                properties: true,
            }
        });

        if (!compound) {
            return null;
        }

        return {
            ...compound,
            createdAt: compound.createdAt.toString(),

        };
    } catch (error: any) {
        throw new Error(error);
    }
}

interface IParams {
    compounId?: string;
    slug?: string
}

