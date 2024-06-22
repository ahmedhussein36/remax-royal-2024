import React from "react";

interface TypeProps {
    type: string;
}

const EntityType = ({ type }: TypeProps) => {
    return (
        <div className="text-black bg-slate-200 py-1 px-6 rounded flex justify-center items-center ">
            {type}
        </div>
    );
};

export default EntityType;
