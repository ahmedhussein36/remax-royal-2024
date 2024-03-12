import prisma from "@/app/libs/prismadb";

export interface IParams {
    name?: string 
    
}

export default async function getDevelopers(params: IParams) {
    try {
        const {
            name
        } = params;

        let query: any = {};

        if (name) { 
            query.name = {
                contains: name,
            }
        }

        const developers = await prisma.developer.findMany({
            where: query,
            orderBy: {
                createdAt: "desc",
            },
        });

        const safeDevelopers = developers.map((developer) => ({
            ...developer,
            created_at: developer.createdAt
        }));

        return safeDevelopers;
    } catch (error: any) {
        throw new Error(error);
    }
}
