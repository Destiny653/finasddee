"use client";
import { useState } from "react";
import SecondaryMenu from "./SecondaryMenu";
import NewProgressSteps from "./NewProgressSteps";
import NewSendMoneyForm from "./NewSendMoneyForm";

const MainSendMoney = () => {
    const [activeStep] = useState(0);

    return (
        <div className="min-h-screen bg-[#edf7f849]">
            {/* Secondary Menu */}
            <SecondaryMenu />

            {/* Content */}
            <div className="py-4">
                <div className="container mx-auto px-4">
                    {/* Progress Steps */}
                    <NewProgressSteps currentStep={activeStep} />

                    {/* Page Title */}
                    <h2 className="text-3xl font-normal text-center mt-3 mb-2">Send Money</h2>
                    <p className="text-xl text-center mb-4 text-gray-600">
                        Send your money on anytime, anywhere in the world.
                    </p>

                    {/* Form Container */}
                    <div className="flex justify-center">
                        <div className="w-full max-w-lg xl:max-w-[600px] mx-auto">
                            <NewSendMoneyForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainSendMoney;
