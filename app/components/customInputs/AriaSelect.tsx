import React from "react";
import Select from "react-select";
import { useAria } from "@/app/hooks/useCIties";

export type AriaSelectValue = {
    id: string;
    name: string;
    value: string;
    govId?: string;
};

interface CitySelectProps {
    value?: AriaSelectValue;
    onChange: (value: AriaSelectValue) => void;
    govId?: string;
    isFilter?: boolean;
}

const AriaSelect: React.FC<CitySelectProps> = ({
    govId,
    value,
    onChange,
    isFilter,
}) => {
    const { getAll } = useAria();

    const filteredArias = getAll().filter((item) => item.govId === govId);

    return (
        <div>
            {!isFilter ? <span className=" ">المدينة</span> : ""}
            <Select
                isClearable
                value={value}
                onChange={(value) => {
                    onChange(value as AriaSelectValue);
                }}
                options={govId ? filteredArias : getAll()}
                placeholder="ابحث عن المدينة أو المنطقة أو الكمبوند"
                formatOptionLabel={({ value }: any) => <div>{value}</div>}
                classNames={{
                    control: () => "p-1 border placeholder:text-slate-300",
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
                        primary: "#cbd5e1",
                    },
                })}
            />
        </div>
    );
};

export default AriaSelect;
