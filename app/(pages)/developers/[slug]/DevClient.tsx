import { SafeCompound, SafeDeveloper, SafeUser } from "@/app/types";
import Container from "@/app/components/Container";
import ClientOnly from "@/app/components/ClientOnly";
import Image from "next/legacy/image";
import CompoundCard from "@/app/components/compounds/CompoundCard";
import PropretyContacts from "@/app/components/properties/PropretyContacts";

interface DevClientProps {
    developer: SafeDeveloper | any;
    compounds: any[];
    currentUser?: SafeUser | null;
}

const DevClient: React.FC<DevClientProps> = ({ developer, compounds }) => {
    const formatNumber = (number: number | undefined): string => {
        if (!number) return String(0);
        if (number >= 1000) {
            return number.toLocaleString();
        } else {
            return number.toString();
        }
    };

    const minPriceInt = Math.floor(developer.min_price || 0);

    const formattedMinPrice = formatNumber(minPriceInt) || null;
    const placeholder = "/assets/images/placeholder2.jpg";

    const areas = compounds.map((compound) => {
        compound.area;
    });

    return (
        <ClientOnly>
            <div className="h-[30vh] w-full bg-blue-800 relative flex justify-center items-center">
                <Image
                    className="absolute top-0 left-0 z-[0]"
                    src="/assets/images/cover1.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt=""
                />
                <div className="w-[1280px] flex justify-start items-center h-full p-2 py-4 pt-8 gap-6 z-[1]">
                    <div className=" h-[120px] w-[120px] relative p-3 bg-white rounded-lg overflow-hidden ">
                        <Image
                            src={developer?.image || placeholder}
                            alt={developer?.title}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="flex flex-1 flex-col gap-4 text-white">
                        <div>
                            <h1 className="font-bold text-4xl">
                                {developer?.name}
                            </h1>
                        </div>
                        <div className="flex gap-5">
                            <div>{developer?.compounds?.length || 0} كمبوند</div>
                            <div>{developer?.properties?.length || 0} وحدة</div>
                        </div>
                        {developer.min_price && (
                            <div>
                                سعر يبدأ من
                                <span className=" font-bold text-xl text-white mx-2">
                                    {formattedMinPrice}
                                </span>
                                جنيه
                            </div>
                        )}
                    </div>
                    <div className=" flex-1 flex justify-center items-end ">
                        <PropretyContacts phone={""} whatsApp={""} />
                    </div>
                </div>
            </div>
            <Container>
                <div className=" flex flex-col justify-center items-start gap-3 my-4">
                    <div className=" text-xl font-bold my-4">
                        <h2>عن {developer.name}</h2>
                    </div>
                    <div className=" border-blue-200 border rounded-lg p-4 bg-blue-50 w-full">
                        <p>{developer.description}</p>
                    </div>
                </div>

                <div className=" flex flex-col justify-center items-start gap-3 my-12">
                    <div className=" text-xl font-bold">
                        <h3>المناطق</h3>
                    </div>
                    <div className="flex gap-3">
                        {areas.map((item: any) => (
                            <div
                                className=" p-2 px-4 border rounded-lg"
                                key={item}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="my-12">
                    <h2 className="text-xl font-bold mb-4">
                        كمبوندات {developer.name}
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
                        >
                            {compounds.map((compound: any) => (
                                <CompoundCard
                                    key={compound.id}
                                    slug={compound.id}
                                    id={compound.id}
                                    title={compound.name}
                                    image={compound.image}
                                    typesCount={compound.property_types_count}
                                    location={compound.area.name}
                                    developer={compound.developer.name}
                                    maxInstYears={
                                        compound.max_installment_years
                                    }
                                    minDownPayment={compound.min_down_payment}
                                    minPrice={compound.min_price}
                                    parent="compounds"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </ClientOnly>
    );
};

export default DevClient;
