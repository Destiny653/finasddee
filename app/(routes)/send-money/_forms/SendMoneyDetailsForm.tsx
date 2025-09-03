"use client";
import React, { useState, useEffect } from "react";

export enum transferTypeEnum {
    ACCOUNT = "account",
    CASH_COLLECTION = "cash-collection",
    MOBILE_TRANSFER = "mobile-transfer",
}

const SendMoneyDetailsForm = () => {
    const [youSend, setYouSend] = useState('');
    const [recipientGets, setRecipientGets] = useState('0.0');
    const [fees, setFees] = useState('0.0');
    const [totalToPay, setTotalToPay] = useState('0.00');
    const [selectedSenderCountry, setSelectedSenderCountry] = useState('Australia');
    const [selectedRecipientCountry, setSelectedRecipientCountry] = useState('Albania');
    const [selectedSendCurrency, setSelectedSendCurrency] = useState('AUD');
    const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState('BANK');

    // Exchange rates (sample rates for demonstration)
    const exchangeRates: { [key: string]: { [key: string]: number } } = {
        'AUD': { 'USD': 0.67, 'EUR': 0.62, 'GBP': 0.53, 'CNY': 4.8, 'ALL': 62.5 },
        'USD': { 'AUD': 1.49, 'EUR': 0.92, 'GBP': 0.79, 'CNY': 7.2, 'ALL': 93.2 },
        'EUR': { 'USD': 1.09, 'AUD': 1.61, 'GBP': 0.86, 'CNY': 7.8, 'ALL': 101.5 },
        'GBP': { 'USD': 1.27, 'AUD': 1.89, 'EUR': 1.16, 'CNY': 9.1, 'ALL': 118.3 },
        'CNY': { 'USD': 0.14, 'AUD': 0.21, 'EUR': 0.13, 'GBP': 0.11, 'ALL': 12.9 }
    };

    const currencyMap: { [key: string]: string } = {
        'Albania': 'ALL', 'Algeria': 'DZD', 'Australia': 'AUD', 'Bahamas': 'BSD',
        'Belarus': 'BYN', 'Cambodia': 'KHR', 'China': 'CNY', 'Croatia': 'HRK',
        'Germany': 'EUR', 'Iran': 'IRR', 'Italy': 'EUR', 'Latvia': 'EUR',
        'Morocco': 'MAD', 'Nepal': 'NPR', 'Romania': 'RON', 'Russia': 'RUB',
        'Serbia': 'RSD', 'Spain': 'EUR', 'United Kingdom': 'GBP',
        'United States': 'USD', 'Vietnam': 'VND'
    };

    const calculateConversion = () => {
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
    };

    useEffect(() => {
        calculateConversion();
    }, [youSend, selectedSendCurrency, selectedRecipientCountry]);
    return (
        <div className="w-full">
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
                }

                .input-group-text {
                    font-size: 16px;
                    background-color: #f9fafb;
                    border: none;
                    color: #6b7280;
                }

                .btn-primary {
                    background-color: #b8860b;
                    border-color: #b8860b;
                    padding: 12px;
                    font-weight: 500;
                    border-radius: 0.375rem;
                }

                .btn-primary:hover {
                    background-color: #9a7209;
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

                .delivery-methods-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1rem;
                }

                .delivery-methods-label {
                    color: #6b7280;
                    font-weight: 500;
                    margin: 0;
                }
            `}</style>

            {/* Sender Country */}
            <div className="mb-4">
                <label htmlFor="youSendCountry" className="form-label">Sender Country</label>
                <select
                    id="youSendCountry"
                    className="form-select w-full"
                    required
                    value={selectedSenderCountry}
                    onChange={(e) => setSelectedSenderCountry(e.target.value)}
                >
                    <option value="Australia">🇦🇺 Australia</option>
                    <option value="Bahrain">🇧🇭 Bahrain</option>
                    <option value="Brazil">🇧🇷 Brazil</option>
                    <option value="Canada">🇨🇦 Canada</option>
                    <option value="China">🇨🇳 China</option>
                    <option value="Denmark">🇩🇰 Denmark</option>
                    <option value="France">🇫🇷 France</option>
                    <option value="Germany">🇩🇪 Germany</option>
                    <option value="Iceland">🇮🇸 Iceland</option>
                    <option value="Italy">🇮🇹 Italy</option>
                    <option value="New Zealand">🇳🇿 New Zealand</option>
                    <option value="Norway">🇳🇴 Norway</option>
                    <option value="Russia">🇷🇺 Russia</option>
                    <option value="Spain">🇪🇸 Spain</option>
                    <option value="United Kingdom">🇬🇧 United Kingdom</option>
                    <option value="United States">🇺🇸 United States</option>
                    <option value="Vietnam">🇻🇳 Vietnam</option>
                </select>
            </div>

            {/* Receiver Country */}
            <div className="mb-4">
                <label htmlFor="recipientCountry" className="form-label">Receivers Country</label>
                <select
                    id="recipientCountry"
                    className="form-select w-full"
                    value={selectedRecipientCountry}
                    onChange={(e) => setSelectedRecipientCountry(e.target.value)}
                >
                    <option value="Albania">🇦🇱 Albania</option>
                    <option value="Algeria">🇩🇿 Algeria</option>
                    <option value="Australia">🇦🇺 Australia</option>
                    <option value="Bahamas">🇧🇸 Bahamas</option>
                    <option value="Belarus">🇧🇾 Belarus</option>
                    <option value="Cambodia">🇰🇭 Cambodia</option>
                    <option value="China">🇨🇳 China</option>
                    <option value="Croatia">🇭🇷 Croatia</option>
                    <option value="Germany">🇩🇪 Germany</option>
                    <option value="Iran">🇮🇷 Iran</option>
                    <option value="Italy">🇮🇹 Italy</option>
                    <option value="Latvia">🇱🇻 Latvia</option>
                    <option value="Morocco">🇲🇦 Morocco</option>
                    <option value="Nepal">🇳🇵 Nepal</option>
                    <option value="Romania">🇷🇴 Romania</option>
                    <option value="Russia">🇷🇺 Russia</option>
                    <option value="Serbia">🇷🇸 Serbia</option>
                    <option value="Spain">🇪🇸 Spain</option>
                    <option value="United Kingdom">🇬🇧 United Kingdom</option>
                    <option value="United States">🇺🇸 United States</option>
                    <option value="Vietnam">🇻🇳 Vietnam</option>
                </select>
            </div>

            {/* Delivery Methods */}
            <div className="delivery-methods-row mb-4">
                <p className="delivery-methods-label">Delivery methods</p>
                <select
                    id="delivery_methods"
                    className="form-select"
                    style={{ width: '200px' }}
                    value={selectedDeliveryMethod}
                    onChange={(e) => setSelectedDeliveryMethod(e.target.value)}
                >
                    <option value="BANK">BANK TRANSFER</option>
                    <option value="Bitcoin">Bitcoin</option>
                    <option value="PAYPAL">PAYPAL</option>
                    <option value="SKRILL">SKRILL</option>
                </select>
            </div>

            {/* Sending Currency */}
            <div className="mb-4">
                <label htmlFor="youSend" className="form-label">Sending Currency</label>
                <div className="input-group" style={{
                    display: 'flex',
                    alignItems: 'stretch',
                    width: '100%',
                    maxWidth: '100%'
                }}>
                    <span className="input-group-text" style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0.75rem',
                        borderRight: 'none',
                        minWidth: '40px',
                        justifyContent: 'center'
                    }}>$</span>
                    <input
                        type="number"
                        className="form-control"
                        id="youSend"
                        placeholder="0"
                        name="amount"
                        min="0"
                        step="0.01"
                        value={youSend}
                        onChange={(e) => setYouSend(e.target.value)}
                        style={{
                            borderLeft: 'none',
                            borderRight: 'none',
                            flex: '1',
                            minWidth: '0'
                        }}
                    />
                    <select
                        id="youSendCurrency"
                        className="form-select"
                        required
                        style={{
                            width: '180px',
                            minWidth: '180px',
                            maxWidth: '180px',
                            border: 'none',
                            backgroundColor: '#f9fafb',
                            borderLeft: 'none',
                            borderRadius: '0 0.375rem 0.375rem 0',
                            fontSize: '14px'
                        }}
                        value={selectedSendCurrency}
                        onChange={(e) => setSelectedSendCurrency(e.target.value)}
                    >
                        <option value="AUD">🇦🇺 Australian Dollar A$</option>
                        <option value="BHD">🇧🇭 Bahraini Dinar BD</option>
                        <option value="BRL">🇧🇷 Real R$</option>
                        <option value="CAD">🇨🇦 Canadian Dollar Can$</option>
                        <option value="CNY">🇨🇳 Chinese Yuan ¥</option>
                        <option value="DKK">🇩🇰 Danish Krone Dkr</option>
                        <option value="EUR">🇪🇺 Euro €</option>
                        <option value="ISK">🇮🇸 Icelandic Krona Kr</option>
                        <option value="NZD">🇳🇿 New Zealand Dollar $</option>
                        <option value="NOK">🇳🇴 Norwegian Krone kr</option>
                        <option value="RUB">🇷🇺 Ruble р.</option>
                        <option value="GBP">🇬🇧 Pound Sterling £</option>
                        <option value="USD">🇺🇸 United States Dollar $</option>
                        <option value="VND">🇻🇳 Dong ₫</option>
                    </select>
                </div>
            </div>

            {/* Summary */}
            <div className="mt-6 mb-6">
                <div className="summary-row">
                    <span>Receiver gets</span>
                    <span>{recipientGets}</span>
                </div>

                <div className="summary-row">
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
                <button
                    type="button"
                    className="btn btn-primary w-full py-3 text-white font-semibold"
                    onClick={() => {
                        const amount = parseFloat(youSend);
                        if (!amount || amount <= 0) {
                            alert('Please enter a valid amount to send.');
                            return;
                        }
                        alert('Proceeding to payment page...');
                    }}
                >
                    Continue
                </button>
            </div>

            {/* Security badges */}
            <div className="text-center">
                <div className="mb-3 flex justify-center items-center space-x-4">
                    <img src="/assets/images/security pics/credit-card.png" alt="Credit Card" className="h-8" />
                    <img src="/assets/images/security pics/Trustly-logo.png" alt="Trustly" className="h-8" />
                    <img src="/assets/images/security pics/partner5.gif" alt="Sofort Banking" className="h-8" />
                </div>
                <p className="text-sm text-gray-600 flex items-start justify-center">
                    <i className="fa fa-lock text-lg mr-2 mt-1"></i>
                    <span>We are Authorised and Regulated by the Financial Conduct Authority (US Dollars).</span>
                </p>
            </div>
        </div>
    );
};

export default SendMoneyDetailsForm;
