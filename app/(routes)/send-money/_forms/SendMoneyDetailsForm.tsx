"use client";
import Link from "next/link";
import React, { useState, useEffect, useCallback, useMemo, FC } from "react";
import { CustomCombobox } from "@/app/_components/CustomCombobox";
import Image from "next/image";
import { DollarSign } from "lucide-react";

export enum transferTypeEnum {
    ACCOUNT = "account",
    CASH_COLLECTION = "cash-collection",
    MOBILE_TRANSFER = "mobile-transfer",
}

interface ISendMoneyDetailsForm {
    onNext?: () => void;
    onDataChange?: (data: unknown) => void;
}
const SendMoneyDetailsForm: FC<ISendMoneyDetailsForm> = ({ onNext, onDataChange }) => {
    const [youSend, setYouSend] = useState('');
    const [recipientGets, setRecipientGets] = useState('0.0');
    const [fees, setFees] = useState('0.0');
    const [totalToPay, setTotalToPay] = useState('0.00');
    const [selectedSenderCountry, setSelectedSenderCountry] = useState('Australia');
    const [selectedRecipientCountry, setSelectedRecipientCountry] = useState('Albania');
    const [selectedSendCurrency, setSelectedSendCurrency] = useState('AUD');
    const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState('BANK');

    // Exchange rates (sample rates for demonstration)
    const exchangeRates = useMemo((): { [key: string]: { [key: string]: number } } => ({
        'AUD': { 'USD': 0.67, 'EUR': 0.62, 'GBP': 0.53, 'CNY': 4.8, 'ALL': 62.5 },
        'USD': { 'AUD': 1.49, 'EUR': 0.92, 'GBP': 0.79, 'CNY': 7.2, 'ALL': 93.2 },
        'EUR': { 'USD': 1.09, 'AUD': 1.61, 'GBP': 0.86, 'CNY': 7.8, 'ALL': 101.5 },
        'GBP': { 'USD': 1.27, 'AUD': 1.89, 'EUR': 1.16, 'CNY': 9.1, 'ALL': 118.3 },
        'CNY': { 'USD': 0.14, 'AUD': 0.21, 'EUR': 0.13, 'GBP': 0.11, 'ALL': 12.9 }
    }), []);

    const currencyMap = useMemo((): { [key: string]: string } => ({
        'Albania': 'ALL', 'Algeria': 'DZD', 'Australia': 'AUD', 'Bahamas': 'BSD',
        'Belarus': 'BYN', 'Cambodia': 'KHR', 'China': 'CNY', 'Croatia': 'HRK',
        'Germany': 'EUR', 'Iran': 'IRR', 'Italy': 'EUR', 'Latvia': 'EUR',
        'Morocco': 'MAD', 'Nepal': 'NPR', 'Romania': 'RON', 'Russia': 'RUB',
        'Serbia': 'RSD', 'Spain': 'EUR', 'United Kingdom': 'GBP',
        'United States': 'USD', 'Vietnam': 'VND'
    }), []);

    const calculateConversion = useCallback(() => {
        const amount = parseFloat(youSend) || 0;
        const recipientCurrency = currencyMap[selectedRecipientCountry];

        if (amount > 0 && selectedSendCurrency && recipientCurrency) {
            let convertedAmount = amount;
            let rate = 1;

            if (exchangeRates[selectedSendCurrency] && exchangeRates[selectedSendCurrency][recipientCurrency]) {
                rate = exchangeRates[selectedSendCurrency][recipientCurrency];
                convertedAmount = amount * rate;
            }

            // Calculate fees (2.5% of send amount)
            const feesAmount = amount * 0.025;
            const totalToPayAmount = amount + feesAmount;

            setRecipientGets(convertedAmount.toFixed(2));
            setFees(feesAmount.toFixed(2));
            setTotalToPay(totalToPayAmount.toFixed(2));
        } else {
            setRecipientGets('0.0');
            setFees('0.0');
            setTotalToPay('0.00');
        }
    }, [youSend, selectedSendCurrency, selectedRecipientCountry, currencyMap, exchangeRates]);

    useEffect(() => {
        calculateConversion();
    }, [youSend, selectedSendCurrency, selectedRecipientCountry, calculateConversion]);
    return (

        <div className="w-full overflow-hidden">
            <style jsx>{`
                .form-label {
                    font-weight: 500;
                    margin-bottom: 0.5rem;
                    font-size: 16px;
                    color: #6b7280;
                }

                .form-control, .form-select {
                    font-size: 16px;
                    padding: 0.75rem;
                    border: 1px solid #e5e7eb;
                    background-color: #f9fafb;
                    border-radius: 0.375rem;
                    width: 100%;
                    max-width: 100%;
                    box-sizing: border-box;
                }

                .form-control:focus, .form-select:focus {
                    border-color: #d1d5db;
                    box-shadow: none;
                    background-color: #f9fafb;
                }

                .input-group {
                    border: 1px solid #e5e7eb;
                    border-radius: 0.375rem;
                    background-color: #f9fafb;
                    width: 100%;
                    max-width: 100%;
                    overflow: hidden;
                    box-sizing: border-box;
                }

                .input-group-text {
                    font-size: 16px;
                    background-color: #f9fafb;
                    border: none;
                    color: #6b7280;
                }

                .btn-primary {
                    background-color: #c99207;
                    border-color: #b8860b;
                    padding: 12px;
                    font-weight: 500;
                    border-radius: 0.375rem;
                }

                .btn-primary:hover {
                    background-color: #ac7d08;
                    border-color: #9a7209;
                }

                .btn-primary:focus {
                    background-color: #9a7209;
                    border-color: #9a7209;
                    box-shadow: 0 0 0 0.2rem rgba(184, 134, 11, 0.25);
                }

                .summary-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0.75rem 0;
                    color: #6b7280;
                }

                .summary-row.total {
                    font-weight: 600;
                    color: #111827;
                    font-size: 1.1rem;
                }

                .delivery-methods-label {
                    color: #6b7280;
                    font-weight: 500;
                    margin: 0;
                    display: block;
                }
            `}</style>

            {/* Sender Country */}
            <div className="mb-4 z-30 flex flex-col">
                <label htmlFor="youSendCountry" className="form-label">Sender Country</label>
                <CustomCombobox
                    options={[
                        { value: "Australia", label: "🇦🇺 Australia" },
                        { value: "Bahrain", label: "🇧🇭 Bahrain" },
                        { value: "Brazil", label: "🇧🇷 Brazil" },
                        { value: "Canada", label: "🇨🇦 Canada" },
                        { value: "China", label: "🇨🇳 China" },
                        { value: "Denmark", label: "🇩🇰 Denmark" },
                        { value: "France", label: "🇫🇷 France" },
                        { value: "Germany", label: "🇩🇪 Germany" },
                        { value: "Iceland", label: "🇮🇸 Iceland" },
                        { value: "Italy", label: "🇮🇹 Italy" },
                        { value: "New Zealand", label: "🇳🇿 New Zealand" },
                        { value: "Norway", label: "🇳🇴 Norway" },
                        { value: "Russia", label: "🇷🇺 Russia" },
                        { value: "Spain", label: "🇪🇸 Spain" },
                        { value: "United Kingdom", label: "🇬🇧 United Kingdom" },
                        { value: "United States", label: "🇺🇸 United States" },
                        { value: "Vietnam", label: "🇻🇳 Vietnam" },
                    ]}
                    value={selectedSenderCountry}
                    onSelectChange={setSelectedSenderCountry}
                    placeholder="Select sender country"
                    className="w-full md:py-8"
                />
            </div>

            {/* Receiver Country */}
            <div className="mb-4 flex flex-col">
                <label htmlFor="recipientCountry" className="form-label">Receivers Country</label>
                <CustomCombobox
                    options={[
                        { value: "Albania", label: "🇦🇱 Albania" },
                        { value: "Algeria", label: "🇩🇿 Algeria" },
                        { value: "Australia", label: "🇦🇺 Australia" },
                        { value: "Bahamas", label: "🇧🇸 Bahamas" },
                        { value: "Belarus", label: "🇧🇾 Belarus" },
                        { value: "Cambodia", label: "🇰🇭 Cambodia" },
                        { value: "China", label: "🇨🇳 China" },
                        { value: "Croatia", label: "🇭🇷 Croatia" },
                        { value: "Germany", label: "🇩🇪 Germany" },
                        { value: "Iran", label: "🇮🇷 Iran" },
                        { value: "Italy", label: "🇮🇹 Italy" },
                        { value: "Latvia", label: "🇱🇻 Latvia" },
                        { value: "Morocco", label: "🇲🇦 Morocco" },
                        { value: "Nepal", label: "🇳🇵 Nepal" },
                        { value: "Romania", label: "🇷🇴 Romania" },
                        { value: "Russia", label: "🇷🇺 Russia" },
                        { value: "Serbia", label: "🇷🇸 Serbia" },
                        { value: "Spain", label: "🇪🇸 Spain" },
                        { value: "United Kingdom", label: "🇬🇧 United Kingdom" },
                        { value: "United States", label: "🇺🇸 United States" },
                        { value: "Vietnam", label: "🇻🇳 Vietnam" },
                    ]}
                    value={selectedRecipientCountry}
                    onSelectChange={setSelectedRecipientCountry}
                    placeholder="Select receiver country"
                    className="w-full md:py-8"
                />
            </div>

            {/* Delivery Methods */}
            <div className="mb-4 flex flex-col gap-2">
                <p className="delivery-methods-label mb-2">Delivery methods</p>
                <CustomCombobox
                    options={[
                        { value: "BANK", label: "BANK TRANSFER" },
                        { value: "Bitcoin", label: "Bitcoin" },
                        { value: "PAYPAL", label: "PAYPAL" },
                        { value: "SKRILL", label: "SKRILL" },
                    ]}
                    value={selectedDeliveryMethod}
                    onSelectChange={setSelectedDeliveryMethod}
                    placeholder="Select delivery method"
                    className="w-full md:py-8"
                />
            </div>

            {/* Sending Currency */}
            <div className="mb-4 flex flex-col">
                <label htmlFor="youSend" className="form-label">Sending Currency</label>
                <div className="input-group" style={{
                    display: 'flex',
                    alignItems: 'stretch',
                    width: '100%',
                    maxWidth: '100%',
                    overflow: 'hidden'
                }}>
                    <span className="input-group-text" style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0.75rem',
                        borderRight: 'none',
                        minWidth: '40px',
                        justifyContent: 'center',
                        flexShrink: 0
                    }}><DollarSign size={16} /></span>
                    <input
                        type="number"
                        className="form-control outline-0 rounded-none border-0"
                        id="youSend"
                        placeholder="0"
                        name="amount"
                        min="0"
                        step="0.01"
                        value={youSend}
                        onChange={(e) => setYouSend(e.target.value)}
                        style={{
                            flex: '1',
                            minWidth: '0',
                            border: '0'
                        }}
                    />
                    <CustomCombobox
                        options={[
                            { value: "AUD", label: "🇦🇺 Australian Dollar A$" },
                            { value: "BHD", label: "🇧🇭 Bahraini Dinar BD" },
                            { value: "BRL", label: "🇧🇷 Real R$" },
                            { value: "CAD", label: "🇨🇦 Canadian Dollar Can$" },
                            { value: "CNY", label: "🇨🇳 Chinese Yuan ¥" },
                            { value: "DKK", label: "🇩🇰 Danish Krone Dkr" },
                            { value: "EUR", label: "🇪🇺 Euro €" },
                            { value: "ISK", label: "🇮🇸 Icelandic Krona Kr" },
                            { value: "NZD", label: "🇳🇿 New Zealand Dollar $" },
                            { value: "NOK", label: "🇳🇴 Norwegian Krone kr" },
                            { value: "RUB", label: "🇷🇺 Ruble р." },
                            { value: "GBP", label: "🇬🇧 Pound Sterling £" },
                            { value: "USD", label: "🇺🇸 United States Dollar $" },
                            { value: "VND", label: "🇻🇳 Dong ₫" },
                        ]}
                        value={selectedSendCurrency}
                        onSelectChange={setSelectedSendCurrency}
                        placeholder="Select currency"
                        className="w-[200px] min-w-[140px] md:py-8"
                    />
                </div>
            </div>

            {/* Summary */}
            <div className="mt-6 mb-6 font-semibold ">
                <div className="summary-row border-b  border-gray-100">
                    <span>Receiver gets</span>
                    <span>{recipientGets}</span>
                </div>

                <div className="summary-row border-b border-gray-100">
                    <span>Total Fees</span>
                    <span>{fees}</span>
                </div>

                <div className="summary-row total">
                    <span>Amount To Pay</span>
                    <span>{totalToPay}</span>
                </div>
            </div>

            {/* Continue Button */}
            <div className="mb-6">
                <Link href={'/send-money'}>
                    <button
                        type="button"
                        className="btn btn-primary w-full md:h-16 text-white font-semibold"
                                onClick={() => {
                                    const amount = parseFloat(youSend);
                                    if (!amount || amount <= 0) {
                                        import("sonner").then(({ toast }) => {
                                            toast.error('Please enter a valid amount to send.');
                                        });
                                        return;
                                    }
                                    if (onDataChange) {
                                        onDataChange({
                                            youSend,
                                            recipientGets,
                                            fees,
                                            totalToPay,
                                            selectedSenderCountry,
                                            selectedRecipientCountry,
                                            selectedSendCurrency,
                                            selectedDeliveryMethod
                                        });
                                    }
                                    if (onNext) {
                                        onNext();
                                    }
                                }}
                    >
                        Continue
                    </button>
                </Link>
            </div>

            {/* Security badges */}
            <div className="text-center">
                <div className="mb-3 flex justify-center items-center space-x-4">
                    <Image src="/assets/images/security pics/credit-card.png" alt="Credit Card" width={32} height={32} />
                    <Image src="/assets/images/security pics/Trustly-logo.png" alt="Trustly" width={32} height={32} />
                    {/* <Image src="/assets/images/security pics/partner5.gif" alt="Sofort Banking" width={32} height={32} /> */}
                </div>
                <p className=" text-gray-600 flex items-start justify-center text-lg">
                    <i className="fa fa-lock text-lg mr-2 mt-1"></i>
                    <span>We are Authorised and Regulated by the Financial Conduct Authority (US Dollars).</span>
                </p>
            </div>
        </div>
    );
};

export default SendMoneyDetailsForm;
