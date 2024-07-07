import prisma from "@/app/libs/prismadb";

interface IParams {
    slug: string;
}

export default async function getAreaById(params: IParams) {
    try {
        const { slug } = params;

        const area = await prisma.area.findUnique({
            where: {
                slug: decodeURI(slug),
            },
            include: {
                properties: {
                    select: {
                        id: true,
                    },
                },
                compounds: {
                    select: {
                        id: true,
                    },
                },
            },
        });

        if (!area) {
            return null;
        }

        const safearea = {
            ...area,
            createdAt: area?.createdAt?.getTime(),
            updatedAt: area?.updatedAt?.getTime(),
        };

        return safearea;
    } catch (error: any) {
        throw new Error(error);
    }
}
