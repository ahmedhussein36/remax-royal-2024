import prisma from "@/app/libs/prismadb";

export interface IParams {
    userId?: string;
    title?: string;
    roomCount?: number;
    bathroomCount?: number; 
    city?: string;
    areaId?: string;
    PropertyType?: string;
    group?: string;
    category?: string;
    minprice?: number;
    maxprice?: number;
}

export default async function getProperties(params: IParams) {
    try {
        const {
            userId,
            title,
            roomCount,
            bathroomCount,
            city,
            areaId,
            PropertyType,
            group,
            category,
            minprice,
            maxprice,
        } = params;

        let query: any = {};

        if (userId) {
            query.userId = userId;
        }

        if (areaId) {
            query.areaId = areaId;
        }

        if (category) {
            query.category = category;
        }

        if (title) {
            query.title = {
                contains: title,
            };
        }
        if (PropertyType) {
            query.PropertyType = PropertyType;
        }

        if (group) {
            query.group = group;
        }

        if (city) {
            query.city = city;
        }

        if (roomCount) {
            query.roomCount = +roomCount;
        }

        if (bathroomCount) {
            query.bathroomCount = +bathroomCount;
        }

        if (minprice && maxprice) {
            query.price = {
                gte: +minprice,
                lte: +maxprice,
            };
        }

        const properties = await prisma.property.findMany({
            where: query,
            orderBy: {
                createdAt: "desc",
            },
        });

        const safeProperties = properties.map((listing) => ({
            ...listing,
            createdAt: listing.createdAt.toISOString(),
        }));

        return safeProperties;
    } catch (error: any) {
        throw new Error(error);
    }
}
