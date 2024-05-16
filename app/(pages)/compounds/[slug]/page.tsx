import EmptyState from "@/app/components/EmptyState";
import Client from "./Client";
import getCompoundById from "@/app/actions/getCompoundById";

interface IParams {
    slug: string;
}
const DeveloperPage = async ({ params }: { params: IParams }) => {
    const compound = await getCompoundById(params);
    if (!compound) {
        return (
            <>
                <EmptyState />
            </>
        );
    }

    return (
        <>
            <Client compound={compound as any} />
        </>
    );
};

export default DeveloperPage;
