import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import React, { FC, ReactNode } from "react";

interface IPaymentCardLayout {
    children: ReactNode;
    title: string;
    description?: string;
    buttonLabel?: string;
    onNext?: () => void;
}
const PaymentCardLayout: FC<IPaymentCardLayout> = ({
    children,
    description,
    title,
    buttonLabel,
    onNext,
}) => {
    return (
        <Card className="rounded-sm shadow-none w-full border-none bg-white">
            <CardHeader className="border-b border-gray-100">
                <CardTitle className="text-2xl capitalize">{title}</CardTitle>
                <CardDescription className="text-lg">{description}</CardDescription>
            </CardHeader>
            <CardContent>{children}</CardContent>
            <CardFooter className="flex flex-col gap-4">
                {buttonLabel && onNext && (
                    <Button
                        onClick={onNext}
                        className="w-full py-6 md:h-16 text-lg text-white font-semibold bg-[#c99207] hover:bg-[#ac7d08]"
                    >
                        {buttonLabel}
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
};

export default PaymentCardLayout;
