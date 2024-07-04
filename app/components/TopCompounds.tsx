import { FC } from "react";
import { SafeCompound } from "../types";
import Heading from "./Heading";
import Image from "next/image";
import Link from "next/link";

interface TopCompoundsProps {
    compounds: SafeCompound[] & {
        area: {
            id: string;
            title: string;
            slug: string;
        };
        developer: {
            id: string;
            title: string;
            slug: string;
        };
    };
}

const TopCompounds: FC<TopCompoundsProps> = ({ compounds }) => {
    return (
        <div className="w-full overflow-hidden my-8">
            <Heading
                title="الكمبوندات الأكثر بحثا"
                subtitle="تصفح الكمبوندات الأكثر طلباً في مصر "
            />
            <div className="flex w-full justify-start items-center ">
                <div
                    className="
                            w-full
                            pt-2
                            mt-2
                            grid
                            grid-cols-2
                            sm:grid-cols-2
                            md:grid-cols-3
                            lg:grid-cols-4
                            gap-4
                            relative
                        "
                >
                    {compounds.map((compound, index) => (
                        <Link
                            href={`/compounds/${compound.slug}`}
                            className={`
                                ${
                                    index === 0 || index === 5
                                        ? " col-span-2"
                                        : " col-span-1"
                                }
                                relative
                                overlay
                                group mx-2
                                duration-500 
                                ease-in-out 
                                overflow-hidden 
                                h-[250px] w-[100%]
                                flex 
                                justify-center 
                                items-center 
                                rounded
                                                `}
                            key={compound.id}
                        >
                            <div className="w-full absolute text-right bottom-3 z-10 right-6 text-white font-bold">
                                <p className="">{compound.name}</p>
                            </div>
                            <Image
                                src={compound.mainImage || ""}
                                alt={compound.name || "compound-image"}
                                fill
                                className=" object-cover group-hover:scale-105 transition-all"
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopCompounds;
