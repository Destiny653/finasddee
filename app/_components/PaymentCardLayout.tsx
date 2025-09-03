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
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md mx-auto">
            <style jsx>{`
                .text-5 {
                    font-size: 1.5rem;
                    font-weight: 600;
                    color: #111827;
                    margin-bottom: 1.5rem;
                }

                hr {
                    border: none;
                    height: 1px;
                    background-color: #e5e7eb;
                    margin: 1.5rem -2rem;
                }
            `}</style>

            <h3 className="text-5 text-center">Send Money</h3>
            <hr />

            {children}
        </div>
    );
};

export default PaymentCardLayout;
