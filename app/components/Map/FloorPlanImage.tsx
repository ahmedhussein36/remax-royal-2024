import Image from "next/image";
import React from "react";

interface FloorPlanProps {
    floorPlan: string;
}

const FloorPlanImage = ({ floorPlan }: FloorPlanProps) => {
    return (
        <div className=" w-[100%] h-[100%] relative">
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
