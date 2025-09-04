"use client";
import { CustomCombobox } from "@/app/_components/CustomCombobox";
import CustomInput from "@/app/_components/CustomInput";
import CustomPassword from "@/app/_components/CustomPassword";
import PaymentCardLayout from "@/app/_components/PaymentCardLayout";
import CountryList from "country-list-with-dial-code-and-flag";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

const schema = yup.object().shape({
    country: yup.string().required("Country is required"),
    username: yup.string().email("Invalid email").required("Username is required"),
    password: yup.string().min(8, "Password must be at least 8 characters").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, "Password must contain at least one uppercase, one lowercase, one number, and one special character").required("Password is required"),
    verifyPassword: yup.string().oneOf([yup.ref('password')], "Passwords must match").required("Verify password is required"),
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    dateOfBirth: yup.string().required("Date of birth is required"),
    agentReferralCode: yup.string().optional(),
    mobileDialCode: yup.string().required("Dial code is required"),
    mobileNumber: yup.string().required("Mobile number is required"),
});

const RegistrationForm = ({ onSubmit }: { onSubmit: (data: FormData) => void }) => {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormData>();

    const allCountries = CountryList.getAll();
    const CountryOptions = allCountries.map((items) => ({
        label: `${items?.flag} ${items?.name} (${items?.dialCode})`,
        value: items?.name,
    }));
    const dialCodeOptions = allCountries.map((items) => ({
        label: `${items?.flag} ${items?.dialCode}`,
        value: items?.dialCode,
    }));

    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedDialCode, setSelectedDialCode] = useState("");

    return (
        <PaymentCardLayout
            title="Registration"
            description="Please fill in your details to register"
            buttonLabel="Register"
            onNext={handleSubmit(onSubmit)}
        >
            <div className="w-full flex flex-col gap-6 md:min-w-2xl">
                <div>
                    <h3 className="text-lg font-semibold mb-4">Login Details</h3>
                    <div className="w-full flex flex-col gap-4">
                        <CustomCombobox
                            options={CountryOptions}
                            emptyLabel="No country found"
                            label="Country"
                            placeholder="Select country"
                            value={selectedCountry}
                            onSelectChange={(value) => {
                                setSelectedCountry(value);
                                setValue("country", value);
                            }}
                            optionFullWidth
                        />
                        <CustomInput
                            label="Username"
                            placeholder="Enter username"
                            {...register("username")}
                        />
                        {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
                        <CustomPassword
                            label="Password"
                            className="py-6"
                            placeholder="Enter password"
                            {...register("password")}
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                        <CustomPassword
                            label="Verify Password"
                            className="py-6"

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
                                placeholder="First name"
                                {...register("firstName")}
                            />
                            <CustomInput
                                label="Last Name"
                                placeholder="Last name"
                                {...register("lastName")}
                            />
                        </div>
                        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
                        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
                        <CustomInput
                            label="Date of Birth"
                            type="date"
                            {...register("dateOfBirth")}
                        />
                        {errors.dateOfBirth && <p className="text-red-500 text-sm">{errors.dateOfBirth.message}</p>}
                        <CustomInput
                            label="Agent Referral Code"
                            placeholder="Enter referral code"
                            {...register("agentReferralCode")}
                        />
                        <div>
                            <p className="font-sans text-sm text-muted-foreground font-semibold leading-[18px] mb-2">
                                Mobile
                            </p>
                            <div className="flex items-end w-full">
                                <CustomCombobox
                                    value={selectedDialCode}
                                    options={dialCodeOptions}
                                    emptyLabel="No dial code found"
                                    className="rounded-r-none border-r-0 w-1/3 bg-gray-100 border-y"
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
                                        className="rounded-l-none flex-1 w-full bg-white py-[25px]"
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
