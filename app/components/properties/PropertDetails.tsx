"use cient";

import { SafeProperty } from "@/app/types";
import parse from "html-react-parser";
import Link from "next/link";
import { useEffect, useState } from "react";

interface PropDetailsProps {
    data: SafeProperty;
}

const PropDetails: React.FC<PropDetailsProps> = ({ data }) => {
    const [createdAt, setCreatedAt] = useState("");

    useEffect(() => {
        const date = new Date(data.createdAt);

        // Format the date
        const formattedDate: string = date.toLocaleDateString("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });

        setCreatedAt(formattedDate);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="flex flex-col  rounded-lg pb-3 my-4">
            <h2 className="font-bold text-xl">تفاصيل العقار</h2>
            <div
                aria-label="property details"
                className="flex justify-start items-start w-full my-6"
            >
                <div className="flex flex-col w-1/2  items-start justify-center">
                    <div className="flex justify-start items-center gap-2 w-full border-b py-3">
                        <span className="w-1/3 text-sm"> نوع العقار</span>
                        <span className=" w-1/2 font-bold text-sm">
                            {data.propertyType} {data.size} <span>م</span>
                            <sup>2</sup>
                        </span>
                    </div>
                    <div className="flex justify-start items-center gap-2 w-full border-b py-3">
                        <span className="w-1/3 text-sm">نوع العرض</span>
                        <span className=" w-1/2 font-bold text-sm">
                            {data.category}
                        </span>
                    </div>
                    <div className="flex justify-start items-center gap-2 w-full border-b py-3">
                        <span className="w-1/3 text-sm ">كمبوند</span>
                        <Link
                            href={`/compounds/${data.compound.slug}`}
                            className=" w-1/2 font-bold text-sm text-blue-500 underline"
                        >
                            {data.compound.name &&
                                data.compound.name.replace(
                                    /[a-zA-Z-~!@#$%^&*()]/g,
                                    ""
                                )}
                        </Link>
                    </div>
                    <div className="flex justify-start items-center gap-2 w-full border-b py-3">
                        <span className="w-1/3 text-sm ">المطور</span>
                        <Link
                            href={`/developers/${data.developer.slug}`}
                            className=" w-1/2 font-bold text-sm text-blue-500 underline"
                        >
                            {data.developer.title.replace(
                                /[a-zA-Z-~!@#$%^&*()]/g,
                                ""
                            )}
                        </Link>
                    </div>
                    <div className="flex justify-start items-center gap-2 w-full border-b py-3">
                        <span className="w-1/3 text-sm">الرقم المرجعي</span>
                        <span className=" w-1/2 font-bold text-sm">
                            {data.ref || "N/A"}
                        </span>
                    </div>
                </div>

                <div className="flex flex-col w-1/3  items-start justify-center">
                    <div className="flex justify-start items-center gap-2 w-full border-b py-3">
                        <span className="w-1/3 text-sm"> تاريخ الاضافة</span>
                        <span className=" w-1/2 font-bold text-sm">
                            {createdAt}
                        </span>
                    </div>
                    <div className="flex justify-start items-center gap-2 w-full border-b py-3">
                        <span className="w-1/3 text-sm">تاريخ التسليم</span>
                        <span className=" w-1/2 font-bold text-sm">
                            {data.deliveryDate}
                        </span>
                    </div>
                    <div className="flex justify-start items-center gap-2 w-full border-b py-3">
                        <span className="w-1/3 text-sm">نوع التشطيب</span>
                        <span className=" w-1/2 font-bold text-sm">
                            {data.finishing}
                        </span>
                    </div>
                    <div className="flex justify-start items-center gap-2 w-full border-b py-3">
                        <span className="w-1/3 text-sm">مساحة العقار</span>
                        <span className=" w-1/2 font-bold text-sm">
                            {data.size} متر مربع
                        </span>
                    </div>

                    <div className="flex justify-start items-center gap-2 w-full border-b py-3">
                        <span className="w-1/3 text-sm">حالة البناء</span>
                        <span className=" w-1/2 font-bold text-sm">
                            {data.deliveryStatus}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropDetails;
