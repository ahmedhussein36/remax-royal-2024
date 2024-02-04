import Container from "../components/Container";
import Logo from "./header/Logo";
import Link from "next/link";
import { navItems, socialMedia } from "./data/data";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="w-full border-t-2 mt-10 py-6">
            <Container>
                <div className="flex justify-between items-start ">
                    <div
                        className="flex flex-col sm:flex-col
                                    md:flex-row lg:flex-row xl:flex-row 
                                    justify-between items-center gap-4 md:gap-4 w-full "
                    >
                        <div>
                            <Logo />
                        </div>
                        <span className="hidden md:block">|</span>
                        <div className="flex justify-between items-center gap-2">
                            {socialMedia.map((item, index) => (
                                <Link href={item.url} key={index}>
                                    <div className="p-1 rounded-full border border-gray-400 hover:bg-slate-100 transition-all">
                                        {item.icon}
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <span className="hidden md:block">|</span>
                        <div className="flex justify-start items-center gap-2 md:gap-4 flex-wrap text-sm w-full">
                            {navItems.map((item, index) => (
                                <Link href={item.slug} key={index}>
                                    <span>{item.name}</span>
                                </Link>
                            ))}

                            <Link href="/terms-and-conditions">
                                <span>الشروط و الأحكام</span>
                            </Link>
                            <Link href="/terms-and-conditions">
                                <span>سياسة الخصوصية</span>
                            </Link>
                        </div>
                        <div className="md:w-1/3 lg:w-1/3 sm:w-full">
                            <p
                                className={`${inter.className} " text-xs text-left"`}
                            >
                                Copyrights {currentYear} - Remax Royal &copy;
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
