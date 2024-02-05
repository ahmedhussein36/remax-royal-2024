import { SafeProperty } from "@/app/types";

interface paymentPlansProps {
    data: SafeProperty;
}

const PaymentPlans: React.FC<paymentPlansProps> = ({ data }) => {
    return (
        <div
            aria-label="payment plan"
            className=" 
                        border flex 
                        bg-slate-100
                        md:flex-col sm:flex-col 
                        items-startjustify-center
                        w-full my-4 rounded-lg p-4 
                        shadow-lg shadow-indigo-50"
        >
            <h2 className="font-bold text-xl mb-4">خطط السداد</h2>
            <div className="w-full rounded-lg p-4 py-8 flex  justify-center items-center gap-4 bg-white">
                
                {data.paymentPlan !== "الدفع كاش" ? (
                    <>
                        <div className="flex flex-col item-center justify-center gap-4 w-1/2">
                            <span className="text-center text-xl font-black text-red-500">
                                {data.downPayment} %
                            </span>
                            <span className="font-bold text-center text-slate-600">
                                مقدم
                            </span>
                        </div>

                        <div className="flex flex-col item-center justify-center gap-4 w-1/2">
                            <span className=" text-center  text-xl font-black text-red-500">
                                {data.installmentPeriod} سنوات
                            </span>
                            <span className="font-bold text-center  text-slate-600">
                                مدة التقسيط
                            </span>
                        </div>
                    </>
                ) : (
                    <div>الدفع كاش</div>
                )}
            </div>
        </div>
    );
};

export default PaymentPlans;
