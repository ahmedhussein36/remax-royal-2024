("");
import React, { FC, useState } from "react";
import Map from "./Map";
import Photos from "./Photos";
import ModalPro from "../ModalPro";
import useModalPro from "@/app/hooks/useModalPro";
import dynamic from "next/dynamic";
import MasterPlan from "./MasterPlan";
import FloorPlan from "./FloorPlan";

const Mapbox = dynamic(() => import("../Map/Mapbox"), {
    ssr: false,
});

const FloorPlanImage = dynamic(() => import("../Map/FloorPlanImage"), {
    ssr: false,
});
const MasterPlanImage = dynamic(() => import("../Map/MasterPlanImage"), {
    ssr: false,
});

interface SpecificsProps {
    floorPlan?: string;
    masterPlan?: string;
    openGallary: () => void;
    lat?: number;
    lng?: number;
    placeName?: string;
}

const Specifics: FC<SpecificsProps> = ({
    floorPlan,
    masterPlan,
    openGallary,
    lat,
    lng,
    placeName,
}) => {
    const [gallery, setGallery] = useState(false);
    const modal = useModalPro();
    const [content, setContent] = useState<any>();
    const map = (
        <Mapbox
            lat={lat || 30.031250221350955}
            lng={lng || 31.488844743431073}
            placeName={`${placeName}` || ""}
        />
    );
    const floorPlanImage = <FloorPlanImage floorPlan={floorPlan || ""} />;
    const masterPlanImage = <MasterPlanImage masterPlan={masterPlan || ""} />;

    const handelMap = () => {
        setGallery(false);
        setContent(null);
        setContent(map);
        modal.onOpen();
    };

    const handelfloorPlan = () => {
        setGallery(false);
        setContent(null);
        setContent(floorPlanImage);
        modal.onOpen();
    };

    const handeMasterPlan = () => {
        setGallery(false);
        setContent(null);
        setContent(masterPlanImage);
        modal.onOpen();
    };

    return (
        <>
            <ModalPro
                onClose={modal.onClose}
                isOpen={modal.isOpen}
                gallery={gallery}
            >
                {content}
            </ModalPro>
            <div
                aria-label="Specifics"
                className=" flex flex-col justify-start items-start gap-3 mb-12"
            >
                <h3 className="font-bold my-2 text-xl">المواصفات</h3>
                <div className="w-full grid grid-cols-2 lg:grid-cols-5 justify-start items-center gap-6">
                    <Photos onClick={openGallary} />
                    {masterPlan && <MasterPlan onClick={handeMasterPlan} />}
                    {floorPlan && <FloorPlan onClick={handelfloorPlan} />}
                    <Map onClick={handelMap} />
                </div>
            </div>
        </>
    );
};

export default Specifics;
