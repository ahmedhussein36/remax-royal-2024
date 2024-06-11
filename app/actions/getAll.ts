import prisma from "@/app/libs/prismadb";

export const listingsLength = async () => {
    const properties = await prisma.property.findMany();
    return properties.length;
};

export const getlistings = async (params: {
    category?: string;
    properyType?: string;
}) => {
    const { category, properyType } = params;

    const query: Record<string, any> = {};
    if (category) {
        query.category = category;
    }
    if (properyType) {
        query.properyType = properyType;
    }

    const properties = await prisma.property.findMany({
        where: query,
        select: {
            id: true,
            propertyType: true
        },
    });

    return properties;
};

export const compoundsLength = async () => {
    const compounds = await prisma.compound.findMany();
    return compounds.length;
};

export const developersLength = async () => {
    const developers = await prisma.developer.findMany();
    return developers.length;
};

export const areasLength = async () => {
    const areas = await prisma.area.findMany();
    return areas.length;
};

export const postsLength = async () => {
    const posts = await prisma.post.findMany();
    return posts.length;
};
