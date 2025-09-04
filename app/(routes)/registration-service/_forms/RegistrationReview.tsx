"use client";
import CustomInput from "@/app/_components/CustomInput";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import React, { useState } from "react";

interface FormData {
    country: string;
    username: string;
    password: string;
    verifyPassword: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    agentReferralCode?: string;
    mobileDialCode: string;
    mobileNumber: string;
}

const RegistrationReview = ({ data, onAmend }: { data: FormData; onAmend: () => void }) => {
    const [emailVerificationCode, setEmailVerificationCode] = useState("");

    const handleSubmit = () => {
        // Handle final submission
        console.log("Submitting data:", data, "Verification code:", emailVerificationCode);
        // API call here
    };

    const handleAmend = () => {
        onAmend();
    };

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <Card className="rounded-sm shadow-none w-full md:min-w-3xl">
            <CardHeader className="border-b">
                <CardTitle className="text-2xl capitalize">Review Registration</CardTitle>
                <CardDescription>Please review your details before submitting</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="w-full flex flex-col gap-6">
                    {/* Login Details Header */}
                    <div className="border-b pb-4">
                        <h3 className="text-lg font-semibold mb-4">Login Details</h3>
                        <div className="w-full flex flex-col gap-4">
                            <div>
                                <p className="font-sans text-sm font-semibold leading-[18px] mb-2">Username</p>
                                <p className="text-muted-foreground">{data.username}</p>
                            </div>
                            <CustomInput
                                label="Email Verification Code"
                                placeholder="Enter verification code"
                                value={emailVerificationCode}
                                onChange={(e) => setEmailVerificationCode(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Personal Information */}
                    <div className="border-b pb-4">
                        <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                        <div className="w-full flex flex-col gap-4">
                            <div className="w-full grid grid-cols-2 gap-4">
                                <div>
                                    <p className="font-sans text-sm font-semibold leading-[18px] mb-2">First Name</p>
                                    <p className="text-muted-foreground">{data.firstName}</p>
                                </div>
                                <div>
                                    <p className="font-sans text-sm font-semibold leading-[18px] mb-2">Last Name</p>
                                    <p className="text-muted-foreground">{data.lastName}</p>
                                </div>
                            </div>
                            <div>
                                <p className="font-sans text-sm font-semibold leading-[18px] mb-2">Date of Birth</p>
                                <p className="text-muted-foreground">{data.dateOfBirth}</p>
                            </div>
                            {data.agentReferralCode && (
                                <div>
                                    <p className="font-sans text-sm font-semibold leading-[18px] mb-2">Agent Referral Code</p>
                                    <p className="text-muted-foreground">{data.agentReferralCode}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="border-b pb-4">
                        <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                        <div className="w-full flex flex-col gap-4">
                            <div>
                                <p className="font-sans text-sm font-semibold leading-[18px] mb-2">Country</p>
                                <p className="text-muted-foreground">{data.country}</p>
                            </div>
                            <div>
                                <p className="font-sans text-sm font-semibold leading-[18px] mb-2">Mobile</p>
                                <p className="text-muted-foreground">{data.mobileDialCode} {data.mobileNumber}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
                <div className="w-ful flex gap-4 ml-auto">
                    <Button
                        onClick={handleAmend}
                        variant="outline"
                        className="w-ful py-6 text-lg font-semibold"
                    >
                        Amend Details
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        className="w-ful py-6 text-lg text-white font-semibold bg-[#c99207] hover:bg-[#ac7d08]"
                    >
                        Submit
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
};

export default RegistrationReview;
