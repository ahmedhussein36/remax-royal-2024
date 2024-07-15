/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoClose } from "react-icons/io5";

interface ImageGalleryProps {
    images: string[] | any[];
    onClose: () => void;
}

const ImagesGallery: React.FC<ImageGalleryProps> = ({ images, onClose }) => {
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
        <div
            className="flex overflow-hidden justify-center items-center inset-0  
                        top-0 left-0 z-[999] w-[100vw] h-[100vh] bg-gray-900/90 
                        fixed overflow-x-hidden overflow-y-hidden transition-all duration-300
                        "
        >
            <div className=" absolute top-6 right-8 z-10">
                <button onClick={onClose} title="close">
                    <IoClose size={28} color={"white"} />
                </button>
            </div>
            <div className="relative h-full w-full py-6 flex flex-col justify-between mx-auto overflow-hidden rounded-lg shadow-lg">
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

                <div className=" py-2 flex justify-center items-center gap-2 overflow-hidden">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-20 h-20 rounded transition-all hover:border-2 hover:border-white duration-200 overflow-hidden ${
                                index === currentIndex
                                    ? "border-2 border-rose-500"
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
        </div>
    );
};

export default ImagesGallery;
