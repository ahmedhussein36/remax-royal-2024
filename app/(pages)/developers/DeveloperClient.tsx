"use client";
import { SafeDeveloper } from "@/app/types";
import Card from "@/app/components/Card";
import Search from "./Search";
import { useEffect, useState } from "react";
import Pagination from "@/app/components/Pagination";

interface DeveloperClientProps {
    currentPage: number;
    length: number;
    perPage: number;
    developers: SafeDeveloper[];
    params?: string;
}

const DeveloperClient: React.FC<DeveloperClientProps> = ({
    developers,
    currentPage,
    length,
    perPage,
    params,
}) => {
    const [totalPages, setTotalPages] = useState(1);
    useEffect(() => {
        setTotalPages(Math.ceil(length / perPage));
    }, [perPage, length]);

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
                        compoundsCount={developer?.compound?.length}
                        propertiesCount={developer?.property?.length}
                        slug={developer.slug}
                        parent={parent}
                    />
                ))}
            </div>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                parent={parent}
            />
        </>
    );
};
export default DeveloperClient;
