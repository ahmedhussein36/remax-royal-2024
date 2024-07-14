import Image from "next/image";
import React from "react";
import Heading from "../Heading";

interface MasterPlanProps {
    masterPlan: string;
}

const MasterPlanImage = ({ masterPlan }: MasterPlanProps) => {
    return (
        <div className=" w-[100%] h-[100%] relative">
            <Heading center title="مخطط المشروع"/>
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
