import Container from "@/app/components/Container";
import EmptyStateAr from "@/app/components/EmptyStateAr";
import getProperties, { IParams } from "@/app/actions/getProperties";
import getCurrentUser from "@/app/actions/getCurrentUser";
import Heading from "@/app/components/Heading";
import Sort from "@/app/components/Sort";
import ForSaleClient from "./ForSaleClient";
import FilterByGroups from "@/app/components/ِFilterByGroups";
import { AiFillHome } from "react-icons/ai";
import Breadcrumb from "@/app/components/Breadcrumb";
import { getlistings, listingsLength } from "@/app/actions/getAll";
import { Suspense } from "react";
import CompoundLoader from "@/app/components/compounds/CompoundLoader";

interface ForSalePageProps {
    searchParams: IParams;
}

const ForSalePage = async ({ searchParams }: ForSalePageProps) => {
    const listings = await getProperties({
        category: "للبيع",
        ...searchParams,
    });
    const currentUser = await getCurrentUser();
    const currentPage = searchParams?.page || 1;
    const getAll = await getlistings({ category: "للبيع" });

    const perPage = searchParams?.perPage || 12;

    const parent = "properties-for-sale";

    const items = [{ label: `عقارات للبيع في مصر`, href: `/${parent}` }];

    const home = {
        label: <AiFillHome />,
        href: "/",
    };

    return (
        <Container>
            <Breadcrumb home={home as any} items={items} />

            <div className="flex gap-4 justify-between items-center my-8 w-full">
                <Heading
                    title={" عقارات للبيع في مصر"}
                    subtitle={`عدد الوحدات المتوفرة: ${getAll.length}`}
                />
                <div className="w-60">
                    <Sort />
                </div>
            </div>

            <div>
                <FilterByGroups listings={getAll as any} parent={parent} />
            </div>
            {listings.length !== 0 ? (
                <Suspense fallback={<CompoundLoader />}>
                    <ForSaleClient
                        propertiesLength={getAll.length}
                        currentPage={currentPage}
                        perPage={perPage}
                        listings={listings as any}
                        currentUser={currentUser as any}
                    />
                </Suspense>
            ) : (
                <EmptyStateAr showReset />
            )}
        </Container>
    );
};

export default ForSalePage;
