import Image from "next/legacy/image";

interface GallaryProps {
    images?: string[];
    mainImage: string;
}

const placeholder = "/assets/images/placeholder2.png";

const Gallary = ({ images, mainImage }: GallaryProps) => {
    return (
        <div
            id="gallary"
            className="mt-8 w-full grid grid-cols-1 md:grid-cols-1 
            lg:grid-cols-4 xl:grid-cols-4 gap-8 h-[30vh] md:h-[50vh] 
            lg:h-[60vh] xl:h-[65vh]"
        >
            <div
                className="grid col-span-1 md:col-span-1 lg:col-span-3 xl:col-span-3 bg-slate-200 overflow-clip 
            relative rounded-lg w-full h-full lg:h-full"
            >
                <Image
                    objectFit="cover"
                    src={mainImage}
                    alt="property image"
                    layout="fill"
                    priority={false}
                />
            </div>
            <div className="bg-white lg:grid lg:grid-rows-3 gap-3 hidden md:hidden ">
                {images?.length &&
                    images.map((image, i) => (
                        <div
                            key={i}
                            className=" bg-slate-100 rounded-lg relative overflow-hidden w-full h-full"
                        >
                            <Image
                                objectFit="cover"
                                layout="fill"
                                priority={false}
                                src={image}
                                alt="property image"
                                className=" relative"
                            />{" "}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Gallary;
