import Container from "@/app/components/Container";
import EmptyStateAr from "@/app/components/EmptyStateAr";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "@/app/components/ClientOnly";
import Heading from "@/app/components/Heading";
import CompoundClient from "./CompoundClient";
import Search from "./Search";
import getCopmounds, { IParams } from "@/app/actions/getCopmounds";

interface CompoundsPageProps {
    searchParams: IParams;
}

const CompoundsPage = async ({ searchParams }: CompoundsPageProps) => {
    const compounds = await getCopmounds(searchParams);
    const currentUser = await getCurrentUser();

    return (
        <ClientOnly>
            <Container>
                <div className="flex gap-4 justify-between items-center mt-5 mb-2 w-full">
                    <div>
                        <Heading
                            title={" كمبوندات"}
                            subtitle={`نتائج ${compounds.length || 0}`}
                        />
                    </div>
                    <div className=" flex justify-center items-center w-1/3">
                        <div className="flex justify-center items-center w-full">
                            <Search placeholder={"ابحث عن الكمبوند ..."} />
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center mt-4 w-full">
                    {compounds.length !== 0 ? (
                        <CompoundClient
                            data={compounds}
                            currentUser={currentUser}
                        />
                    ) : (
                        <EmptyStateAr title="لايوجد كمبوندات متوفرة" subtitle="يرجى العوده في لاحقا" />
                    )}
                </div>
            </Container>
        </ClientOnly>
    );
};

export default CompoundsPage;
