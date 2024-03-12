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
        slug,
        image,
        description,
        areaId,
    } = body;

    Object.keys(body).forEach((value: any) => {
        if (!body[value]) {
            NextResponse.error();
        }
    });

    const developer = await prisma.developer.create({
        data: {
            name,
            slug,
            image,
            description,
            areaId,
        },
    });

    return NextResponse.json(developer);
}
