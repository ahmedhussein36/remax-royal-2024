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

interface ForSalePageProps {
    searchParams: IParams;
}

const ForSalePage = async ({ searchParams }: ForSalePageProps) => {
    const listings = await getProperties(searchParams);
    const currentUser = await getCurrentUser();

    const filterdBySale = listings.filter(
        (listing: any) => listing.category === "للبيع"
    );

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
                    subtitle={`عدد الوحدات المتوفرة: ${filterdBySale.length}`}
                />
                <div className="w-60">
                    <Sort />
                </div>
            </div>

            <div>
                <FilterByGroups parent={"properties-for-sale"} />
            </div>
            {filterdBySale.length !== 0 ? (
                <ForSaleClient
                    listings={filterdBySale as any}
                    currentUser={currentUser as any}
                />
            ) : (
                <EmptyStateAr showReset />
            )}
        </Container>
    );
};

export default ForSalePage;
