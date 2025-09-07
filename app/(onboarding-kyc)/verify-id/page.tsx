'use client'
import React, { useState } from "react";
import KycVerifyIdForm from "./_components/KycVerifyIdForm";
import { CashCollectionForm } from "./_components/CashCollectionForm";
import { IDDetailsForm } from "./_components/IDDetailsForm";
import LandingPageFooter from "@/app/_components/layout/landingPage/footer";
import PageHeader from "@/app/_components/layout/header/PageHeader";

const KycVerifyIdPage = () => {
    const [currentForm, setCurrentForm] = useState<"verify" | "cash" | "id">("verify");

    const handleSubmit = (data: any) => {
        console.log("Form submitted:", data);
        // Handle form submission here
    };

    return (
        <>
            <PageHeader />
            <div className="w-full bg-gray-100 min-h-[100vh] box-border py-8 flex flex-col items-center justify-center mx-auto">
                {/* Navigation Tabs */}
                <div className="flex justify-center items-center mb-6">
                    <button
                        onClick={() => setCurrentForm("verify")}
                        className={`px-4 py-2 mx-2 rounded ${currentForm === "verify" ? "bg-[#dda822] text-white" : "bg-gray-200"}`}
                    >
                        Verify ID
                    </button>
                    <button
                        onClick={() => setCurrentForm("cash")}
                        className={`px-4 py-2 mx-2 rounded ${currentForm === "cash" ? "bg-[#dda822] text-white" : "bg-gray-200"}`}
                    >
                        Cash Collection
                    </button>
                    <button
                        onClick={() => setCurrentForm("id")}
                        className={`px-4 py-2 mx-2 rounded ${currentForm === "id" ? "bg-[#dda822] text-white" : "bg-gray-200"}`}
                    >
                        ID Details
                    </button>
                </div>
                <div className="max-w-2xl ">
                    {/* Render Current Form */}
                    {currentForm === "verify" && <KycVerifyIdForm />}
                    {currentForm === "cash" && <CashCollectionForm onSubmit={handleSubmit} />}
                    {currentForm === "id" && <IDDetailsForm onSubmit={handleSubmit} />}
                </div>
            </div>
            <LandingPageFooter />
        </>
    );
};

export default KycVerifyIdPage;
