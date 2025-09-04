import { CheckBoxField } from "@/app/_components/CustomCheckbox";
import CustomInput from "@/app/_components/CustomInput";
import CustomPassword from "@/app/_components/CustomPassword";
import { Button } from "@/components/ui/Button";
import { ChevronDown, Mail } from "lucide-react";

const SignUpForm = () => {
    return (
        <div className="flex flex-col gap-6">
            <CustomInput
                label="Country/Area of Residence"
                placeholder="United States"
                icon={ChevronDown}
            />
            <CustomInput label="Email" icon={Mail} />
            <CustomPassword
                label="Password"
                placeholder="Enter your password"
            />
            <div className="flex flex-col gap-3">
                <CheckBoxField
                    id="notify"
                    label="I agree to receive email updates"
                />
                <CheckBoxField
                    id="terms"
                    label="I have read and agree to Terms of Service"
                />
            </div>
            <Button className="h-[52px]">Create account</Button>
        </div>
    );
};

export default SignUpForm;
