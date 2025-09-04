"use client";
import CustomTextarea from "@/app/_components/CustomTextarea";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Fragment, useState, useEffect, FC } from "react";
import SideSummeryCard from "./sideSummeryCard";
import DetailsStep from "./steps/DetailsStep";
import PaymentStep from "./steps/paymentStep";
import ReceiverStep from "./steps/recieverStep";
import PaymentCardLayout from "@/app/_components/PaymentCardLayout";
import Link from "next/link";

interface IReviewStep {
    detailsData: Record<string, any>;
    receiverData: Record<string, any>;
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
            <div className="w-full flex flex-col gap-4 ">
                <div className="mb-4">
                    <h3 className="font-semibold text-2xl">Send Money Details</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {Object.entries(detailsData).map(([key, value]) => (
                            <div key={key} className="flex gap-2">
                                <label className="text-md text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1')} :</label>
                                <p className="text-md text-gray-900 font-semibold">{String(value)}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-2xl">Receiver Information</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {Object.entries(receiverData).map(([key, value]) => (
                            <div key={key} className="flex gap-2">
                                <label className="text-md text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1')} :</label>
                                <p className="text-md text-gray-900 font-semibold">{String(value)}</p>
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

    // State to hold form data for review step
    const [detailsData, setDetailsData] = useState({});
    const [receiverData, setReceiverData] = useState({});

    const onNextStep = () =>
        setActiveStep((prev) => {
            if (prev >= steps.length - 1) {
                return steps.length - 1;
            }
            return prev + 1;
        });

    // Refresh alert
    useEffect(() => {
        const hasData = Object.keys(detailsData).length > 0 || Object.keys(receiverData).length > 0;
        if (hasData) {
            const handleBeforeUnload = (e: BeforeUnloadEvent) => {
                e.preventDefault();
                // e.returnValue = 'You have unsaved data. Are you sure you want to leave?';
                import("sonner").then(({ toast }) => {
                    toast.error("You have unsaved data. Are you sure you want to leave?");
                });
            };
            window.addEventListener('beforeunload', handleBeforeUnload);
            return () => window.removeEventListener('beforeunload', handleBeforeUnload);
        }
    }, [detailsData, receiverData]);

    const renderSteps = () => {
        switch (activeStep) {
            case 0:
                return <DetailsStep onNext={onNextStep} onDataChange={setDetailsData} />;
            case 1:
                return <ReceiverStep onNext={onNextStep} onDataChange={setReceiverData} />;
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
          
            <div className="flex-1 flex flex-col w-full items-center justify-center py-16 ">
                <div className="flex flex-col gap-4 w-full max-w-6xl">
                    {/* Step Labels */}
                    <div className="flex justify-between">
                        {steps.map((items, i) => (
                            <p key={`label-${i}`} className="text-lg capitalize font-medium">{items}</p>
                        ))}
                    </div>

                    {/* Circles and Lines */}
                    <div className="flex items-center">
                        {steps.map((items, i) => (
                            <Fragment key={"items" + items}>
                                <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center p-1 z-10 bg-white">
                                    {activeStep === i && (
                                        <div className="w-3 h-3 bg-yellow-700 rounded-full transition-colors duration-200" />
                                    )}
                                </div>
                                {i < steps.length - 1 && (
                                    <div className="flex-1 h-[1px] bg-gray-400 -mx-0" />
                                )}
                            </Fragment>
                        ))}
                    </div>
                </div>

                <div className=" w-full max-w-5xl grid grid-cols-8 mt-16 gap-4">
                    <div className="col-span-5">{renderSteps()}</div>
                    <div className="col-span-3 size-full flex gap-2 flex-col">
                        <SideSummeryCard />
                        <Card className="rounded-sm shadow-none border-none">
                            <CardContent>
                                <CustomTextarea label="Payment Purpose" />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainSendMoney;
