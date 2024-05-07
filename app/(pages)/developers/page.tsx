import Container from "@/app/components/Container";
import EmptyStateAr from "@/app/components/EmptyStateAr";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "@/app/components/ClientOnly";
import Heading from "@/app/components/Heading";
import DeveloperClient from "./DeveloperClient";
import getDevelopers, { IParams } from "@/app/actions/getDevelopers";
import Search from "@/app/components/Search";
import { Suspense } from "react";
import CompoundLoader from "@/app/components/compounds/CompoundLoader";
import DeveloperLoader from "@/app/components/DeveloperLoader";

interface DevelopersPageProps {
    searchParams: IParams;
}

const DevelopersPage = async ({ searchParams }: DevelopersPageProps) => {
    const developers = await getDevelopers(searchParams);
    const currentUser = await getCurrentUser();

    return (
        <>
            <Container>
                <div className="flex gap-4 justify-between items-center mt-6 mb-2 w-full">
                    <div>
                        {" "}
                        <Heading
                            title={"جميع المطورين العقاريين"}
                            subtitle={`نتائج ${developers.length || 0}`}
                        />
                    </div>
                </div>
                <Suspense fallback={<DeveloperLoader />}>
                    {developers.length !== 0 ? (
                        // <DeveloperLoader />
                        <DeveloperClient
                            developers={developers as any}
                            currentUser={currentUser}
                        />
                    ) : (
                        <EmptyStateAr />
                    )}{" "}
                </Suspense>
            </Container>
        </>
    );
};

export default DevelopersPage;
