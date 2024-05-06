import prisma from "@/app/libs/prismadb";

interface IParams {
    id: string;
}

export default async function getCompoundById(params: IParams) {
    try {
        const { id } = params;

        const compound = await prisma.compound.findUnique({
            where: {
                id: id,
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
