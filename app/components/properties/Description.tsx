import React, { FC } from "react";
import parse from "html-react-parser";

interface DescriptionProps {
    content: string;
}
const Description: FC<DescriptionProps> = ({ content }) => {
    return (
        <div aria-label="description">
            <h2 className="font-bold text-xl">وصف العقار</h2>
            <div className=" text-lg text-slate-600 space-y-3 leading-[2]">
                {parse(content || "")}
            </div>
        </div>
    );
};

export default Description;
