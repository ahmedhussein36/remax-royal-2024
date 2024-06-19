"use client";
import React, { useState } from "react";
import Input from "./customInputs/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Button from "./Button";

const Description = ({
    title,
    subtitle,
}: {
    title: string;
    subtitle: string;
}) => {
    return (
        <div className=" flex flex-col gap-4 justify-start items-start">
            <h3 className=" m-0 text-xl font-bold text-slate-600">{title}</h3>
            <p className=" m-0 text-lg font-medium text-slate-600">
                {subtitle}
            </p>
        </div>
    );
};

const Contactus = () => {
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            createAt: new Date(),
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        axios
            .post("/api/register", data)

            .catch((error) => {
                toast.error(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };
    return (
        <>
            <div className=" w-full bg-slate-100 rounded-lg flex-col lg:flex-row flex justify-start items-center text-slate-600">
                <div className=" flex flex-col justify-between items-start gap-8 p-8">
                    <Description
                        title="هل تحتاج إلى مساعدة"
                        subtitle="نحن نستطيع مساعدتك ، قم بملئ النموذج وسوف نقوم بالتواصل معك في أقرب وقت"
                    />
                </div>
                <div className=" w-1/2 h-full  bg-left bg-opacity-30 bg-blend-screen">
                    <div
                        className="flex flex-col justify-center items-center gap-8 w-full"
                        style={{ padding: 30 }}
                    >
                        <div className=" bg-white p-8 rounded-md w-[350px] flex flex-col justify-start items-start gap-4">
                            <Input
                                id="email"
                                label="البريد الالكتروني"
                                disabled={isLoading}
                                register={register}
                                errors={errors}
                                required
                            />
                            <Input
                                id="name"
                                label="الاسم"
                                disabled={isLoading}
                                register={register}
                                errors={errors}
                                required
                            />
                            <Input
                                id="phone"
                                label="رقم الهاتف"
                                type="tel"
                                disabled={isLoading}
                                register={register}
                                errors={errors}
                                required
                            />
                            <Button
                                label={"إرسال"}
                                disabled={isLoading}
                                onClick={handleSubmit(onSubmit)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contactus;
