import React from "react";
import Heading from "./Heading";
import PropretyContacts from "./properties/PropretyContacts";

const Description = ({
    title,
    subtitle,
}: {
    title: string;
    subtitle: string;
}) => {
    return (
        <div className=" flex flex-col gap-4 justify-start items-start">
            <h3 className=" m-0 text-xl font-bold text-white">{title}</h3>
            <p className=" m-0 text-lg font-medium text-white">{subtitle}</p>
        </div>
    );
};

const Promotion = () => {
    return (
        <>
            <div className=" h-[300px] w-full bg-green-700 rounded-lg flex justify-start items-center ">
                <div className=" flex flex-col justify-between items-start gap-8 p-8">
                    <Description
                        title="لاتفوت المشروعات الجديدة"
                        subtitle="احجز وحدتك بالمشروعات الجديدة بأفضل خطط السداد وأقل مقدم وتقسيط يصل إلى 8 سنوات"
                    />
                    <PropretyContacts
                        phone="+201500366642"
                        whatsApp="+201500366642"
                    />
                </div>
                <div className=" w-1/2 h-full promotion bg-left bg-opacity-30 bg-blend-screen"></div>
            </div>
        </>
    );
};

export default Promotion;
