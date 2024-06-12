"use client";

import Image from "next/image";
import { useState } from "react";
import { BiCamera, BiSolidCamera } from "react-icons/bi";

interface GallaryProps {
    images: string[];
    mainImage: string;
}

const placeholder = "/assets/images/placeholder2.png";

const Gallary = ({ images, mainImage }: GallaryProps) => {
    const [hoveredIndex, setHoveredIndex] = useState(-1);

    const AllImages: string[] = [mainImage, ...images];

    return (
        <div
            id="gallary"
            className="flex w-full h-[500px] items-center justify-center mb-4 rounded-xl overflow-hidden"
        >
            <div className="bg-slate-100 flex w-full justify-end items-center gap-3">
                {AllImages.length &&
                    AllImages.map((image, i) => (
                        <div
                            key={i}
                            className={`
                                ${
                                    i === 0 && hoveredIndex === -1
                                        ? "w-full grayscale-0"
                                        : " w-[15%] grayscale-[80%]"
                                }
                                 bg-slate-100 hover:w-full duration-500 ease-in-out grayscale-[80%] hover:grayscale-0
                            relative overflow-hidden h-[500px]`}
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(-1)}
                        >
                            <Image
                                fill
                                priority={true}
                                src={image}
                                alt="property image"
                                className="w-full h-full object-cover"
                            />{" "}
                        </div>
                    ))}
                <div className=" relative w-[200px] h-[500px] bg-gray-500 text-white flex justify-center items-center gap-2 flex-col">
                    <div>
                        <BiCamera size={36} />
                    </div>
                    <div>عرض {AllImages.length} صور</div>
                    <Image
                        fill
                        priority={true}
                        src={AllImages[0]}
                        alt="property image"
                        className="w-full h-full object-cover opacity-10"
                    />{" "}
                </div>
            </div>
        </div>
    );
};

export default Gallary;
