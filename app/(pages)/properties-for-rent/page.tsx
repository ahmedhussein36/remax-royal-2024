import Container from "@/app/components/Container";
import EmptyStateAr from "@/app/components/EmptyStateAr";
import getProperties, { IParams } from "@/app/actions/getProperties";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "@/app/components/ClientOnly";
import Heading from "@/app/components/Heading";
import Sort from "@/app/components/Sort";
import ForRentClient from "./ForRentClient";
import FilterByGroups from "@/app/components/ِFilterByGroups";
import { AiFillHome } from "react-icons/ai";
import Breadcrumb from "@/app/components/Breadcrumb";

interface ForRentPageProps {
    searchParams: IParams;
}

const ForRentPage = async ({ searchParams }: ForRentPageProps) => {
    const listings = await getProperties(searchParams);
    const currentUser = await getCurrentUser();

    const filterdByRent = listings.filter(
        (listing: any) => listing.category === "للإيجار"
    );

    const parent = "properties-for-rent";

    const items = [{ label: `عقارات للإيجار في مصر`, href: `/${parent}` }];

    const home = {
        label: <AiFillHome />,
        href: "/",
    };
    return (
        <>
            <Container>
                <Breadcrumb home={home as any} items={items} />

                <div className="flex gap-4 justify-between items-center my-8 w-full">
                    <Heading
                        title={"نتائج البحث عن عقارات للإيجار في مصر"}
                        subtitle={`عدد النتائج: ${filterdByRent.length}`}
                    />
                    <div className="w-60">
                        <Sort />
                    </div>
                </div>
                <div>
                    <FilterByGroups parent={"properties-for-rent"} />
                </div>
                {filterdByRent.length !== 0 ? (
                    <ForRentClient
                        listings={filterdByRent as any}
                        currentUser={currentUser as any}
                    />
                ) : (
                    <EmptyStateAr showReset />
                )}
            </Container>
        </>
    );
};

export default ForRentPage;
