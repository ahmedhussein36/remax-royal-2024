import Container from "@/app/components/Container";
import EmptyStateAr from "@/app/components/EmptyStateAr";
import getProperties, { IParams } from "@/app/actions/getProperties";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "@/app/components/ClientOnly";
import Heading from "@/app/components/Heading";
import Sort from "@/app/components/Sort";
import SearchClient from "./SearchClient";
import FilterByGroups from "@/app/components/ِFilterByGroups";

interface SearchPageProps {
    searchParams: IParams;
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
    const listings = await getProperties(searchParams);
    const currentUser = await getCurrentUser();

    return (
        <Container>
            <div className="flex gap-4 justify-between items-center w-full">
                <Heading
                    title={`نتائج البحث عن العقارت في  ${
                        searchParams.city || "مصر"
                    } `}
                    subtitle={`عدد النتائج: ${listings.length}`}
                />
                <div className="w-60">
                    <Sort />
                </div>
            </div>
            <FilterByGroups parent="search" />
            <>
                {listings.length ? (
                    <SearchClient
                        listings={listings as any}
                        currentUser={currentUser as any}
                    />
                ) : (
                    <EmptyStateAr />
                )}
            </>
        </Container>
    );
};

export default SearchPage;
