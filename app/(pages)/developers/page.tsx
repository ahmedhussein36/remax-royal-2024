import Container from "@/app/components/Container";
import EmptyStateAr from "@/app/components/EmptyStateAr";
import Heading from "@/app/components/Heading";
import DeveloperClient from "./DeveloperClient";
import getDevelopers, { IParams } from "@/app/actions/getDevelopers";
import { Suspense } from "react";
import DeveloperLoader from "@/app/components/DeveloperLoader";
import { AiFillHome } from "react-icons/ai";
import Breadcrumb from "@/app/components/Breadcrumb";
import { developersLength } from "@/app/actions/getAll";

export async function generateMetadata() {
    const title = `المطورين العقاريين في مصر `;
    const description = `اكتشف المطورين العقاريين في مصر. أكثر من:`;

    return {
        title,
        description,
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

const DevelopersPage = async ({ searchParams }: { searchParams: IParams }) => {
    const developers = await getDevelopers(searchParams);
    const currentPage = searchParams?.page || 1;
    const getAll = await developersLength();
    const perPage = searchParams?.perPage || 20;

    const parent = "developers";

    const items = [{ label: `المطورين في مصر`, href: `/${parent}` }];

    const home = {
        label: <AiFillHome />,
        href: "/",
    };
    return (
        <>
            <Container>
                <Breadcrumb home={home as any} items={items} />

                <div className="flex gap-4 justify-between items-center mt-6 mb-2 w-full">
                    <div>
                        {" "}
                        <Heading
                            title={"جميع المطورين العقاريين"}
                            subtitle={`نتائج ${getAll || 0}`}
                        />
                    </div>
                </div>
                <Suspense fallback={<DeveloperLoader />}>
                    {developers.length !== 0 ? (
                        // <DeveloperLoader />
                        <DeveloperClient
                            developers={developers as any}
                            currentPage={currentPage}
                            length={getAll}
                            perPage={perPage}
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
