import prisma from "@/app/libs/prismadb";

interface IParams {
    id?: string;
    developerId?: number;
}

export default async function getDeveloperById(params: IParams) {
    try {
        const { id, developerId } = params;

        const developer = await prisma.developer.findUnique({
            where: {
                id: id,
                developerId: developerId
            },
            include: {
                property: true,
                compound: true,
                _count: true,
            }
        })

        if (!developer) {
            return null;
        }

        const safeDeveloper = {
            ...developer,
            created_at: developer?.created_at?.toString()

        }

        return safeDeveloper;
    } catch (error: any) {
        throw new Error(error);
    }
}
