import React from "react";
import Heading from "../components/Heading";
import Container from "../components/Container";

const LatestPost = (latest: any) => {
    return (
        <section className=" my-4 w-full">
            <div className="w-full grid grid-cols-3 gap-3">
                <div className="w-full col-span-2">
                    <div className=" bg-slate-200 h-[400px]"></div>
                </div>
                <div className="w-full col-span-1 flex justify-center flex-col items-start gap-3">
                    <div className="w-full bg-slate-200 h-1/2"></div>
                    <div className="w-full bg-slate-200 h-1/2"></div>
                </div>
            </div>
        </section>
    );
};

const PostsGrid = (latest: any) => {
    return (
        <section className=" my-4 w-full">
            <div className="w-full grid grid-cols-3 gap-3">
                <div className="w-full col-span-1">
                    <div className=" bg-slate-200 h-[320px]"></div>
                </div>
                <div className="w-full col-span-1">
                    <div className=" bg-slate-200 h-[320px]"></div>
                </div>
                <div className="w-full col-span-1">
                    <div className=" bg-slate-200 h-[320px]"></div>
                </div>
                <div className="w-full col-span-1">
                    <div className=" bg-slate-200 h-[320px]"></div>
                </div>
                <div className="w-full col-span-1">
                    <div className=" bg-slate-200 h-[320px]"></div>
                </div>
                <div className="w-full col-span-1">
                    <div className=" bg-slate-200 h-[320px]"></div>
                </div>
            </div>
        </section>
    );
};

const PostsList = (latest: any) => {
    return (
        <section className=" my-4 w-full">
            <div className="w-full grid grid-cols-1 gap-3">
                <div className="w-full col-span-1">
                    <div className=" bg-slate-200 h-[320px]"></div>
                </div>
                <div className="w-full col-span-1">
                    <div className=" bg-slate-200 h-[320px]"></div>
                </div>
                <div className="w-full col-span-1">
                    <div className=" bg-slate-200 h-[320px]"></div>
                </div>
                <div className="w-full col-span-1">
                    <div className=" bg-slate-200 h-[320px]"></div>
                </div>
                <div className="w-full col-span-1">
                    <div className=" bg-slate-200 h-[320px]"></div>
                </div>
                <div className="w-full col-span-1">
                    <div className=" bg-slate-200 h-[320px]"></div>
                </div>
            </div>
        </section>
    );
};
const BlogClient = (posts?: any) => {
    return (
        <div>
            <LatestPost />
        </div>
    );
};

const Blog = () => {
    return (
        <div className=" grid gap-2 max-w-[1080px] m-auto">
            <div className=" my-4">
                <Heading title="المدونة" />
            </div>
            <LatestPost />
            <PostsGrid />
            <PostsList />
        </div>
    );
};

export default Blog;
