import prisma from "@/app/libs/prismadb";

export interface IParams {
    category?: string;
}

export const listingsLength = async () => {
    const properties = await prisma.property.findMany({
        select: {
            id: true,
        },
    });
    return properties.length;
};

export const getlistings = async (params: IParams) => {
    const category = params;
    let query: any = {};
    if (category) {
        query.category = category;
    }

    const properties = await prisma.property.findMany({
        where: query,
        select: {
            id: true,
            propertyType: true,
            category: true,
        },
    });

    const listings = properties.map((listing) => ({
        ...listing,
    }));

    return listings;
};

export const getTopCompounds = async () => {
    const compounds = await prisma.compound.findMany({
        select: {
            id: true,
            name: true,
            slug: true,
            mainImage: true,
        },
        take: 6,
        orderBy: {
            createdAt: "desc",
        },
    });
    return compounds;
};

export const compoundsLength = async () => {
    const compounds = await prisma.compound.findMany({
        select: {
            id: true,
        },
    });
    return compounds.length;
};

export const developersLength = async () => {
    const developers = await prisma.developer.findMany({
        select: {
            id: true,
        },
    });
    return developers.length;
};

export const areasLength = async () => {
    const areas = await prisma.area.findMany({
        select: {
            id: true,
        },
    });
    return areas.length;
};

export const postsLength = async () => {
    const posts = await prisma.post.findMany({
        select: {
            id: true,
        },
    });
    return posts.length;
};
