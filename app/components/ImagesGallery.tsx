/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { BiLeftArrow } from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface ImageGalleryProps {
    images: string[];
}

const ImagesGallery: React.FC<ImageGalleryProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="relative w-full flex flex-col mx-auto overflow-hidden rounded-lg shadow-lg bg-gray-800/0">
            <div className=" flex justify-start items-center gap-2 w-full h-full">
                <div className=" w-1/6 h-full flex justify-center items-center">
                    <button
                        onClick={handlePrev}
                        className="flex justify-center items-center bg-white/30 bg-opacity-50
                                text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
                    >
                        <IoIosArrowForward size={28} />
                    </button>
                </div>

                <div className="relative w-full lg:w-[60%] max-h-[550px] mx-auto flex justify-center items-center  overflow-hidden">
                    <img
                        src={images[currentIndex]}
                        alt={`Image ${currentIndex + 1}`}
                        className=" object-cover transition-transform duration-500 ease-in-out transform"
                    />
                </div>

                <div className="w-1/6 flex justify-center items-center ">
                    <button
                        onClick={handleNext}
                        className="flex justify-center items-center bg-white/30
                                    bg-opacity-50 text-white  p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
                    >
                        <IoIosArrowBack size={28} />
                    </button>
                </div>
            </div>

            <div className=" bg-opacity-75 py-2 flex justify-center items-center space-x-2 overflow-hidden">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-24 h-24 rounded transition-all duration-200 overflow-hidden ${
                            index === currentIndex
                                ? "border-2 border-white"
                                : "border-2 border-transparent"
                        } focus:outline-none`}
                    >
                        <img
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ImagesGallery;
