"use client";
import { commercialTypes, residentalTypes } from "@/app/components/data/data";
import { useRouter } from "next/navigation";

interface GroupItem {
    id: string;
    name: string;
    label: string;
}

const allTypes: GroupItem[] = [...residentalTypes, ...commercialTypes];

const FilterByGroups: React.FC<{ parent: string }> = ({ parent }) => {
    const router = useRouter();

    return (
        <div
            className="w-full mt-4 py-3
                        px-3 bg-slate-100 
                        rounded-lg 
                        grid grid-cols-2 
                        xl:grid-cols-9
                        lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-3 gap-4 gap-y-4
                        justify-items-start"
        >
            {allTypes.map((item) => (
                <div
                    onClick={() =>
                        router.push(`/${parent}?propertyGroup=${item.name}`)
                    }
                    key={item.id}
                    className="
                                flex items-center justify-start 
                                text-xs font-semibold text-slate-600
                                rounded-lg px-4 py-2 cursor-pointer 
                                hover:bg-slate-200 transition-all "
                >
                    {item.name}
                </div>
            ))}
        </div>
    );
};

export default FilterByGroups;
