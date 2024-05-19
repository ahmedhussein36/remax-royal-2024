// app/compounds/page.tsx

import { Suspense } from "react";
import Container from "@/app/components/Container";
import EmptyStateAr from "@/app/components/EmptyStateAr";
import Heading from "@/app/components/Heading";
import getCompounds, { IParams } from "@/app/actions/getCompounds";
import CompoundClient from "./CompoundClient";
import CompoundLoader from "@/app/components/compounds/CompoundLoader";

export const revalidate = 10; // Revalidate every 10 seconds

export async function generateStaticParams() {
    // You can return an array of params to pre-render pages at build time.
    return [{}]; // Pre-render a default state, can be adjusted as needed.
}

export async function generateMetadata({
    searchParams,
}: {
    searchParams: IParams;
}) {
    const compounds = await getCompounds(searchParams);
    const title = `كمبوندات في مصر - ${compounds.length} نتائج`;
    const description = `استعراض الكمبوندات المتاحة في مصر. نتائج البحث: ${compounds.length} كمبوندات.`;

    return {
        title,
        description,
        alternates: {
            canonical: `/compounds`,
        },
        openGraph: {
            title,
            description,
            // You can add more Open Graph tags here
        },
        twitter: {
            title,
            description,
            // You can add more Twitter card tags here
        },
    };
}

const CompoundsPage = async ({ searchParams }: { searchParams: IParams }) => {
    const compounds = await getCompounds(searchParams);

    return (
        <Container>
            <div className="flex gap-4 justify-between items-center mt-6 mb-2 w-full">
                <div>
                    <Heading
                        title="كمبوندات في مصر"
                        subtitle={`نتائج ${compounds.length || 0}`}
                    />
                </div>
            </div>
            <Suspense fallback={<CompoundLoader />}>
                {compounds.length !== 0 ? (
                    <CompoundClient compounds={compounds} />
                ) : (
                    <EmptyStateAr title="لايوجد نتائج متوفرة" />
                )}
            </Suspense>
        </Container>
    );
};

export default CompoundsPage;
