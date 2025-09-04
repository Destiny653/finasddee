"use client";
import { Button } from "@/components/ui/Button";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import React from "react";

const VerifyEmailForm = () => {
    return (
        <div className="flex flex-col items-center gap-7 w-full ">
            <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
                <InputOTPGroup className="gap-3">
                    <InputOTPSlot
                        className=" !rounded-none size-[3rem] text-2xl border bg-[#F5F5F5] shadow-none data-[active=true]:border-green-500 data-[active=true]:bg-transparent font-bold"
                        index={0}
                    />
                    <InputOTPSlot
                        index={1}
                        className=" !rounded-none size-[3rem] text-2xl border bg-[#F5F5F5] shadow-none data-[active=true]:border-green-500 data-[active=true]:bg-transparent font-bold"
                    />
                    <InputOTPSlot
                        index={2}
                        className=" !rounded-none size-[3rem] text-2xl border bg-[#F5F5F5] shadow-none data-[active=true]:border-green-500 data-[active=true]:bg-transparent font-bold"
                    />
                    <InputOTPSlot
                        index={3}
                        className=" !rounded-none size-[3rem] text-2xl border bg-[#F5F5F5] shadow-none data-[active=true]:border-green-500 data-[active=true]:bg-transparent font-bold"
                    />
                    <InputOTPSlot
                        index={4}
                        className=" !rounded-none size-[3rem] text-2xl border bg-[#F5F5F5] shadow-none data-[active=true]:border-green-500 data-[active=true]:bg-transparent font-bold"
                    />
                </InputOTPGroup>
            </InputOTP>
            <button className="text-green-500 text-start">
                Send the code again
            </button>
            <Button className="h-[52px] w-full">Verify</Button>
        </div>
    );
};

export default VerifyEmailForm;
