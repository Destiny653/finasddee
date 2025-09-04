import { CustomCombobox } from "@/app/_components/CustomCombobox";
import CustomInput from "@/app/_components/CustomInput";
import PaymentCardLayout from "@/app/_components/PaymentCardLayout";
import CountryList from "country-list-with-dial-code-and-flag";
import React, { FC } from "react";

interface IReceiverStep {
    onNext: () => void;
}
const ReceiverStep: FC<IReceiverStep> = ({ onNext }) => {
    const allCountries = CountryList.getAll();
    const CountryOptions = allCountries.map((items) => ({
        label: `${items?.flag} ${items?.name}`,
        value: items?.name,
    }));
    const dailCodeOptions = allCountries.map((items) => ({
        label: `${items?.flag} ${items?.dialCode}`,
        value: items?.dialCode,
    }));
    return (
        <PaymentCardLayout
            title="Receivers information"
            description="The information must be accurate or your transfer might be delayed"
            buttonLabel="continue"
            onNext={onNext}
        >
            <div className="w-full flex flex-col gap-4">
                <div className="w-full grid grid-cols-2 gap-4">
                    <CustomInput
                        label="First name"
                        className="md:py-8"
                        placeholder="first name"
                    />
                    <CustomInput
                        label="Middle name"
                        placeholder="Middle name"
                        className="md:py-8"
                    />
                    <CustomInput
                        label="last name"
                        className="md:py-8"
                        placeholder="last name" />
                    <CustomInput
                        label="Receiver's email (Optional)"
                        className="md:py-8"
                        placeholder="Example@gmail.com"
                    />
                    <CustomInput
                        label="Receiver's contact"
                        className="md:py-8"
                        placeholder="Enter recievers contact"
                    />
                    <CustomCombobox
                        options={[
                            {
                                label: "individual",
                                value: "individual",
                            },
                        ]}
                        emptyLabel="No organisation type found"
                        label="Organization type"
                        placeholder="Select "
                        optionFullWidth
                        className="md:py-8"
                    />
                </div>
                <CustomInput
                    label="Receiver's Address line 1"
                    className="md:py-8"
                    placeholder="Enter recievers address"
                />
                <CustomInput
                    label="Receiver's Address line 2"
                    className="md:py-8"
                    placeholder="Enter recievers address"
                />
                <CustomInput
                    label="Receiver's Address line 3"
                    className="md:py-8"
                    placeholder="Enter recievers address"
                />
                <div className="w-full grid grid-cols-2 items-center justify-center gap-4">
                    <CustomInput
                        label="city"
                        className="md:py-8"
                        placeholder="city"
                    />
                    <CustomInput
                        label="state"
                        className="md:py-8"
                        placeholder="state"
                    />
                    <CustomInput
                        label="zip code"
                        className="md:py-8 "
                        placeholder="enter receivers postal code"
                    />
                    <CustomCombobox
                        options={CountryOptions}
                        emptyLabel="No Country found"
                        label="Receiver's country"
                        placeholder="Select Country"
                        optionFullWidth
                        className="md:py-8"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <p className="font-sans  text-sm text-muted-foreground font-semibold leading-[18px] ">
                        Telephone
                    </p>
                    <div className="flex items-end w-full bg-gray-100 border-gray-200 border rounded-lg">
                        <CustomCombobox
                            value={"+237"}
                            options={dailCodeOptions}
                            emptyLabel="No currency code found"
                            className="rounded-r-none border-r-0 w-full md:py-7"
                            // label="Reeiver Country"
                            placeholder="Select currency code"
                        />
                        <div className="w-full">
                            <CustomInput
                                placeholder=""
                                type="tel"
                                className="border-0 md:py-7 rounded-none flex-1 w-full border-l"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </PaymentCardLayout>
    );
};

export default ReceiverStep;
