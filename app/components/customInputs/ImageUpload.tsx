"use client";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";
import { TbPhotoPlus } from "react-icons/tb";

declare global {
    var cloudinary: any;
}

const uploadPreset = "k5acnt7x";

interface ImageUploadProps {
    onChange: (value: string) => void;
    value: string;
    allImages?: string[];
}

const ImageUpload: React.FC<ImageUploadProps> = ({
    onChange,
    value,
    allImages,
}) => {
    const handleUpload = useCallback(
        (result: any) => {
            onChange(result.info.secure_url);
        },
        [onChange]
    );

    return (
        <CldUploadWidget
            onUpload={handleUpload}
            uploadPreset={uploadPreset}
            options={{
                maxFiles: 8,
                multiple: true,
            }}
        >
            {({ open }) => {
                return (
                    <div className=" relative flex flex-col gap-3 ">
                        <div
                            onClick={() => open?.()}
                            className="
                                    relative
                                    cursor-pointer
                                    hover:opacity-70
                                    transition
                                    border-dashed rounded-lg
                                    border-2 
                                    p-6
                                    border-neutral-300
                                    flex
                                    flex-col
                                    justify-between
                                    items-center
                                    gap-4
                                    text-neutral-600
                                "
                        >
                            {/* <TbPhotoPlus size={40} color= "red"/> */}
                            <Image
                                src={"/assets/icons/gallery.png"}
                                width={36}
                                height={36}
                                alt="upload"
                            />
                            <div className="font-semibold text-sm">
                                {"أنقر لرفع الصور"}
                            </div>
                            <div className="flex justify-center gap-2 items-center flex-wrap">
                                {allImages?.length !== 0 &&
                                    allImages?.map((image) => (
                                        <div
                                            key={image}
                                            className="w-20 h-20 relative"
                                        >
                                            <Image
                                                sizes="100px"
                                                fill
                                                style={{ objectFit: "contain" }}
                                                src={image}
                                                alt="House"
                                            />
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                );
            }}
        </CldUploadWidget>
    );
};

export default ImageUpload;
