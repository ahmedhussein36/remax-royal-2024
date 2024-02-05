import Image from "next/image";

interface GallaryProps {
    images?: string[];
}

const placeholder = "/assets/images/placeholder2.png";

const Gallary = ({ images }: { images: string[] }) => {
    const mainImage = images.slice(-1);

    return (
        <div
            id="gallary"
            className="mt-8 w-full grid grid-cols-1 md:grid-cols-1 
            lg:grid-cols-4 xl:grid-cols-4 gap-3 h-[30vh] md:h-[50vh] 
            lg:h-[60vh] xl:h-[70vh]"
        >
            <div
                className="grid col-span-1 md:col-span-1 lg:col-span-3 xl:col-span-3 bg-slate-200 overflow-clip 
            relative rounded-lg w-full h-full lg:h-full"
            >
                <Image
                    fill
                    src={mainImage[0] || placeholder}
                    alt="property image"
                />
            </div>
            <div className="bg-white lg:grid lg:grid-rows-3 gap-3 hidden md:hidden ">
                <div className=" bg-slate-100 rounded-lg relative overflow-hidden w-full h-full">
                    <Image
                        fill
                        src={images[0] || placeholder}
                        alt="property image"
                        className=" relative"
                    />
                </div>
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
                        loading="eager"
                    />
                </div>
            </div>
        </div>
    );
};

export default Gallary;
