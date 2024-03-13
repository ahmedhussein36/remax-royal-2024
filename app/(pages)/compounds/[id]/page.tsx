import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import Client from "./Client";
import getCompoundById from "@/app/actions/getCompoundById";
import getDeveloperById from "@/app/actions/getDeveloperById";

interface IParams {
    id: string;
}

const DeveloperPage = async ({ params }: { params: IParams }) => {
    const compound = await getCompoundById(params);
    if (!compound) {
        return (
            <ClientOnly>
                <EmptyState />
            </ClientOnly>
        );
    }

    return (
        <ClientOnly>
            <Client compound={compound as any}  />
        </ClientOnly>
    );
};

export default DeveloperPage;
