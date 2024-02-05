import Image from "next/image";

interface UserAvatarProps {
    avatarSrc?: string | undefined;
    isListing?: boolean;
}

const Avatar = ({ avatarSrc, isListing }: UserAvatarProps) => {
    return (
        <Image
            className="rounded-full"
            height={!isListing? "24": "48"}
            width={!isListing? "24": "48"}
            alt="Avatar"
            src={avatarSrc ? avatarSrc : "/assets/icons/user.svg"}
        />
    );
};

export default Avatar;
