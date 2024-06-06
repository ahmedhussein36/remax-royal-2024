import prisma from "@/app/libs/prismadb";

export interface IParams {
    userId?: string;
    areaId?: string;
    developerId?: string;
    city?: string;
    title?: string;
    compoundId?: string;
    category?: string;
    propertyType?: string;
    status?: string;
    minprice?: number;
    maxprice?: number;
}

export default async function getProperties(params: IParams) {
    try {
        const {
            userId,
            areaId,
            category,
            propertyType,
            status,
            city,
            developerId,
            compoundId,
            title,
            minprice,
            maxprice,
        } = params;

        let query: any = {};

        if (title) {
            query.title = { contains: title };
        }

        if (userId) {
            query.userId = userId;
        }
        if (category) {
            query.category = category;
        }

        if (status) {
            query.status = status;
        }

        if (city) {
            query.city = city;
        }

        if (minprice && maxprice) {
            query.price = {
                gte: +minprice,
                lte: +maxprice,
            };
        }

        if (propertyType) {
            query.propertyType = propertyType;
        }
        if (compoundId) {
            query.compoundId = compoundId;
        }
        if (areaId) {
            query.areaId = areaId;
        }
        if (developerId) {
            query.developerId = developerId;
        }

        const properties = await prisma.property.findMany({
            where: query,
            include: {
                compound: { select: { title: true } },
                area: { select: { title: true } },
                user: { select: { name: true } },
            },
            orderBy: {
                createdAt: "desc",
            },
        });

        const safeProperties = properties.map((listing) => ({
            ...listing,
            createdAt: listing.createdAt.getTime(),
            updatedAt: listing.updatedAt.getTime(),
        }));

        return safeProperties;
    } catch (error: any) {
        throw new Error(error);
    }
}
