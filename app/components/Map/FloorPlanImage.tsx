import Image from "next/image";
import React from "react";
import Heading from "../Heading";

interface FloorPlanProps {
    floorPlan: string;
}

const FloorPlanImage = ({ floorPlan }: FloorPlanProps) => {
    return (
        <div className=" w-[100%] h-[100%] relative">
            <Heading title="مخطط الطابق"/>
            <Image
                src={floorPlan}
                alt="مخطط الادوار"
                fill
                priority={false}
                className=" object-contain"
            />
        </div>
    );
};

export default FloorPlanImage;
