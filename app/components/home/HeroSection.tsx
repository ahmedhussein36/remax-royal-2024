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
                            shadow-lg
                            bg-slate-50/80 backdrop-blur-sm px-4 py-6
                            rounded-md flex justify-center items-center border w-full md:w-3/4
                        "
            >
                {children}
            </div>
        </div>
    );
};

export default HeroSection;
