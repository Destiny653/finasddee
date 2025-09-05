"use client";
import { CustomCombobox } from "@/app/_components/CustomCombobox";
import CustomInput from "@/app/_components/CustomInput";
import CustomPassword from "@/app/_components/CustomPassword";
import PaymentCardLayout from "@/app/_components/PaymentCardLayout";
import CountryList from "country-list-with-dial-code-and-flag";
import { User, Calendar, Phone, Hash } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface FormData {
    country: string;
    username: string;
    password: string;
    verifyPassword: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    agentReferralCode?: string;
    mobileDialCode: string;
    mobileNumber: string;
}

const RegistrationForm = ({ onSubmit }: { onSubmit: (data: FormData) => void }) => {
    const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm<FormData>();

    const allCountries = CountryList.getAll();
    const CountryOptions = allCountries.map((items) => ({
        label: `${items?.flag} ${items?.name} (${items?.dialCode})`,
        value: items?.name,
    }));
    const dialCodeOptions = allCountries.map((items) => ({
        label: `${items?.flag} ${items?.dialCode}`,
        value: items?.dialCode,
    }));

    const [selectedCountry, setSelectedCountry] = useState("Australia");
    const [selectedDialCode, setSelectedDialCode] = useState("+61");

    return (
        <PaymentCardLayout
            title="Registration"
            description="Please fill in your details to register"
            buttonLabel="Register"
            onNext={handleSubmit(onSubmit)}
        >
            <div className="w-full flex flex-col gap-6 md:min-w-2xl">
                <div>
                    <h3 className="text-lg font-semibold">Login Details</h3>
                    <div className="w-full flex flex-col gap-4">
                        <CustomCombobox
                            options={CountryOptions}
                            emptyLabel="No country found"
                            label="Country"
                            placeholder="Select country"
                            className="py-6 md:py-8"
                            value={selectedCountry}
                            onSelectChange={(value) => {
                                setSelectedCountry(value);
                                setValue("country", value);
                            }}
                            optionFullWidth
                        />
                        <CustomInput
                            label="Username"
                            className="bg-gray-100 py-6 md:py-8"
                            placeholder="Enter username"
                            icon={User}
                            {...register("username")}
                        />
                        {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
                        <CustomPassword
                            label="Password"
                            className="py-6 md:py-8 bg-gray-100"
                            placeholder="Enter password"
                            {...register("password")}
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                        <CustomPassword
                            label="Verify Password"
                            className="py-6 md:py-8 bg-gray-100"
                            placeholder="Verify password"
                            {...register("verifyPassword")}
                        />
                        {errors.verifyPassword && <p className="text-red-500 text-sm">{errors.verifyPassword.message}</p>}
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                    <div className="w-full flex flex-col gap-4">
                        <div className="w-full grid grid-cols-2 gap-4">
                        <CustomInput
                            label="First Name"
                            className="py-6 md:py-8"
                            placeholder="First name"
                            icon={User}
                            {...register("firstName")}
                        />
                        <CustomInput
                            label="Last Name"
                            className="py-6 md:py-8"
                            placeholder="Last name"
                            icon={User}
                            {...register("lastName")}
                        />
                        </div>
                        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
                        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
                        <CustomInput
                            label="Date of Birth"
                            className="py-6 md:py-8"
                            type="date"
                            icon={Calendar}
                            {...register("dateOfBirth")}
                        />
                        {errors.dateOfBirth && <p className="text-red-500 text-sm">{errors.dateOfBirth.message}</p>}
                        <CustomInput
                            label="Agent Referral Code"
                            className="py-6 md:py-8"
                            placeholder="Enter referral code"
                            icon={Hash}
                            {...register("agentReferralCode")}
                        />
                        <div className="space-y-6">
                            <p className="font-sans text-sm text-muted-foreground font-semibold leading-[18px] mb-2">
                                Mobile
                            </p>
                            <div className="flex items-end w-full border p-0 h-fit rounded-lg bg-gray-100 border-gray-100">
                                <CustomCombobox
                                    value={selectedDialCode}
                                    options={dialCodeOptions}
                                    emptyLabel="No dial code found"
                                    className="rounded-r-none border-r-0 m-0 w-[100px] py-2 md:py-7"
                                    placeholder="Select dial code"
                                    onSelectChange={(value) => {
                                        setSelectedDialCode(value);
                                        setValue("mobileDialCode", value);
                                    }}
                                />
                                <div className="w-full">
                                    <CustomInput
                                        placeholder="Enter mobile number"
                                        type="tel"
                                        className="rounded-l-none border-0 border-l md:py-7 flex-1 m-0 w-full py-[25px]"
                                        icon={Phone}
                                        {...register("mobileNumber")}
                                    />
                                </div>
                            </div>
                            {errors.mobileDialCode && <p className="text-red-500 text-sm">{errors.mobileDialCode.message}</p>}
                            {errors.mobileNumber && <p className="text-red-500 text-sm">{errors.mobileNumber.message}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </PaymentCardLayout>
    );
};

export default RegistrationForm;
