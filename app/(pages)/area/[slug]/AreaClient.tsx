/* eslint-disable @next/next/no-img-element */
import { SafeArea, SafeCompound, SafeProperty, SafeUser } from "@/app/types";
import Container from "@/app/components/Container";
import Image from "next/image";
import CompoundCard from "@/app/components/compounds/CompoundCard";
import PropretyContacts from "@/app/components/properties/PropretyContacts";
import parse from "html-react-parser";
import PropertyCard from "@/app/components/properties/PropertyCard";

interface DevClientProps {
    area: SafeArea;
    compounds?: SafeCompound[] & {
        properties: SafeProperty[];
        area: SafeArea;
    };
    properties?: SafeProperty[];
    currentUser?: SafeUser | null;
}

const DevClient: React.FC<DevClientProps> = ({
    area,
    compounds,
    properties,
    currentUser,
}) => {
    return (
        <>
            <div className=" w-full relative flex justify-center items-center">
                <div className="w-[1280px] flex justify-start items-center h-full p-2 py-4 pt-8 gap-6 z-[1]">
                    <div className=" h-[80px] w-[80px] relative p-3 bg-white rounded-full overflow-hidden border-spacing-10 border-[6px] border-slate-200">
                        <Image src={area?.image || ""} alt={area.slug} fill />
                    </div>
                    <div className="flex flex-1 flex-col gap-4 text-slate-600">
                        <div>
                            <h1 className="font-bold text-xl m-0">
                                {area?.title}
                            </h1>
                        </div>
                        <div className="flex gap-5">
                            <div>{compounds?.length || 0} كمبوند</div>
                            <div>{properties?.length || 0} وحدة</div>
                        </div>
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
                <div className=" flex flex-col justify-center items-start gap-1 my-8">
                    <div className="font-bold">
                        <h2 className="text-xl font-bold mb-4">
                            عن {area.title}
                        </h2>
                    </div>
                    <div className="w-full">
                        {parse(area.content ? area.content.trim() : "")}
                    </div>
                </div>

                <div className="my-12">
                    <h2 className="text-xl font-bold mb-4">
                        كمبوندات {area.title}
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
                            {compounds?.length &&
                                compounds.map((compound: any) => (
                                    <CompoundCard
                                        key={compound.id}
                                        slug={compound.slug}
                                        id={compound.id}
                                        title={compound.name}
                                        image={compound.mainImage}
                                        location={compound?.area?.title}
                                        developer={compound.developer}
                                        properties={compound.properties}
                                        parent="compounds"
                                    />
                                ))}
                        </div>
                    </div>
                </div>
                <div className="my-12">
                    <h2 className="text-xl font-bold mb-4">
                        وحدات {area.title}
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
                                : ""}
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default DevClient;
