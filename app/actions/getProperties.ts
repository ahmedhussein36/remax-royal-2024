import prisma from "@/app/libs/prismadb";
export interface IParams {
    userId?: string;
    areaId?: string;
    developerId?: string;
    roomCount?: any;
    bathroomCount?: any;
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
        roomCount,
        bathroomCount,
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
    if (roomCount) {
        query.roomCount = roomCount;
    }
    if (bathroomCount) {
        query.bathroomCount = bathroomCount;
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
        select: {
            id: true,
            title: true,
            slug: true,
            category: true,
            roomCount: true,
            mainImage: true,
            price: true,
            installmentValue: true,
            propertyType: true,
            bathroomCount: true,
            size: true,
            compoundId: true,
            areaId: true,
            developerId: true,
            compound: {
                select: {
                    id: true,
                    name: true,
                    slug: true,
                },
            },
            area: {
                select: {
                    id: true,
                    title: true,
                    slug: true,
                },
            },
            developer: {
                select: {
                    id: true,
                    image: true,
                    title: true,
                },
            },
        },
        orderBy: {
            createdAt: "desc",
        },
        skip: (page - 1) * perPage,
        take: perPage,
    });
    const safeListings = properties.map((listing) => ({
        ...listing,
    }));

    return safeListings;
}
