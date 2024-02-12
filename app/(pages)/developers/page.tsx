import Container from "@/app/components/Container";
import EmptyStateAr from "@/app/components/EmptyStateAr";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "@/app/components/ClientOnly";
import Heading from "@/app/components/Heading";
import DeveloperClient from "./DeveloperClient";
import getDevelopers, { IParams } from "@/app/actions/getDevelopers";
import Search from "@/app/components/Search";

interface DevelopersPageProps {
    searchParams: IParams;
}

const DevelopersPage = async ({ searchParams }: DevelopersPageProps) => {
    const developers = await getDevelopers(searchParams);
    const currentUser = await getCurrentUser();

    return (
        <ClientOnly>
            <Container>
                <div className="flex gap-4 justify-between items-center mt-6 mb-2 w-full">
                    <div>
                        {" "}
                        <Heading
                            title={"جميع المطورين"}
                            subtitle={`نتائج ${developers.length || 0}`}
                        />
                    </div>

                    <div className=" flex justify-center items-center w-1/3">
                        <div className="flex justify-center items-center w-full">
                            <Search placeholder={searchParams.name} />
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center mt-4 w-full">
                    {developers.length !== 0 ? (
                        <DeveloperClient
                            developers={developers}
                            currentUser={currentUser}
                        />
                    ) : (
                        <EmptyStateAr />
                    )}
                </div>
            </Container>
        </ClientOnly>
    );
};

export default DevelopersPage;
