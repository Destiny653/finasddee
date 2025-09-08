"use client";

import { CustomCombobox } from "@/app/_components/CustomCombobox";
import CustomInput from "@/app/_components/CustomInput";
import PaymentCardLayout from "@/app/_components/PaymentCardLayout";
import { CreditCard, FileText } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

// ID Details Form Interface
interface IDDetailsFormData {
    idType: string;
    idDetails: string;
    accounts: {
        accountNumber: string;
        bankBranch: string;
    }[];
}

// ID Details and Account Transfer Form Component
export const IDDetailsForm = ({
    onSubmit
}: {
    onSubmit: (data: IDDetailsFormData) => void
}) => {
    const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<IDDetailsFormData>({
        mode: "onChange",
        defaultValues: {
            accounts: [{ accountNumber: "", bankBranch: "" }]
        }
    });

    const idTypeOptions = [
        { label: "National ID Card", value: "national-id" },
        { label: "Passport", value: "passport" },
        { label: "Driver's License", value: "drivers-license" },
        { label: "Voter's Card", value: "voters-card" },
        { label: "Birth Certificate", value: "birth-certificate" },
    ];

    const bankBranchOptions = [
        { label: "Afriland First Bank - Douala Branch", value: "afriland-douala" },
        { label: "Commercial Bank of Cameroon - Yaounde Branch", value: "cbc-yaounde" },
        { label: "Standard Chartered Bank - Limbe Branch", value: "scb-limbe" },
        { label: "Ecobank Cameroon - Bafoussam Branch", value: "ecobank-bafoussam" },
        { label: "UBA Cameroon - Garoua Branch", value: "uba-garoua" },
    ];

    const [selectedIdType, setSelectedIdType] = useState("");
    const [accounts, setAccounts] = useState([{ accountNumber: "", bankBranch: "" }]);

    // Register fields for validation
    register("idType", { required: "ID type is required" });
    register("accounts", {
        validate: (accounts) =>
            accounts.every((account) => account.bankBranch) || "Bank/Branch is required for all accounts"
    });

    const addAccount = () => {
        setAccounts([...accounts, { accountNumber: "", bankBranch: "" }]);
    };

    const removeAccount = (index: number) => {
        if (accounts.length > 1) {
            const newAccounts = accounts.filter((_, i) => i !== index);
            setAccounts(newAccounts);
        }
    };

    return (
        <PaymentCardLayout
            title="ID Details & Account Transfer"
            description="Enter identification and account transfer information"
            buttonLabel="Save Changes"
            onNext={handleSubmit(onSubmit)}
        >
            <div className="w-full flex flex-col gap-4 sm:gap-6">
                {/* ID Details Section */}
                <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">ID Details</h3>
                    <div className="w-full flex flex-col gap-3 sm:gap-4">
                        <div>
                            <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">ID Type:</label>
                            <CustomCombobox
                                options={idTypeOptions}
                                emptyLabel="No ID type found"
                                placeholder="Please Select ..."
                                className=" py-8 w-full"
                                value={selectedIdType}
                                onSelectChange={(value) => {
                                    setSelectedIdType(value);
                                    setValue("idType", value, { shouldValidate: true });
                                }}
                            />
                            {errors.idType && (
                                <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.idType.message}</p>
                            )}
                        </div>

                        <CustomInput
                            label="ID Details:"
                            className=" sm:py-3 py-8 bg-gray-100"
                            placeholder="Enter ID details"
                            icon={FileText}
                            {...register("idDetails", {
                                required: "ID details are required",
                                minLength: {
                                    value: 5,
                                    message: "ID details must be at least 5 characters",
                                },
                            })}
                        />
                        {errors.idDetails && (
                            <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.idDetails.message}</p>
                        )}
                    </div>
                </div>

                {/* Optional Transfer Methods Info */}
                <div className="bg-gray-50 p-3 sm:p-4 rounded-md">
                    <p className="text-xs sm:text-sm text-gray-600">
                        The following Transfer Methods are all optional on this page, however if you wish to enter them here it will make the Send Money process quicker.
                    </p>
                </div>

                {/* Account Transfer Section */}
                <div className="bg-blue-50 border-l-4 border-blue-400 p-3 sm:p-4 rounded-md">
                    <p className="text-xs sm:text-sm text-blue-700">
                        Enter Account Transfer information if you wish to make Account Transfer remittances to this beneficiary.
                    </p>
                </div>

                <div>
                    <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Account Transfer</h3>
                    <div className="w-full flex flex-col gap-4 sm:gap-6">
                        {accounts.map((account, index) => (
                            <div key={index} className="rounded-lg p-3 sm:p-4 bg-gray-50">
                                <div className="flex justify-between items-center mb-2 sm:mb-3">
                                    <h4 className="text-sm sm:text-md font-medium">Account {index + 1}</h4>
                                    {accounts.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => removeAccount(index)}
                                            className="text-red-500 text-xs sm:text-sm hover:underline"
                                        >
                                            Remove Account
                                        </button>
                                    )}
                                </div>
                                
                                <div className="flex flex-col gap-3 sm:gap-4">
                                    <CustomInput
                                        label="Account Number:"
                                        className="sm:py-3 py-8 bg-white"
                                        placeholder="Enter account number"
                                        icon={CreditCard}
                                        {...register(`accounts.${index}.accountNumber` as const, {
                                            required: "Account number is required",
                                            pattern: {
                                                value: /^[0-9]{10,20}$/,
                                                message: "Account number must be 10-20 digits",
                                            },
                                        })}
                                    />
                                    {errors.accounts?.[index]?.accountNumber && (
                                        <p className="text-red-500 text-xs sm:text-sm">
                                            {errors.accounts[index]?.accountNumber?.message}
                                        </p>
                                    )}

                                    <div>
                                        <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                                            Bank/Branch: <span className="text-red-500">*</span>
                                        </label>
                                        <div className="flex items-center gap-2">
                                            <CustomCombobox
                                                options={bankBranchOptions}
                                                emptyLabel="No bank found"
                                                placeholder="Find Bank & Branch"
                                                className="py-2 sm:py-3 md:py-4 flex-1"
                                                value={account.bankBranch}
                                                onSelectChange={(value) => {
                                                    const newAccounts = [...accounts];
                                                    newAccounts[index].bankBranch = value;
                                                    setAccounts(newAccounts);
                                                    setValue(`accounts.${index}.bankBranch` as const, value, { shouldValidate: true });
                                                }}
                                            />
                                        </div>
                                        {errors.accounts?.[index]?.bankBranch && (
                                            <p className="text-red-500 text-xs sm:text-sm mt-1">
                                                {errors.accounts[index]?.bankBranch?.message}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}

                        <button
                            type="button"
                            onClick={addAccount}
                            className="w-full py-2 sm:py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 text-sm sm:text-base hover:border-blue-400 hover:text-blue-500 transition-colors"
                        >
                            + Add Another Account
                        </button>
                    </div>
                </div>
            </div>
        </PaymentCardLayout>
    );
};