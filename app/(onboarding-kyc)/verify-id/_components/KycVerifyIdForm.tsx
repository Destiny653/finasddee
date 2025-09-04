\"use client\";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import PaymentCardLayout from "@/app/_components/PaymentCardLayout";
import CustomFileUpload from "@/app/_components/CustomFileUpload";
import CustomInput from "@/app/_components/CustomInput";
import CustomCombobox from "@/app/_components/CustomCombobox";

interface FormData {
    passport: FileList | null;
    driversLicense: FileList | null;
    nationalIdCard: FileList | null;
    utilityBill: FileList | null;
    bankStatement: FileList | null;
}

const documentOptions = [
    { label: "Passport", value: "passport" },
    { label: "Driver's License", value: "driversLicense" },
    { label: "National ID Card", value: "nationalIdCard" },
    { label: "Utility Bill", value: "utilityBill" },
    { label: "Bank Statement", value: "bankStatement" },
];

const KycVerifyIdForm = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        defaultValues: {
            passport: null,
            driversLicense: null,
            nationalIdCard: null,
            utilityBill: null,
            bankStatement: null,
        },
    });

    const onSubmit = (data: FormData) => {
        console.log("Form Data:", data);
        // TODO: handle form submission, e.g. upload files to server
    };

    return (
        <PaymentCardLayout
            title=\"Verify Your Identity\"
            description=\"Please upload the required documents to verify your identity.\"
            buttonLabel=\"Submit\"
            onNext={handleSubmit(onSubmit)}
        >
            <form className=\"flex flex-col gap-6\" onSubmit={(e) => e.preventDefault()}>
                <Controller
                    name=\"passport\"
                    control={control}
                    rules={{ required: "Passport is required" }}
                    render={({ field }) => (
                        <CustomFileUpload
                            label=\"Passport\"
                            accept=\"image/*,.pdf\"
                            onChange={(files) => field.onChange(files)}
                            className={errors.passport ? "border-red-500" : ""}
                        />
                    )}
                />
                {errors.passport && (
                    <p className=\"text-red-500 text-sm\">{errors.passport.message}</p>
                )}

                <Controller
                    name=\"driversLicense\"
                    control={control}
                    rules={{ required: "Driver's License is required" }}
                    render={({ field }) => (
                        <CustomFileUpload
                            label=\"Driver's License\"
                            accept=\"image/*,.pdf\"
                            onChange={(files) => field.onChange(files)}
                            className={errors.driversLicense ? "border-red-500" : ""}
                        />
                    )}
                />
                {errors.driversLicense && (
                    <p className=\"text-red-500 text-sm\">{errors.driversLicense.message}</p>
                )}

                <Controller
                    name=\"nationalIdCard\"
                    control={control}
                    rules={{ required: "National ID Card is required" }}
                    render={({ field }) => (
                        <CustomFileUpload
                            label=\"National ID Card\"
                            accept=\"image/*,.pdf\"
                            onChange={(files) => field.onChange(files)}
                            className={errors.nationalIdCard ? "border-red-500" : ""}
                        />
                    )}
                />
                {errors.nationalIdCard && (
                    <p className=\"text-red-500 text-sm\">{errors.nationalIdCard.message}</p>
                )}

                <Controller
                    name=\"utilityBill\"
                    control={control}
                    rules={{ required: "Utility Bill is required" }}
                    render={({ field }) => (
                        <CustomFileUpload
                            label=\"Utility Bill\"
                            accept=\"image/*,.pdf\"
                            onChange={(files) => field.onChange(files)}
                            className={errors.utilityBill ? "border-red-500" : ""}
                        />
                    )}
                />
                {errors.utilityBill && (
                    <p className=\"text-red-500 text-sm\">{errors.utilityBill.message}</p>
                )}

                <Controller
                    name=\"bankStatement\"
                    control={control}
                    rules={{ required: "Bank Statement is required" }}
                    render={({ field }) => (
                        <CustomFileUpload
                            label=\"Bank Statement\"
                            accept=\"image/*,.pdf\"
                            onChange={(files) => field.onChange(files)}
                            className={errors.bankStatement ? "border-red-500" : ""}
                        />
                    )}
                />
                {errors.bankStatement && (
                    <p className=\"text-red-500 text-sm\">{errors.bankStatement.message}</p>
                )}
            </form>
        </PaymentCardLayout>
    );
};

export default KycVerifyIdForm;
