"use client";

export type SearchValue = {
    target: any;
    value: string;
};

interface InputProps {
    id: string;
    label?: string;
    Placeholder?: string;
    disabled?: boolean;
    value?: string;
    onChange: (value: SearchValue) => void;
}

const SearchInput: React.FC<InputProps> = ({
    id,
    label,
    disabled,
    value,
    Placeholder,
    onChange,
}) => {
    return (
        <>
            <div>
                <input
                    type="search"
                    id={id}
                    disabled={disabled}
                    value={value}
                    onChange={(value) => onChange(value as unknown as SearchValue)}
                    placeholder={Placeholder}
                    className={`
                        w-full
                        p-3 
                        bg-white 
                        border
                        rounded-md
                        outline-none
                        transition
                        disabled:opacity-70
                        disabled:cursor-not-allowed
                        
                `}
                />
            </div>
        </>
    );
};

export default SearchInput;
