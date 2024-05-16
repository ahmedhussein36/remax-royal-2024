import styles from "./header.module.css";

const HeroSection = ({ children }: { children: React.ReactNode }) => {
    return (
        <div
            className={`${styles.hero_container} 
            max-w-[1280px] h-[450px] flex p-2 md:p-1 flex-col mt-4 m-auto
            justify-center items-center mb-8 rounded-3xl`}
        >
            <div className="p-6 my-4">
                <h1 className="bold md:font-extrabold text-xl lg:text-4xl text-slate-600">
                    دوّر علي بيتك الجديد عندنا
                </h1>
            </div>
            <div
                className="  
                            shadow-lg z-[1]
                            bg-slate-700/70  px-4 py-6
                            rounded-md flex justify-center items-center w-full md:w-3/4
                        "
            >
                {children}
            </div>
        </div>
    );
};

export default HeroSection;
