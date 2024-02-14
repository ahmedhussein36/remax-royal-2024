
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
        slug,
        name,
        description,
        lat,
        long,
        image,

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
            name,
            description,
            lat,
            long,
            image,
        },
    });

    return NextResponse.json(area);
}
