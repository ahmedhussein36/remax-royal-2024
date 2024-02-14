import prisma from "@/app/libs/prismadb";

export interface AreaParams {
    name: string
    developer: string
    compoundId: number

}

export default async function getAreas(params: AreaParams) {
    try {
        const {
            name, developer, compoundId
        } = params;

        let query: any = {};

        if (name) {
            query.name = {
                contains: name,
            }
        }

        if (developer) {
            query.developer = developer
        }

        if (compoundId) {
            query.compoundId = compoundId
        }


        const areas = await prisma.area.findMany({
            where: query,
            include: {
                developer: true,
                compounds: true,
                Property: true
            },
            orderBy: {
                created_at: "asc",
            },
        });

        const safeAreas = areas.map((area) => ({
            ...area,
            createdAt: area.created_at
        }));

        return safeAreas;
    } catch (error: any) {
        throw new Error(error);
    }
}
