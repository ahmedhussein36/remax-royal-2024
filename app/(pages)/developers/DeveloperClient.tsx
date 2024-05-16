"use client";
import {
    SafeCompound,
    SafeDeveloper,
    SafeProperty,
    SafeUser,
} from "@/app/types";
import ClientOnly from "@/app/components/ClientOnly";
import Card from "@/app/components/Card";
import getCompounds from "@/app/actions/getCompounds";
import { useEffect } from "react";
import Search from "./Search";

interface DeveloperClientProps {
    developers: SafeDeveloper[] & {
        compounds: SafeCompound;
        property: SafeProperty;
    };
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
        <>
            <div className=" flex justify-center items-center w-full md:w-1/2 m-4">
                <div className="flex justify-center items-center w-full">
                    <Search placeholder={params} />
                </div>
            </div>
            <div
                className="
                    w-full
                            pt-2
                            
                            grid 
                            grid-cols-1
                            sm:grid-cols-2
                            md:grid-cols-3
                            lg:grid-cols-4 
                            gap-8
                            relative
                        "
            >
                {developers.map((developer: SafeDeveloper | any) => (
                    <Card
                        key={developer.id}
                        logo={developer?.image}
                        title={developer.title}
                        compoundsCount={developer?.compounds?.length}
                        propertiesCount={0}
                        slug={developer.slug}
                        parent={parent}
                    />
                ))}
            </div>
        </>
    );
};
export default DeveloperClient;
