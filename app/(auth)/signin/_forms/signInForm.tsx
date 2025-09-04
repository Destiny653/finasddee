import { CheckBoxField } from "@/app/_components/CustomCheckbox";
import CustomInput from "@/app/_components/CustomInput";
import CustomPassword from "@/app/_components/CustomPassword";
import { Button } from "@/components/ui/Button";
import { Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

const SignInForm = () => {
    return (
        <div className="flex flex-col gap-6">
            <CustomInput label="Email" icon={Mail} />
            <CustomPassword
                label="Password"
                placeholder="Enter your password"
            />
            <div className="flex items-center justify-between my-3">
                <CheckBoxField id="notify" label="Remember me" />
                <Link
                    href={{
                        pathname: "/verify-email",
                    }}
                    className=" font-bold text-[12px] leading-[18px] tracking-[0px] text-right"
                >
                    Recover Password
                </Link>
            </div>
            <Button className="h-[52px]">Sign in</Button>
        </div>
    );
};

export default SignInForm;
