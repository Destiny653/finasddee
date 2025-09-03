'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, Lock } from 'lucide-react';
import Image from 'next/image';

const NewSendMoneyForm = () => {
    const [formData, setFormData] = useState({
        senderCountry: 'Australia',
        receiverCountry: '',
        amount: '',
        senderCurrency: 'AUD',
        receiverCurrency: ''
    });

    const [calculatedData, setCalculatedData] = useState({
        recipientGets: '0.0',
        fees: '0.0',
        totalAmount: '0.00'
    });

    const senderCountries = [
        { value: 'Australia', label: '🇦🇺 Australia' },
        { value: 'Bahrain', label: '🇧🇭 Bahrain' },
        { value: 'Brazil', label: '🇧🇷 Brazil' },
        { value: 'Canada', label: '🇨🇦 Canada' },
        { value: 'China', label: '🇨🇳 China' },
        { value: 'Denmark', label: '🇩🇰 Denmark' },
        { value: 'France', label: '🇫🇷 France' },
        { value: 'Germany', label: '🇩🇪 Germany' },
        { value: 'Iceland', label: '🇮🇸 Iceland' },
        { value: 'Italy', label: '🇮🇹 Italy' },
        { value: 'New Zealand', label: '🇳🇿 New Zealand' },
        { value: 'Norway', label: '🇳🇴 Norway' },
        { value: 'Russia', label: '🇷🇺 Russia' },
        { value: 'Spain', label: '🇪🇸 Spain' },
        { value: 'United Kingdom', label: '🇬🇧 United Kingdom' },
        { value: 'United States', label: '🇺🇸 United States' },
        { value: 'Vietnam', label: '🇻🇳 Vietnam' }
    ];

    const receiverCountries = [
        { value: 'Albania', label: '🇦🇱 Albania', currency: 'ALL' },
        { value: 'Algeria', label: '🇩🇿 Algeria', currency: 'DZD' },
        { value: 'Australia', label: '🇦🇺 Australia', currency: 'AUD' },
        { value: 'Bahamas', label: '🇧🇸 Bahamas', currency: 'BSD' },
        { value: 'Belarus', label: '🇧🇾 Belarus', currency: 'BYN' },
        { value: 'Cambodia', label: '🇰🇭 Cambodia', currency: 'KHR' },
        { value: 'China', label: '🇨🇳 China', currency: 'CNY' },
        { value: 'Croatia', label: '🇭🇷 Croatia', currency: 'HRK' },
        { value: 'Germany', label: '🇩🇪 Germany', currency: 'EUR' },
        { value: 'Iran', label: '🇮🇷 Iran', currency: 'IRR' },
        { value: 'Italy', label: '🇮🇹 Italy', currency: 'EUR' },
        { value: 'Latvia', label: '🇱🇻 Latvia', currency: 'EUR' },
        { value: 'Morocco', label: '🇲🇦 Morocco', currency: 'MAD' },
        { value: 'Nepal', label: '🇳🇵 Nepal', currency: 'NPR' },
        { value: 'Romania', label: '🇷🇴 Romania', currency: 'RON' },
        { value: 'Russia', label: '🇷🇺 Russia', currency: 'RUB' },
        { value: 'Serbia', label: '🇷🇸 Serbia', currency: 'RSD' },
        { value: 'Spain', label: '🇪🇸 Spain', currency: 'EUR' },
        { value: 'United Kingdom', label: '🇬🇧 United Kingdom', currency: 'GBP' },
        { value: 'United States', label: '🇺🇸 United States', currency: 'USD' },
        { value: 'Vietnam', label: '🇻🇳 Vietnam', currency: 'VND' }
    ];

    const senderCurrencies = [
        { value: 'AUD', label: '🇦🇺 Australian Dollar A$' },
        { value: 'BHD', label: '🇧🇭 Bahraini Dinar BD' },
        { value: 'BRL', label: '🇧🇷 Real R$' },
        { value: 'CAD', label: '🇨🇦 Canadian Dollar Can$' },
        { value: 'CNY', label: '🇨🇳 Chinese Yuan ¥' },
        { value: 'DKK', label: '🇩🇰 Danish Krone Dkr' },
        { value: 'EUR', label: '🇪🇺 Euro €' },
        { value: 'ISK', label: '🇮🇸 Icelandic Krona Kr' },
        { value: 'NZD', label: '🇳🇿 New Zealand Dollar $' },
        { value: 'NOK', label: '🇳🇴 Norwegian Krone kr' },
        { value: 'RUB', label: '🇷🇺 Ruble р.' },
        { value: 'GBP', label: '🇬🇧 Pound Sterling £' },
        { value: 'USD', label: '🇺🇸 United States Dollar $' },
        { value: 'VND', label: '🇻🇳 Dong ₫' }
    ];

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        
        // Simple calculation logic (you can enhance this)
        if (field === 'amount' && value) {
            const amount = parseFloat(value);
            const fees = amount * 0.02; // 2% fee
            const total = amount + fees;
            const recipientAmount = amount * 0.85; // Example exchange rate
            
            setCalculatedData({
                recipientGets: recipientAmount.toFixed(2),
                fees: fees.toFixed(2),
                totalAmount: total.toFixed(2)
            });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission
    };

    return (
        <div className="bg-[white] shadow-sm rounded-lg p-6 sm:p-8 mb-4">
            <h3 className="text-xl font-normal mb-4 py-2">Amount</h3>
            <hr className="mb-6 -mx-6 sm:-mx-8 text-gray-200" />
            
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Sender Country */}
                <div className="mb-4">
                    <label htmlFor="senderCountry" className="block text-sm font-medium mb-2">
                        Sender Country
                    </label>
                    <div className="relative border border-gray-300 rounded-md">
                        <select
                            id="senderCountry"
                            name="senderCountry"
                            className="w-full px-3 py-4 bg-[#edf7f849] border-none outline-none text-base appearance-none pr-10"
                            value={formData.senderCountry}
                            onChange={(e) => handleInputChange('senderCountry', e.target.value)}
                            required
                        >
                            {senderCountries.map(country => (
                                <option key={country.value} value={country.value}>
                                    {country.label}
                                </option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={20} />
                    </div>
                </div>

                {/* Receiver Country */}
                <div className="mb-4">
                    <label htmlFor="receiverCountry" className="block text-sm font-medium mb-2">
                        Receivers Country
                    </label>
                    <div className="relative border border-gray-300 rounded-md">
                        <select
                            id="receiverCountry"
                            name="receiverCountry"
                            className="w-full px-3 py-4 bg-[#edf7f849] border-none outline-none text-base appearance-none pr-10"
                            value={formData.receiverCountry}
                            onChange={(e) => handleInputChange('receiverCountry', e.target.value)}
                            required
                        >
                            <option value="">Select country</option>
                            {receiverCountries.map(country => (
                                <option key={country.value} value={country.value} data-currency={country.currency}>
                                    {country.label}
                                </option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={20} />
                    </div>
                </div>

                {/* You Send Amount */}
                <div className="mb-4">
                    <label htmlFor="amount" className="block text-sm font-medium mb-2">
                        You Send
                    </label>
                    <div className="border border-gray-300 rounded-md flex">
                        <span className="flex items-center px-3 bg-[#edf7f849] text-base">$</span>
                        <input
                            type="text"
                            id="amount"
                            name="amount"
                            placeholder="0.0"
                            className="flex-1 px-3 py-4 bg-transparent border-none outline-none text-base"
                            value={formData.amount}
                            onChange={(e) => handleInputChange('amount', e.target.value)}
                        />
                        <div className="relative max-w-[200px]">
                            <select
                                name="senderCurrency"
                                className="w-full px-3 py-4 bg-[#edf7f849] border-none outline-none text-base appearance-none pr-8"
                                value={formData.senderCurrency}
                                onChange={(e) => handleInputChange('senderCurrency', e.target.value)}
                                required
                            >
                                {senderCurrencies.map(currency => (
                                    <option key={currency.value} value={currency.value}>
                                        {currency.label}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
                        </div>
                    </div>
                </div>

                {/* Summary */}
                <div className="space-y-5 py-4 font-bold text-xl text-gray-600" >
                    <div className="flex justify-between items-center ">
                        <span>The receiver will get</span>
                        <span className="font-medium">{calculatedData.recipientGets}</span>
                    </div>
                    <hr className='text-gray-200' />
                    <div className="flex justify-between items-center">
                        <span>Total Fees</span>
                        <span>{calculatedData.fees}</span>
                    </div>
                    <hr className='text-gray-200' />
                    <div className="flex justify-between items-center text-lg font-medium">
                        <span>Total To Pay</span>
                        <span>{calculatedData.totalAmount}</span>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                    <button
                        type="submit"
                        className="w-full bg-[#cb943d] hover:bg-[#b8860b] text-white font-medium py-4 px-4 rounded-md transition-colors"
                    >
                        Continue
                    </button>
                </div>

                {/* Payment and Regulatory Info */}
                <div className="flex flex-col items-center space-y-4 mt-6">
                    <div className="flex items-center space-x-4">
                     <Image src="/assets/images/security pics/credit-card.png" alt="Credit Card" width={40} height={10} className="h-6" />
                    <Image src="/assets/images/security pics/Trustly-logo.png" alt="Trustly" width={90} height={20} className="h-8" />
                    </div>
                    <div className="flex justify-center gap-0 font-bold text-gray-500 text-center">
                        <Lock className="size-8 font-bold" />
                        <span>
                            We are Authorised and Regulated by the Financial
                            Conduct Authority (FCA).
                        </span>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default NewSendMoneyForm;
