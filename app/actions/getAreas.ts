import prisma from "@/app/libs/prismadb";

export interface IParams {
    title?: string;
    status?: string;
}

export default async function getAreas(params: IParams) {
    try {
        const { title, status } = params;

        let query: any = {};

        const areas = await prisma.area.findMany({
            take: 8,
            orderBy: {
                createdAt: "asc",
            },
        });

        const safeAreas = areas.map((area) => ({
            ...area,
            createdAt: area?.createdAt?.getTime(),
            updatedAt: area?.updatedAt?.getTime(),
        }));

        return safeAreas;
    } catch (error: any) {
        throw new Error(error);
    }
}
