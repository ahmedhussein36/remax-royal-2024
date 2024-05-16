"use client"
import Container from "@/app/components/Container";
import PropretyContacts from "@/app/components/properties/PropretyContacts";
import { SafeArea, SafeCompound, SafeDeveloper } from "@/app/types";
import Image from "next/legacy/image";
import parse from "html-react-parser";
import { MdWhatsapp } from "react-icons/md";
import { RiShareBoxLine } from "react-icons/ri";
import { useState } from "react";
import Button from "@/app/components/Button";

interface ClientProps {
    compound: SafeCompound & {
        developer: SafeDeveloper;
        area: SafeArea;
    };
}
interface PageProps {
    title: string;
    mainImage: string;
    images: string[];
    description: string;
    developer: string;
    area: string;
    size?: number;
    phone?: string;
    whatsapp?: string;
    latlong?: number;
    minPrice: number;
    maxPrice: number;
    paymentPlans?: any[];
    properties: object[];
    metaTitle?: string;
    metaDescription?: string;
    amineties?: object[];
}
const Client: React.FC<ClientProps> = ({ compound }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({
        name: "",
        phone: "",
        subject: "مشروع ات ايست الاهلي صبور",
    });

    const compoundDetails: PageProps = {
        title: compound.title,
        mainImage: compound.mainImage,
        images: compound.images,
        description: compound.content,
        developer: compound.developer.title,
        area: compound.area.title,
        size: 0,
        latlong: compound.latLong,
        minPrice: 0,
        maxPrice: 0,
        phone: "",
        whatsapp: "",
        paymentPlans: [],
        properties: [],
        metaTitle: compound?.seoDetails?.metaTitle,
        metaDescription: compound?.seoDetails?.metaDescription,
        amineties: [],
    };

    const handelChange = (e: any) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const { name, phone, subject } = data;
    const onSubmit = async (e: any) => {
        e.preventDefault();
        try {
            if (name === "" || phone === "") {
                alert("يجب ملئ جميع الحقول");
            } else if (phone.length < 11 || phone.length > 11) {
                alert("رقم الهاتف يجب ان يكون 11 رقم");
            } else if (name.length < 3) {
                alert("الاسم يجب ان يكون اكبر من 3 حروف");
            } else {
                setIsLoading(true);
                const response = await fetch(
                    "https://v1.nocodeapi.com/ahmedhussein36/google_sheets/fOUAbkxGGwjmiLnK?tabId=data",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },

                        body: JSON.stringify([
                            [name, phone, new Date().toLocaleString(), subject],
                        ]),
                    }
                );

                await response.json();
                setIsLoading(false);
                setData({ ...data, name: "", phone: "" });
                alert("تم تقديم طلبك بنجاح");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const formatNumber = (number: number | undefined): string => {
        if (!number) return String(0);
        if (number >= 1000) {
            return number.toLocaleString();
        } else {
            return number.toString();
        }
    };

    const minPriceInt = Math.floor(compoundDetails.minPrice || 0);

    const formattedMinPrice = formatNumber(minPriceInt) || null;
    const formatmaxPrice = formatNumber(compoundDetails.maxPrice) || null;

    const placeholder = "/assets/images/placeholder2.png";
    return (
        <>
            <Container>
                <div className=" flex flex-col md:flex-row justify-between items-start gap-4 my-8">
                    <div className="flex flex-col justify-center items-start w-full md:w-2/3 h-fit gap-4">
                        <div className="w-full h-[300px] md:h-[450px] rounded-lg overflow-hidden relative">
                            <Image
                                src={compoundDetails.mainImage || placeholder}
                                layout="fill"
                                priority
                                objectFit="cover"
                                alt={compoundDetails.title}
                            />{" "}
                        </div>
                        <div className=" flex flex-col md:flex-row justify-start items-center gap-4">
                            <div className="relative aspect-square w-[70px] rounded-full overflow-hidden border-4 border-slate-200">
                                <Image
                                    src={
                                        compound.developer.image || placeholder
                                    }
                                    layout="fill"
                                    loading="lazy"
                                    objectFit="cover"
                                    alt={compound.developer.title}
                                />
                            </div>
                            <div className="flex flex-col justify-center items-start gap-3">
                                <div>
                                    <h1 className="text-2xl font-bold">
                                        {compoundDetails.title}
                                    </h1>
                                </div>
                                <div className=" flex flex-col md:flex-row gap-2 w-full">
                                    <p>{compoundDetails.area}</p>
                                    <div className=" flex gap-2">
                                        <span>من تطوير</span>
                                        <span className=" rounded-lg bg-slate-100 px-3">
                                            {compoundDetails.developer}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>من {formatNumber(compoundDetails.minPrice)} إلى {formatNumber(compoundDetails.maxPrice)}</div>
                    </div>
                    <div className="w-full md:w-1/3 h-full">
                        <div className=" w-full h-full rounded-lg border-2 p-4">
                            <h4 className=" font-bold text-xl mb-6">
                                خطط السداد
                            </h4>
                            <div className=" flex flex-wrap justify-center items-center gap-5">
                                {compoundDetails.paymentPlans &&
                                    compoundDetails?.paymentPlans.map(
                                        (plan, i) => (
                                            <div
                                                key={i}
                                                className="w-full flex flex-col md:flex-row justify-center items-center gap-2"
                                            >
                                                <div className="w-full flex justify-between items-center ">
                                                    <div
                                                        className="w-[45%] flex flex-col justify-center items-center gap-2 
                                                rounded-lg p-4 bg-indigo-50 border border-indigo-600"
                                                    >
                                                        <span className=" font-extrabold text-6xl text-indigo-600">
                                                            {plan?.downPayment}
                                                            <span className=" text-lg font-medium">
                                                                %
                                                            </span>
                                                        </span>
                                                        <span className=" text-indigo-600">
                                                            مقدم
                                                        </span>
                                                    </div>
                                                    <div
                                                        className="w-[45%] flex flex-col justify-center items-center gap-2 
                                                rounded-lg p-4 bg-indigo-50 border border-indigo-600"
                                                    >
                                                        <span className=" font-extrabold text-6xl text-indigo-600">
                                                            {
                                                                plan?.installmentPeriod
                                                            }
                                                        </span>
                                                        <span className=" text-indigo-700">
                                                            سنوات
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    )}

                                <div className="w-full flex flex-col gap-2 justify-center items-center my-6">
                                    <span>سعر يبدأ من</span>
                                    <span className=" font-bold text-3xl mx-2">
                                        {formattedMinPrice} ج.م
                                    </span>
                                </div>
                                <div className=" flex-1 flex justify-center items-center my-6 ">
                                    <PropretyContacts
                                        phone={compoundDetails?.phone}
                                        whatsApp={compoundDetails?.whatsapp}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="m-8"></hr>

                <div className=" grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-12">
                    <div className=" col-span-full md:col-span-2 w-full">
                        <div className=" flex flex-col justify-center items-start gap-3">
                            <div className=" text-xl font-bold my-4">
                                <h2>نبذة عن المشروع</h2>
                            </div>
                            <div className=" border-blue-200 border rounded-lg p-4 bg-blue-50 w-full">
                                {parse(compound.description)}
                            </div>
                        </div>

                        <div className="my-12">
                            <h2 className="text-xl font-bold mb-4">
                                تفاصيل المشروع
                            </h2>
                            <div className=" w-full">
                                <table className=" w-full ">
                                    <tbody>
                                        <tr className="">
                                            <td className=" p-2">
                                                اسم المشروع
                                            </td>
                                            <td>{compoundDetails.title}</td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 w-[120px]">
                                                المطور العقاري
                                            </td>
                                            <td className=" p-2">
                                                {compoundDetails.developer}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2">الموقع</td>
                                            <td>{compoundDetails.area}</td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2">الوحدات</td>
                                            <td>
                                                {compoundDetails?.properties.join(
                                                    " - "
                                                )}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2">المساحة</td>
                                            <td>
                                                {" "}
                                                {compoundDetails?.size} فداناً
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2">التسليم</td>
                                            <td>يبدأ عام 2027</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="my-12">
                            {parse(compoundDetails.description)}
                        </div>
                    </div>
                    <div
                        id="contacts"
                        className=" w-full col-span-full md:col-span-1 p-0 lg:p-4 relative "
                    >
                        <div className="w-full sticky top-0 pt-8">
                            <div className=" text-xl font-bold mb-4">
                                للحجز و الاستفسار
                            </div>
                            <form
                                onSubmit={onSubmit}
                                id="form"
                                className=" w-full border-2 flex flex-col gap-3 p-4 rounded-lg bg-slate-100"
                            >
                                <div className="w-full flex flex-col justify-center items-start gap-2">
                                    <label htmlFor="name">الاسم*</label>
                                    <input
                                        name="name"
                                        value={name}
                                        onChange={handelChange}
                                        className="w-full border p-2 py-4 rounded-md"
                                        type="text"
                                        placeholder="ادخل الاسم"
                                        min={3}
                                        max={50}
                                        required
                                    />
                                </div>
                                <div className="w-full flex flex-col justify-center items-start gap-2">
                                    <label htmlFor="phone">رقم الهاتف*</label>
                                    <input
                                        name="phone"
                                        value={phone}
                                        onChange={handelChange}
                                        className="w-full border p-2 py-4 rounded-md"
                                        id="phone"
                                        type="tel"
                                        placeholder="ادخل رقم هاتفك"
                                        min={11}
                                        max={11}
                                        required
                                    />
                                </div>

                                <div className="w-full flex flex-col justify-center items-start gap-2">
                                    <Button
                                        label={`${
                                            isLoading ? "جاري الارسال" : "ارسال"
                                        }`}
                                        disabled={isLoading}
                                    />
                                </div>
                            </form>
                            <div className=" flex-1 flex justify-center items-center my-6 ">
                                <PropretyContacts
                                    phone={compoundDetails.phone}
                                    whatsApp={compoundDetails.whatsapp}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="md:hidden w-full m-2 fixed bottom-0 bg-slate-100 rounded-lg mb-0 shadow-xl p-4 flex justify-between items-center gap-4">
                <div
                    onClick={() => {
                        open(`https://wa.me/20225388918`);
                    }}
                    className=" flex justify-center items-center gap-3 w-1/2 rounded-lg bg-green-600 text-white p-2 text-center"
                >
                    <MdWhatsapp color="#fff" size={30} />
                    تواصل
                </div>
                <a
                    href="#contacts"
                    className="flex justify-center items-center gap-3 w-1/2 rounded-lg bg-blue-600 text-white p-2 text-center"
                >
                    <RiShareBoxLine color="#fff" size={30} />
                    تواصل معنا
                </a>
            </div>
        </>
    );
};

export default Client;
