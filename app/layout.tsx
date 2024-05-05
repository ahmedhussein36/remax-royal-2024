import Navbar from "@/app/components/header/Navbar";
import LoginModal from "@/app/components/modals/LoginModal";
import RegisterModal from "@/app/components/modals/RegisterModal";
import ToasterProvider from "@/app/providers/ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";
import TopLoader from "./components/TopLoader";
import Footer from "./components/Footer";
import NextBreadcrumb from "@/app/components/NextBreadcrumb";

import { Inter, Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";

const font = Noto_Kufi_Arabic({ subsets: ["arabic"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Remax royal",
    description: "Remax Royal all homes you search for",
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const currentUser = await getCurrentUser();

    return (
        <html lang="ar" dir="rtl">
            <body className={font.className ? font.className : inter.className}>
                <TopLoader />
                <div className=" flex flex-col">
                    <div className=" z-10">
                        <LoginModal />
                        <RegisterModal />
                        <Navbar currentUser={currentUser} />
                        <ToasterProvider />
                    </div>
                    <main className=" flex flex-col">
                        {/* <NextBreadcrumb
                            homeElement={"Home"}
                            separator={<span> | </span>}
                            activeClasses="text-amber-500"
                            containerClasses="flex py-5 bg-gradient-to-r from-purple-600 to-blue-600"
                            listClasses="hover:underline mx-2 font-bold"
                            capitalizeLinks
                        /> */}
                        <div className="flex-grow flex-1">{children}</div>
                        <Footer />
                    </main>
                </div>
            </body>
        </html>
    );
}
