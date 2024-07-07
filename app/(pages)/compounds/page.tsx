// app/compounds/page.tsx

import { Suspense } from "react";
import Container from "@/app/components/Container";
import EmptyStateAr from "@/app/components/EmptyStateAr";
import Heading from "@/app/components/Heading";
import getCompounds, { IParams } from "@/app/actions/getCompounds";
import CompoundClient from "./CompoundClient";
import CompoundLoader from "@/app/components/compounds/CompoundLoader";
import { AiFillHome } from "react-icons/ai";
import Breadcrumb from "@/app/components/Breadcrumb";

export async function generateMetadata() {
    const title = `كمبوندات في مصر`;
    const description = `استعراض الكمبوندات المتاحة في مصر `;

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

    const parent = "compounds";

    const items = [{ label: `كمبوندات في مصر`, href: `/${parent}` }];

    const home = {
        label: <AiFillHome />,
        href: "/",
    };

    return (
        <Container>
            <Breadcrumb home={home as any} items={items} />

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
                    <CompoundClient compounds={compounds as any} />
                ) : (
                    <EmptyStateAr title="لايوجد نتائج متوفرة" />
                )}
            </Suspense>
        </Container>
    );
};

export default CompoundsPage;
