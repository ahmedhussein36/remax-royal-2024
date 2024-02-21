"use client";

import Button from "@/app/components/Button";
import ClientOnly from "@/app/components/ClientOnly";
import Container from "@/app/components/Container";
import PropretyContacts from "@/app/components/properties/PropretyContacts";
import Image from "next/legacy/image";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function Page() {
    const [data, setData] = useState({
        name: "",
        phone: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [succes, setSucces] = useState("");

    const { name, phone } = data;

    const handelChange = (e: any) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e: any) => {
        e.preventDefault();
        try {
            if (name === "" || phone === "") {
                setError("يجب ملئ جميع الحقول");
            } else if (phone.length < 11 || phone.length > 11) {
                setError("رقم الهاتف يجب ان يكون 11 رقم");
            } else if (name.length < 3) {
                setError("الاسم يجب ان يكون اكبر من 3 حروف");
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
                            [name, phone, new Date().toLocaleString()],
                        ]),
                    }
                );

                await response.json();
                setIsLoading(false);
                setData({ ...data, name: "", phone: "" });
                setSucces("شكرا لك، تم ارسال طلبك بنجاح");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const compound = {
        id: 2,
        slug: "",
        image: "/images/lagoon_beach_park_1.jpg",
        name: " أليفا ماونتن فيو",
        phone: "20225388918",
        whatsApp: "20225388918",
        discription: "",
        developer: {
            image: "/images/MVLogo-Yellow.svg",
            name: " ماونتن فيو للتطوير العقاري",
        },
        area: {
            name: "المستقبل سيتي - القاهرة الجديدة",
        },
        images: [],
        location: "المستقبل سيتي - القاهرة الجديدة",
        properties: ["Standalone", "Townhouse", "I-villas", "Apartments"],
        size: 638,
        sizeByMeter: 665280,
        paymentPlans: {
            minPrice: 8100000,
            maxPrice: null,
            installmentPeriod: 8,
            installmentValue: null,
            downPayment: 5,
        },
        amenities: [
            "كلوب هاوس",
            "خدمات أمنية",
            "حديقة مركزية",
            "ملاعب رياضية",
            "ملاعب تنس",
            "ملاعب كرة قدم",
            "هايبر ماركت",
            "صالات رياضية",
            "حمامات سباحة",
            "مساحات خضراء",
            "منطقة تجارية",
            "مطاعم وكافيهات",
            "مساحات ترفيهية للأطفال",
            "مراكز تجميل",
            "خدمات طبية",
            "صيدليات",
            "جراج خاص للسيارات",
            "بوابات إلكترونية",
        ],
    };

    const formatNumber = (number: number | undefined): string => {
        if (!number) return String(0);
        if (number >= 1000) {
            return number.toLocaleString();
        } else {
            return number.toString();
        }
    };

    const minPriceInt = Math.floor(compound.paymentPlans.minPrice || 0);

    const formattedMinPrice = formatNumber(minPriceInt) || null;

    const placeholder = "/assets/images/placeholder2.png";

    return (
        <ClientOnly>
            <Container>
                <div className=" flex flex-col md:flex-row justify-between items-start gap-4 my-8">
                    <div className="relative flex justify-center items-center w-full md:w-2/3 h-[35vh] md:h-[55vh] rounded-lg overflow-hidden ">
                        <Image
                            src={compound.image || placeholder}
                            layout="fill"
                            priority
                            objectFit="cover"
                            alt={compound.name}
                        />
                    </div>
                    <div className="w-full md:w-1/3 h-full">
                        <div className=" w-full h-full rounded-lg border-2 p-4">
                            <h4 className=" font-bold text-xl mb-6">
                                خطط السداد
                            </h4>
                            <div className=" flex flex-wrap justify-center items-center gap-5">
                                <div
                                    className="w-[30%] flex flex-col justify-center items-center gap-2 
                                                rounded-lg p-4 bg-indigo-50 border border-indigo-600"
                                >
                                    <span className=" font-extrabold text-6xl text-indigo-600">
                                        {compound.paymentPlans.downPayment}
                                        <span className=" text-lg font-medium">
                                            %
                                        </span>
                                    </span>
                                    <span className=" text-indigo-600">
                                        مقدم
                                    </span>
                                </div>
                                <div
                                    className="w-[30%] flex flex-col justify-center items-center gap-2 
                                                rounded-lg p-4 bg-indigo-50 border border-indigo-600"
                                >
                                    <span className=" font-extrabold text-6xl text-indigo-600">
                                        {compound.paymentPlans.downPayment}
                                        <span className=" text-lg font-medium">
                                            %
                                        </span>
                                    </span>
                                    <span className=" text-indigo-600">
                                        بعد 6 شهور
                                    </span>
                                </div>

                                <div
                                    className="w-[30%] flex flex-col justify-center items-center gap-2 
                                                rounded-lg p-4 bg-indigo-50 border border-indigo-600"
                                >
                                    <span className=" font-extrabold text-6xl text-indigo-600">
                                        {
                                            compound.paymentPlans
                                                .installmentPeriod
                                        }
                                    </span>
                                    <span className=" text-indigo-700">
                                        سنوات
                                    </span>
                                </div>
                                <div className="w-full flex flex-col gap-2 justify-center items-center my-6">
                                    <span>سعر يبدأ من</span>
                                    <span className=" font-bold text-3xl mx-2">
                                        {formattedMinPrice} ج.م
                                    </span>
                                </div>
                                <div className=" flex-1 flex justify-center items-center my-6 ">
                                    <PropretyContacts
                                        phone={compound.phone}
                                        whatsApp={compound.whatsApp}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" flex flex-col md:flex-row justify-start items-center gap-4">
                    <div className="relative aspect-square w-[70px] rounded-full overflow-hidden border-4 border-slate-200">
                        <Image
                            src={compound.developer.image || placeholder}
                            layout="fill"
                            loading="lazy"
                            objectFit="cover"
                            alt={compound.developer.name}
                        />
                    </div>
                    <div className="flex flex-col justify-center items-start gap-3">
                        <div>
                            <h1 className="text-2xl font-bold">
                                {compound.name} {compound.location}
                            </h1>
                        </div>
                        <div className=" flex flex-col md:flex-row gap-2 w-full">
                            <p>{compound.area.name}</p>
                            <div className=" flex gap-2">
                                <span>من تطوير</span>
                                <span className=" rounded-lg bg-slate-100 px-3">
                                    {compound.developer.name}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {compound.paymentPlans.minPrice && (
                    <div className="mr-24 mt-4">
                        سعر يبدأ من
                        <span className=" font-bold text-2xl mx-2">
                            {formattedMinPrice} ج.م
                        </span>
                        {/* إلى
                        <span className=" font-bold text-2xl mx-2">
                            {formatmaxPrice}
                        </span>
                        جنيه */}
                    </div>
                )}

                <hr className="m-8"></hr>

                <div className=" grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-12">
                    <div className=" col-span-full md:col-span-2 w-full">
                        <div className=" flex flex-col justify-center items-start gap-3">
                            <div className=" text-xl font-bold my-4">
                                <h2>
                                    عن مشروع اليفا ماونتن فيو مدينة المستقبل
                                </h2>
                            </div>
                            <div className=" border-blue-200 border rounded-lg p-4 bg-blue-50 w-full">
                                <p className=" leading-7">
                                    أطلقت ماونتن فيو مشروعها الجديد أليفا ماونتن
                                    فيو المستقبل سيتي ALIVA على مساحة عملاقة
                                    بلغت 638 فدان، ليكون بمثابة مجتمع سكني متطور
                                    ومتكامل تبدو فيه الحياة مختلفة، فليس فقط
                                    مكان تختاره للعيش فيه، إنه مكان لاختيار نمط
                                    الحياة؛ حيث تعد شركة ماونتن فيو عملائها
                                    بأسلوب حياة أفضل لجميع أفراد الأسرة. وبناء
                                    على ذلك، فإن كمبوند أليفا مستقبل سيتي مليء
                                    بوسائل الراحة بما في ذلك على سبيل المثال لا
                                    الحصر نهر متميز يمنح الوحدات إطلالات خلابة،
                                    ومنطقة خدمية متعددة الاستخدامات، ومساحات
                                    خضراء شاسعة، ومواقف للسيارات، وطريق دائري
                                    يربط بين الأحياء. ﻿ باعتباره أكبر مشروع في
                                    مدينة المستقبل، يضم مشروع أليفا ماونتن فيو 7
                                    حدائق سكنية، لكل منها طابعها الخاص.
                                </p>
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
                                            <td>
                                                اليفا ماونتن فيو مدينة المستقبل
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2 w-[120px]">
                                                المطور العقاري
                                            </td>
                                            <td className=" p-2">
                                                {compound.developer.name}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2">الموقع</td>
                                            <td>{compound.location}</td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2">الوحدات</td>
                                            <td>
                                                {compound.properties.join(
                                                    " - "
                                                )}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2">المساحة</td>
                                            <td>{compound.size} فدان </td>
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
                            <h2 className="text-xl font-bold my-2">
                                موقع اليفا ماونتن فيو مدينة المستقبل
                            </h2>
                            <div className="py-4 mb-8">
                                <p className=" leading-7">
                                    ختارت شركة ماونتن فيو مدينة المستقبل لتنفيذ
                                    مشروعها الجديد، على مقربة من مناطق الجذب
                                    الرئيسية والمعالم الهام، كما يمكن الوصول إلى
                                    Aliva Mountain View Mostakbal City بسهولة من
                                    جميع أنحاء العاصمة بفضل قربه من الطرق
                                    والمحاول الهامة، حيث يمكنك الوصول إلى:
                                </p>
                            </div>
                            <div className=" w-full h-[400px] relative mb-12">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51212.880295206305!2d31.645045025546292!3d30.053998609247664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1457f523fa4d9463%3A0x5ed4edc3a0122615!2sMountain%20View%20ALIVA!5e0!3m2!1sen!2seg!4v1708508752186!5m2!1sen!2seg"
                                    width={"100%"}
                                    height={"100%"}
                                    style={{ border: 2 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                            <div className=" my-6">
                                <h4 className=" text-xl font-bold my-4">
                                    أهم المحاور والمناطق القريبة من اليفا ماونتن
                                    فيو
                                </h4>
                                <ul className=" flex flex-col gap-3 p-4">
                                    <li className=" list-disc">
                                        5 دقائق من مدينتي
                                    </li>
                                    <li className=" list-disc">
                                        5 دقائق من العاصمة الإدارية الجديدة
                                    </li>
                                    <li className=" list-disc">
                                        18 دقيقة من مدينة القاهرة الجديدة
                                    </li>
                                    <li className=" list-disc">
                                        21 دقيقة من مطار القاهرة الدولي
                                    </li>
                                    <li className=" list-disc">
                                        بالإضافة إلى أنه يقع بجوار مشروع حسن
                                        علام “هاب تاون”
                                    </li>
                                </ul>
                            </div>
                            <div className="my-4 w-full border-2 rounded-lg bg-slate-700 p-6 ">
                                <div className="w-full text-center font-bold text-white">
                                    تواصل معنا لمعرفة احدث الأسعار وأفضل أنظمة
                                    السداد
                                </div>
                                <div className="w-full flex-1 flex justify-center items-center my-6 ">
                                    <PropretyContacts
                                        phone={compound.phone}
                                        whatsApp={compound.whatsApp}
                                    />
                                </div>
                            </div>
                            <div className=" my-4">
                                <h4 className=" text-xl font-bold mt-12">
                                    تصميم مشروع اليفا ماونتن فيو
                                </h4>

                                <div className=" w-fill aspect-video relative bg-slate-100 rounded-lg overflow-hidden my-8">
                                    <Image
                                        src={"/images/dfrmv.png"}
                                        priority
                                        layout="fill"
                                        objectFit="cover"
                                        alt="كمبوند ذا كريست القاهرة الجديدة"
                                    />
                                </div>
                                <p className="my-2 leading-7">
                                    تمتاز وحدات كمبوند اليفا مستقبل سيتي بتصميم
                                    متميز حيث تتوفر خيارات متعددة للسكن تشمل
                                    الوحدات الأرضية والوحدات العلوية المكونة من
                                    3 أو 4 أو 5 طوابق علوية، تم تخصيص مسافة
                                    وقدرها 20 مترًا بين الوحدات لتوفير خصوصية
                                    فريدة لكل وحدة سكنية، مما يسمح للسكان
                                    بالاستمتاع بالهدوء والاسترخاء في محيطهم.
                                </p>
                                <p className="my-2 leading-7">
                                    تعكس جودة التصميم المعماري واختيار أفضل
                                    المهندسين والمصممين تفرد مشروع اليفا ماونتن
                                    فيو مستقبل سيتي، تلك التحفة الفنية تعكس رؤية
                                    واضحة للتطوير العقاري والالتزام بتقديم أعلى
                                    مستويات الجودة والجمالية، شركة ماونتن فيو
                                    تتمتع بسمعة قوية في عالم العقارات وتسعى
                                    دائمًا لتحقيق التميز في جميع مشاريعها.
                                </p>
                                <p className="my-2 leading-7">
                                    ومن أجل تعزيز جودة الحياة في اليفا ماونتن
                                    فيو مستقبل سيتي ، تم تخصيص مساحات كبيرة
                                    للمساحات الخضراء والمرافق، تشمل هذه المساحات
                                    الخضراء 7 حدائق سكنية مميزة تحمل أسماءً تعبر
                                    عن طبيعتها:
                                </p>
                                <ul className=" flex flex-col gap-3 p-4">
                                    <li className=" list-disc">
                                        حديقة النهر : توفير جو هادئ وجميل يطل
                                        على مياه النهر
                                    </li>
                                    <li className=" list-disc">
                                        حديقة الحقل : مساحة مفتوحة وواسعة تضم
                                        أماكن للنزهات والأنشطة الرياضية.
                                    </li>
                                    <li className=" list-disc">
                                        حديقة النادي: مكان مخصص للأنشطة
                                        الاجتماعية والترفيهية.
                                    </li>
                                    <li className=" list-disc">
                                        اللاجون: بحيرة جميلة تضم مناظر طبيعية
                                        رائعة.
                                    </li>
                                    <li className=" list-disc">
                                        الحديقة المركزية: مركز الحياة الاجتماعية
                                        والنشاطات المجتمعية.
                                    </li>
                                    <li className=" list-disc">
                                        5.1 حديقة : مكان يمكن فيه الاستمتاع
                                        بالهدوء والاسترخاء.
                                    </li>
                                </ul>
                            </div>

                            <div className=" w-fill aspect-video relative bg-gray-500 rounded-lg overflow-hidden my-8">
                                <iframe
                                    width={"100%"}
                                    height={"100%"}
                                    src="https://www.youtube.com/embed/PZA9OVEf7FI"
                                    title="أليفا ماونتن فيو المستقبل سيتي   القاهرة الجديدة"
                                    allowFullScreen={false}
                                    loading="lazy"
                                />
                            </div>

                            <div className=" my-12">
                                <h4 className=" text-xl font-bold my-4">
                                    وحدات متنوعة في كمبوند اليفا ماونتن فيو
                                </h4>
                                <p className=" leading-7 my-4"></p>
                                <div className=" w-full aspect-video relative bg-gray-500 rounded-lg overflow-hidden my-8">
                                    <Image
                                        src={"/images/pricing-start.jpeg"}
                                        priority
                                        layout="fill"
                                        objectFit="cover"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className=" my-12">
                                <h4 className=" text-xl font-bold my-4">
                                    الأسعار وأنظمة السداد في كمبوند اليفا ماونتن
                                </h4>
                                <p className=" leading-7 my-4">
                                    يُطلب مقدم بنسبة 5% فقط من قيمة الوحدة
                                    السكنية، ويمكن تسديدباقي السعر على مدى 8
                                    سنوات. جديه الحجز:
                                    <li>20,000 جنيه مصري للشقق.</li>
                                    <li>30,000 جنيه مصري للآي فيلا.</li>
                                    <li>
                                        50,000 جنيه مصري لتاون هاوس والفيلات.
                                    </li>
                                </p>
                            </div>
                            <div className=" w-full border-2 rounded-lg bg-slate-700 p-6 ">
                                <div className="w-full text-center font-bold text-white">
                                    تواصل معنا لمعرفة احدث الأسعار وأفضل أنظمة
                                    السداد
                                </div>
                                <div className="w-full flex-1 flex justify-center items-center my-6 ">
                                    <PropretyContacts
                                        phone={compound.phone}
                                        whatsApp={compound.whatsApp}
                                    />
                                </div>
                            </div>

                            <div className=" flex flex-col justify-center items-start gap-3">
                                <div className=" text-xl font-bold my-4">
                                    <h2>
                                        اسباب الاستثمار في كمبوند اليفا المستقبل
                                        سيتي
                                    </h2>
                                </div>
                                <div className=" w-full">
                                    <p className=" leading-7 my-4">
                                        <span className=" font-bold">
                                            موقع استراتيجي:
                                        </span>
                                        <br />
                                        يقع اليفا مستقبل سيتي في واحدة من أكبر
                                        وجهات مدينة المستقبل بمساحة تزيد عن 638
                                        فدان، مما يجعلها وجهة استثمارية مهمة
                                        ومتميزة.
                                    </p>

                                    <p className=" leading-7 my-4">
                                        <span className=" font-bold">
                                            مدينة ذكية وصديقة للبيئة:
                                        </span>
                                        <br />
                                        يتميز كمبوند اليفا مستقبل سيتي بأنه
                                        مدينة ذكية تتضمن تكنولوجيا حديثة تجعل
                                        حياة السكان أكثر راحة وأمانًا، بالإضافة
                                        إلى ذلك، يولي اهتمامًا كبيرًا لجعل
                                        المشروع صديقًا للبيئة.
                                    </p>

                                    <p className=" leading-7 my-4">
                                        <span className=" font-bold">
                                            الحدائق والمساحات الخضراء:
                                        </span>
                                        <br />
                                        جميع الحدائق متصلة ببعضها البعض في
                                        كمبوند اليفا ماونتن فيو مدينة المستقبل ،
                                        وتم تصميم كل حديقة بشكل يتناسب مع تجربة
                                        فريدة، مما يسمح للسكان بالاستمتاع
                                        بالهدوء والطبيعة.
                                    </p>

                                    <p className=" leading-7 my-4">
                                        <span className=" font-bold">
                                            متنوع وحدات السكن:
                                        </span>{" "}
                                        <br />
                                        يتيح كمبوند اليفا المستقبل سيتي الاختيار
                                        من بين مجموعة متنوعة من وحدات السكن
                                        بمساحات مختلفة تناسب متطلبات متنوعة.
                                        كثافة منخفضة: تم تصميم المشروع بكثافة
                                        منخفضة مما يسمح بالمزيد من الخصوصية
                                        والمساحات الخضراء.
                                    </p>
                                    <p className=" leading-7 my-4">
                                        <span className=" font-bold">
                                            توزيع الوحدات:
                                        </span>
                                        <br />
                                        يوفر اليفا ماونتن فيو مستقبل سيتي
                                        توزيعًا متنوعًا للوحدات بأعداد متساوية
                                        بين الأدوار المختلفة. معدلات عائد
                                        استثماري جيدة: من المتوقع أن يوفر مشروع
                                        اليفا مستقبل سيتي فرصة استثمارية جيدة
                                        بفضل موقعه وتصميمه الفريد.
                                    </p>

                                    <p className=" leading-7 my-4">
                                        <span className=" font-bold">
                                            قوة الشركة المطورة:
                                        </span>
                                        <br />
                                        شركة ماونتن فيو للتطوير العقاري تتمتع
                                        بسمعة قوية في سوق العقارات وتاريخ حافل
                                        في تقديم مشاريع ناجحة وجودة عالية.
                                    </p>
                                </div>
                            </div>

                            <div className=" py-4 my-8">
                                <h4 className=" text-xl font-bold mt-4">
                                    أهم الخدمات والمرافق في كمبوند اليفا ماونتن
                                </h4>
                                <p className=" leading-7 my-4">
                                    يوفر مشروع اليفا مستقبل سيتي مجموعة واسعة من
                                    الخدمات لتحسين جودة حياة السكان وضمان تجربة
                                    سكنية مريحة ومتكاملة، تشمل هذه الخدمات:
                                </p>
                            </div>
                            <div className=" w-full grid grid-cols-2 md:grid-cols-4 gap-2 ">
                                {compound.amenities.map((item, i) => (
                                    <div
                                        className="border-2 p-8 bg-slate-100 text-center
                                        hover:bg-slate-500 hover:text-slate-50 transition-all"
                                        key={i}
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full col-span-full md:col-span-1 p-0 lg:p-4 relative ">
                        <div className="w-full sticky top-0 pt-8">
                            {error && (
                                <div className="w-full bg-red-100 text-red-600 p-4 rounded-lg mb-4">
                                    {error}
                                </div>
                            )}
                            {succes && (
                                <div className="w-full bg-green-100 text-green-600 p-4 rounded-lg mb-4">
                                    <div className=" flex w-full justify-center">
                                        <span>
                                            <FaCheckCircle
                                                color="green"
                                                size={20}
                                            />
                                        </span>
                                        <span className="mx-2"> {succes}</span>
                                    </div>

                                    <p className=" text-center my-4">
                                        سيقوم أحد ممثلينا التواصل معكم في أقرب
                                        وقت.
                                    </p>
                                </div>
                            )}
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
                                    phone={compound.phone}
                                    whatsApp={compound.whatsApp}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </ClientOnly>
    );
}
