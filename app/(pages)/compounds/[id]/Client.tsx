import ClientOnly from "@/app/components/ClientOnly";
import Container from "@/app/components/Container";
import PropretyContacts from "@/app/components/properties/PropretyContacts";
import { SafeCompound, SafeDeveloper } from "@/app/types";
import Image from "next/legacy/image";
import Link from "next/link";

interface ClientProps {
    compound: SafeCompound;
    developer: SafeDeveloper;
}
const Client: React.FC<ClientProps> = ({ compound, developer }) => {
    const formatNumber = (number: number | undefined): string => {
        if (!number) return String(0);
        if (number >= 1000) {
            return number.toLocaleString();
        } else {
            return number.toString();
        }
    };

    // const minPriceInt = Math.floor(compound.min_price || 0);

    // const formattedMinPrice = formatNumber(minPriceInt) || null;
    // const formatmaxPrice = formatNumber(compound.max_price) || null;
    const placeholder = "/assets/images/placeholder2.png";
    return (
        <ClientOnly>
            <div>No Data</div>
            {/* <Container>
                <div className="relative flex justify-center items-center w-full h-[400px] rounded-lg overflow-hidden my-8">
                    <Image
                        src={compound.image || placeholder}
                        layout="fill"
                        loading="lazy"
                        objectFit="cover"
                        alt={compound.name}
                    />
                    /
                </div>
                <div className=" flex justify-start items-center gap-4">
                    <div className="relative aspect-square w-[70px] rounded-full overflow-hidden border-4 border-slate-200">
                        <Image
                            src={developer.image || placeholder}
                            layout="fill"
                            loading="lazy"
                            objectFit="cover"
                            alt={developer.name}
                        />
                    </div>
                    <div className="flex flex-col justify-center items-start gap-3">
                        <div>
                            <h1 className="text-2xl font-bold">
                                {compound.name}
                            </h1>
                        </div>
                        <div className=" flex gap-2">
                            <p>{compound.area.name}</p> |
                            <div>
                                <span>من تطوير</span>

                                <Link
                                    className=" hover:underline
                                rounded-lg bg-slate-100 px-3
                                 hover:text-blue-500 transition-all duration-300 ease-in-out"
                                    href={`/developers/${developer.id}`}
                                >
                                    {developer.name}
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className=" flex-1 flex justify-center items-end ">
                        <PropretyContacts phone={""} whatsApp={""} />
                    </div>
                </div>
                {compound.min_price && (
                    <div className="mr-24 mt-4">
                        سعر يبدأ من
                        <span className=" font-bold text-2xl mx-2">
                            {formattedMinPrice}
                        </span>
                        إلى
                        <span className=" font-bold text-2xl mx-2">
                            {formatmaxPrice}
                        </span>
                        جنيه
                    </div>
                )}

                <hr className="m-8"></hr>

                <div className=" flex flex-col justify-center items-start gap-3 my-4">
                    <div className=" text-xl font-bold my-4">
                        <h2>عن {compound.name}</h2>
                    </div>
                    <div className=" border-blue-200 border rounded-lg p-4 bg-blue-50 w-full">
                        <p>{compound.description}</p>
                    </div>
                </div>

                <div className="my-12">
                    <h2 className="text-xl font-bold mb-4">
                        العقارات المتاحة في {compound.name}
                    </h2>
                    <div className="flex flex-col w-full justify-center items-center">
                        <div
                            className="
                                    pt-2
                                    mt-4
                                    grid 
                                    grid-cols-1
                                    sm:grid-cols-1
                                    md:grid-cols-2
                                    lg:grid-cols-3
                                    gap-8
                                    relative
                                "
                        ></div>
                    </div>
                </div>
            </Container> */}
        </ClientOnly>
    );
};

export default Client;
