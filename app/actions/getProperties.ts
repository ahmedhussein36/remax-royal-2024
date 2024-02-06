import prisma from "@/app/libs/prismadb";

export interface IParams {
    userId?: string;
    title?: string;
    slug?: string;
    roomCount?: number;
    bathroomCount?: number;
    city?: string;
    aria?: string;
    PropertyType?: string;
    propertyGroup?: string;
    category?: string;
    minprice?: number;
    maxprice?: number;
}

export default async function getProperties(params: IParams) {
    try {
        const {
            userId,
            title,
            slug,
            roomCount,
            bathroomCount,
            city,
            aria,
            PropertyType,
            propertyGroup,
            category,
            minprice,
            maxprice,
        } = params;

        let query: any = {};

        if (userId) {
            query.userId = userId;
        }

        if (category) {
            query.category = category;
        }

        if (title) {
            query.title = {
                contains : title
            };
        }
        if (slug) {
            query.slug = slug;
        }

        if (PropertyType) {
            query.PropertyType = PropertyType;
        }

        if (propertyGroup) {
            query.propertyGroup = propertyGroup;
        }

        if (city) {
            query.cityValue = city;
        }

        if (aria) {
            query.ariaValue = aria;
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
