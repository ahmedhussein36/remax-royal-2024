"use client";

import { useRouter } from "next/navigation";

import Button from "./Button";
import Heading from "./Heading";
import Image from "next/image";

interface EmptyStateProps {
    title?: string;
    subtitle?: string;
    showReset?: boolean;
    image?: boolean
}

const EmptyState: React.FC<EmptyStateProps> = ({
    title = "لاتوجد نتائج بحث",
    subtitle = "حاول تغيير الفلترة او ازالة الفلترة",
    showReset,
    image
}) => {
    const router = useRouter();

    return (
        <div
            className="
        h-full
        w-full
        flex 
        flex-col 
        gap-2 
        justify-center 
        items-center 
      "
        >
            <div className="">
               { image && 
                <Image
                    src={"/assets/icons/emptystate.jpg"}
                    width={150}
                    height={150}
                    alt="empty state"
                />}
            </div>

            <Heading center title={title} subtitle={subtitle} />
            <div className="w-48 mt-4">
                {showReset && (
                    <Button
                        outline
                        label="ازالة الفلترة"
                        onClick={() => router.push("/search")}
                    />
                )}
            </div>
        </div>
    );
};

export default EmptyState;
