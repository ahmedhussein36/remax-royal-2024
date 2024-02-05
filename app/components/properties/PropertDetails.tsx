import { SafeProperty } from "@/app/types";

interface PropDetailsProps{
    data: any
}

const PropDetails: React.FC<PropDetailsProps> = ({ data }) => {
    return (
        <div className="flex flex-col mt-4 border rounded-lg p-6">
            <h2 className="font-bold text-xl">تفاصيل العقار</h2>
            <div aria-label="property details" className="flex w-full my-6">
                <div className="flex flex-col w-1/2  items-start justify-center">
                    <div className="flex justify-start items-center gap-2 w-full border-b py-3">
                        <span className="w-1/2 text-sm"> نوع العقار</span>
                        <span className=" w-1/2 font-bold text-sm">
                            {data.propertyGroup}
                        </span>
                    </div>
                    <div className="flex justify-start items-center gap-2 w-full border-b py-3">
                        <span className="w-1/2 text-sm">نوع العرض</span>
                        <span className=" w-1/2 font-bold text-sm">
                            {data.category}
                        </span>
                    </div>
                    <div className="flex justify-start items-center gap-2 w-full border-b py-3">
                        <span className="w-1/2 text-sm">الرقم المرجعي</span>
                        <span className=" w-1/2 font-bold text-sm">
                            {data?.id || "N/A"}
                        </span>
                    </div>
                    <div className="flex justify-start items-center gap-2 w-full border-b py-3">
                        <span className="w-1/2 text-sm">حالة البناء</span>
                        <span className=" w-1/2 font-bold text-sm">جاهز</span>
                    </div>
                </div>

                <div className="flex flex-col w-1/2  items-start justify-center">
                    <div className="flex justify-start items-center gap-2 w-full border-b py-3">
                        <span className="w-1/2 text-sm"> تاريخ الاضافة</span>
                        <span className=" w-1/2 font-bold text-sm">
                            {data.createAd}
                        </span>
                    </div>
                    <div className="flex justify-start items-center gap-2 w-full border-b py-3">
                        <span className="w-1/2 text-sm">تاريخ التسليم</span>
                        <span className=" w-1/2 font-bold text-sm">2024</span>
                    </div>
                    <div className="flex justify-start items-center gap-2 w-full border-b py-3">
                        <span className="w-1/2 text-sm">نوع التشطيب</span>
                        <span className=" w-1/2 font-bold text-sm">كامل</span>
                    </div>
                    <div className="flex justify-start items-center gap-2 w-full border-b py-3">
                        <span className="w-1/2 text-sm">مساحة العقار</span>
                        <span className=" w-1/2 font-bold text-sm">
                            {data.size} متر مربع
                        </span>
                    </div>
                </div>
            </div>

            <h2 className="font-bold text-xl"> الكماليات</h2>
            <div
                aria-label="amenities"
                className="flex flex-wrap justify-start items-center my-6 gap-4"
            > لا يوجد
               
            </div>
            <div aria-label="description">
               <p>{data.description}</p>
            </div>

            <div
                aria-label="payment plan"
                className="border flex md:flex-col sm:flex-col items-startjustify-center w-full my-4 rounded-lg p-4 shadow-lg shadow-indigo-50"
            >
                <h2 className="font-bold text-xl mb-4">خطط السداد</h2>
                <div className=" bg-slate-100 rounded-lg p-4 flex flex-col gap-2 w-1/4">
                    <div className="flex item-center justify-start gap-4 w-[250px]">
                        <span className="w-1/2">المقدم</span>
                        <span className="w-1/2 text-base font-bold">
                            {data.downPayment}
                        </span>
                    </div>
                    <div className="flex item-center justify-start gap-4 w-[250px]">
                        <span className="w-1/2">قيمة القسط</span>
                        <span className="w-1/2 text-base font-bold">
                            {data.installmentValue}
                        </span>
                    </div>
                    <div className="flex item-center justify-start gap-4 w-[250px]">
                        <span className="w-1/2">مدة التقسيط</span>
                        <span className="w-1/2 text-base font-bold">
                        {data.installmentPeriod} سنوات
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropDetails;
