"use client";
import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MainHeader } from "@/app/_components/layout/landingPage/navbar";
import Footer from "@/app/_components/layout/landingPage/footer";

const ReferAFriend = () => {
    const [copied, setCopied] = useState(false);
    const referralCode = "FINASDDEE2024";
    const referralLink = `https://finasddee.com/signup?ref=${referralCode}`;

    const handleCopy = () => {
        navigator.clipboard.writeText(referralLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <>
            <MainHeader />
            <div className="min-h-screen bg-white">
                <style jsx>{`
                    .hero-section {
                        background: linear-gradient(135deg, #ce9739 0%, #ffed4e 100%);
                        position: relative;
                        overflow: hidden;
                    }

                    .hero-diagonal {
                        position: absolute;
                        right: 0;
                        top: 0;
                        bottom: 0;
                        width: 50%;
                        background: linear-gradient(135deg, rgba(0,0,0,0.05) 0%, transparent 100%);
                        clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%);
                    }

                    .hero-image-container {
                        position: absolute;
                        right: 0;
                        top: 0;
                        bottom: 0;
                        width: 50%;
                        clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%);
                    }

                    .black-banner {
                        background: #001E40;
                        color: #fff;
                    }

                    .step-circle {
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        border: 2px solid #000;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-weight: bold;
                        flex-shrink: 0;
                    }

                    .help-banner {
                        background: #001E40;
                        color: #fff;
                    }

                    .help-icon {
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        border: 3px solid #ce9739;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 28px;
                        font-weight: bold;
                        color: #ce9739;
                        flex-shrink: 0;
                    }

                    .btn-primary {
                        background: #001E40;
                        color: #fff;
                        border: none;
                        padding: 14px 48px;
                        border-radius: 50px;
                        font-weight: 600;
                        font-size: 16px;
                        cursor: pointer;
                        transition: all 0.3s ease;
                    }

                    .btn-primary:hover {
                        transform: scale(1.05);
                        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                    }

                    .btn-secondary {
                        background: transparent;
                        color: #000;
                        border: 2px solid #001E40;
                        padding: 14px 48px;
                        border-radius: 50px;
                        font-weight: 600;
                        font-size: 16px;
                        cursor: pointer;
                        transition: all 0.3s ease;
                    }

                    .btn-secondary:hover {
                        background: #001E40;
                        color: #ce9739;
                    }

                    .btn-yellow {
                        background: #ce9739;
                        color: #000;
                        border: none;
                        padding: 14px 48px;
                        border-radius: 50px;
                        font-weight: 600;
                        font-size: 16px;
                        cursor: pointer;
                        transition: all 0.3s ease;
                    }

                    .btn-yellow:hover {
                        background: #ffed4e;
                        transform: scale(1.05);
                    }

                    .btn-outline-white {
                        background: transparent;
                        color: #fff;
                        border: 2px solid #fff;
                        padding: 12px 32px;
                        border-radius: 50px;
                        font-weight: 600;
                        font-size: 15px;
                        cursor: pointer;
                        transition: all 0.3s ease;
                    }

                    .btn-outline-white:hover {
                        background: #fff;
                        color: #000;
                    }

                    @media (max-width: 768px) {
                        .hero-image-container,
                        .hero-diagonal {
                            display: none;
                        }
                    }
                `}</style>

                {/* Hero Section */}
                <section className="hero-section relative py-12 md:py-20 px-4 md:px-8">
                    <div className="hero-diagonal"></div>
                    <div className="hero-image-container">
                        {/* You can add your hero image here */}
                        <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center" 
                        style={{ 
                            backgroundImage: "url('/assets/images/Cover_photo.jpg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat"
                            }}>
                            {/* <Image
                                    src="/assets/images/Cover_photo.jpg"
                                    alt="Hero Image"
                                    width={500}
                                    height={500}
                                /> */}
                        </div>
                    </div>
                    
                    <div className="container mx-auto max-w-7xl relative z-10">
                        <div className="max-w-xl">
                            <h1 className="pt-20 text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-6 leading-tight">
                                Refer a friend to FINASDDEE and earn rewards!
                            </h1>
                            
                            <p className="text-lg md:text-xl text-black mb-8">
                                Get rewarded with a <span className="font-bold">bonus</span> as your friend also enjoy a <span className="font-bold">bonus</span>
                            </p>

                            <div className="pb-10 flex flex-col sm:flex-row gap-4">
                                <button className="btn-primary">
                                    <Link href="https://finasddee-test-orm.remit.by/en">
                                    Log in
                                    </Link>
                                </button>
                                <button className="btn-secondary">
                                    <Link href="https://finasddee-test-orm.remit.by/en/register">
                                    Register
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Rewards Info Section */}
                <section className="py-12 md:py-16 px-4 md:px-8 bg-white">
                    <div className="container mx-auto max-w-7xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                            Rewards for you and your friends
                        </h2>
                        
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-5xl">
                            Refer up to 20 friends to FINASDDEE and get rewarded a $15 Amazon.com e-gift code* for every friend you refer. Plus, each friend you refer will get a $10 Amazon.com e-gift code* for themselves. Your friends will also get a $0 transfer fee* on their first digital money transfer internationally. Simply, follow these 3 steps to start earning your rewards:
                        </p>
                    </div>
                </section>

                {/* Black Banner - Already Referred */}
                <section className="black-banner py-6 px-4 md:px-8">
                    <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-lg md:text-xl font-semibold">
                            Already referred? Log in to see your rewards.
                        </p>
                        <button className="btn-outline-white">
                            Your rewards
                        </button>
                    </div>
                </section>

                {/* Steps Section */}
                <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
                    <div className="container mx-auto max-w-5xl">
                        {/* Step 1 */}
                        <div className="flex gap-6 mb-12 md:mb-16">
                            <div className="step-circle">
                                1
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                                    Share a referral link
                                </h3>
                                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                    Go to the <Link href="#" className="text-blue-600 underline">Refer a Friend</Link> page, <Link href="#" className="text-blue-600 underline">Log in</Link> or <Link href="#" className="text-blue-600 underline">sign up</Link>, and then invite up to 20 friends by sharing your personal referral link.
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex gap-6 mb-12 md:mb-16">
                            <div className="step-circle">
                                2
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                                    Invite friends to send money
                                </h3>
                                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                    Ask your friends to register using the link you shared. Once they send $100 or more within 30 days of creating the profile using <Link href="#" className="text-blue-600 underline">finasddee.com</Link> or the FINASDDEE<sup>®</sup> app, you will be rewarded with a $15 Amazon.com e-gift code* while your friend will get a $10 Amazon.com e-gift code.
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex gap-6 mb-12">
                            <div className="step-circle">
                                3
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                                    Get rewarded
                                </h3>
                                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                    Enjoy a reward for you and each of the friends you refer. Remember, referring 20 friends means you can earn $300 total just from referrals.
                                </p>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="text-center mt-16">
                            <button className="btn-yellow">
                                <Link href="https://finasddee-test-orm.remit.by/en">
                                Login and refer
                                </Link>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Help Banner */}
                <section className="help-banner py-10 md:py-12 px-4 md:px-8">
                    <div className="container mx-auto max-w-7xl">
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                            <div className="help-icon">
                                ?
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                                    Still have questions or need help?
                                </h3>
                                <p className="text-base md:text-lg text-white">
                                    Contact our Customer Care team or visit our FAQ and T&C pages for more information. <Link href="#" className="text-[#ce9739] underline font-semibold">See FAQ</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default ReferAFriend;