"use client";
import Link from "next/link";
import React, { useState, useEffect, useCallback, useMemo, FC } from "react";
import { CustomCombobox } from "@/app/_components/CustomCombobox";
import Image from "next/image";
import { DollarSign } from "lucide-react";
import useSWR from 'swr';
// import debounce from 'lodash/debounce';
// import debounce from 'lodash.debounce'

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
    const [countries, setCountries] = useState<CountryData[]>([]);

    // Function to fetch destination countries
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

            setCountries(parsedCountries);
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

    useEffect(() => {
        fetchDestinationCountries();
    }, []);

    useEffect(() => {
        if (youSend) {
            const cleanup = debouncedFetchCharges(youSend);
            return cleanup;
        }
    }, [youSend, debouncedFetchCharges]);

    // Filter countries based on current implementation
    const senderCountries = useMemo(() => 
        [{ value: "United Kingdom", label: "🇬🇧 United Kingdom" }], 
        []
    );

    const receiverCountries = useMemo(() => 
        [{ value: "Cameroon", label: "🇨🇲 Cameroon" }],
        []
    );

    // Check if form is ready to submit
    const isFormReady = !loading && parseFloat(youSend) > 0 && parseFloat(recipientGets) > 0;

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
                    border-radius: 1rem;
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
                    border-radius: 1rem;
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
                    border-radius: 1rem;
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
            <div className="mb-4 flex flex-col">
                <label htmlFor="youSendCountry" className="form-label">Sender Country</label>
                <CustomCombobox
                    options={senderCountries}
                    value={selectedSenderCountry}
                    onSelectChange={setSelectedSenderCountry}
                    placeholder="Select sender country"
                    className="w-full md:py-8"
                    disabled={true}
                />
            </div>

            {/* Receiver Country */}
            <div className="mb-4 flex flex-col">
                <label htmlFor="recipientCountry" className="form-label">Receivers Country</label>
                <CustomCombobox
                    options={receiverCountries}
                    value={selectedRecipientCountry}
                    onSelectChange={setSelectedRecipientCountry}
                    placeholder="Select receiver country"
                    className="w-full md:py-8"
                    disabled={true}
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
                        options={[{ value: "GBP", label: "🇬🇧 Pound Sterling £" }]}
                        value={selectedSendCurrency}
                        onSelectChange={setSelectedSendCurrency}
                        placeholder="Select currency"
                        className="w-[200px] min-w-[140px] md:py-8"
                        disabled={true}
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
                        className={`bg-[#ce9739] rounded-4xl hover:bg-[#f1ba03] duration-200 w-full md:h-16 text-white font-semibold ${!isFormReady ? 'opacity-50 cursor-not-allowed' : ''}`}
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
