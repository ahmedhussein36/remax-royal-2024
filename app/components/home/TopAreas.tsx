"use client";

import React from "react";
import Heading from "../Heading";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { SafeArea } from "@/app/types";

const TopAreas = ({ areas }: { areas: SafeArea[] }) => {
    const router = useRouter();

    return (
        <div>
            <Heading
                title="المناطق الأكثر بحثا"
                subtitle="تصفح المناطق الأكثر طلباً في مصر "
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-10 items-center">
                {areas.slice(0, 8).map((area) => (
                    <div
                        className=" flex flex-col
                                justify-start items-center gap-3 overflow-hidden 
                                cursor-pointer border-neutral-300 border
                                rounded-xl  hover:shadow-md transition-all duration-300 
                                "
                        onClick={() => router.push(`area/${area.slug}`)}
                        key={area.id}
                    >
                        <div className="flex justify-center items-center border 0relative w-[120px] h-[120px] rounded-full overflow-hidden">
                            <Image
                                src={area?.image || ""}
                                width={300} height={200}
                                sizes=""
                                alt={area.title}
                            />
                        </div>
                        <span className=" text-slate-700">{area.title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopAreas;
