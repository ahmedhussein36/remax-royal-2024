import prisma from "@/app/libs/prismadb";

export const listingsLength = async () => {
    const properties = await prisma.property.findMany({
        select: {
            id: true,
        },
    });
    return properties.length;
};

export const getlistings = async () => {
    try {
        const properties = await prisma.property.findMany({
            select: {
                id: true,
                propertyType: true,
            },
        });

        const listings = properties.map((listing) => ({
            ...listing,
        }));

        return listings;
    } catch (error) {
        console.log(error);
        return { massage: "cant fetch properties", error };
    }
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
