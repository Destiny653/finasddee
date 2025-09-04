import { CustomCombobox } from "@/app/_components/CustomCombobox";
import CustomInput from "@/app/_components/CustomInput";
import PaymentCardLayout from "@/app/_components/PaymentCardLayout";
import CountryList from "country-list-with-dial-code-and-flag";
import React, { FC, useState } from "react";

interface IReceiverStep {
    onNext: () => void;
    onDataChange: (data: any) => void;
}
const ReceiverStep: FC<IReceiverStep> = ({ onNext, onDataChange }) => {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [organizationType, setOrganizationType] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [address3, setAddress3] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [country, setCountry] = useState('');
    const [dialCode, setDialCode] = useState('+237');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleNext = () => {
        onDataChange({
            firstName,
            middleName,
            lastName,
            email,
            contact,
            organizationType,
            address1,
            address2,
            address3,
            city,
            state,
            zipCode,
            country,
            dialCode,
            phoneNumber
        });
        onNext();
    };
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
            onNext={handleNext}
        >
            <div className="w-full flex flex-col gap-4">
                <div className="w-full grid grid-cols-2 gap-4">
                    <CustomInput
                        label="First name"
                        className="md:py-8"
                        placeholder="first name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <CustomInput
                        label="Middle name"
                        placeholder="Middle name"
                        className="md:py-8"
                        value={middleName}
                        onChange={(e) => setMiddleName(e.target.value)}
                    />
                    <CustomInput
                        label="last name"
                        className="md:py-8"
                        placeholder="last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <CustomInput
                        label="Receiver's email (Optional)"
                        className="md:py-8"
                        placeholder="Example@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <CustomInput
                        label="Receiver's contact"
                        className="md:py-8"
                        placeholder="Enter recievers contact"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
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
                        value={organizationType}
                        onSelectChange={setOrganizationType}
                    />
                </div>
                <CustomInput
                    label="Receiver's Address line 1"
                    className="md:py-8"
                    placeholder="Enter recievers address"
                    value={address1}
                    onChange={(e) => setAddress1(e.target.value)}
                />
                <CustomInput
                    label="Receiver's Address line 2"
                    className="md:py-8"
                    placeholder="Enter recievers address"
                    value={address2}
                    onChange={(e) => setAddress2(e.target.value)}
                />
                <CustomInput
                    label="Receiver's Address line 3"
                    className="md:py-8"
                    placeholder="Enter recievers address"
                    value={address3}
                    onChange={(e) => setAddress3(e.target.value)}
                />
                <div className="w-full grid grid-cols-2 items-center justify-center gap-4">
                    <CustomInput
                        label="city"
                        className="md:py-8"
                        placeholder="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <CustomInput
                        label="state"
                        className="md:py-8"
                        placeholder="state"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                    />
                    <CustomInput
                        label="zip code"
                        className="md:py-8 "
                        placeholder="enter receivers postal code"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                    />
                    <CustomCombobox
                        options={CountryOptions}
                        emptyLabel="No Country found"
                        label="Receiver's country"
                        placeholder="Select Country"
                        optionFullWidth
                        className="md:py-8"
                        value={country}
                        onSelectChange={setCountry}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <p className="font-sans  text-sm text-muted-foreground font-semibold leading-[18px] ">
                        Telephone
                    </p>
                    <div className="flex items-end w-full bg-gray-100 border-gray-200 border rounded-lg">
                        <CustomCombobox
                            value={dialCode}
                            options={dailCodeOptions}
                            emptyLabel="No currency code found"
                            className="rounded-r-none border-r-0 w-full md:py-7"
                            // label="Reeiver Country"
                            placeholder="Select currency code"
                            onSelectChange={setDialCode}
                        />
                        <div className="w-full">
                            <CustomInput
                                placeholder=""
                                type="tel"
                                className="border-0 md:py-7 rounded-none flex-1 w-full border-l"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </PaymentCardLayout>
    );
};

export default ReceiverStep;
