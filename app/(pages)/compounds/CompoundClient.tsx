import { SafeCompound, SafeUser } from "@/app/types";
import ClientOnly from "@/app/components/ClientOnly";
import CompoundCard from "@/app/components/compounds/CompoundCard";

interface CompoundClienttProps {
    compounds: SafeCompound[] | any[];
    currentUser?: SafeUser | null;
    params?: string;
}

const CompoundClient: React.FC<CompoundClienttProps> = ({
    compounds,
    params,
    currentUser,
}) => {
    const parent = "compounds";

    return (
        <ClientOnly>
            <div className="flex flex-col w-full justify-center items-center">
                <div
                    className="
                            pt-2
                            mt-8
                            grid 
                            grid-cols-1
                            sm:grid-cols-1
                            md:grid-cols-2
                            lg:grid-cols-3
                            gap-8
                            relative
                        "
                >
                    {compounds.map((compound: any, index) => (
                        <CompoundCard
                            key={compound.id}
                            slug={compound.id}
                            id={compound.id}
                            title={compound.title}
                            image={compound.mainImage}
                            typesCount={compound.isLaunch}
                            location={compound?.area?.title}
                            developer={compound.developer.title}
                            parent={parent}
                        />
                    ))}
                </div>
            </div>
        </ClientOnly>
    );
};
export default CompoundClient;
