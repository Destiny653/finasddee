"use client";
import { CustomCombobox } from "@/app/_components/CustomCombobox";
import CustomInput from "@/app/_components/CustomInput";
import PaymentCardLayout from "@/app/_components/PaymentCardLayout";
import CountryList from "country-list-with-dial-code-and-flag";
import { MapPin, Phone, CreditCard, FileText } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

// Cash Collection Form Interface
interface CashCollectionFormData {
    collectionPoint: string;
    mobileDialCode: string;
    mobileNumber: string;
    mobileNetwork: string;
}

// ID Details Form Interface
interface IDDetailsFormData {
    idType: string;
    idDetails: string;
    accounts: {
        accountNumber: string;
        bankBranch: string;
    }[];
}

// Cash Collection Form Component
export const CashCollectionForm = ({ 
    onSubmit 
}: { 
    onSubmit: (data: CashCollectionFormData) => void 
}) => {
    const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<CashCollectionFormData>({
        mode: "onChange",
        defaultValues: {
            mobileDialCode: "+237",
        }
    });

    const allCountries = CountryList.getAll();
    const dialCodeOptions = allCountries.map((items) => ({
        label: `${items?.flag} ${items?.dialCode}`,
        value: items?.dialCode,
    }));

    const collectionPointOptions = [
        { label: "Western Union Agent - Downtown Branch", value: "western-union-downtown" },
        { label: "MoneyGram Agent - City Center", value: "moneygram-city-center" },
        { label: "Express Money - Mall Location", value: "express-money-mall" },
        { label: "Quick Cash - Airport Terminal", value: "quick-cash-airport" },
        { label: "Financial Services - Main Street", value: "financial-services-main" },
    ];

    const mobileNetworkOptions = [
        { label: "MTN Cameroon", value: "mtn-cameroon" },
        { label: "Orange Cameroon", value: "orange-cameroon" },
        { label: "Camtel Mobile", value: "camtel-mobile" },
        { label: "Nexttel", value: "nexttel" },
    ];

    const [selectedDialCode, setSelectedDialCode] = useState("+237");
    const [selectedCollectionPoint, setSelectedCollectionPoint] = useState("");
    const [selectedMobileNetwork, setSelectedMobileNetwork] = useState("");

    // Register fields for validation
    register("collectionPoint", { required: "Collection point is required" });
    register("mobileDialCode", { required: "Dial code is required" });
    register("mobileNetwork", { required: "Mobile network is required" });

    return (
        <PaymentCardLayout
            title="Cash Collection"
            description="Enter cash collection and mobile transfer information"
            buttonLabel="Save Changes"
            onNext={handleSubmit(onSubmit)}
        >
            <div className="w-full flex flex-col gap-6">
                {/* Cash Collection Section */}
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-md">
                    <p className="text-sm text-blue-700">
                        Enter Cash Collection information if you wish to make Cash Collection remittances to this beneficiary.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Cash Collection</h3>
                    <div className="w-full flex flex-col gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Collection Point <span className="text-red-500">*</span>
                            </label>
                            <CustomCombobox
                                options={collectionPointOptions}
                                emptyLabel="No collection point found"
                                placeholder="Find Collection Point"
                                className="py-6 md:py-8 w-full"
                                value={selectedCollectionPoint}
                                onSelectChange={(value) => {
                                    setSelectedCollectionPoint(value);
                                    setValue("collectionPoint", value, { shouldValidate: true });
                                }}
                            />
                            {errors.collectionPoint && (
                                <p className="text-red-500 text-sm mt-1">{errors.collectionPoint.message}</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Mobile Transfer Section */}
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-md">
                    <p className="text-sm text-blue-700">
                        Enter Mobile information if you wish to make Mobile transfer remittances to this beneficiary (where available).
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4">Mobile Transfer</h3>
                    <div className="w-full flex flex-col gap-4">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Mobile Number <span className="text-red-500">*</span>
                                </label>
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
                                            className="rounded-l-none border-0 border-l md:py-8 flex-1 m-0 w-full"
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
                                {errors.mobileDialCode && (
                                    <p className="text-red-500 text-sm mt-1">{errors.mobileDialCode.message}</p>
                                )}
                                {errors.mobileNumber && (
                                    <p className="text-red-500 text-sm mt-1">{errors.mobileNumber.message}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Mobile Number Network:</label>
                                <CustomCombobox
                                    options={mobileNetworkOptions}
                                    emptyLabel="No mobile network found"
                                    placeholder="Select Mobile Network"
                                    className="py-6 md:py-8 w-full"
                                    value={selectedMobileNetwork}
                                    onSelectChange={(value) => {
                                        setSelectedMobileNetwork(value);
                                        setValue("mobileNetwork", value, { shouldValidate: true });
                                    }}
                                />
                                {errors.mobileNetwork && (
                                    <p className="text-red-500 text-sm mt-1">{errors.mobileNetwork.message}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PaymentCardLayout>
    );
};