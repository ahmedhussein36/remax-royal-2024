import React from "react";
import ContentLoader from "react-content-loader";

const Loader = (props: any) => (
    <div className=" border border-gray-200  rounded-lg px-4 mb-4">
        <ContentLoader
            speed={1}
            width={250}
            height={200}
            viewBox="0 0 350 450"
            backgroundColor="#faf5f5"
            foregroundColor="#e8e9f2"
            {...props}
        >
            <rect x="0" y="280" rx="10" ry="10" width="100%" height="30" />
            <rect x="0" y="325" rx="10" ry="10" width="100%" height="20" />
            <circle cx="160" cy="150" r="95" />
        </ContentLoader>
    </div>
);

const DeveloperLoader = () => {
    return (
        <div className=" flex justify-center  md:justify-between items-center flex-wrap gap-3">
            <Loader />
            <Loader />
            <Loader />
            <Loader />
            <Loader />
            <Loader />
            <Loader />
            <Loader />
        </div>
    );
};

export default DeveloperLoader;
