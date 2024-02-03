"use client";

import React from "react";
import Heading from "../Heading";
import { useRouter } from "next/navigation";
import { topSearchingAreas } from "../data/data";
import Image from "next/image";

const TopAreas: React.FC = () => {
    const router = useRouter();

    return (
        <div>
            <Heading
                title="المناطق الأكثر بحثا"
                subtitle="تصفح المناطق الأكثر طلباً في مصر "
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-10 items-center">
                {topSearchingAreas.map((area) => (
                    <div
                        className=" flex 
                                justify-start items-center gap-3 overflow-hidden 
                                cursor-pointer border-neutral-300 border
                                rounded-xl  hover:shadow-md transition-all duration-300 
                                "
                        onClick={() => router.push(area.slug)}
                        key={area.id}
                    >
                        <div className=" relative w-32 h-20 aspect-auto">
                            <Image
                                src={area.image}
                                fill
                                sizes="100%"
                                alt={area.label}
                            />
                        </div>
                        <span className=" text-slate-700">{area.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopAreas;
