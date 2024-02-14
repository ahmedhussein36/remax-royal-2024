"use client";
import styles from "./header.module.css";

const HeroSection = ({ children }: { children: React.ReactNode }) => {
    return (
        <div
            className={`${styles.hero_container} 
            w-full h-[450px] flex p-2 md:p-1 flex-col
            justify-center items-center mb-8`}
        >
            <div className="p-6 my-4">
                <h1 className=" font-extrabold text-2xl lg:text-5xl text-white">
                    دوّر علي بيتك الجديد عندنا
                </h1>
            </div>
            <div
                className="  
                            shadow-lg z-[1]
                            bg-slate-50/70 backdrop-blur-sm px-4 py-6
                            rounded-md flex justify-center items-center w-full md:w-3/4
                        "
            >
                {children}
            </div>
        </div>
    );
};

export default HeroSection;
