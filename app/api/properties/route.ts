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
        title,
        description,
        slug,
        images,
        mainImage,
        category,
        roomCount,
        bathroomCount,
        propertyType,
        saleType,
        paymentPlan,
        downPayment,
        installmentValue,
        installmentPeriod,
        developerName,
        commissionValue,
        deliveryDate,
        address,
        country,
        phone,
        whatsapp,
        price,
        currency,
        developerId,
        compoundId,
        areaId,
        size,
        sizeUnit,
    } = body;

    Object.keys(body).forEach((value: any) => {
        if (!body[value]) {
            NextResponse.error();
        }
    });

    const property = await prisma.property.create({
        data: {
            title,
            description,
            slug,
            images,
            mainImage,
            areaId,
            category,
            roomCount,
            bathroomCount,
            propertyType,
            saleType,
            developerId,
            compoundId, paymentPlan,
            downPayment: parseInt(downPayment),
            installmentValue: parseInt(installmentValue),
            installmentPeriod: parseInt(installmentPeriod),
            developerName,
            commissionValue: parseFloat(commissionValue),
            address,
            deliveryDate,
            country,
            phone,
            whatsapp,
            price: parseInt(price),
            currency,
            size: parseInt(size),
            sizeUnit,
            userId: currentUser.id,
        },
    });

    return NextResponse.json(property);
}
