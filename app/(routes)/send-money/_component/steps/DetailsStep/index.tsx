import PaymentCardLayout from "@/app/_components/PaymentCardLayout";
import { FC } from "react";
import SendMoneyDetailsForm from "../../../_forms/SendMoneyDetailsForm";

interface IDetailsStep {
    onNext: () => void;
    onDataChange: (data: any) => void;
}
const DetailsStep: FC<IDetailsStep> = ({ onNext, onDataChange }) => {
    return (
        <PaymentCardLayout
            title="Amount"
            description="Send your money at anytime, anywhere in the world."
        >
            <SendMoneyDetailsForm onNext={onNext} onDataChange={onDataChange} />
        </PaymentCardLayout>
    );
};

export default DetailsStep;
