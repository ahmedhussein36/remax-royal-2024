"use client";
import React, { useState, useCallback } from "react";
import SearchInput, { SearchValue } from "./inputs/SearchInput";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

const Search = ({ placeholder }: { placeholder?: string }) => {
    const [title, setTitle] = useState("");

    const router = useRouter();
    const params = useSearchParams();

    const onSubmit = useCallback(async () => {
        let currentQuery = {};

        if (params) {
            currentQuery = qs.parse(params.toString());
        }

        const updatedQuery: any = {
            ...currentQuery,
            title: title,
        };

        const url = qs.stringifyUrl(
            {
                url: "/developers",
                query: updatedQuery,
            },
            { skipNull: true }
        );

        router.push(url);
    }, [title, params, router]);

    return (
        <div className=" w-full flex flex-col gap-3 justify-center items-center">
            <div className="flex justify-center items-center mt-8 w-full relative">
                <SearchInput
                    id="name"
                    label="البحث عن مطورين"
                    Placeholder={"ابحث عن مطورين ..."}
                    value={title}
                    onChange={(e: SearchValue) => setTitle(e.target.value)}
                    className="w-full md:w-1/2 lg:w-[400px] px-4 rounded-full border-2"
                    button
                    onclick={onSubmit}
                />
            </div>
            <div className="h-[15px]">
                {title !== "" && (
                    <button
                        onClick={() => {
                            router.push("/developers");
                            setTitle("");
                        }}
                        className=" text-red-500 underline"
                    >
                        إزالة البحث
                    </button>
                )}
            </div>
        </div>
    );
};

export default Search;
