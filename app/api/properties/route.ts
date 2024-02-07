import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { title } from "process";

export async function POST(request: Request) {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return NextResponse.error();
    }

    const body = await request.json();
    const {
        label,
        description,
        imageSrc,
        category,
        roomCount,
        bathroomCount,
        propertyType,
        propertyGroup,
        saleType,
        propertyImages,
        paymentPlan,
        downPayment,
        installmentValue,
        installmentPeriod,
        developerName,
        commissionValue,
        address,
        country,
        city,
        aria,
        phone,
        whatsapp,
        price,
        currency,
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
            title: `${propertyGroup} ${category} في ${address} ${aria.value}`,
            description,
            label,
            imageSrc,
            propertyImages,
            category,
            roomCount,
            bathroomCount,
            propertyType,
            saleType,
            propertyGroup,
            paymentPlan,
            downPayment: parseInt(downPayment),
            installmentValue: parseInt(installmentValue),
            installmentPeriod: parseInt(installmentPeriod),
            developerName,
            commissionValue: parseFloat(commissionValue),
            address,
            country,
            cityValue: city.value,
            ariaValue: aria.value,
            phone,
            whatsapp,
            price: parseInt(price),
            currency,
            size: parseInt(size),
            sizeUnit,
            userId: currentUser.id,
            createdAt: new Date(),
        },
    });

    return NextResponse.json(property);
}
