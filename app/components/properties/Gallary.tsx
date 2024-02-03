import Image from "next/image";
import styles from "./propSingle.module.css";

interface GallaryProps {
    images?: string[];
}

const placeholder = "/assets/images/placeholder.png";

const Gallary = ({ images }: { images: string[] }) => {
    return (
        <div
            id="gallary"
            className="mt-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-3 h-fit lg:h-[480px]"
        >
            <div
                className="grid col-span-1 md:col-span-1 lg:col-span-3 bg-slate-200 overflow-clip 
            relative rounded-lg w-full h-[280px] lg:h-full"
            >
                <Image
                    fill
                    src={images[0] || placeholder}
                    alt="property image"
                />
            </div>
            <div
                className={`bg-white grid grid-cols-3 md:grid-cols-3 lg:grid-rows-3 gap-2 h-[100px]`}
            >
                <div className=" bg-slate-100 rounded-lg relative overflow-hidden w-full h-full">
                    <Image
                        fill
                        src={images[1] || placeholder}
                        alt="property image"
                    />
                </div>
                <div className=" bg-slate-100 rounded-lg relative overflow-hidden w-full h-full">
                    <Image
                        fill
                        src={images[2] || placeholder}
                        alt="property image"
                    />
                </div>
                <div className=" bg-slate-100 rounded-lg relative overflow-hidden w-full h-full">
                    <Image
                        fill
                        src={images[3] || placeholder}
                        alt="property image"
                        loading="eager"
                    />
                </div>
            </div>
        </div>
    );
};

export default Gallary;
