import prisma from "@/app/libs/prismadb";

export interface IParams {
    userId?: string;
    areaId?: string;
    developerId?: string;
    isAddHome?: boolean;
    city?: string;
    title?: string;
    compoundId?: string;
    category?: string;
    propertyType?: string;
    status?: string;
    minprice?: number;
    maxprice?: number;
    page?: number;
    perPage?: number;
}

export default async function getProperties(params: IParams) {
    const {
        userId,
        areaId,
        category,
        isAddHome,
        propertyType,
        status,
        city,
        developerId,
        compoundId,
        title,
        minprice,
        maxprice,
        page = 1,
        perPage = 12,
    } = params;

    const query: Record<string, any> = {};

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
    if (isAddHome) {
        query.isAddHome = isAddHome;
    }
    if (city) {
        query.city = city;
    }
    if (minprice && maxprice) {
        query.price = {
            gte: minprice,
            lte: maxprice,
        };
    } else if (minprice) {
        query.price = {
            gte: minprice,
        };
    } else if (maxprice) {
        query.price = {
            lte: maxprice,
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
            compound: {
                select: { id: true, title: true, slug: true, name: true },
            },
            developer: {
                select: { image: true },
            },
            area: { select: { title: true } },
            user: { select: { name: true, image: true } },
        },
        orderBy: {
            createdAt: "desc",
        },
        skip: (page - 1) * perPage,
        take: perPage,
    });

    return properties.map((listing) => ({
        ...listing,
        createdAt: listing.createdAt.getTime(),
        updatedAt: listing.updatedAt.getTime(),
    }));
}
