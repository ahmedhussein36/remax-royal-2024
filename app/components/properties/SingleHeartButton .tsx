"use client";

import { FaHeart } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

import useFavorite from "@/app/hooks/useFavorite";
import { SafeUser } from "@/app/types";

interface HeartButtonProps {
    listingId: string;
    currentUser?: SafeUser | null;
}

const HeartButton: React.FC<HeartButtonProps> = ({
    listingId,
    currentUser,
}) => {
    const { hasFavorited, toggleFavorite } = useFavorite({
        listingId,
        currentUser,
    });

    return (
        <div
            onClick={toggleFavorite}
            className="
        relative
        hover:opacity-80
        transition
        cursor-pointer
      "
        >
            <CiHeart
                size={40}
                className={`
                ${hasFavorited ? "hidden" : ""}
                
                    "
                        absolute
                        -top-[2px]
                        -right-[2px]
                    "`}
            />
            <FaHeart
                size={32}
                className={hasFavorited ? "fill-rose-500" : " fill-white"}
            />
        </div>
    );
};

export default HeartButton;
