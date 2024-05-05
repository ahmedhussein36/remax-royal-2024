"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import { SafeUser } from "@/app/types";

import MenuItem from "./MenuItem";
import Avatar from "./Avatar";

interface UserMenuProps {
    currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
    const router = useRouter();
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(e.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);

    const createAd = useCallback(() => {
        if (!currentUser) {
            return loginModal.onOpen();
        }

        router.push("/");
    }, [loginModal, currentUser, router]);

    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div
                    ref={menuRef}
                    onClick={toggleOpen}
                    className="
          p-4
          md:py-2
          md:px-3
          border-[1px] 
          border-neutral-200 
          flex 
          flex-row 
          items-center 
          gap-3 
          rounded-md
          cursor-pointer 
          hover:shadow-md 
          transition
          "
                >
                    <div className="hidden md:block">
                        <Avatar avatarSrc={currentUser?.image ?? ""} />
                    </div>
                    {currentUser ? (
                        <span className="text-xs">{"حسابي"}</span>
                    ) : (
                        <span className=" text-sm">تسجيل الدخول</span>
                    )}
                </div>
               
            </div>
            {isOpen && (
                <div
                    className="
            absolute 
            rounded-md 
            shadow-md
            w-[40vw]
            md:w-full
            bg-white 
            overflow-hidden 
            left-0 
            top-12 
            text-sm
          "
                >
                    <div className="flex flex-col cursor-pointer">
                        {currentUser ? (
                            <>
                                {/* <MenuItem
                  label="حسابي"
                  onClick={() => router.push('/trips')}
                /> */}
                                <MenuItem
                                    label="تفضيلاتي"
                                    onClick={() => router.push("/favorites")}
                                />
                                {/* <MenuItem
                  label="وحدات محجوزة"
                  onClick={() => router.push('/reservations')}
                /> */}
                                <MenuItem
                                    label="وحداتي"
                                    onClick={() => router.push("/properties")}
                                />
                                <MenuItem
                                    label="+ أضف عقار جديد"
                                    onClick={createAd}
                                />
                                <hr />
                                <MenuItem
                                    label="تسجيل خروج"
                                    onClick={() => signOut()}
                                />
                            </>
                        ) : (
                            <>
                                <MenuItem
                                    label="تسجيل دخول"
                                    onClick={loginModal.onOpen}
                                />
                                <MenuItem
                                    label="إنشاء حساب جديد"
                                    onClick={registerModal.onOpen}
                                />
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserMenu;
