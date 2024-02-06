import Select from "react-select";

export type SelectValue = {
    value: any;
};

interface SelectInputProps {
    value?: SelectValue;
    onChange: (value: SelectValue) => void;
    options: any[];
    placeholder: string;
    isSearchable?: boolean
}

export const SelectInput: React.FC<SelectInputProps> = ({
    value,
    onChange,
    options,
    placeholder,
    isSearchable
}) => {
    return (
        <div>
            <Select
                isClearable
                isSearchable ={isSearchable}
                value={value}
                options={options}
                onChange={(value) => onChange(value as SelectValue)}
                placeholder={placeholder}
                formatOptionLabel={({ label }: any) => <div>{label}</div>}
                classNames={{
                    control: () => "p-1 border placeholder:text-slate-300",
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
