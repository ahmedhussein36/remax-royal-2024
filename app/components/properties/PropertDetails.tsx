"use cient";

import { SafeProperty } from "@/app/types";
import parse from "html-react-parser";
import { useEffect, useMemo, useState } from "react";

interface PropDetailsProps {
    data: SafeProperty;
}

const PropDetails: React.FC<PropDetailsProps> = ({ data }) => {
    const [unique, setunique] = useState("");

    const date = new Date(data.createdAt);

    // Format the date
    const formattedDate: string = date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });

    const refNum = useMemo(() => {
        const uniqueNum = Math.floor(
            +data.createdAt / parseInt(data.id)
        ).toString();

        setunique(uniqueNum);

        if (uniqueNum.length > 6) setunique(uniqueNum.slice(3));

        return `RR-${unique}`;
    }, [data, unique]);

    return (
        <div className="flex flex-col mt-4  rounded-lg p-6">
            <h2 className="font-bold text-xl">تفاصيل العقار</h2>
            <div aria-label="property details" className="flex w-full my-6">
                <div className="flex flex-col w-1/2  items-start justify-center">
                    <div className="flex justify-start items-center gap-2 w-full border-b py-3">
                        <span className="w-1/2 text-sm"> نوع العقار</span>
                        <span className=" w-1/2 font-bold text-sm">
                            {data.propertyType}
                        </span>
                    </div>
                    <div className="flex justify-start items-center gap-2 w-full border-b py-3">
                        <span className="w-1/2 text-sm">نوع العرض</span>
                        <span className=" w-1/2 font-bold text-sm">
                            {data.category}
                        </span>
                    </div>
                    <div className="flex justify-start items-center gap-2 w-full border-b py-3">
                        <span className="w-1/2 text-sm">الرقم المرجعي</span>
                        <span className=" w-1/2 font-bold text-sm">
                            {refNum || "N/A"}
                        </span>
                    </div>
                    <div className="flex justify-start items-center gap-2 w-full border-b py-3">
                        <span className="w-1/2 text-sm">حالة البناء</span>
                        <span className=" w-1/2 font-bold text-sm">
                            {data.deliveryStatus}
                        </span>
                    </div>
                </div>

                <div className="flex flex-col w-1/2  items-start justify-center">
                    <div className="flex justify-start items-center gap-2 w-full border-b py-3">
                        <span className="w-1/2 text-sm"> تاريخ الاضافة</span>
                        <span className=" w-1/2 font-bold text-sm">
                            {formattedDate}
                        </span>
                    </div>
                    <div className="flex justify-start items-center gap-2 w-full border-b py-3">
                        <span className="w-1/2 text-sm">تاريخ التسليم</span>
                        <span className=" w-1/2 font-bold text-sm">
                            {data.deliveryDate}
                        </span>
                    </div>
                    <div className="flex justify-start items-center gap-2 w-full border-b py-3">
                        <span className="w-1/2 text-sm">نوع التشطيب</span>
                        <span className=" w-1/2 font-bold text-sm">
                            {data.finishing}
                        </span>
                    </div>
                    <div className="flex justify-start items-center gap-2 w-full border-b py-3">
                        <span className="w-1/2 text-sm">مساحة العقار</span>
                        <span className=" w-1/2 font-bold text-sm">
                            {data.size} متر مربع
                        </span>
                    </div>
                </div>
            </div>

            <div className="border-b-2 my-12"></div>

            <div aria-label="description">
                <h2>وصف العقار</h2>
                <div className=" text-lg text-slate-600 space-y-3 leading-[2]">
                    {parse(data?.content || "")}
                </div>
            </div>

            <h2 className="font-bold text-xl"> الكماليات</h2>
            <div
                aria-label="amenities"
                className="flex flex-wrap justify-start items-center my-6 gap-4"
            >
                {data.amenities.map((item: any) => item.name)}
                <div className="border-b-2 my-12"></div>
            </div>
        </div>
    );
};

export default PropDetails;
