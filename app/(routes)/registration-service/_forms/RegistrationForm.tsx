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
    email: string;
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
    const { register, handleSubmit, formState: { errors }, setValue, watch, reset } = useForm<FormData>({
        mode: "onChange",
        defaultValues: {
            country: "Australia",
            mobileDialCode: "+61",
        }
    });

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

    // Watch password for verifyPassword comparison
    const password = watch("password");

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
                            className="py-6 md:py-8 w-full"
                            value={selectedCountry}
                            onSelectChange={(value) => {
                                setSelectedCountry(value);
                                setValue("country", value, { shouldValidate: true });
                            }}
                        />
                        {errors.country && <p className="text-red-500 text-sm">{errors.country.message}</p>}
                        <CustomInput
                            label="Email"
                            className="bg-gray-100 py-6 md:py-8"
                            placeholder="Enter email"
                            type="email"
                            icon={User}
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Please enter a valid email address",
                                },
                            })}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                        <CustomPassword
                            label="Password"
                            className="py-6 md:py-8 bg-gray-100"
                            placeholder="Enter password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 8,
                                    message: "Password must be at least 8 characters",
                                },
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                    message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
                                },
                            })}
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                        <CustomPassword
                            label="Verify Password"
                            className="py-6 md:py-8 bg-gray-100"
                            placeholder="Verify password"
                            {...register("verifyPassword", {
                                required: "Please confirm your password",
                                validate: (value) =>
                                    value === password || "Passwords do not match",
                            })}
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
                                {...register("firstName", {
                                    required: "First name is required",
                                    pattern: {
                                        value: /^[a-zA-Z]+$/,
                                        message: "First name can only contain letters",
                                    },
                                })}
                            />
                            <CustomInput
                                label="Last Name"
                                className="py-6 md:py-8"
                                placeholder="Last name"
                                icon={User}
                                {...register("lastName", {
                                    required: "Last name is required",
                                    pattern: {
                                        value: /^[a-zA-Z]+$/,
                                        message: "Last name can only contain letters",
                                    },
                                })}
                            />
                        </div>
                        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
                        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
                        <CustomInput
                            label="Date of Birth"
                            className="py-6 md:py-8"
                            type="date"
                            icon={Calendar}
                            {...register("dateOfBirth", {
                                required: "Date of birth is required",
                                validate: (value) => {
                                    const today = new Date();
                                    const birthDate = new Date(value);
                                    const age = today.getFullYear() - birthDate.getFullYear();
                                    return age >= 18 || "You must be at least 18 years old";
                                },
                            })}
                        />
                        {errors.dateOfBirth && <p className="text-red-500 text-sm">{errors.dateOfBirth.message}</p>}
                        <CustomInput
                            label="Agent Referral Code"
                            className="py-6 md:py-8"
                            placeholder="Enter referral code"
                            icon={Hash}
                            {...register("agentReferralCode", {
                                pattern: {
                                    value: /^[a-zA-Z0-9]*$/,
                                    message: "Referral code can only contain letters and numbers",
                                },
                            })}
                        />
                        {errors.agentReferralCode && <p className="text-red-500 text-sm">{errors.agentReferralCode.message}</p>}
                        <div className="space-y-6">
                            <p className="font-sans text-sm text-muted-foreground font-semibold leading-[18px] mb-2">
                                Mobile
                            </p>
                            <div className="flex items-end w-full border rounded-lg bg-gray-100 border-gray-100">
                                <CustomCombobox
                                    value={selectedDialCode}
                                    options={dialCodeOptions}
                                    emptyLabel="No dial code found"
                                    className="rounded-r-none border-r-0 w-[100px] md:py-8"
                                    placeholder="Select dial code"
                                    onSelectChange={(value) => {
                                        setSelectedDialCode(value);
                                        setValue("mobileDialCode", value, { shouldValidate: true });
                                    }}
                                />
                                <div className="w-full">
                                    <CustomInput
                                        placeholder="Enter mobile number"
                                        type="tel"
                                        className="rounded-l-none border-0 border-l md:py-8 flex-1 m-0 w-full "
                                        icon={Phone}
                                        {...register("mobileNumber", {
                                            required: "Mobile number is required",
                                            pattern: {
                                                value: /^[0-9]{7,15}$/,
                                                message: "Mobile number must be 7-15 digits",
                                            },
                                        })}
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