import { SafeDeveloper, SafeUser } from "@/app/types";
import ClientOnly from "@/app/components/ClientOnly";
import Card from "@/app/components/Card";

interface DeveloperClientProps {
    developers: SafeDeveloper[] | any;
    currentUser?: SafeUser | null;
    params?: string;
}

const DeveloperClient: React.FC<DeveloperClientProps> = ({
    developers,
    params,
    currentUser,
}) => {
    const parent = "developers";

    return (
        <ClientOnly>
            <div className="flex flex-col w-full justify-center items-center">
                <div
                    className="
                            pt-2
                            mt-8
                            grid 
                            grid-cols-1
                            sm:grid-cols-2
                            md:grid-cols-3
                            lg:grid-cols-4 
                            gap-8
                            relative
                        "
                >
                    {developers.map((developer: any) => (
                        <Card
                            key={developer.id}
                            logo={developer.image}
                            title={developer.name}
                            compoundsCount={developer.compounds}
                            propertiesCount={developer.properties}
                            minPrice={developer.min_price}
                            slug={developer.id}
                            parent={parent}
                        />
                    ))}
                </div>
            </div>
        </ClientOnly>
    );
};
export default DeveloperClient;
