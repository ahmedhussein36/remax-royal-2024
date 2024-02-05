import { SafeProperty } from "@/app/types";

interface paymentPlansProps {
    data: SafeProperty;
}

const PaymentPlans: React.FC<paymentPlansProps> = ({ data }) => {
    return (
        <div
            aria-label="payment plan"
            className="border flex 
                        md:flex-col sm:flex-col 
                        items-startjustify-center
                        w-full my-4 rounded-lg p-4 
                        shadow-lg shadow-indigo-50"
        >
            <h2 className="font-bold text-xl mb-4">خطط السداد</h2>
            <div className="w-full rounded-lg p-4 flex flex-col gap-2">
                <div className="flex item-center justify-start gap-4 w-[250px]">
                    <span className="w-1/2">المقدم</span>
                    <span className="w-1/2 text-base font-bold">
                        {data.downPayment} %
                    </span>
                </div>
                <div className="flex item-center justify-start gap-4 w-[250px]">
                    <span className="w-1/2">قيمة القسط</span>
                    <span className="w-1/2 text-base font-bold">
                        {data.installmentValue} {"ج.م"}
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
    );
};

export default PaymentPlans;
