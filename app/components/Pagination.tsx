import { useRouter } from "next/navigation";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface PageProps {
    currentPage: number;
    totalPages: number;
    parent?: string;
}

const Pagination = ({ currentPage, totalPages, parent }: PageProps) => {
    const router = useRouter();

    return (
        <div className="my-16 w-full flex justify-center items-center gap-3 ">
            <button
                className="disabled:opacity-40 w-12 h-12 p-2 text-center hover:bg-purple-50 duration-500 ease-in-out
         border border-purple-300  text-2xl rounded-lg text-purple-800"
                onClick={() =>
                    router.replace(`/${parent}?page=${+currentPage - 1}`)
                }
                title="السابق"
                disabled={currentPage <= 1}
            >
                <IoIosArrowForward />
            </button>

            <div className=" flex justify-center items-center gap-3">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        onClick={() =>
                            router.replace(`/${parent}?page=${index + 1}`)
                        }
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
                    </button>
                ))}
            </div>
            <button
                onClick={() =>
                    router.replace(`/${parent}?page=${+currentPage + 1}`)
                }
                className="disabled:opacity-40 w-12 h-12 p-2 text-center hover:bg-purple-50 duration-500 ease-in-out 
        border border-purple-300  text-2xl rounded-lg text-purple-800"
                title="التالي"
                disabled={currentPage >= totalPages}
            >
                <IoIosArrowBack />
            </button>
        </div>
    );
};

export default Pagination;
