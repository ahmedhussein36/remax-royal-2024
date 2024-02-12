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
        compoundId,
        name,
        description,
        is_super,
        slug,
        properties_count,
        image,
        min_price,
        max_price,
        min_unit_area,
        max_unit_area,
        available_bathrooms,
        available_bedrooms,
        currency,
        sponsored,
        max_installment_years,
        min_down_payment,
        min_ready_by,
        sum_10_properties_min_price,
        lat,
        long,
        has_offer,
        has_launches,
        is_launch,
        offer_title,
        limited_time_offer,
        property_types,
        advertising_image_path,
        property_types_count,
        favorite,
        property_types_count_highlighted,
        developerId, areaId

    } = body;

    Object.keys(body).forEach((value: any) => {
        if (!body[value]) {
            NextResponse.error();
        }
    });

    const compound = await prisma.compound.create({
        data: {
            compoundId,
            name,
            description,
            is_super,
            slug,
            properties_count,
            image,
            min_price,
            max_price,
            min_unit_area,
            max_unit_area,
            available_bathrooms,
            available_bedrooms,
            currency,
            sponsored,
            max_installment_years,
            min_down_payment,
            min_ready_by,
            sum_10_properties_min_price,
            lat,
            long,
            has_offer,
            has_launches,
            is_launch,
            offer_title,
            limited_time_offer,
            property_types,
            advertising_image_path,
            property_types_count,
            favorite,
            property_types_count_highlighted,
            developerId, areaId
        },
    });

    return NextResponse.json(compound);
}
