"use client";
import { SafeUser } from "@/app/types";
import ClientOnly from "@/app/components/ClientOnly";

interface CompoundClientProps {
    data: any[];
    currentUser?: SafeUser | null;
    params?: string;
}

const CompoundClient: React.FC<CompoundClientProps> = ({ data }) => {
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
                    {data.map((compound: any, index) => (
                        <div key={index}>{compound.name}</div>
                    ))}
                </div>
            </div>
        </ClientOnly>
    );
};
export default CompoundClient;
