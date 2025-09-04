"use client";
import CustomTextarea from "@/app/_components/CustomTextarea";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Fragment, useState } from "react";
import SideSummeryCard from "./sideSummeryCard";
import DetailsStep from "./steps/DetailsStep";
import PaymentStep from "./steps/paymentStep";
import ReceiverStep from "./steps/recieverStep";
import Link from "next/link";

const MainSendMoney = () => {
    const steps = ["details", "recipient", "review", "payment"];
    const [activeStep, setActiveStep] = useState(0);

    const onNextStep = () =>
        setActiveStep((prev) => {
            if (prev >= steps.length - 1) {
                return steps.length - 1;
            }
            return prev + 1;
        });

    const renderSteps = () => {
        switch (activeStep) {
            case 0:
                return <DetailsStep onNext={onNextStep} />;
            case 1:
                return <ReceiverStep onNext={onNextStep} />;
            case 2:
                return <PaymentStep onNext={onNextStep} />;
            case 3:
                return <PaymentStep onNext={onNextStep} />;
            default:
                break;
        }
    };

    return (
        <>
            <div className="bg-[#cb943d]">
                <div className="container mx-auto px-4 flex justify-center">
                    <ul className="flex items-center border-b-0">
                        <li className="nav-item">
                            <Link
                                href="/send-money"
                                className="inline-block px-6 py-3 text-white bg-white/20 rounded-t-md font-medium hover:bg-white/30 transition-colors"
                            >
                                Sending Money
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
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
                        <Card className="rounded-sm shadow-none">
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
