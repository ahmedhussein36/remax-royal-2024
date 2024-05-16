import prisma from "@/app/libs/prismadb";

export interface IParams {
    title?: string;
    developerId?: string;
    areaId?: string;
}

export default async function getCompounds(params: IParams) {
    try {
        const { title, developerId, areaId } = params;

        let query: any = {};

        if (title) {
            query.title = {
                contains: title,
            };
        }

        if (developerId) {
            query.developerId = developerId;
        }
        if (areaId) {
            query.areaId = areaId;
        }

        const compounds = await prisma.compound.findMany({
            where: query,
            include: {
                developer: true,
                user: true,
                area: true,
                properties: true,
            },
            orderBy: {
                createdAt: "desc",
            },
        });

        const safeCompounds = compounds.map((compound) => ({
            ...compound,
            createdAt: compound.createdAt,
            developer: {
                ...compound.developer,
            },
            area: {
                ...compound.area,
            },
            user: {
                ...compound.user,
            },
            properties: {
                ...compound.properties,
            },
        }));

        return safeCompounds;
    } catch (error: any) {
        throw new Error(error);
    }
}
