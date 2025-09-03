import PaymentCardLayout from "@/app/_components/PaymentCardLayout";
import { FC } from "react";
import SendMoneyDetailsForm from "../../../_forms/SendMoneyDetailsForm";

interface IDetailsStep {
    onNext: () => void;
}
const DetailsStep: FC<IDetailsStep> = ({ onNext }) => {
    return (
        <PaymentCardLayout
            title="Send Money"
            description=""
            buttonLabel="Continue"
            onNext={onNext}
        >
            <SendMoneyDetailsForm />
        </PaymentCardLayout>
    );
};

export default DetailsStep;
