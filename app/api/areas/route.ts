
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
        areaId,
        developerId,
        slug,
        all_slug,
        name,
        description,
        manual_ranking,
        lat,
        long,
        image,
        is_off_season,
        is_super,
        parent_area_id,
        compounds,
        Property,
    } = body;

    Object.keys(body).forEach((value: any) => {
        if (!body[value]) {
            NextResponse.error();
        }
    });

    const area = await prisma.area.create({
        data: {
            areaId,
            slug,
            all_slug,
            name,
            description,
            manual_ranking,
            lat,
            long,
            image,
            is_off_season,
            is_super,
            parent_area_id,
            compounds,
            Property,

        },
    });

    return NextResponse.json(area);
}
