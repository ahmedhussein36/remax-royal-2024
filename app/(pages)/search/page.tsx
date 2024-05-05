import Container from "@/app/components/Container";
import EmptyStateAr from "@/app/components/EmptyStateAr";
import getProperties, { IParams } from "@/app/actions/getProperties";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "@/app/components/ClientOnly";
import Heading from "@/app/components/Heading";
import Sort from "@/app/components/Sort";
import SearchClient from "./SearchClient";

interface SearchPageProps {
    searchParams: IParams;
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
    const listings = await getProperties(searchParams);
    const currentUser = await getCurrentUser();

    if (listings.length === 0) {
        return (
            <ClientOnly>
                <EmptyStateAr showReset />
            </ClientOnly>
        );
    }

    return (
        
            <Container>
                <div className="flex gap-4 justify-between items-center my-8 w-full">
                    <Heading
                        title={`نتائج البحث عن العقارت في  ${
                            searchParams.aria || searchParams.city || "مصر"
                        } `}
                        subtitle={`عدد النتائج: ${listings.length}`}
                    />
                    <div className="w-60">
                        <Sort />
                    </div>
                </div>
               <ClientOnly> <SearchClient listings={listings} currentUser={currentUser} />  </ClientOnly>
            </Container>
      
    );
};

export default SearchPage;
