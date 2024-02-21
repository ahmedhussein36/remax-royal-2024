"use client";
import { FC, useState } from "react";
import Button from "../Button";
import { da } from "date-fns/locale";

type ContactFormProps = {
    isEmail?: boolean;
    isMessage?: boolean;
};

const ContactForm: FC<ContactFormProps> = ({ isEmail, isMessage }) => {
    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const { name, phone, email, message } = data;

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

                const response = await fetch("/api/contact", {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        phone,
                        email,
                        message,
                        date: new Date().toLocaleString(),
                    }),
                });

                const contact = await response.json();

                setData({
                    ...data,
                    name: "",
                    phone: "",
                    email: "",
                    message: "",
                });
                setIsLoading(false);
                alert("شكراً لك، تم ارسال طلبك بنجاح");

                console.log(Response.json(contact));
            }
        } catch (error) {
            console.log(error);
            setIsLoading(false);
            alert("حدث خطأ ما ، تعذر ارسال طلبك");
        }
    };
    return (
        <div>
            <div className="w-full sticky top-0 pt-8">
                <div className=" text-xl font-bold mb-4">للحجز و الاستفسار</div>
                <div className=" mb-4">
                    لاتردد في الاتصال بنا وسيقوم احد ممثلينا بالرد عليكم في اسرع
                    وقت
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
                    {isEmail && (
                        <div className="w-full flex flex-col justify-center items-start gap-2">
                            <label htmlFor="email">البريد الإلكتروني*</label>
                            <input
                                name="email"
                                value={email}
                                onChange={handelChange}
                                className="w-full border p-2 py-4 rounded-md"
                                id="email"
                                type="email"
                                placeholder="ادخل بريدك الإلكتروني"
                                max={80}
                                required
                            />
                        </div>
                    )}
                    {isMessage && (
                        <div className="w-full flex flex-col justify-center items-start gap-2">
                            <label htmlFor="phone">رسالتك</label>
                            <textarea
                                name="message"
                                value={message}
                                onChange={handelChange}
                                className="w-full border p-2 py-4 rounded-md"
                                id="message"
                                placeholder="اكتب رسالتك هنا"
                                maxLength={500}
                                minLength={10}
                            />
                        </div>
                    )}

                    <div className="w-full flex flex-col justify-center items-start gap-2">
                        <Button
                            label={`${isLoading ? "جاري الارسال" : "ارسال"}`}
                            disabled={isLoading}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
