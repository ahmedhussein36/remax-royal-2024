"use client";

import axios from "axios";
import { toast } from "react-hot-toast";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { FaArrowRightLong } from "react-icons/fa6";

import Counter from "../customInputs/Counter";
import CategoryInput from "../customInputs/CategoryInput";
import {
    categories,
    commercialTypes,
    paymentPlans,
    propretyTypes,
    residentalTypes,
    saleTypes,
} from "../data/data";

import ImageUpload from "../customInputs/ImageUpload";
import Input from "../customInputs/Input";
import Heading from "../Heading";
import Button from "../Button";
import Textarea from "../customInputs/Textarea";
import CitySelect from "../customInputs/CitySelect";
import AriaSelect from "../customInputs/AriaSelect";
import { useMemo, useState } from "react";

enum STEPS {
    CATEGORY = 0,
    SUBCATEGORY = 1,
    GROUP = 2,
    INFO = 3,
}

const AddNewProperty = () => {
    const router = useRouter();

    const [isSelected, setIsSelected] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [step, setStep] = useState(STEPS.CATEGORY);
    const [getGroup, setGetGroup] = useState("1");
    const [isOtherGroup, setIsOtherGroup] = useState(false);
    const [isInstallment, setIsInstallment] = useState(false);
    const [isDeveloper, setIsDeveloper] = useState(false);
    const [allPropertyImages, setAllPropertyImages] = useState<string[]>([]);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
        reset,
    } = useForm<FieldValues>({
        defaultValues: {
            title: "",
            description: "",
            category: "",
            propertyType: "",
            propertyGroup: "",
            otherGroup: "",
            paymentPlan: "",
            saleType: "",
            downPayment: 0,
            installmentValue: 0,
            installmentPeriod: 0,
            commissionValue: 0,
            developerName: "",
            roomCount: 1,
            bathroomCount: 1,
            imageSrc: "",
            propertyImages: allPropertyImages,
            price: 0,
            currency: "EGP",
            size: 0,
            sizeUnit: "sqm",
            phone: "",
            whatsapp: "",
            country: "مصر",
            city: "",
            aria: "",
            address: "",
        },
    });

    const city = watch("city");
    const aria = watch("aria");
    const category = watch("category");
    const propertyType = watch("propertyType");
    const propertyGroup = watch("propertyGroup");
    const paymentPlan = watch("paymentPlan");
    const saleType = watch("saleType");
    const roomCount = watch("roomCount");
    const bathroomCount = watch("bathroomCount");
    const imageSrc = watch("imageSrc");
    const propertyImages = watch("propertyImages");
    const price = watch("price");

    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true,
        });
    };

    const onBack = () => {
        setStep((value) => value - 1);
    };

    const onNext = () => {
        setStep((value) => value + 1);
    };

    {
        /* api Post data to db */
    }

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        if (step !== STEPS.INFO) {
            return onNext();
        }

        setIsLoading(true);

        axios
            .post("/api/properties", data)
            .then(() => {
                toast.success("تم إضافة وحدتك بنجاح !", {
                    position: "top-center",
                });

                router.refresh();
                reset();
                setStep(STEPS.CATEGORY);
            })
            .catch(() => {
                toast.error("!خطأ. تعذر اضافة وحدتك", {
                    position: "top-center",
                });
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    {
        /* handel next button value */
    }
    const actionLabel = useMemo(() => {
        if (step === STEPS.INFO) {
            return "إضافة عقار جديد";
        }
        return "التالي";
    }, [step]);

    {
        /* handel back button  */
    }
    const secondaryActionLabel = useMemo(() => {
        if (step === STEPS.CATEGORY) {
            return undefined;
        }

        return <FaArrowRightLong />;
    }, [step]);

    {
        /* handel body content */
    }
    let bodyContent = (
        <div className="flex flex-col gap-8">
            <Heading
                title="مرحباَ، ماهي الفئة المناسبة لإعلانك؟"
                subtitle=" اختر نوع العرض الذي تود الإعلان عنه"
                center
            />
            <div
                className="
                    grid 
                    grid-cols-1 
                    md:grid-cols-2 
                    gap-3
                    max-h-[50vh]
                    overflow-y-auto
                    "
            >
                {categories.map((item) => (
                    <div key={item.name} className="col-span-1 p-4">
                        <CategoryInput
                            onClick={(category) => {
                                setCustomValue("category", category);
                            }}
                            selected={category === item.name}
                            label={item.name}
                            icon={item.icon}
                        />
                    </div>
                ))}
            </div>
        </div>
    );

    if (step === STEPS.SUBCATEGORY) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                    title=" ماهو نوع العقار؟"
                    subtitle=" اختر نوع العقار الذي تود الإعلان عنه."
                    center
                />
                <div
                    className="
                        grid 
                        grid-rows-1 
                        md:grid-rows-2 
                        gap-1
                        max-h-[50vh]
        "
                >
                    {propretyTypes.map((item) => (
                        <div key={item.id} className="col-span-1 p-2">
                            <CategoryInput
                                onClick={(propertyType) => {
                                    setCustomValue(
                                        "propertyType",
                                        propertyType
                                    );
                                    setGetGroup(item.id);
                                }}
                                selected={propertyType === item.label}
                                label={item.label}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (step === STEPS.GROUP) {
        let groups = [];
        if (getGroup === "1") {
            groups = residentalTypes;
        } else {
            groups = commercialTypes;
        }

        bodyContent = (
            <div className="flex flex-col gap-4">
                <Heading
                    title=" ماهو العقار الذي تريد عرضه"
                    subtitle="حدد من الخيارات التالية الوصف المناسب لعقارك "
                    center
                />
                <div
                    className="
                        grid 
                        grid-cols-1 
                        md:grid-cols-2 
                        gap-1
                        max-h-full
        "
                >
                    {groups.map((item) => (
                        <div key={item.name} className="col-span-1 p-2">
                            <CategoryInput
                                onClick={(propertyGroup) => {
                                    setCustomValue(
                                        "propertyGroup",
                                        propertyGroup
                                    );
                                    if (
                                        getGroup === "2" &&
                                        item.name === "أخرى"
                                    )
                                        setIsOtherGroup(true);
                                    else if (
                                        getGroup === "2" &&
                                        item.name !== "أخرى"
                                    ) {
                                        setIsOtherGroup(false);
                                    }
                                    setIsSelected(true);
                                }}
                                selected={propertyGroup === item.name}
                                label={item.name}
                            />
                        </div>
                    ))}
                </div>
                {isOtherGroup ? (
                    <Input
                        id="otherGroup"
                        label="اكتب نوع الوحدة"
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        required
                    />
                ) : (
                    ""
                )}
            </div>
        );
    }

    if (step === STEPS.INFO) {
        bodyContent = (
            <div className="flex flex-col gap-4 text-sm">
                <Heading
                    title="حسنا! أوشكت على الأنتهاء"
                    subtitle="من فضلك ادخل أكبر قدر ممكن من التفاصيل عن وحدتك"
                    center
                />
                <Input
                    id="title"
                    label="العنوان"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                    message="مطلوب"
                />

                <Textarea
                    id="description"
                    label="الوصف"
                    placeholder="اكتب وصفا مناسبا لوحدتك"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                    message="مطلوب"
                />

                <ImageUpload
                    onChange={(value) => {
                        setCustomValue("imageSrc", value);
                        setAllPropertyImages([...allPropertyImages, value]);
                        setCustomValue("propertyImages", [
                            ...allPropertyImages,
                            value,
                        ]);

                        console.log(propertyImages);
                    }}
                    value={imageSrc}
                    allImages={allPropertyImages}
                />

                <Counter
                    onChange={(value) => setCustomValue("roomCount", value)}
                    value={roomCount}
                    title="عدد الغرف"
                    subtitle=""
                />
                <Counter
                    onChange={(value) => setCustomValue("bathroomCount", value)}
                    value={bathroomCount}
                    title="عدد الحمامات"
                    subtitle=""
                />

                <Input
                    id="size"
                    label="المساحة"
                    customFormat
                    unit="sqm"
                    type="number"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                    message="من فضلك أدخل قيمة صالحة"
                    min={1}
                />

                <Input
                    id="price"
                    label="السعر الكلي"
                    customFormat
                    unit="ج.م"
                    type="number"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                    message="من فضلك أدخل قيمة صالحة"
                    min={1}
                />

                <div
                    className="
                        grid 
                        grid-cols-1 
                        md:grid-cols-2 
                        gap-1
                        max-h-full
        "
                >
                    {paymentPlans.map((item) => (
                        <div key={item.name} className="col-span-1">
                            <CategoryInput
                                onClick={(paymentPlan) => {
                                    setCustomValue("paymentPlan", paymentPlan);
                                    if (item.id === "2") setIsInstallment(true);
                                    else if (item.id === "1") {
                                        setIsInstallment(false);
                                    }
                                }}
                                selected={paymentPlan === item.name}
                                label={item.name}
                            />
                        </div>
                    ))}
                </div>

                {isInstallment ? (
                    <div className="flex flex-col gap-2">
                        <div>
                            <Input
                                id="downPayment"
                                label="قيمة المقدم"
                                customFormat
                                unit="%"
                                disabled={isLoading}
                                register={register}
                                required={isInstallment}
                                type="number"
                                min={0}
                                max={price}
                                message={
                                    " لايكمن ان تكون قيمة المقدم اكبر من السعر الكلي او قيمة تساوي صفر"
                                }
                                errors={errors}
                            />
                        </div>
                        <div className="flex gap-2 w-full">
                            <Input
                                id="installmentValue"
                                label="قيمة القسط (جنيه)"
                                min={0}
                                max={price}
                                customFormat
                                unit="ج.م"
                                disabled={isLoading}
                                register={register}
                                errors={errors}
                                required={isInstallment}
                                type="number"
                                message={
                                    " لايكمن ان تكون قيمة القسط اكبر من السعر الكلي او قيمة تساوي صفر"
                                }
                            />
                            <Input
                                id="installmentPeriod"
                                label=" المدة (سنوات) "
                                min={1}
                                disabled={isLoading}
                                customFormat
                                unit="سنة"
                                register={register}
                                errors={errors}
                                required={isInstallment}
                                type="number"
                                message={" لايكمن ان تكون مدة القسط تساوي صفر"}
                            />
                        </div>
                    </div>
                ) : (
                    ""
                )}

                <div
                    className="
                        grid 
                        grid-cols-1 
                        md:grid-cols-2 
                        gap-1
                        max-h-full
        "
                >
                    {saleTypes.map((item) => (
                        <div key={item.name} className="col-span-1">
                            <CategoryInput
                                onClick={(saleType) => {
                                    setCustomValue("saleType", saleType);
                                    if (item.id === "1") setIsDeveloper(true);
                                    else if (item.id !== "1") {
                                        setIsDeveloper(false);
                                    }
                                }}
                                selected={saleType === item.name}
                                label={item.name}
                            />
                        </div>
                    ))}
                </div>

                {isDeveloper ? (
                    <Input
                        id="developerName"
                        label="اسم المطور"
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        required={isDeveloper}
                        message="مطلوب"
                    />
                ) : (
                    <Input
                        id="commissionValue"
                        label="عمولة الشركة (اختياري*)"
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        type="number"
                        customFormat
                        min={0}
                        unit="%"
                    />
                )}

                <Input
                    id="phone"
                    label="رقم الهاتف"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                    type="tel"
                    message="مطلوب"
                    customFormat
                    unit="+20"
                />

                <Input
                    id="whatsapp"
                    label="رقم الواتساب"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                    type="tel"
                    message="مطلوب"
                    customFormat
                    unit="+20"
                />

                <Input
                    id="country"
                    label="الدولة"
                    placeholder="مصر"
                    disabled={true}
                    register={register}
                    errors={errors}
                />

                <CitySelect
                    value={city}
                    onChange={(value) => setCustomValue("city", value)}
                />

                <AriaSelect
                    govId={city?.id}
                    value={aria}
                    onChange={(value) => setCustomValue("aria", value)}
                />
                <Input
                    id="address"
                    label="ادخل العنوان بالتفصيل"
                    placeholder=" الحي، المنطقة ، الكمبوند"
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
            </div>
        );
    }

    return (
        <>
            <div className="relative flex justify-center items-center mt-4">
                <div className="w-[450px] flex flex-col justify-center items-center p-6 gap-8">
                    <div className="w-full">{bodyContent}</div>
                    <div
                        className="
                                    flex 
                                    flex-row 
                                    items-center 
                                    gap-4 w-full
                                "
                    >
                        {secondaryActionLabel && (
                            <div className="w-1/4">
                                <Button
                                    disabled={isLoading}
                                    label={secondaryActionLabel}
                                    onClick={onBack}
                                    outline
                                />
                            </div>
                        )}

                        <Button
                            disabled={!isLoading ? !isSelected : isLoading}
                            label={actionLabel}
                            onClick={handleSubmit(onSubmit)}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddNewProperty;
