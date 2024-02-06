"use client";

import qs from "query-string";
import { useCallback, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import CitySelect, { CitySelectValue } from "../customInputs/CitySelect";
import AriaSelect, { AriaSelectValue } from "../customInputs/AriaSelect";
import { SelectInput } from "./SelectInput";
import CategoryInput from "../customInputs/CategoryInput";
import { categories, commercialTypes, residentalTypes } from "../data/data";
import { IoSearch } from "react-icons/io5";
import Button from "../Button";
import SearchInput, { SearchValue } from "../inputs/SearchInput";

const searchIcon = () => <IoSearch color="#ffff" size={20} />;

const roomOptions: any = [
    { label: "1 غرفة", value: 1 },
    { label: "2 غرفة", value: 2 },
    { label: "3 غرف", value: 3 },
    { label: "4 غرف", value: 4 },
    { label: "5 غرف", value: 5 },
    { label: "6 غرف", value: 6 },
    { label: "7 غرف", value: 7 },
    { label: "+7 غرف", value: +7 },
];

const bathOptions: any = [
    { label: "1 حمام", value: 1 },
    { label: "2 حمام", value: 2 },
    { label: "3 حمامات", value: 3 },
    { label: "4 حمامات", value: 4 },
    { label: "5 حمامات", value: 5 },
    { label: "6 حمامات", value: 6 },
    { label: "7 حمامات", value: 7 },
    { label: "+7 حمامات", value: +7 },
];

const priceOptions: any = [
    { label: "أقل من 1000,000", gte: 10000, lte: 1000000 },
    { label: "1,000,000 - 3,000,000", gte: 1000000, lte: 3000000 },
    { label: "3,000,000 - 5,000,000", gte: 3000000, lte: 5000000 },
    { label: "5,000,000 - 7,000,000", gte: 5000000, lte: 7000000 },
    { label: "7,000,000 - 10,000,000", gte: 7000000, lte: 10000000 },
    { label: "10,000,000 - 15,000,000", gte: 10000000, lte: 15000000 },
    { label: "15,000,000 - 20,000,000", gte: 15000000, lte: 20000000 },
    { label: "20,000,000 - 30,000,000", gte: 20000000, lte: 30000000 },
    { label: "30,000,000 - 50,000,000", gte: 30000000, lte: 50000000 },
];

const allTypes = [...residentalTypes, ...commercialTypes];

const Filter = () => {
    const router = useRouter();
    const params = useSearchParams();
    const [roomCount, setRoomCount] = useState<any>();
    const [category, setCategory] = useState();
    const [bathroomCount, setBathroomCount] = useState<any>();
    const [price, setPrice] = useState<any>(); //[priceMin, priceMax
    const [city, setCity] = useState<CitySelectValue>();
    const [aria, setAria] = useState<AriaSelectValue>();
    const [propertyGroup, setPropertyGroup] = useState<any>();
    const [title, setTitle] = useState<string>();

    const onSubmit = useCallback(async () => {
        let currentQuery = {};

        if (params) {
            currentQuery = qs.parse(params.toString());
        }

        const updatedQuery: any = {
            ...currentQuery,
            category,
            title: title,
            roomCount: roomCount?.value,
            bathroomCount: bathroomCount?.value,
            propertyType: null,
            propertyGroup: propertyGroup?.name,
            city: city?.name,
            aria: aria?.name,
            minprice: price?.gte,
            maxprice: price?.lte,
        };

        const url = qs.stringifyUrl(
            {
                url: "/search",
                query: updatedQuery,
            },
            { skipNull: true }
        );

        router.push(url);
    }, [
        router,
        category,
        roomCount,
        bathroomCount,
        propertyGroup,
        city,
        aria,
        title,
        price?.gte,
        price?.lte,
        params,
    ]);
    return (
        <div className="flex flex-col justify-center items-start gap-4 w-full">
            <div className="flex gap-4 w-[200px]">
                {categories.map((item, i) => (
                    <CategoryInput
                        isFilter={true}
                        key={i}
                        label={item.name}
                        selected={category === item.name}
                        onClick={(value) => setCategory(value as any)}
                    />
                ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 items-center gap-2 w-full">
                <div className="">
                    <CitySelect
                        isSearchable={false}
                        isFilter={true}
                        value={city}
                        onChange={(value) => setCity(value as CitySelectValue)}
                    />
                </div>

                <div className=" col-span-2">
                    <SearchInput
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value as any)}
                        Placeholder="ابحث عن المنطقة أ الحي أو الكمبوند "
                    />
                </div>

                <div className="">
                    <SelectInput
                        isSearchable={false}
                        value={propertyGroup}
                        onChange={(value) => setPropertyGroup(value as any)}
                        placeholder={"نوع العقار"}
                        options={allTypes}
                    />
                </div>

                <div className="">
                    <SelectInput
                        isSearchable={false}
                        value={roomCount}
                        onChange={(value) => setRoomCount(value as any)}
                        placeholder={"عدد الغرف"}
                        options={roomOptions}
                    />
                </div>

                <div className="">
                    <SelectInput
                        isSearchable={false}
                        value={bathroomCount}
                        onChange={(value) => setBathroomCount(value as any)}
                        placeholder={"عدد الحمامات"}
                        options={bathOptions}
                    />
                </div>
                <div className="">
                    <SelectInput
                        isSearchable={false}
                        value={price}
                        onChange={(value) => setPrice(value as any)}
                        placeholder={"السعر"}
                        options={priceOptions}
                    />
                </div>

                <div className="h-full">
                    <Button
                        onClick={onSubmit}
                        label={"بحث"}
                        icon={searchIcon}
                    />
                </div>
            </div>
        </div>
    );
};

export default Filter;

// import { useState } from "react";

// // ...

// const Filter = () => {
//     const [priceMin, setPriceMin] = useState<number | null>(null);
//     const [priceMax, setPriceMax] = useState<number | null>(null);

//     const onSubmit = () => {
//         const updatedQuery = {
//             // ...
// priceMin,
// priceMax,
//         };

//         // ...
//     };

//     return (
// <div className="flex flex-col justify-center items-start gap-4 w-full">
//     {/* ... */}
//     <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 items-center gap-2 w-full">
//         {/* ... */}
//         <div className="">
//             <input
//                 type="number"
//                 value={priceMin}
//                 onChange={(e) => setPriceMin(Number(e.target.value))}
//                 placeholder="الحد الأدنى للسعر"
//             />
//         </div>
//         <div className="">
//             <input
//                 type="number"
//                 value={priceMax}
//                 onChange={(e) => setPriceMax(Number(e.target.value))}
//                 placeholder="الحد الأعلى للسعر"
//             />
//         </div>
//         {/* ... */}
//     </div>
// </div>
//     );
// };

// export default Filter;
