import React from "react";
import Image from "next/image";
import Link from "next/link";

const LandingPageFooter = () => {
    return (
        <footer className="py-6 sm:py-8 md:py-10 bg-[#0F52BA] border-t text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                    {/* Information Section */}
                    <div className="mb-4 sm:mb-6 font-semibold">
                        <h4 className="text-base sm:text-lg font-normal uppercase mb-2 sm:mb-3 text-white">
                            Information
                        </h4>
                        <ul className="flex flex-col space-y-1 sm:space-y-2">
                            <li>
                                <Link href="/#landing-page-send" className="text-white hover:underline text-sm sm:text-base">
                                    How It Works
                                </Link>
                            </li>
                            <li>
                                <Link href="sending-countries" className="text-white hover:underline text-sm sm:text-base">
                                    Sending Countries
                                </Link>
                            </li>
                            <li>
                                <Link href="receiving-countries" className="text-white hover:underline text-sm sm:text-base">
                                    Receiving Countries
                                </Link>
                            </li>
                            <li>
                                <Link href="faq" className="text-white hover:underline text-sm sm:text-base">
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Help and Support Section */}
                    <div className="mb-4 sm:mb-6 font-semibold">
                        <h4 className="text-base sm:text-lg font-normal uppercase mb-2 sm:mb-3 text-white">
                            Help and Support
                        </h4>
                        <ul className="flex flex-col space-y-1 sm:space-y-2">
                            <li>
                                <Link href="contact" className="text-white hover:underline text-sm sm:text-base">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="user-agreement" className="text-white hover:underline text-sm sm:text-base">
                                    User Agreement
                                </Link>
                            </li>
                            <li>
                                <Link href="privacy-policy" className="text-white hover:underline text-sm sm:text-base">
                                    Terms and Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href="cookie-policy" className="text-white hover:underline text-sm sm:text-base">
                                    Cookie Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Logo and Tagline Section */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <Image
                            src="/assets/images/pic/LogoWhite.png"
                            alt="FINASDDEE Logo"
                            width={200}
                            height={67}
                            className="mb-3 sm:mb-4 w-40 sm:w-48 md:w-56 lg:w-60"
                            sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 224px, 240px"
                        />
                        <p className="text-white text-sm sm:text-base">
                            Finasddee sends and receives in 150+ countries.
                        </p>
                    </div>
                </div>
            </div>

            {/* Copyright Notice */}
            <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-white/20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center text-sm sm:text-base">
                        <p className="text-white">
                            Copyright © 2025{' '}
                            <Link href="finasddee.com" className="text-white hover:underline">
                                Finasddee
                            </Link>
                            . All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default LandingPageFooter;