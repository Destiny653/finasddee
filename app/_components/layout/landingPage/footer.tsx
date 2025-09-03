import React from "react";
import Image from "next/image";
import Link from "next/link";

const LandingPageFooter = () => {
    return (
        <footer className="pb-4 pt-8 border-t text-white" style={{ backgroundColor: '#b8860b' }}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Information Section */}
                    <div className="mb-3">
                        <h4 className="text-lg font-normal uppercase mb-3 text-white">
                            <span className="text-white">Information</span>
                        </h4>
                        <ul className="flex flex-col space-y-0">
                            <li className="text-white">
                                <Link
                                    href="/#landing-page-send"
                                    className="text-white hover:underline"
                                >
                                    <span className="text-white">How It works</span>
                                </Link>
                            </li>
                            <li className="text-white">
                                <Link
                                    href="sending-countries"
                                    className="text-white hover:underline"
                                >
                                    <span className="text-white">Sending Countries</span>
                                </Link>
                            </li>
                            <li className="text-white">
                                <Link
                                    href="receiving-countries"
                                    className="text-white hover:underline"
                                >
                                    <span className="text-white">Receiving Countries</span>
                                </Link>
                            </li>
                            <li className="text-white">
                                <Link
                                    href="faq"
                                    className="text-white hover:underline"
                                >
                                    <span className="text-white">FAQ</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Help and Support Section */}
                    <div className="mb-3">
                        <h4 className="text-lg font-normal uppercase mb-3 text-white">
                            <span className="text-white">Help and Support</span>
                        </h4>
                        <ul className="flex flex-col space-y-0">
                            <li className="text-white">
                                <Link
                                    href="contact"
                                    className="text-white hover:underline"
                                >
                                    <span className="text-white">Contact Us</span>
                                </Link>
                            </li>
                            <li className="text-white">
                                <Link
                                    href="user-agreement"
                                    className="text-white hover:underline"
                                >
                                    <span className="text-white">User Agreement</span>
                                </Link>
                            </li>
                            <li className="text-white">
                                <Link
                                    href="privacy-policy"
                                    className="text-white hover:underline"
                                >
                                    <span className="text-white">Terms and Conditions</span>
                                </Link>
                            </li>
                            <li className="text-white">
                                <Link
                                    href="cookie-policy"
                                    className="text-white hover:underline"
                                >
                                    <span className="text-white">Cookie Policy</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Logo and Tagline Section */}
                    <div className="col-span-1 lg:col-span-1">
                        <Image
                            src="/assets/images/pic/LogoWhite.png"
                            alt="FINASDDEE Logo"
                            width={300}
                            height={100}
                            className="mb-4"
                        />
                        <p className="text-white">
                            Finasddee sends and receives in 150+ countries.
                        </p>
                    </div>
                </div>
            </div>

            {/* Copyright Notice */}
            <div className="pt-4 mt-4">
                <div className="container mx-auto px-4">
                    <div className="text-center lg:text-left">
                        <p className="text-white">
                            <span className="text-white">
                                Copyright © 2025{' '}
                                <Link href="finasddee.com" className="text-white">
                                    Finasddee
                                </Link>
                                . All Rights Reserved.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default LandingPageFooter;
