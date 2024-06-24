import React, { FC } from "react";
import { PiImagesLight } from "react-icons/pi";

interface Props {
    onClick?: () => void;
}
const Photos: FC<Props> = ({ onClick }) => {
    return (
        <>
            <button
                onClick={onClick}
                className=" group flex flex-col gap-2 justify-center items-center 
                            p-3 rounded-md border border-zinc-300 hover:border-zinc-600 transition-all"
            >
                <PiImagesLight
                    strokeWidth={1}
                    strokeLinecap="round"
                    size={40}
                    color="#757575"
                    className="icon-stroke"
                />
                <span>عرض الصور</span>
            </button>
        </>
    );
};

export default Photos;
