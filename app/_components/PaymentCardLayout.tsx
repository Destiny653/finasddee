import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React, { FC, ReactNode } from "react";

interface IPaymentCardLayout {
    children: ReactNode;
    title: string;
    description?: string;
    buttonLabel: string;
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
        <Card className="rounded-sm shadow-none w-full ">
            <CardHeader className="border-b">
                <CardTitle className="text-2xl capitalize">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>{children}</CardContent>
            <CardFooter className="flex flex-col gap-4">
           
              
            </CardFooter>
        </Card>
    );
};

export default PaymentCardLayout;
