import Image from "next/image";
import React from "react";

interface MasterPlanProps {
    masterPlan: string;
}

const MasterPlanImage = ({ masterPlan }: MasterPlanProps) => {
    return (
        <div className=" w-[100%] h-[100%] relative">
            <Image
                src={masterPlan}
                alt="مخطط المشروع"
                fill
                priority={false}
                className=" object-contain"
            />
        </div>
    );
};

export default MasterPlanImage;
