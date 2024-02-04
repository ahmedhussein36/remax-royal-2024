"use client";

import { useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useRouter } from "next/navigation";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";

import Input from "../customInputs/Input";
import Heading from "../Heading";
import Button from "../Button";
import Loader from "../Loader";

const Login = () => {
    const router = useRouter();
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState(Boolean);
    const ltr = false; //(router as any).locale === 'en';

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        signIn("credentials", {
            ...data,
            redirect: false,
        }).then((callback) => {
            setIsLoading(false);

            if (callback?.ok) {
                toast.success("تم تسجيل الدخول إلى حسابك", {
                    position: "top-center",
                });
                router.refresh();
                loginModal.onClose();
            }

            if (callback?.error) {
                toast.error(callback.error);
            }
        });
    };

    useEffect(() => {
        if (loginModal.isOpen) {
            setEmail(false);
        }
    }, [loginModal.isOpen]);

    const onToggle = useCallback(() => {
        loginModal.onClose();
        registerModal.onOpen();
    }, [loginModal, registerModal]);

    const emailLogin = (
        <div className="flex flex-col gap-4 px-5 justify-center items-center">
            <Heading
                title={ltr ? "Welcome back" : "تسجيل الدخول"}
                subtitle={
                    ltr ? "Login to your account!" : " تسجيل الدخول إلى حسابك "
                }
            />
            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="password"
                label="Password"
                type="password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    );

    const socialLogin = (
        <div className="flex flex-col gap-4 mt-3 px-5">
            <Button
                outline
                label={ltr ? "Continue with Google" : "متابعة باستخدام جوجل"}
                icon={FcGoogle}
                onClick={() => signIn("google")}
            />
            <Button
                outline
                label={
                    ltr ? "Continue with Facebook" : "متابعة باستخدام فيسبوك"
                }
                icon={FaFacebook}
                onClick={() => signIn("facebook")}
            />
        </div>
    );

    const footer = (
        <div
            className="
      text-neutral-500 text-sm text-center mt-4 font-light"
        >
            <p>
                {" "}
                {ltr ? "You dont have an account?" : "ليس لديك حساب؟ "}
                <span
                    onClick={onToggle}
                    className="
              text-red-500
              text-sm
              cursor-pointer 
              hover:underline
            "
                >
                    {" "}
                    {ltr ? "Create an account" : "أنشاء حساب جديد "}
                </span>
            </p>
        </div>
    );

    return (
        <div className="p-2 md:p-6 relative flex justify-center items-center">
            <div className="realive flex flex-col gap-2 rounded-lg justify-center items-start w-[450px] p-8 border">
                <div className="w-full">{emailLogin}</div>
                <div className="w-full my-2 px-4">
                    <Button
                        label={
                            isLoading ? (
                                <Loader />
                            ) : ltr ? (
                                "Login"
                            ) : (
                                "تسجيل الدخول"
                            )
                        }
                        onClick={handleSubmit(onSubmit)}
                        disabled={isLoading}
                    />
                </div>
                <div className="w-full">{socialLogin}</div>
                <div className="w-full">{footer}</div>
            </div>
        </div>
    );
};

export default Login;
