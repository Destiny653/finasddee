"use client";
import CustomTextarea from "@/app/_components/CustomTextarea";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Fragment, useState } from "react";
import SideSummeryCard from "./sideSummeryCard";
import DetailsStep from "./steps/DetailsStep";
import PaymentStep from "./steps/paymentStep";
import ReceiverStep from "./steps/recieverStep";

const MainSendMoney = () => {
    const steps = ["details", "receiver", "payment"];
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
            default:
                break;
        }
    };

    return (
        <div className="flex-1 flex flex-col w-full items-center justify-center py-16 overflow-hidden">
            <div className="flex items-end ">
                {steps.map((items, i) => (
                    <Fragment key={"items" + items}>
                        <div className="flex flex-col gap-1 items-center">
                            <p className="text-lg capitalize">{items}</p>
                            <div className="size-10 rounded-full border border-muted-foreground flex items-center justify-center p-2">
                                <div
                                    className={cn(
                                        "size-full bg-gray-700 rounded-full",
                                        activeStep === i && "bg-primary",
                                        activeStep > i && "bg-green-600",
                                    )}
                                />
                            </div>
                        </div>
                        <div className="w-[12rem] h-full flex items-end relative last:hidden">
                            <div className="  w-full h-10 flex items-center">
                                <div className="w-full h-[1px]  bg-gray-800 " />
                            </div>
                        </div>
                    </Fragment>
                ))}
            </div>

            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-8 mt-16 gap-4 px-4">
                <div className="lg:col-span-5">{renderSteps()}</div>
                <div className="lg:col-span-3 size-full flex gap-2 flex-col">
                    <SideSummeryCard />
                    <Card className="rounded-sm shadow-none">
                        <CardContent>
                            <CustomTextarea label="Payment Purpose" />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default MainSendMoney;
