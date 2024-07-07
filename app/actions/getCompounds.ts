import prisma from "@/app/libs/prismadb";

export interface IParams {
    title?: string;
    developerId?: string;
    areaId?: string;
    status?: string;
    isAddHome?: boolean;
    page?: number;
    perPage?: number;
}

export default async function getCompounds(params: IParams) {
    try {
        const {
            title,
            developerId,
            areaId,
            status,
            isAddHome,
            page = 1,
            perPage = 12,
        } = params;

        const query: any = {};

        if (title) {
            query.title = {
                contains: title,
                mode: "insensitive", // Case-insensitive search
            };
        }

        if (status) {
            query.status = status;
        }

        if (isAddHome) {
            query.isAddHome = isAddHome;
        }

        if (areaId) {
            query.areaId = areaId;
        }

        if (developerId) {
            query.developerId = developerId;
        }

        const compounds = await prisma.compound.findMany({
            where: query,
            select: {
                id: true,
                slug: true,
                name: true,
                images: true,
                content: false,
                mainImage: true,
                isAddHome: true,
                title: true,
                properties: {
                    select: {
                        id: true, 
                        price: true,
                        propertyType: true,
                    },
                },
                developer: {
                    select: {
                        title: true,
                        slug: true,
                        image: true,
                    },
                },
                area: {
                    select: {
                        title: true,
                        slug: true,
                    },
                },
            },
            orderBy: {
                createdAt: "desc",
            },

            skip: (page - 1) * perPage,
            take: perPage,
        });

        return compounds.map((compound) => ({
            ...compound,
        }));
    } catch (error) {
        console.error("Error fetching compounds:", error);
        throw new Error("Could not fetch compounds");
    }
}
