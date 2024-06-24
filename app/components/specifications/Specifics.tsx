import React from "react";
import FloorPlan from "./FloorPlan";
import Map from "./Map";
import Photos from "./Photos";
import MasterPlan from "./MasterPlan";
import ModalPro from "../ModalPro";
import useModalPro from "@/app/hooks/useModalPro";

const Specifics = () => {
    const modal = useModalPro();

    return (
        <>
            <ModalPro onClose={modal.onClose} isOpen={modal.isOpen}>
                <h2>لاتتوفر معلومات حاليا :( </h2>
            </ModalPro>
            <div
                aria-label="Specifics"
                className=" flex flex-col justify-start items-start gap-3 mb-12"
            >
                <h3 className="font-bold my-2 text-xl">المواصفات</h3>
                <div className="w-full grid grid-cols-2 lg:grid-cols-5 justify-start items-center gap-6">
                    <Photos onClick={modal.onOpen} />
                    <MasterPlan onClick={modal.onOpen} />
                    <FloorPlan onClick={modal.onOpen} />
                    <Map onClick={modal.onOpen} />
                </div>
            </div>
        </>
    );
};

export default Specifics;
