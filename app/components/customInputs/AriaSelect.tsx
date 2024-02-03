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
            {!isFilter ? <span className=" ">المحافظة</span> : ""}
            <Select
                isClearable
                value={value}
                onChange={(value) => onChange(value as AriaSelectValue)}
                options={govId ? filteredArias : getAll()}
                placeholder="اختر المدينة أو المنطقة"
                formatOptionLabel={({ value }: any) => <div>{value}</div>}
                classNames={{
                    control: () => "p-2 border placeholder:text-slate-300",
                    input: () => "text-red-400",
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

export default AriaSelect;
