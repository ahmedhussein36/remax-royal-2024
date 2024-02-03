import Container from "@/app/components/Container";
import EmptyStateAr from "@/app/components/EmptyStateAr";
import getProperties, { IParams } from "@/app/actions/getProperties";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "@/app/components/ClientOnly";
import Heading from "@/app/components/Heading";
import Sort from "@/app/components/Sort";
import ForRentClient from "./ForRentClient";
import FilterByGroups from "@/app/components/ِFilterByGroups";

interface ForRentPageProps {
    searchParams: IParams;
}

const ForRentPage = async ({ searchParams }: ForRentPageProps) => {
    const listings = await getProperties(searchParams);
    const currentUser = await getCurrentUser();

    const filterdByRent = listings.filter(
        (listing: any) => listing.category === "للإيجار"
    );

    // if (listings.length === 0) {
    //     return (
    //         <ClientOnly>
    //             <EmptyStateAr showReset />
    //         </ClientOnly>
    //     );
    // }

    return (
        <ClientOnly>
            <Container>
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
                        listings={filterdByRent}
                        currentUser={currentUser}
                    />
                ) : (
                    <EmptyStateAr showReset />
                )}
            </Container>
        </ClientOnly>
    );
};

export default ForRentPage;
