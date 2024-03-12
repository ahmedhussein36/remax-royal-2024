import prisma from "@/app/libs/prismadb";

export interface IParams {
    name?: string
    developerId?: string
}

export default async function getCompounds(params: IParams) {
    try {
        const {
            name, developerId
        } = params;

        let query: any = {};

        if (name) {
            query.name = {
                contains: name,
            }
        }

        if (developerId) {
            query.developerId = developerId
        }


        const compounds = await prisma.compound.findMany({
            where: query,
            include: {
                developer: true,
                area: true
            },
            orderBy: {
                createdAt: "desc",
            },
        });

        const safeCompounds = compounds.map((compound) => ({
            ...compound,
            createdAt: compound.createdAt
        }));

        return safeCompounds;
    } catch (error: any) {
        throw new Error(error);
    }
}
