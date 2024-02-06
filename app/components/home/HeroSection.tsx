"use client";
import styles from "./header.module.css";

const HeroSection = ({ children }: { children: React.ReactNode }) => {
    return (
        <div
            className={`${styles.hero_container} 
            w-full h-[450px] flex p-2 md:p-1
            justify-center items-center mb-8`}
        >
            <div
                className="  
                            shadow-lg z-[1]
                            bg-slate-50/70 backdrop-blur-sm px-4 py-6
                            rounded-md flex justify-center items-center w-full md:w-2/3
                        "
            >
                {children}
            </div>
        </div>
    );
};

export default HeroSection;
