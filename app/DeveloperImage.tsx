import Image from "next/image";
import React, { FC } from "react";

interface DeveloperImageProps {
    developer?: {
        title: string;
        image: string;
    };
    placeholder : string
}

const DeveloperImage: FC<DeveloperImageProps> = ({ developer , placeholder }) => {
    return (
        <div className=" absolute right-4 bottom-4 flex justify-start items-center gap-2 rounded-full">
            <div className=" overflow-hidden p-2 w-[40px] h-[40px] relative bg-white border rounded-full">
                <Image
                    src={developer?.image || placeholder}
                    alt={developer?.title || "المطور"}
                    fill
                    sizes="100%"
                    priority={false}
                    quality={75}
                    className=" object-cover"
                />
            </div>
        </div>
    );
};

export default DeveloperImage;
