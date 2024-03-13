import prisma from "@/app/libs/prismadb";

interface IParams {
    id: string;
}

export default async function getDeveloperById(params: IParams) {
    try {
        const { id } = params;

        const developer = await prisma.developer.findUnique({
            where: {
                id: id,
            },
            include: {
                property: true,
                compound: true,
                area: true,
                _count: true,
            }
        })

        if (!developer) {
            return null;
        }

        const safeDeveloper = {
            ...developer,
            created_at: developer?.createdAt?.toString()

        }

        return safeDeveloper;
    } catch (error: any) {
        throw new Error(error);
    }
}
