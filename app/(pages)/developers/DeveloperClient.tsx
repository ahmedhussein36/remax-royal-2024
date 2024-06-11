"use client";
import {
    SafeCompound,
    SafeDeveloper,
    SafeProperty,
    SafeUser,
} from "@/app/types";
import Card from "@/app/components/Card";
import Search from "./Search";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Pagination from "@/app/components/Pagination";

interface DeveloperClientProps {
    currentPage: number;
    length: number;
    perPage: number;
    developers: SafeDeveloper[] & {
        compounds: SafeCompound;
        property: SafeProperty;
    };
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
    const [disabled, setDisabled] = useState(false);

    const router = useRouter();

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
                        compoundsCount={developer?.compounds?.length}
                        propertiesCount={0}
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
