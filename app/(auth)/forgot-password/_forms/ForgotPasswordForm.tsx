import CustomInput from "@/app/_components/CustomInput";
import { Button } from "@/components/ui/Button";
import { Mail } from "lucide-react";
import React from "react";

const ForgotPasswordForm = () => {
    return (
        <div className="flex flex-col gap-6">
            <CustomInput
                label="Email"
                icon={Mail}
                placeholder="catherine.shaw@gmail.com"
            />
            <Button className="h-[52px]">Sign in</Button>
        </div>
    );
};

export default ForgotPasswordForm;
