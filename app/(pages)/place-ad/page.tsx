import Login from "@/app/components/add-new-property/Login";
import getCurrentUser from "@/app//actions/getCurrentUser";
import AddNewProperty from "@/app/components/add-new-property/AddNewProperty";

const Page = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser) return <Login />;

    return (
        <>
            <AddNewProperty />
        </>
    );
};
export default Page;
