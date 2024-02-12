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
        developerId,
        name,
        slug,
        image,
        compounds,
        properties,
        min_price,
        official_name,
        add_to_slider
    } = body;

    Object.keys(body).forEach((value: any) => {
        if (!body[value]) {
            NextResponse.error();
        }
    });

    const developer = await prisma.developer.create({
        data: {
            developerId,
            name,
            slug,
            image,
            compounds,
            properties,
            min_price,
            add_to_slider,
            official_name,
        },
    });

    return NextResponse.json(developer);
}
