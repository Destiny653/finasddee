import React from 'react';
import { cn } from '@/lib/utils';

interface ProgressStepsProps {
    currentStep: number;
}

const ProgressSteps: React.FC<ProgressStepsProps> = ({ currentStep }) => {
    const steps = [
        { name: 'Details', step: 0 },
        { name: 'Recipient', step: 1 },
        { name: 'Review', step: 2 },
        { name: 'Payment', step: 3 }
    ];

    return (
        <div className="row mt-4 mb-5">
            <div className="col-lg-11 mx-auto">
                <div className="relative flex justify-between items-center">
                    {/* Progress line */}
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 -translate-y-1/2 z-10"></div>
                    
                    {steps.map((step, index) => (
                        <div 
                            key={step.name}
                            className={cn(
                                "relative text-center z-20 flex-1",
                                currentStep === step.step ? "text-red-500" : "",
                                currentStep < step.step ? "text-gray-400" : ""
                            )}
                        >
                            <div className={cn(
                                "text-sm font-medium mb-2",
                                currentStep === step.step && "font-semibold"
                            )}>
                                {step.name}
                            </div>
                            <div className="flex justify-center">
                                <div className={cn(
                                    "w-5 h-5 rounded-full transition-colors",
                                    currentStep === step.step ? "bg-red-500" : "bg-gray-300",
                                    currentStep > step.step ? "bg-green-500" : ""
                                )}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProgressSteps;
