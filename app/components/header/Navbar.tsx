import React from "react";
import NavItems from "./NavItems";
import { SafeUser } from "@/app/types";
import Logo from "./Logo";
import { navItems } from "../data/data";
import UserMenu from "./UserMenu";

interface NavbarProps {
    currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
    return (
        <header className="w-full sticky">
            <div
                id="headerContainer"
                className="py-3 px-2 flex flex-row items-center justify-between mx-auto w-full max-w-screen-xl"
            >
                <div id="headerMenu h-10">
                    <Logo />
                </div>
                <div id="navContainer" className="max-md:hidden">
                    <NavItems navItems={navItems} />
                </div>
                <div
                    id="userMenu"
                    className="flex items-center justify-between gap-3"
                >
                    <UserMenu currentUser={currentUser} />
                </div>
            </div>
            <hr></hr>
        </header>
    );
};

export default Navbar;
