// components/Breadcrumb.tsx
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    home: {
        label: string;
        href: string;
    };
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, home }) => {
    return (
        <div
            aria-label="Breadcrumb"
            className="flex items-center justify-start my-2 py-2"
        >
            <Link href={home.href}>
                <div
                    className="text-gray-500 hover:text-rose-600"
                    title="الرئيسية"
                >
                    {home.label}
                </div>
            </Link>
            {items.map((item, index) => (
                <div key={index} className=" flex justify-start items-center">
                    <IoIosArrowBack className="mx-2 text-rose-400" />
                    <Link href={item.href}>
                        <div className="text-gray-500 hover:text-rose-600 text-sm">
                            {item.label}
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Breadcrumb;
