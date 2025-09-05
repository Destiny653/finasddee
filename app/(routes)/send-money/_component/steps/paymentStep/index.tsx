"use client";
import { CustomCombobox } from "@/app/_components/CustomCombobox";
import CustomInput from "@/app/_components/CustomInput";
import PaymentCardLayout from "@/app/_components/PaymentCardLayout";
import CountryList from "country-list-with-dial-code-and-flag";
import { useSearchParams } from "next/navigation";
import { FC } from "react";
import { transferTypeEnum } from "../../../_forms/SendMoneyDetailsForm";

interface IPaymentStep {
    onNext: () => void;
}
const PaymentStep: FC<IPaymentStep> = ({ onNext }) => {
    const searchParams = useSearchParams();
    const transferType = searchParams.get("transferType");

    const allCountries = CountryList.getAll();
    const dailCodeOptions = allCountries.map((items) => ({
        label: `${items?.flag} ${items?.dialCode}`,
        value: items?.dialCode,
    }));

    const modalDescription = () => {
        switch (transferType) {
            case transferTypeEnum.ACCOUNT:
                return "Enter account trnasfer informaton to make account transfer remittance to this beneficiary";
            case transferTypeEnum.CASH_COLLECTION:
                return "enter cash collection information to make  cash collection transfer remittance to this beneficiary";

            default:
                return "Enter mobile information to make mobile transfer remittance to this beneficiary";
        }
    };

    const renderForm = () => {
        switch (transferType) {
            case transferTypeEnum.ACCOUNT:
                return (
                    <>
                        <CustomInput label="Account number" />
                        <CustomInput
                            label="Bank/branch "
                            placeholder="find bank & branch"
                            disabled
                        />
                    </>
                );
            case transferTypeEnum.CASH_COLLECTION:
                return (
                    <>
                        <CustomInput
                            label="collection point "
                            placeholder="find Collection point"
                            disabled
                        />
                    </>
                );
            default:
                return (
                    <>
                        <div className="flex flex-col gap-2">
                            <p className="font-sans  text-sm text-muted-foreground font-semibold leading-[18px] ">
                                Mobile number
                            </p>
                            <div className="flex items-end w-full h-fit bg-gray-100 border border-gray-100 rounded-lg">
                                <CustomCombobox
                                    value={"+237"}
                                    options={dailCodeOptions}
                                    emptyLabel="No currency code found"
                                    className="rounded-r-none border-r-0 w-[100px] md:py-7"
                                    // label="Reeiver Country"
                                    placeholder="Select currency code"
                                />
                                <div className="w-full ">
                                    <CustomInput
                                        placeholder=""
                                        type="tel"
                                        className="rounded-l-none flex-1 w-full md:py-7 border-0 border-l"
                                    />
                                </div>
                            </div>
                        </div>
                        <CustomCombobox
                            options={[{ label: "MTN MOMO", value: "MTN MOMO" }]}
                            emptyLabel="No provider found"
                            className="rounded-lg border-r-0 w-full md:py-8"
                            label="Mobile number network"
                            placeholder="Select mobile network"
                        />
                    </>
                );
        }
    };
    return (
        <PaymentCardLayout
            title={transferType?.replaceAll("-", " ") ?? "Payment"}
            description={modalDescription()}
            buttonLabel="continue"
            onNext={onNext}
        >
            <div className="w-full flex flex-col  gap-4">{renderForm()}</div>
        </PaymentCardLayout>
    );
};

export default PaymentStep;
