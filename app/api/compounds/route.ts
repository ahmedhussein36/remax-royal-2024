import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return NextResponse.error();
    }

    const body = await request.json();
    const {
        name,
        description,
        slug,
        mainImage,
        images,
        lat,
        long,
        has_launches,
        is_launch,
        property_types,
        properties,
        developer,
        developerId,
        area,
        areaId,


    } = body;

    Object.keys(body).forEach((value: any) => {
        if (!body[value]) {
            NextResponse.error();
        }
    });

    const compound = await prisma.compound.create({
        data: {
            name,
            description,
            slug,
            mainImage,
            images,
            lat,
            long,
            has_launches,
            is_launch,
            property_types,
            properties,
            developer,
            developerId,
            area,
            areaId,

        },
    });

    return NextResponse.json(compound);
}
