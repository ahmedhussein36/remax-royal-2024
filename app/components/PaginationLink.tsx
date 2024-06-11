import Link from "next/link";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface PageProps {
    currentPage: number;
    totalPages: number;
    parent: string;
}

const PaginationLink = ({ currentPage, totalPages, parent }: PageProps) => {
    return (
        <div className="my-16 w-full flex justify-center items-center gap-3 ">
            <Link
                className="w-12 h-12 p-2 text-center  border border-purple-300  text-2xl rounded-lg text-purple-800"
                href={
                    currentPage > 1
                        ? `/properties-for-sale?page=${+currentPage - 1}`
                        : "/properties-for-sale"
                }
                title="السابق"
            >
                <IoIosArrowForward />
            </Link>

            <div className=" flex justify-center items-center gap-3">
                {Array.from({ length: totalPages }, (_, index) => (
                    <Link
                        href={`/properties-for-sale?page=${index + 1}`}
                        key={index + 1}
                        className={`rounded-lg p-2 h-12 w-12 text-lg text-center
                                        font-bold hover:bg-purple-200
                                ${
                                    index === +currentPage - 1
                                        ? "bg-purple-800 text-white"
                                        : " text-purple-800 bg-purple-50"
                                } transition-all duration-500 ease-in-out`}
                    >
                        {index + 1}
                    </Link>
                ))}
            </div>
            <Link
                className="w-12 h-12 p-2 text-center  border border-purple-300  text-2xl rounded-lg text-purple-800"
                href={`/properties-for-sale?page=${+currentPage + 1}`}
            >
                <IoIosArrowBack />
            </Link>
        </div>
    );
};

export default PaginationLink;
