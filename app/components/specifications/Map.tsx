import React from "react";
import { GrMapLocation } from "react-icons/gr";

interface Props {
    onClick?: () => void;
}

const Map = ({ onClick }: Props) => {
    return (
        <>
            <button
                onClick={onClick}
                className=" group flex flex-col gap-2 justify-center items-center p-3 rounded-md border border-zinc-300 hover:border-zinc-600 transition-all"
            >
                <GrMapLocation
                    size={40}
                    color="#757575"
                    className=" icon-stroke"
                />
                <span>عرض على الخريطة</span>
            </button>
        </>
    );
};

export default Map;
