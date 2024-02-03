import Link from "next/link";

interface NavItemsProps {
    navItems: any[];
}

const NavItems: React.FC<NavItemsProps> = ({ navItems }) => {
    return (
        <nav className="mx-auto flex justify-center items-center">
            <ul className="flex flex-grow items-center ">
                {navItems?.map((navItem, index) => (
                    <li
                        key={index}
                        className="flex justify-center items-center px-4 py-2 text-sem text-slate-500 hover:text-slate-700"
                    >
                        <Link href={navItem.slug}>{navItem.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavItems;
