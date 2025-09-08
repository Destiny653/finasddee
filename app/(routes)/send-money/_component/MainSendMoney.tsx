"use client";

import CustomTextarea from "@/app/_components/CustomTextarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Fragment, useState, useEffect, FC } from "react";
import SideSummeryCard from "./sideSummeryCard";
import DetailsStep from "./steps/DetailsStep";
import PaymentStep from "./steps/paymentStep";
import ReceiverStep from "./steps/recieverStep";
import PaymentCardLayout from "@/app/_components/PaymentCardLayout";
import { useAuth } from "@/app/_hooks/useAuth";
import AuthModal from "@/app/_components/AuthModal";
import { toast } from "sonner";
import { v4 as uuidv4 } from 'uuid';

interface Transaction {
    id: string;
    detailsData: Record<string, unknown>;
    receiverData: Record<string, unknown>;
    timestamp: string;
    userId: string | null;
}

interface IReviewStep {
    detailsData: Record<string, unknown>;
    receiverData: Record<string, unknown>;
    onNext: () => void;
}

const ReviewStep: FC<IReviewStep> = ({ detailsData, receiverData, onNext }) => {
    return (
        <PaymentCardLayout
            title="Review your information"
            description="Please review the details and recipient information before proceeding to payment"
            buttonLabel="Continue to Payment"
            onNext={onNext}
        >
            <div className="w-full flex flex-col gap-3 sm:gap-4">
                <div className="mb-3 sm:mb-4">
                    <h3 className="font-semibold text-lg sm:text-xl md:text-2xl">Send Money Details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                        {Object.entries(detailsData).map(([key, value]) => (
                            <div key={key} className="flex flex-col sm:flex-row sm:gap-2">
                                <label className="text-sm sm:text-md text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</label>
                                <p className="text-sm sm:text-md text-gray-900 font-semibold">{String(value)}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-lg sm:text-xl md:text-2xl">Receiver Information</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                        {Object.entries(receiverData).map(([key, value]) => (
                            <div key={key} className="flex flex-col sm:flex-row sm:gap-2">
                                <label className="text-sm sm:text-md text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</label>
                                <p className="text-sm sm:text-md text-gray-900 font-semibold">{String(value)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </PaymentCardLayout>
    );
};

const MainSendMoney = () => {
    const steps = ["details", "recipient", "review", "payment"];
    const [activeStep, setActiveStep] = useState(0);

    // Authentication
    const { isAuthenticated, user } = useAuth();

    // Auth modal state
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [authModalInitialForm, setAuthModalInitialForm] = useState<'signin' | 'signup'>('signin');

    // State to hold form data for review step
    const [detailsData, setDetailsData] = useState<Record<string, unknown>>({});
    const [receiverData, setReceiverData] = useState<Record<string, unknown>>({});

    const saveTransaction = () => {
        // Create transaction object
        const transaction = {
            id: uuidv4(), // Unique identifier for the transaction
            detailsData,
            receiverData,
            timestamp: new Date().toISOString(),
            userId: user?.id || null, // Associate with authenticated user, if available
        };

        // Retrieve existing transactions from localStorage
        const existingTransactions = JSON.parse(localStorage.getItem('transactions') || '[]') as Transaction[];

        // Append new transaction
        const updatedTransactions = [...existingTransactions, transaction];

        // Save to localStorage
        localStorage.setItem('transactions', JSON.stringify(updatedTransactions));

        // Show success notification
        toast.success('Transaction saved successfully!');
    };

    const onNextStep = () => {
        setActiveStep((prev) => {
            const nextStep = prev + 1;

            // Check if user is trying to proceed from details step (step 0) to recipient step (step 1)
            if (nextStep === 1 && !isAuthenticated) {
                // Persist form data for unauthenticated user
                const formData = {
                    detailsData,
                    receiverData,
                    currentStep: prev,
                    timestamp: Date.now()
                };
                localStorage.setItem('sendMoneyFormData', JSON.stringify(formData));

                // Open auth modal
                setIsAuthModalOpen(true);
                setAuthModalInitialForm('signin');

                // Don't proceed to next step
                return prev;
            }

            // Save transaction when reaching the final step (payment step)
            if (nextStep === steps.length) {
                saveTransaction();
                return prev; // Prevent advancing beyond the last step
            }

            if (prev >= steps.length - 1) {
                return steps.length - 1;
            }
            return nextStep;
        });
    };

    // Restore persisted data after authentication
    useEffect(() => {
        if (isAuthenticated && user) {
            const persistedData = localStorage.getItem('sendMoneyFormData');
            if (persistedData) {
                try {
                    const { detailsData: savedDetails, receiverData: savedReceiver, currentStep } = JSON.parse(persistedData);
                    setDetailsData(savedDetails || {});
                    setReceiverData(savedReceiver || {});
                    setActiveStep(currentStep || 0);
                    localStorage.removeItem('sendMoneyFormData');

                    // Show success message
                    toast.success("Welcome back! Your form data has been restored.");
                } catch (error) {
                    console.error('Error restoring persisted form data:', error);
                }
            }
        }
    }, [isAuthenticated, user]);

    // Refresh alert
    useEffect(() => {
        const hasData = Object.keys(detailsData).length > 0 || Object.keys(receiverData).length > 0;
        if (hasData) {
            const handleBeforeUnload = (e: BeforeUnloadEvent) => {
                e.preventDefault();
                toast.error("You have unsaved data. Are you sure you want to leave?");
            };
            window.addEventListener('beforeunload', handleBeforeUnload);
            return () => window.removeEventListener('beforeunload', handleBeforeUnload);
        }
    }, [detailsData, receiverData]);

    const renderSteps = () => {
        switch (activeStep) {
            case 0:
                return <DetailsStep onNext={onNextStep} onDataChange={(data) => {
                    if (typeof data === 'object' && data !== null) {
                        setDetailsData(data as Record<string, unknown>);
                    }
                }} />;
            case 1:
                return <ReceiverStep onNext={onNextStep} onDataChange={(data) => {
                    if (typeof data === 'object' && data !== null) {
                        setReceiverData(data as Record<string, unknown>);
                    }
                }} />;
            case 2:
                return <ReviewStep detailsData={detailsData} receiverData={receiverData} onNext={onNextStep} />;
            case 3:
                return <PaymentStep onNext={onNextStep} />;
            default:
                break;
        }
    };

    return (
        <>
            <div className="flex-1 flex flex-col w-full items-center justify-center py-8 sm:py-12 md:py-16">
                <div className="flex flex-col gap-3 sm:gap-4 w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
                    {/* Step Labels */}
                    <div className="flex sm:flex-row justify-between gap-2 px-2 sm:gap-0">
                        {steps.map((items, i) => (
                            <p key={`label-${i}`} className="text-sm sm:text-base md:text-lg capitalize font-medium text-center sm:text-left">{items}</p>
                        ))}
                    </div>

                    {/* Circles and Lines */}
                    <div className="flex items-center px-2">
                        {steps.map((items, i) => (
                            <Fragment key={"items" + items}>
                                <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full border-2 border-gray-400 flex items-center justify-center p-1 z-10 bg-white">
                                    {activeStep === i && (
                                        <div className="w-2 sm:w-3 h-2 sm:h-3 bg-yellow-700 rounded-full transition-colors duration-200" />
                                    )}
                                </div>
                                {i < steps.length - 1 && (
                                    <div className="flex-1 h-[1px] bg-gray-400 -mx-0" />
                                )}
                            </Fragment>
                        ))}
                    </div>
                </div>

                <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl grid grid-cols-1 lg:grid-cols-8 mt-8 sm:mt-12 md:mt-16 gap-4 justify-center  sm:gap-6">
                    <div className="lg:col-span-5">{renderSteps()}</div>
                    <div className="lg:col-span-3 flex flex-col gap-3 sm:gap-4">
                        <SideSummeryCard />
                        <Card className="rounded-sm shadow-none border-none">
                            <CardHeader>
                                <CardTitle className="text-base sm:text-lg md:text-xl">Beneficiary Details</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {Object.keys(receiverData).length > 0 ? (
                                    <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                                        <div className="grid grid-cols-1 gap-1 sm:gap-2 text-xs sm:text-sm">
                                            {(receiverData.firstName || receiverData.lastName) ? (
                                                <div className="flex flex-col sm:flex-row sm:justify-between">
                                                    <span className="text-muted-foreground">Name:</span>
                                                    <span className="font-medium">{`${String(receiverData.firstName || '')} ${String(receiverData.lastName || '')}`.trim()}</span>
                                                </div>
                                            ) : null}
                                            {receiverData.email ? (
                                                <div className="flex flex-col sm:flex-row sm:justify-between">
                                                    <span className="text-muted-foreground">Email:</span>
                                                    <span className="font-medium">{String(receiverData.email)}</span>
                                                </div>
                                            ) : null}
                                            {receiverData.contact ? (
                                                <div className="flex flex-col sm:flex-row sm:justify-between">
                                                    <span className="text-muted-foreground">Contact:</span>
                                                    <span className="font-medium">{String(receiverData.contact)}</span>
                                                </div>
                                            ) : null}
                                            {receiverData.country ? (
                                                <div className="flex flex-col sm:flex-row sm:justify-between">
                                                    <span className="text-muted-foreground">Country:</span>
                                                    <span className="font-medium">{String(receiverData.country)}</span>
                                                </div>
                                            ) : null}
                                            {receiverData.city ? (
                                                <div className="flex flex-col sm:flex-row sm:justify-between">
                                                    <span className="text-muted-foreground">City:</span>
                                                    <span className="font-medium">{String(receiverData.city)}</span>
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>
                                ) : (
                                    <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">No beneficiary details added yet</p>
                                )}
                                <CustomTextarea label="Payment Purpose" />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Auth Modal */}
            <AuthModal
                isOpen={isAuthModalOpen}
                onClose={() => setIsAuthModalOpen(false)}
                initialForm={authModalInitialForm}
            />
        </>
    );
};

export default MainSendMoney;