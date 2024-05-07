import Container from "@/app/components/Container";
import EmptyStateAr from "@/app/components/EmptyStateAr";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "@/app/components/ClientOnly";
import Heading from "@/app/components/Heading";
import getCompounds, { IParams } from "@/app/actions/getCompounds";
import Search from "./Search";
import CompoundClient from "./CompoundClient";
import { Suspense } from "react";
import CompoundLoader from "@/app/components/compounds/CompoundLoader";

interface DevelopersPageProps {
    searchParams: IParams;
}

const CompoundsPage = async ({ searchParams }: DevelopersPageProps) => {
    const compounds = await getCompounds(searchParams);
    const currentUser = await getCurrentUser();

    return (
        <>
            <Container>
                <div className="flex gap-4 justify-between items-center mt-6 mb-2 w-full">
                    <div>
                        {" "}
                        <Heading
                            title={"كمبوندات في مصر "}
                            subtitle={`نتائج ${compounds.length || 0}`}
                        />
                    </div>
                </div>
                <Suspense fallback={<CompoundLoader />}>
                    <div className="flex justify-center items-center mt-4 w-full">
                        {compounds.length !== 0 ? (
                            <CompoundClient compounds={compounds} />
                        ) : (
                            <EmptyStateAr title="لايوجد نتائج متوفرة" />
                        )}
                    </div>
                </Suspense>
            </Container>
        </>
    );
};

export default CompoundsPage;
