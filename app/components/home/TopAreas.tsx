"use client";

import React, { useState } from "react";
import Heading from "../Heading";
import Image from "next/image";
import { SafeArea } from "@/app/types";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const TopAreas = ({ areas }: { areas: SafeArea[] }) => {
    const [frame, setFrame] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalItems = areas.length;

    const handleNext = () => {
        if (currentIndex < totalItems) {
            setCurrentIndex(currentIndex + 1);
            setFrame(frame + 255);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setFrame(frame - 255);
        }
    };
    return (
        <div className=" relative">
            <div className="w-full overflow-hidden relative">
                <Heading
                    title="المناطق الأكثر بحثا"
                    subtitle="تصفح المناطق الأكثر بحثا في مصر "
                />

                <div
                    className={`flex justify-between items-center gap-4 my-10 w-fit
                    transition-all duration-500 translate-x-0
                    `}
                    style={{ transform: `translateX(${frame}px)` }}
                >
                    {areas.map((area, index) => (
                        <Link
                            href={`area/${area.slug}`}
                            className=" group overlay flex flex-col relative h-[180px]
                                justify-center items-center overflow-hidden
                                cursor-pointer border-neutral-300 border w-[240px]
                                rounded-xl hover:shadow-md transition-all duration-300 ease-in-out
                                "
                            key={area.id}
                        >
                            <Image
                                src={area?.image || ""}
                                fill
                                alt={area.title}
                                className=" object-cover group-hover:scale-105 ease-in-out duration-500"
                            />
                            <span className=" absolute top-8 right-4 font-bold text-white z-10">
                                {area.title}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
            <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="flex justify-center items-center shadow-lg absolute top-[50%] -right-6 bg-slate-100 hover:bg-white disabled:text-gray-300 disabled:hover:bg-slate-100 text-black font-bold p-3 rounded-full"
            >
                <IoIosArrowForward size={20} />
            </button>
            <button
                className="flex justify-center items-center shadow-lg absolute top-[50%] -left-6 bg-slate-100 hover:bg-white disabled:text-gray-300 disabled:hover:bg-slate-100 text-black font-bold p-3 rounded-full"
                onClick={handleNext}
                disabled={currentIndex === totalItems - 5}
            >
                <IoIosArrowBack size={20} />
            </button>
        </div>
    );
};

export default TopAreas;
