import {
    SafeCompound,
    SafeProperty,
    SafeUser,
    SingleDeveloper,
} from "@/app/types";
import Container from "@/app/components/Container";
import Image from "next/image";
import CompoundCard from "@/app/components/compounds/CompoundCard";
import PropretyContacts from "@/app/components/properties/PropretyContacts";
import parse from "html-react-parser";
import Link from "next/link";
import PropertyCard from "@/app/components/properties/PropertyCard";

interface DevClientProps {
    developer: SingleDeveloper;
    compounds: SafeCompound[];
    currentUser?: SafeUser | null;
    properties: SafeProperty[];
}

const DevClient: React.FC<DevClientProps> = ({
    developer,
    currentUser,
    compounds,
    properties,
}) => {
    const compoundAreas = Array.from(
        new Set(
            compounds
                .map((compound) => compound.area)
                .map((area) => {
                    return {
                        title: area.title,
                        slug: area.slug,
                    };
                })
        )
    );

    return (
        <>
            <div className=" w-full relative flex justify-center items-center">
                <div className="w-[1280px] flex justify-start items-center h-full p-2 py-4 pt-8 gap-6 z-[1]">
                    <div
                        className=" h-[80px] w-[80px] relative p-3 bg-white rounded-full 
                    overflow-hidden border-spacing-10 border-[6px] border-slate-200"
                    >
                        <Image
                            src={developer?.image || ""}
                            alt={developer?.title}
                            fill
                        />
                    </div>
                    <div className="flex flex-1 flex-col gap-4 text-slate-600">
                        <div>
                            <h1 className="font-bold text-xl m-0">
                                {developer?.title}
                            </h1>
                        </div>
                        <div className="flex gap-5">
                            <div>{developer?.compound?.length || 0} كمبوند</div>
                            <div>{developer?.property?.length || 0} وحدة</div>
                        </div>
                        {/* {developer?.min_price && (
                            <div>
                                سعر يبدأ من
                                <span className=" font-bold text-xl text-white mx-2">
                                    {formattedMinPrice}
                                </span>
                                جنيه
                            </div>
                        )} */}
                    </div>
                    <div className=" flex-1 flex justify-center items-end ">
                        <PropretyContacts
                            phone={"+201500366642"}
                            whatsApp={"+201500366642"}
                        />
                    </div>
                </div>
            </div>
            <Container>
                <hr />
                <div className=" flex flex-col justify-center items-start gap-3 my-4">
                    <div>
                        <h2 className="font-bold mb-4">عن {developer.title}</h2>
                    </div>
                    <div className="">
                        {parse(
                            developer?.content ? developer.content.trim() : ""
                        )}
                    </div>
                </div>

                <div className=" flex flex-col justify-center items-start gap-3 my-12">
                    <h2 className="font-bold mb-4">المناطق</h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-3">
                        {compoundAreas.map((item) => (
                            <Link
                                href={`area/${item.slug}`}
                                className=" p-2 px-4 border rounded-lg hover:bg-purple-100 duration-500 ease-in-out
                                 bg-purple-50 border-purple-200 text-purple-800"
                                key={item.title}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="my-12">
                    <h2 className="font-bold mb-4">
                        كمبوندات {developer.title}
                    </h2>
                    <div className="flex flex-col w-full justify-center items-start">
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
                            {compounds.length
                                ? compounds.map((compound: any) => (
                                    <CompoundCard
                                        key={compound.id}
                                        slug={compound.slug}
                                        id={compound.id}
                                        title={compound.name}
                                        image={compound.mainImage}
                                        properties={compound.properties}
                                        location={compound?.area?.title}
                                        developer={developer}
                                        parent="compounds"
                                    />
                                  ))
                                : "لاتتوفر كمبوندات الان سيتم اضافة كمبوندات لاحقا"}
                        </div>
                    </div>
                </div>
                <div className="my-12">
                    <h2 className="text-xl font-bold mb-4">
                        وحدات {developer.title}
                    </h2>
                    <div className="flex flex-col w-full justify-center items-start">
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
                            {properties?.length
                                ? properties.map((listing: any) => (
                                      <PropertyCard
                                          parent={
                                              listing.category === "للبيع"
                                                  ? "properties-for-sale"
                                                  : "properties-for-rent"
                                          }
                                          data={listing}
                                          currentUser={currentUser}
                                          key={listing.id}
                                          slug={listing.slug}
                                      />
                                  ))
                                : "لاتتوفر وحدات الان سيتم اضافة الوحدات لاحقا"}
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default DevClient;
