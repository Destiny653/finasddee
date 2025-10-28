"use client";
import Link from "next/link";
import React, { useState, useEffect, useCallback, useMemo, FC, useRef } from "react";
import { CustomCombobox } from "@/app/_components/CustomCombobox";
import Image from "next/image";
import { DollarSign } from "lucide-react";
import { useTranslations } from "next-intl";

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
    const t = useTranslations();
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
    const [exchangeRate, setExchangeRate] = useState<number>(0);

    // Function to safely extract value from API response
    const extractValue = (result: any, key: string): string => {
        
        // Try direct access first
        if (result[key] !== undefined && result[key] !== null) {
            return String(result[key]);
        }
        
        // Try _raw.resultData path
        if (result._raw?.resultData?.[key] !== undefined && result._raw?.resultData?.[key] !== null) {
            return String(result._raw.resultData[key]);
        }
        
        // Try result.data path (some APIs use this)
        if (result.data?.[key] !== undefined && result.data?.[key] !== null) {
            return String(result.data[key]);
        }
        
        // Try common variations of the key name
        const variations = [
            key.toLowerCase(),
            key.toUpperCase(),
            key.replace(/_/g, ''),
            key.replace(/_/g, '-'),
        ];
        
        for (const variation of variations) {
            if (result[variation] !== undefined && result[variation] !== null) {
                return String(result[variation]);
            }
            if (result._raw?.resultData?.[variation] !== undefined && result._raw?.resultData?.[variation] !== null) {
                return String(result._raw.resultData[variation]);
            }
        }
        
        console.log(`Could not find "${key}" anywhere, returning '0'`);
        return '0';
    };

    // Function to fetch destination countries
    const fetchDestinationCountries = async () => {
        try {
            const response = await fetch('/api/country', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || 'Failed to fetch countries');
            }

            const { countries } = await response.json();
            return countries;
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to fetch countries';
            setError(errorMessage);
            console.error('Error fetching countries:', err);
            import("sonner").then(({ toast }) => {
                toast.error(errorMessage);
            });
            throw err;
        }
    };

    // Function to fetch transaction charges
    const fetchTransactionCharges = async (amount: string) => {
        // Skip if amount is invalid or zero
        const parsedAmount = parseFloat(amount);
        if (!amount || isNaN(parsedAmount) || parsedAmount <= 0) {
            setRecipientGets('0.0');
            setFees('0.0');
            setTotalToPay('0.00');
            setExchangeRate(0);
            return;
        }

        // Skip if we don't have required values
        if (!selectedRecipientCountry || !selectedSendCurrency) {
            return;
        }

        setLoading(true);
        setError(null); // Clear previous errors
        
        try {
            const formData = new FormData();
            formData.append('destination_country', selectedRecipientCountry);
            formData.append('trans_type', 'Account');
            formData.append('payment_method', '3');
            formData.append('service_level', '3');
            formData.append('amount_type', 'SOURCE');
            formData.append('amount_to_send', amount);
            formData.append('destination_currency', 'XAF');
            formData.append('source_currency', selectedSendCurrency);

            const response = await fetch('/api/transaction', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || 'Failed to calculate charges');
            }

            const result = await response.json();
            
            // Extract values using the helper function
            const destinationAmount = extractValue(result, 'destination_amount');
            const totalCharges = extractValue(result, 'total_charges');
            const rate = extractValue(result, 'rate');
            
            // Parse the values
            const parsedDestAmount = parseFloat(destinationAmount);
            const parsedCharges = parseFloat(totalCharges);
            const parsedRate = parseFloat(rate);
            
            
            // Calculate total amount to pay (amount + fees)
            const calculatedTotal = parsedAmount + (isNaN(parsedCharges) ? 0 : parsedCharges);
            
            
            // Format the values
            const formattedRecipientGets = isNaN(parsedDestAmount) ? '0.0' : parsedDestAmount.toFixed(2);
            const formattedRate = isNaN(parsedRate) ? '0.0' : parsedRate.toFixed(2);
            const formattedFees = isNaN(parsedCharges) ? '0.0' : parsedCharges.toFixed(2);
            const formattedTotal = isNaN(calculatedTotal) ? '0.00' : calculatedTotal.toFixed(2);
            
            
            // Update all states
            setRecipientGets(formattedRecipientGets);
            setFees(formattedFees);
            setExchangeRate(parseFloat(formattedRate));
            // setExchangeRate(isNaN(parsedRate) ? 0 : parsedRate);
            setTotalToPay(formattedTotal);
            
            
        } catch (err) {
            console.error('Error fetching charges:', err);
            
            // Only show error toast if it's a real error (not an abort)
            if (!(err instanceof DOMException && err.name === 'AbortError')) {
                const errorMessage = err instanceof Error ? err.message : 'Failed to calculate charges';
                setError(errorMessage);
                
                import("sonner").then(({ toast }) => {
                    toast.error(errorMessage);
                });
                
                // Reset values on error
                setRecipientGets('0.0');
                setFees('0.0');
                setTotalToPay('0.00');
                setExchangeRate(0);
            }
        } finally {
            setLoading(false);
        }
    };

    // Debounced version of fetchTransactionCharges
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (youSend) {
                fetchTransactionCharges(youSend);
            }
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, [youSend, selectedRecipientCountry, selectedSendCurrency]);

    // Debug: Log state changes
    useEffect(() => {
        console.log('=== STATE CHANGED ===');
    }, [fees, totalToPay, recipientGets, exchangeRate]);

    // Calculate if form is ready
    const isFormReady = youSend !== '' &&
        parseFloat(youSend) > 0 &&
        !loading &&
        !error &&
        parseFloat(recipientGets) > 0 &&
        parseFloat(totalToPay) > 0;

    // Define available receiver countries
    const receiverCountries = [
        { value: "Cameroon", label: "🇨🇲 XAF", fullLabel: "Cameroon" }
    ];

    const senderCurrencies = [
        { value: "GBP", label: "🇬🇧 GBP", fullLabel: "United Kingdom" }
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
                    flex: 1;
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
                    min-width: 120px;
                }
                
                @media (max-width: 768px) {
                    .input-wrapper {
                        height: 48px;
                    }
                    
                    .input-wrapper input {
                        font-size: 16px;
                        padding: 0 12px;
                    }
                    
                    .currency-select {
                        min-width: 100px;
                    }
                    
                    .delivery-btn {
                        padding: 8px 12px;
                        font-size: 13px;
                    }
                }
            `}</style>

            <div className="mb-4">
                <label htmlFor="youSend" className="form-label">{t('home.form.youSend.label')}</label>
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
                            placeholder="GBP"
                            className="h-full border-0 rounded-none"
                            optionFullWidth
                            disabled={false}
                        />
                    </div>
                </div>
            </div>

            <div className="mb-6">
                <label htmlFor="recipientGets" className="form-label">{t('home.form.recipientGets.label')}</label>
                <div className="input-wrapper">
                    <input
                        type="text"
                        value={loading ? t('home.form.cta.calculating') : recipientGets}
                        readOnly
                        style={{ color: '#6b7280' }}
                    />
                    <div className="currency-select">
                        <CustomCombobox
                            options={receiverCountries}
                            value={selectedRecipientCountry}
                            onSelectChange={setSelectedRecipientCountry}
                            placeholder={t('home.form.selectCountry')}
                            className="h-full border-0 rounded-none"
                            optionFullWidth
                        />
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-200 mb-4">
                <div className="summary-row">
                    <span>{t('home.form.summary.exchangeRate')}</span>
                    <span className="font-semibold text-gray-800">
                        {exchangeRate > 0 ? `${exchangeRate} XAF` : '—'}
                    </span>
                </div>
                <div className="summary-row">
                    <span>{t('home.form.summary.fees')}</span>
                    <span className="font-semibold text-gray-800">
                        {fees} {selectedSendCurrency}
                    </span>
                </div>
                <div className="summary-row">
                    <span>{t('home.form.summary.deliveryTime')}</span>
                    <span className="font-semibold text-[#001E40]">{t('home.form.summary.deliveryTimeValue')}</span>
                </div>
            </div>

            <div className="border-t-2 border-gray-200">
                <div className="summary-row total">
                    <span>{t('home.form.summary.totalAmount')}</span>
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
                                    toast.error(t('home.form.errors.invalidAmount'));
                                });
                                return;
                            }
                            if (loading) {
                                import("sonner").then(({ toast }) => {
                                    toast.error(t('home.form.errors.waitCalculating'));
                                });
                                return;
                            }
                            if (error) {
                                import("sonner").then(({ toast }) => {
                                    toast.error(t('home.form.errors.generic'));
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
                                    selectedDeliveryMethod,
                                    exchangeRate
                                });
                            }
                            if (onNext) {
                                onNext();
                            }
                        }}
                        disabled={!isFormReady}
                    >
                        <span className="cta-label">
                            {loading ? t('home.form.cta.calculating') : t('home.form.cta.sendNow')}
                        </span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default SendMoneyDetailsForm;