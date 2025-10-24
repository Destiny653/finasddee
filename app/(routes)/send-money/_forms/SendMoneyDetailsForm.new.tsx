"use client";
import Link from "next/link";
import React, { useState, useEffect, useCallback, useMemo, FC } from "react";
import { CustomCombobox } from "@/app/_components/CustomCombobox";
import Image from "next/image";
import { DollarSign } from "lucide-react";

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
    
    const derivedRate = useMemo(() => {
        const amt = parseFloat(youSend || '0');
        const dest = parseFloat(recipientGets || '0');
        if (!amt || !dest) return 0;
        return dest / amt;
    }, [youSend, recipientGets]);

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
        { value: "Cameroon", label: "🇨🇲 Cameroon — XAF" },
        // Future: add more receiving destinations here with their currency
    ];

    const senderCurrencies = [
        { value: "GBP", label: "🇬🇧 United Kingdom — GBP" },
        // Future: add more sending countries/currencies if enabled
    ];

    return (
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm p-6">
            <style jsx>{`
                .form-label {
                    color: #6b7280;
                    font-size: 14px;
                    font-weight: 500;
                    margin: 0;
                    display: block;
                    margin-bottom: 8px;
                }

                .summary-row {
                    display: flex;
                    justify-content: space-between;
                    padding: 12px 0;
                    color: #6b7280;
                    font-size: 14px;
                }

                .summary-row.total {
                    font-weight: 600;
                    color: #1f2937;
                    font-size: 16px;
                    padding: 16px 0 12px 0;
                }
                
                .delivery-btn {
                    padding: 10px 16px;
                    border: 1px solid #e5e7eb;
                    border-radius: 8px;
                    background: white;
                    color: #374151;
                    font-size: 14px;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                
                .delivery-btn:hover {
                    background: #f9fafb;
                }
                
                .delivery-btn.active {
                    background: linear-gradient(135deg, #d4a23a 0%, #b8902f 100%);
                    color: white;
                    border-color: #d4a23a;
                }
                
                .cta-btn {
                    position: relative;
                    overflow: hidden;
                    background: linear-gradient(90deg, #d4a23a 0%, #0b1f35 100%);
                    transition: transform 250ms ease, box-shadow 250ms ease;
                    border-radius: 24px;
                }
                
                .cta-btn:hover:not(:disabled) {
                    box-shadow: 0 8px 24px rgba(11, 31, 53, 0.25);
                    transform: translateY(-2px);
                }
                
                .cta-btn::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(90deg, #0b1f35 0%, #d4a23a 100%);
                    opacity: 0;
                    transition: opacity 300ms ease;
                    pointer-events: none;
                    z-index: 0;
                }
                
                .cta-btn:hover:not(:disabled)::before {
                    opacity: 1;
                }
                
                .cta-label { 
                    position: relative; 
                    z-index: 1; 
                }
                
                .input-wrapper {
                    display: flex;
                    align-items: center;
                    background: white;
                    border: 1px solid #e5e7eb;
                    border-radius: 8px;
                    overflow: hidden;
                    height: 56px;
                }
                
                .input-wrapper input {
                    flex: 0 0 40%;
                    min-width: 0;
                    border: none;
                    outline: none;
                    padding: 0 16px;
                    font-size: 18px;
                    font-weight: 600;
                    color: #1f2937;
                }
                
                .input-wrapper input::placeholder {
                    color: #d1d5db;
                }
                
                .currency-select {
                    border-left: 1px solid #e5e7eb;
                    flex: 0 0 60%;
                    min-width: 0;
                }
            `}</style>

            <div className="mb-4">
                <label htmlFor="youSend" className="form-label">You're sending</label>
                <div className="input-wrapper">
                    <input
                        type="number"
                        placeholder="100.00"
                        min="0"
                        step="0.01"
                        value={youSend}
                        onChange={(e) => setYouSend(e.target.value)}
                    />
                    <div className="currency-select">
                        <CustomCombobox
                            options={senderCurrencies}
                            value={selectedSendCurrency}
                            onSelectChange={setSelectedSendCurrency}
                            placeholder="Select currency"
                            className="h-full border-0 rounded-none"
                            optionFullWidth
                            // disabled={true}
                        />
                    </div>
                </div>
            </div>

            <div className="mb-6">
                <label htmlFor="recipientGets" className="form-label">Your receiver gets</label>
                <div className="input-wrapper">
                    <input
                        type="text"
                        value={loading ? "Calculating..." : recipientGets}
                        readOnly
                        style={{ color: '#6b7280' }}
                    />
                    <div className="currency-select">
                        <CustomCombobox
                            options={receiverCountries}
                            value={selectedRecipientCountry}
                            onSelectChange={setSelectedRecipientCountry}
                            placeholder="Select country"
                            className="h-full border-0 rounded-none"
                            optionFullWidth
                        />
                    </div>
                </div>
            </div>

            {/* <div className="mb-6">
                <p className="form-label">Delivery method</p>
                <div className="grid grid-cols-3 gap-3">
                    <button
                        type="button"
                        className={`delivery-btn ${selectedDeliveryMethod === 'BANK' ? 'active' : ''}`}
                        onClick={() => setSelectedDeliveryMethod('BANK')}
                    >
                        FINASDDEE Bank
                    </button>
                    <button
                        type="button"
                        className={`delivery-btn ${selectedDeliveryMethod === 'OTHER' ? 'active' : ''}`}
                        onClick={() => setSelectedDeliveryMethod('OTHER')}
                    >
                        Other Banks
                    </button>
                    <button
                        type="button"
                        className={`delivery-btn ${selectedDeliveryMethod === 'MOBILE' ? 'active' : ''}`}
                        onClick={() => setSelectedDeliveryMethod('MOBILE')}
                    >
                        Mobile wallet
                    </button>
                </div>
            </div> */}

            <div className="border-t border-gray-200 mb-4">
                <div className="summary-row">
                    <span>Exchange rate</span>
                    <span className="font-semibold text-gray-800">
                        {derivedRate ? derivedRate.toFixed(4) : '—'} XAF
                    </span>
                </div>
                <div className="summary-row">
                    <span>Our fees</span>
                    <span className="font-semibold text-gray-800">
                        {fees} {selectedSendCurrency}
                    </span>
                </div>
                <div className="summary-row">
                    <span>Delivery time</span>
                    <span className="font-semibold text-[#001E40]">Within minutes</span>
                </div>
            </div>

            <div className="border-t-2 border-gray-200">
                <div className="summary-row total">
                    <span>Total Amount</span>
                    <span className="text-[#001E40] font-bold">
                        {totalToPay} {selectedSendCurrency}
                    </span>
                </div>
            </div>

            <div className="mb-4">
                <Link href={'/#'}>
                    <button
                        type="button"
                        className={`cta-btn w-full h-14 text-white font-semibold ${!isFormReady ? 'opacity-50 cursor-not-allowed' : ''}`}
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
                        <span className="cta-label">
                            {loading ? 'Calculating...' : 'Send now'}
                        </span>
                    </button>
                </Link>
                <p className="text-xs text-gray-500 mt-3 text-center">
                    *Exchange rate shown is an estimate for an account-to-account transfer and subject to change.
                </p>
            </div>

            <div className="text-center">
                <div className="flex justify-center items-center space-x-4">
                    <Image src="/assets/images/security pics/credit-card.png" alt="Credit Card" width={32} height={32} />
                    <Image src="/assets/images/security pics/Trustly-logo.png" alt="Trustly" width={32} height={32} />
                </div>
            </div>
        </div>
    );
};

export default SendMoneyDetailsForm;