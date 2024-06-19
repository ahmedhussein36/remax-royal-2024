import styles from "./header.module.css";

const HeroSection = ({ children }: { children: React.ReactNode }) => {
    return (
        <div
            className={`${styles.hero_container} 
            w-full h-[480px] flex p-2 md:p-1 flex-col m-auto bg-cover lg:bg-[100%]
            justify-center items-center mb-8`}
        >
            <div className="p-6 my-4">
                <h1 className="bold md:font-extrabold text-xl lg:text-4xl text-slate-50">
                    دوّر علي بيتك الجديد عندنا
                </h1>
            </div>
            <div
                className="  
                            bg-slate-700/70  px-4 py-6
                            rounded-md flex justify-center items-center w-full lg:w-3/4 xl:w-2/3
                        "
            >
                {children}
            </div>
        </div>
    );
};

export default HeroSection;
