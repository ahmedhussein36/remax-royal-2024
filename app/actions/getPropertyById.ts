import prisma from "@/app/libs/prismadb";
import { Property } from "@prisma/client";

export interface IParam {
    slug: string;
}

export default async function getPropertyById(
    params: IParam
): Promise<Property | null> {
    try {
        const { slug } = params;

        const property = await prisma.property.findUnique({
            where: { slug: decodeURI(slug) },
            include: {
                compound: { select: { title: true } },
                area: { select: { title: true } },
                user: { select: { name: true } },
            },
        });

        if (!property) {
            return null;
        }

        return {
            ...property,
            ...property.compound,
            ...property.area,
            ...property.user,
        };
    } catch (error) {
        console.error(error);
        throw new Error("Failed to retrieve property by slug");
    }
}
