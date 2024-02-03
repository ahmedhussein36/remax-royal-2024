"use client";

import Select from "react-select";
import { PiSortAscendingBold } from "react-icons/pi";

export interface SortProps {
    onSortChange?: (value: any) => void;
}

const options = [
    { id: 1, value: "recent", label: "الاحدث", labelEn: "Recent" },
    { id: 2, value: "lowPrice", label: "الأقل سعر", labelEn: "Low price" },
    { id: 3, value: "highPrice", label: "الأعلى سعر", labelEn: "High price" },
    { id: 4, value: "popular", label: "أكتر شهرة", labelEn: "Popular" },
];

const placeholder = (
    <div className="flex gap-3">
        <PiSortAscendingBold size={20} color={"rgb(100 116 139)"} />
        <span>الترتيب حسب</span>
    </div>
);

const Sort = ({ onSortChange }: SortProps) => {
    return (
        <div>
            <Select
                aria-label="sort"
                onChange={onSortChange}
                options={options as any}
                placeholder={placeholder}
                className="text-right text-slate-500 text-sm transition font-medium border-0"
                classNamePrefix="select pl-28"
                isSearchable
                isClearable
                isRtl={true}
                classNames={{
                    control: () => "p-[5px]",
                    input: () => "",
                    option: () => "",
                }}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 8,
                    colors: {
                        ...theme.colors,
                        primary50: "rgb(241 245 249)",
                        primary25: "rgb(241 245 249)",
                        primary: "#CBD2E0",
                    },
                })}
            />
        </div>
    );
};

export default Sort;
