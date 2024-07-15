import prisma from "@/app/libs/prismadb";

export interface IParams {
    title?: string;
    status?: string;
    perPage?: number;
    page?: number;
}

export default async function getAreas(params: IParams) {
    try {
        const { title, status } = params;

        let query: any = {};

        const areas = await prisma.area.findMany({
            where: query,
            select:{
                id:true,
                slug: true,
                title:true,
                image: true,
            },
            take: 8,
            orderBy: {
                createdAt: "asc",
            },
        });
        const safeAreas = areas.map((area) => ({
            ...area,
        }));

        return safeAreas;
    } catch (error: any) {
        throw new Error(error);
    }
}
