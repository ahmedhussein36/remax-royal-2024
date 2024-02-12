import prisma from "@/app/libs/prismadb";

export interface IParams {
    name: string
    min_price: number
    max_price: number
    max_installment_years: number
    min_down_payment: number
}

export default async function getCopmounds(params: IParams) {
    try {
        const {
            name, min_price, max_price, max_installment_years, min_down_payment
        } = params;

        let query: any = {};

        if (name) {
            query.name = {
                contains: name,
            }
        }

        if (min_price) {
            query.min_price = min_price
        }

        if (max_price) {
            query.max_price = max_price
        }

        if (max_installment_years) {
            query.max_installment_years = max_installment_years
        }
        if (min_down_payment) {
            query.min_down_payment = min_down_payment
        }


        const compounds = await prisma.compound.findMany({
            where: query,
            orderBy: {
                createdAt: "asc",
            },
        });

        const safeCompounds = compounds.map((compound) => ({
            ...compound,
            created_at: compound.createdAt
        }));

        return safeCompounds;
    } catch (error: any) {
        throw new Error(error);
    }
}


