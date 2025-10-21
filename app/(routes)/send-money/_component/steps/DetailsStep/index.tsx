import PaymentCardLayout from "@/app/_components/PaymentCardLayout";
import { FC } from "react";
// import SendMoneyDetailsForm from "../../../_forms/SendMoneyDetailsForm";
import SendMoneyDetailsForm from "../../../_forms/SendMoneyDetailsForm.new";

interface IDetailsStep {
    onNext: () => void;
    onDataChange: (data: unknown) => void;
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
