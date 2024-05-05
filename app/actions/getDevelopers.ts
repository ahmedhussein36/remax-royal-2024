import prisma from "@/app/libs/prismadb";

export interface IParams {
    title?: string;
}

export default async function getDevelopers(params: IParams) {
    try {
        const { title } = params;

        let query: any = {};

        if (title) {
            query.title = {
                contains: title,
            };
        }

        const developers = await prisma.developer.findMany({
            where: query,
            orderBy: {
                createdAt: "desc",
            },
        });

        const safeDevelopers = developers.map((developer) => ({
            ...developer,
            created_at: developer.createdAt,
        }));

        return safeDevelopers;
    } catch (error: any) {
        throw new Error(error);
    }
}
