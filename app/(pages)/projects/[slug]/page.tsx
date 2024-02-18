"use client";

import Button from "@/app/components/Button";
import ClientOnly from "@/app/components/ClientOnly";
import Container from "@/app/components/Container";
import PropretyContacts from "@/app/components/properties/PropretyContacts";
import { el } from "date-fns/locale";
import { on } from "events";
import Image from "next/legacy/image";
import { useState } from "react";

export default function Page() {
    const [data, setData] = useState({
        name: "",
        phone: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const { name, phone } = data;

    const handelChange = (e: any) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

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
                            [name, phone, new Date().toLocaleString()],
                        ]),
                    }
                );

                await response.json();
                setIsLoading(false);
                setData({ ...data, name: "", phone: "" });
                alert("تم ارسال البيانات بنجاح");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const compound = {
        id: 1,
        slug: "",
        image: "/images/كمبوند-ذا-كريست-القاهرة-الجديدة-Compound-The-Crest-New-Cairo.webp",
        name: " كمبوند ذا كريست القاهرة الجديدة",
        phone: "20225388918",
        whatsApp: "20225388918",
        discription: "",
        developer: {
            image: "/images/il-cazar-400xauto.png",
            name: "الكازار للتطوير العقاري",
        },
        area: {
            name: "التجمع الخامس بالقاهرة الجديدة",
        },
        images: [],
        location: "التجمع الخامس - القاهرة الجديدة",
        properties: ["فلل", "شقق", "دوبلكس "],
        size: 158,
        sizeByMeter: 665280,
        paymentPlans: {
            minPrice: 7000000,
            maxPrice: null,
            installmentPeriod: 7,
            installmentValue: null,
            downPayment: 5,
        },
        amenities: [
            "كلوب هاوس",
            "خدمات أمنية",
            "أماكن ترفيهية",
            "ملاعب رياضية",
            "ملاعب بادل تنس",
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
                                    className="w-[45%] flex flex-col justify-center items-center gap-2 
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
                                    className="w-[45%] flex flex-col justify-center items-center gap-2 
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
                                {compound.name}
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
                                <h2>نبذة عن المشروع</h2>
                            </div>
                            <div className=" border-blue-200 border rounded-lg p-4 bg-blue-50 w-full">
                                <p className=" leading-7">
                                    كمبوند ذا كريست القاهرة الجديدة هو مشروع
                                    سكني متكامل، وهو أحد مشاريع شركة الكازار
                                    للتطوير العقاري الرائدة في هذا المجال منذ
                                    سنوات عديدة والتي يتميز مشاريعها بموقعها
                                    الاستراتيجي في التجمع الخامس وهي واحدة من
                                    أرقى المناطق السكنية. بالإضافة إلى ذلك
                                    التصميمات الهندسية الفاخرة التي يتمتع بها
                                    the crest مع وجود المساحات الكبيرة التي تخدم
                                    وجود العديد من الوحدات السكنية ذات المساحات
                                    المتنوعة لاختيار ما يناسب احتياجات العملاء
                                    والمستثمرين. يقع ذا كريست بجانب أكثر
                                    المشروعات السكنية والخدمات التجارية التي تصل
                                    اهمية كبري في تلك المنطقة، بالاضافة الي
                                    قربها من بعض المحاور والطرق الرئيسية، علاوة
                                    على ذلك تقديم هذه الوحدات بباقة مميزة من
                                    الأسعار التنافسية وانظمة السداد مرنة التي
                                    تتمثل في مقدم تعاقد 5% وتقسيط على 7 سنوات.
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
                                                {compound.name} The Crest - New
                                                Cairo
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
                                            <td>فلل - شقق - دوبلكس</td>
                                        </tr>
                                        <tr>
                                            <td className=" p-2">المساحة</td>
                                            <td>158 فدان (66 ألف متر مربع)</td>
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
                                موقع كمبوند ذا كريست القاهرة الجديدة
                            </h2>
                            <div className="py-4 mb-8">
                                <p className=" leading-7">
                                    حرص المطور العقاري على أن يتمتع المشروع
                                    بموقع استراتيجي فريد في التجمع الخامس، وذلك
                                    لقربه من أهم المناطق الحيوية والطرق الرئيسية
                                    والمحاور الهامة مثل محور جمال عبد الناصر
                                    ومحور محمد نجيب، مما يسهل تحركات السكان
                                    للوصول إلى وجهتك في أقل وقت ممكن.
                                </p>
                            </div>
                            <div className=" w-full h-[400px] relative mb-12">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4672.872176301292!2d31.54264700171324!3d29.965201142298017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145821654194b525%3A0x5c430afe7d8ba4c1!2sTHE%20CREST%20IL%20CAZAR!5e0!3m2!1sen!2seg!4v1708083874667!5m2!1sen!2seg"
                                    style={{ border: "2px" }}
                                    width={"100%"}
                                    height={"100%"}
                                    loading="lazy"
                                ></iframe>
                            </div>
                            <div className=" my-6">
                                <h4 className=" text-xl font-bold my-4">
                                    أهم المحاور والمناطق القريبة من the crest
                                    new cairo
                                </h4>
                                <ul className=" flex flex-col gap-3 p-4">
                                    <li className=" list-disc">
                                        محاور التسعين الجنوبي الذي يبعد 4 دقائق
                                        فقط عن ذا كريست.
                                    </li>
                                    <li className=" list-disc">
                                        طريق السويس الذي يبعد مسافة قليلة.
                                    </li>
                                    <li className=" list-disc">
                                        15 دقيقة فقط تفصل ذا كريست عن مسجد
                                        الفتاح العليم.
                                    </li>
                                    <li className=" list-disc">
                                        و32 دقيقة للوصول إلى العاصمة الإدارية.
                                    </li>
                                    <li className=" list-disc">
                                        ودقائق معدودة من ذا كريست للوصول إلى
                                        طريق العين السخنة.
                                    </li>
                                    <li className=" list-disc">
                                        14 دقيقة للوصول إلى هايد بارك القاهرة
                                        الجديدة.
                                    </li>
                                    <li className=" list-disc">
                                        15 دقيقة للنادي الأهلي{" "}
                                    </li>
                                    <li className=" list-disc">
                                        ومسافة قليلة للوصول إلى مطار القاهرة
                                        الدولي.
                                    </li>
                                </ul>
                            </div>
                            <div className=" w-full border-2 rounded-lg bg-slate-700 p-6 ">
                                <div className="w-full text-center font-bold text-white">
                                    تواصل معنا للحصول لمعرفة احدث الأسعار وأفضل
                                    أنظمة السداد
                                </div>
                                <div className="w-full flex-1 flex justify-center items-center my-6 ">
                                    <PropretyContacts
                                        phone={compound.phone}
                                        whatsApp={compound.whatsApp}
                                    />
                                </div>
                            </div>
                            <div className=" my-4">
                                <h4 className=" text-xl font-bold my-4">
                                    تصميم مشروع ذا كريست القاهرة الجديدة
                                </h4>
                                <p className=" leading-7">
                                    استعانت الشركة المطورة بأفضل المهندسين
                                    المعماريين ذو خبرة وهو المهندس/ رائف فهمي
                                    للحصول على أفضل التصميمات الراقية والحديثة،
                                    التي تجمع بين المباني العصرية الانيقة
                                    والمساحات الخضراء التي تجعله مشروعا صديقا
                                    للبيئة، وأفضل معدات البناء للحصول على أفضل
                                    التصميمات المعمارية بمعايير عالمية. كما
                                    اهتمت الشركة بتخصيص مساحة 158 فدان من إجمالي
                                    المساحة الكلية للمشروع للمساحات الخضراء
                                    والمناظر الخلابة واللاندسكيب التي تشمل معظم
                                    مساحة المشروع التي تفصل بين الوحدات السكنية
                                    مجموعة من الأشجار تبعث الراحة والهدوء النفسي
                                    للقانطين.
                                </p>
                                <div className=" w-fill aspect-video relative bg-slate-100 rounded-lg overflow-hidden my-12">
                                    <Image
                                        src={
                                            "/images/1_C_0EPDDxVxyeIszRsFBa_w.jpg"
                                        }
                                        priority
                                        layout="fill"
                                        objectFit="cover"
                                        alt="كمبوند ذا كريست القاهرة الجديدة"
                                    />
                                </div>
                            </div>

                            <div className=" my-12">
                                <h4 className=" text-xl font-bold my-4">
                                    وحدات متنوعة في كمبوند ذا كريست The Crest
                                </h4>
                                <p className=" leading-7 my-4">
                                    وفرت شركة الكازار العديد من الخيارات
                                    المتنوعة داخل ذا كريست، حيث جاءت مساحة
                                    الوحدات السكنية كالتالي:
                                </p>
                                <table className=" w-full">
                                    <thead>
                                        <tr className=" bg-red-300">
                                            <th className="border w-[100px] p-4 font-bold">
                                                الوحدة
                                            </th>
                                            <th className="border p-4 font-bold">
                                                المساحة
                                            </th>
                                            <th className="border p-4 font-bold">
                                                الأسعار
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="">
                                            <td className="border w-[100px] p-4 font-bold">
                                                الفلل
                                            </td>
                                            <td className="border p-4">
                                                بمساحة تبدأ من 210 إلى 330 متر
                                                مربع.
                                            </td>
                                            <td className="border p-4">
                                                تبدأ من 19,000,000 جنيه مصري.
                                            </td>
                                        </tr>
                                        <tr className="">
                                            <td className="border w-[100px] p-4 font-bold">
                                                الشقق
                                            </td>
                                            <td className="border p-4">
                                                تبدأ بمساحة 85 متر مربع إلى 155
                                                متر مربع.
                                            </td>
                                            <td className="border p-4">
                                                تبدأ من 7,000,000 جنيه مصري.
                                            </td>
                                        </tr>
                                        <tr className="">
                                            <td className="border w-[100px] p-4 font-bold">
                                                الدوبلكس
                                            </td>
                                            <td className=" border p-4">
                                                بمساحة تبدأ من 160 إلى 200 متر
                                                مربع.
                                            </td>
                                            <td className="border p-4">
                                                تبدأ من 13,000,000 جنيه مصري.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className=" my-12">
                                <h4 className=" text-xl font-bold my-4">
                                    الأسعار وأنظمة السداد في ذا كريست
                                </h4>
                                <p className=" leading-7 my-4">
                                    الأسعار التنافسية والمرنة هي أحد الأعمدة
                                    الهامة التي يتميز بها كمبوند ذا كريست، وذلك
                                    حرصا من شركة الكازار العقارية المطورة
                                    للمشروع على تقديم باقة مميزة من الأسعار
                                    التنافسية مقارنة بما تقدمه من خدمات ومميزات
                                    غير موجود في أي مشروع آخر
                                </p>
                                <p className=" leading-7 my-4">
                                    بجانب هذه الأسعار قامت الشركة المطورة بتوفير
                                    أنظمة سداد مرنة، لمزيد من التسهيلات وذلك
                                    بأقل مقدم تعاقد 5% وأطول فترة سداد تصل الي 7
                                    سنوات وبدون فوائد.
                                </p>
                            </div>
                            <div className=" w-full border-2 rounded-lg bg-slate-700 p-6 ">
                                <div className="w-full text-center font-bold text-white">
                                    تواصل معنا للحصول لمعرفة احدث الأسعار وأفضل
                                    أنظمة السداد
                                </div>
                                <div className="w-full flex-1 flex justify-center items-center my-6 ">
                                    <PropretyContacts
                                        phone={compound.phone}
                                        whatsApp={compound.whatsApp}
                                    />
                                </div>
                            </div>

                            <div className=" py-4 my-8">
                                <h4 className=" text-xl font-bold mt-4">
                                    أهم الخدمات والمرافق في ذا كريست الكازار
                                </h4>
                                <p className=" leading-7 my-4">
                                    يتميز مشروع ذا كريست على توفير العديد من
                                    المرافق والخدمات الأساسية منها والترفيهية،
                                    وذلك للحصول على أفضل الخدمات التي تضمن
                                    للسكان الحصول على حياة مميزة متكاملة ومن
                                    أبرزها الآتي:
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
