"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import RegistrationForm from "../_forms/RegistrationForm";
import RegistrationReview from "../_forms/RegistrationReview";

interface FormData {
    country: string;
    email: string;
    password: string;
    verifyPassword: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    agentReferralCode?: string;
    mobileDialCode: string;
    mobileNumber: string;
}

const MainRegistration = () => {
    const [showReview, setShowReview] = useState(false);
    const [formData, setFormData] = useState<FormData | null>(null);

    const handleFormSubmit = (data: FormData) => {
        // Save registration data to localStorage
        localStorage.setItem('registrationData', JSON.stringify(data));
        setFormData(data);
        setShowReview(true);
    };

    const handleAmend = () => {
        setShowReview(false);
    };

    return (
        <AnimatePresence mode="wait">
            {showReview && formData ? (
                <motion.div
                    key="review"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                >
                    <RegistrationReview data={formData} onAmend={handleAmend} />
                </motion.div>
            ) : (
                <motion.div
                    key="form"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5 }}
                >
                    <RegistrationForm onSubmit={handleFormSubmit} />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MainRegistration;
