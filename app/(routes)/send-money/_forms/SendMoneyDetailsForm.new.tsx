"use client";
import Link from "next/link";
import React, { useState, useEffect, useCallback, useMemo, FC } from "react";
import { CustomCombobox } from "@/app/_components/CustomCombobox";
import Image from "next/image";
import { DollarSign } from "lucide-react";
import useSWR from 'swr';

// Types for API responses
interface CountryData {
    id: string;
    name: string;
    iso_code: string;
    currency: string;
}

interface ChargesResponse {
    source_currency: string;
    source_amount: number;
    rate: number;
    destination_currency: string;
    destination_amount: number;
    total_charges: number;
}

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
    const [selectedSenderCountry, setSelectedSenderCountry] = useState('United Kingdom');
    const [selectedRecipientCountry, setSelectedRecipientCountry] = useState('Cameroon');
    const [selectedSendCurrency, setSelectedSendCurrency] = useState('GBP');
    const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState('BANK');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    // Function to fetch transaction charges
    const fetchDestinationCountries = async () => {
        try {
            const credentials = {
                username: process.env.NEXT_PUBLIC_API_USERNAME,
                password: process.env.NEXT_PUBLIC_API_PASSWORD,
                pin: process.env.NEXT_PUBLIC_API_PIN,
                submit: process.env.NEXT_PUBLIC_API_SUBMIT,
            };

            if (!credentials.username || !credentials.password || !credentials.pin || !credentials.submit) {
                import("sonner").then(({ toast }) => {
                    toast.error('API configuration error. Please contact support.');
                });
                throw new Error('Missing API credentials');
            }

            const formData = new FormData();
            Object.entries(credentials).forEach(([key, value]) => {
                formData.append(key, value!);
            });

            const response = await fetch('https://test4.remit.by/finasddeetest/ws/country/getDestinationCountries', {
                method: 'POST',
                body: formData,
            }).catch(error => {
                import("sonner").then(({ toast }) => {
                    toast.error('Network error. Please check your connection.');
                });
                throw error;
            });

            const xmlText = await response.text();
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
            const status = xmlDoc.querySelector('status')?.textContent;

            if (status === 'FAIL') {
                const message = xmlDoc.querySelector('message')?.textContent;
                throw new Error(message || 'Failed to fetch countries');
            }

            const countryElements = xmlDoc.querySelectorAll('country');
            const parsedCountries: CountryData[] = Array.from(countryElements).map(country => ({
                id: country.querySelector('id')?.textContent || '',
                name: country.querySelector('name')?.textContent || '',
                iso_code: country.querySelector('iso_code')?.textContent || '',
                currency: country.querySelector('currency')?.textContent || '',
            }));

            // setCountries(parsedCountries);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to fetch countries');
            console.error('Error fetching countries:', err);
            import("sonner").then(({ toast }) => {
                toast.error('Failed to fetch available countries');
            });
        }
    };

    // Function to fetch transaction charges
    const fetchTransactionCharges = useCallback(async (amount: string) => {
        if (!amount || parseFloat(amount) <= 0) {
            setRecipientGets('0.0');
            setFees('0.0');
            setTotalToPay('0.00');
            return;
        }

        setLoading(true);
        try {
            const credentials = {
                username: process.env.NEXT_PUBLIC_API_USERNAME,
                password: process.env.NEXT_PUBLIC_API_PASSWORD,
                pin: process.env.NEXT_PUBLIC_API_PIN,
                submit: process.env.NEXT_PUBLIC_API_SUBMIT,
            };

            if (!credentials.username || !credentials.password || !credentials.pin || !credentials.submit) {
                throw new Error('Missing API credentials');
            }

            const formData = new FormData();
            Object.entries(credentials).forEach(([key, value]) => {
                formData.append(key, value!);
            });

            formData.append('destination_country', selectedRecipientCountry);
            formData.append('trans_type', 'Account');
            formData.append('payment_method', '3');
            formData.append('service_level', '3');
            formData.append('amount_type', 'SOURCE');
            formData.append('amount_to_send', amount);
            formData.append('destination_currency', 'XAF');
            formData.append('source_currency', selectedSendCurrency);

            const response = await fetch('https://test4.remit.by/finasddeetest/ws/transaction/getCharges', {
                method: 'POST',
                body: formData,
            }).catch(error => {
                import("sonner").then(({ toast }) => {
                    toast.error('Network error. Please check your connection.');
                });
                throw error;
            });

            const xmlText = await response.text();
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
            const status = xmlDoc.querySelector('status')?.textContent;

            if (status === 'FAIL') {
                const message = xmlDoc.querySelector('message')?.textContent;
                throw new Error(message || 'Failed to get charges');
            }

            const result = {
                destination_amount: xmlDoc.querySelector('destination_amount')?.textContent || '0',
                total_charges: xmlDoc.querySelector('total_charges')?.textContent || '0',
            };

            setRecipientGets(result.destination_amount);
            setFees(result.total_charges);
            const totalAmount = (parseFloat(amount) + parseFloat(result.total_charges)).toFixed(2);
            setTotalToPay(totalAmount);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to fetch charges');
            console.error('Error fetching charges:', err);
            
            // Reset values on error
            setRecipientGets('0.0');
            setFees('0.0');
            setTotalToPay('0.00');
            import("sonner").then(({ toast }) => {
                toast.error(err instanceof Error ? err.message : 'Failed to calculate charges');
            });
        } finally {
            setLoading(false);
        }
    }, [selectedRecipientCountry, selectedSendCurrency]);

    // Debounced version of fetchTransactionCharges
    const debouncedFetchCharges = useMemo(
        () => {
            const debounced = (amount: string) => {
                const timeoutId = setTimeout(() => {
                    fetchTransactionCharges(amount);
                }, 1000);
                return () => clearTimeout(timeoutId);
            };
            return debounced;
        },
        [fetchTransactionCharges]
    );

    // Update charges when amount changes
    useEffect(() => {
        const cleanup = debouncedFetchCharges(youSend);
        return () => cleanup();
    }, [youSend, debouncedFetchCharges]);

    // Calculate if form is ready
    const isFormReady = youSend !== '' && 
                       parseFloat(youSend) > 0 && 
                       !loading && 
                       !error && 
                       parseFloat(recipientGets) > 0 &&
                       parseFloat(totalToPay) > 0;

    // Define available receiver countries
    const receiverCountries = [
        { value: "Cameroon", label: "🇨🇲 Cameroon (XAF)" }
        // Add more countries here in the future
        // { value: "Country", label: "🏳️ Country Name (CURRENCY)" }
    ];

    const senderCountries = [
        { value: "United Kingdom", label: "�� United Kingdom (GBP)" }
    ];

    return (
        <div>
            <style jsx>{`
                .form-label {
                    color: #6b7280;
                    font-weight: 500;
                    margin: 0;
                    display: block;
                    margin-bottom: 0.5rem;
                }

                .summary-row {
                    display: flex;
                    justify-content: space-between;
                    padding: 0.75rem 0;
                    color: #6b7280;
                }

                .summary-row.total {
                    font-weight: 600;
                    color: #111827;
                    font-size: 1.1rem;
                }
            `}</style>

            {/* You Send Section */}
            <div className="mb-4 flex flex-col">
                <label htmlFor="youSend" className="form-label">You Send</label>
                <div className="flex bg-[#F5F5F5] rounded-sm border border-[#E5E7EB] overflow-hidden">
                    {/* Amount Input Side */}
                    <div className="flex-1 flex items-center">
                        <span className="flex items-center justify-center px-3">
                            <DollarSign size={14} className="text-gray-500" />
                        </span>
                        <input
                            type="number"
                            className="flex-1 bg-transparent outline-none py-3 px-2"
                            placeholder="0"
                            min="0"
                            step="0.01"
                            value={youSend}
                            onChange={(e) => setYouSend(e.target.value)}
                        />
                    </div>
                    
                    {/* Country/Currency Selector Side */}
                    <div className="w-[180px] border-l border-[#E5E7EB]">
                        <CustomCombobox
                            options={[{ value: "GBP", label: "🇬🇧 GBP" }]}
                            value={selectedSendCurrency}
                            onSelectChange={setSelectedSendCurrency}
                            placeholder="Select currency"
                            className="h-full"
                            disabled={true}
                        />
                    </div>
                </div>
            </div>

            {/* Receiver Gets Section */}
            <div className="mb-4 flex flex-col">
                <label htmlFor="recipientGets" className="form-label">Receiver Gets</label>
                <div className="flex bg-[#F5F5F5] rounded-sm border border-[#E5E7EB] overflow-hidden">
                    {/* Amount Display Side */}
                    <div className="flex-1 flex items-center">
                        <span className="flex items-center justify-center px-3">
                            <DollarSign size={14} className="text-gray-500" />
                        </span>
                        <input
                            type="text"
                            className="flex-1 bg-transparent outline-none py-3 px-2"
                            value={loading ? "Calculating..." : recipientGets}
                            readOnly
                        />
                    </div>
                    
                    {/* Receiver Country Selector Side */}
                    <div className="w-[180px] border-l border-[#E5E7EB]">
                        <CustomCombobox
                            options={receiverCountries}
                            value={selectedRecipientCountry}
                            onSelectChange={setSelectedRecipientCountry}
                            placeholder="Select country"
                            className="h-full"
                        />
                    </div>
                </div>
            </div>

            {/* Summary */}
            <div className="mt-6 mb-6 font-semibold">
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
                        className={`bg-[#082642] rounded-4xl hover:bg-[#05315b] duration-200 w-full md:h-16 text-white font-semibold ${!isFormReady ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={() => {
                            const amount = parseFloat(youSend);
                            if (!amount || amount <= 0) {
                                import("sonner").then(({ toast }) => {
                                    toast.error('Please enter a valid amount to send.');
                                });
                                return;
                            }
                            if (loading) {
                                import("sonner").then(({ toast }) => {
                                    toast.error('Please wait while we calculate the charges.');
                                });
                                return;
                            }
                            if (error) {
                                import("sonner").then(({ toast }) => {
                                    toast.error('There was an error. Please try again.');
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
                        disabled={!isFormReady}
                    >
                        {loading ? 'Calculating...' : 'Continue'}
                    </button>
                </Link>
            </div>

            {/* Security badges */}
            <div className="text-center">
                <div className="mb-3 flex justify-center items-center space-x-4">
                    <Image src="/assets/images/security pics/credit-card.png" alt="Credit Card" width={32} height={32} />
                    <Image src="/assets/images/security pics/Trustly-logo.png" alt="Trustly" width={32} height={32} />
                </div>
                {/* <p className="text-gray-600 flex items-start justify-center text-lg">
                    <i className="fa fa-lock text-lg mr-2 mt-1"></i>
                    <span>We are Authorised and Regulated by the Financial Conduct Authority (US Dollars).</span>
                </p> */}
            </div>
        </div>
    );
};

export default SendMoneyDetailsForm;